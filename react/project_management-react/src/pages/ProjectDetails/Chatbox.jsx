// import { fetchChatByProject, fetchChatMessages, sendMessage } from "@/Redux/Chat/Action";
// import { store } from "@/Redux/Store";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { PaperPlaneIcon } from "@radix-ui/react-icons";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// const ChatBox = () => {
//   const [message, setMessage] = useState("");
//   const { auth ,chat} = useSelector(store => store);
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   useEffect(()=>{
//     dispatch(fetchChatByProject(id))
//   },[])
//   useEffect(()=>{
//     dispatch(fetchChatMessages(chat.chat?.id))
//   },[])

//   const handleSendMessage = () => {
//     dispatch(
//       sendMessage({
//         senderId: auth.user?.id,
//         projectId: id,
//         Content: message,
//       })
//     );
//     setMessage("")
//     console.log("message", message);
//   };
//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };
//   return (
//     <div className="sticky">
//       <div className="border rounded-lg">
//         <h1 className="border-b p-5">Chat Box</h1>
//         <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
//           {chat.messages?.map((item, index) =>
//             item.sender.id!==auth.user.id ? (
//               <div className="flex gap-2 mb-2 justify-start" key={item}>
//                 <Avatar>
//                   <AvatarFallback>R</AvatarFallback>
//                 </Avatar>
//                 <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
//                   <p>{item.sender.fullName}</p>
//                   <p className="text-gray-300">{item.content}</p>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex gap-2 mb-2 justify-end" key={item}>
//                 <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
//                 <p>{item.sender.fullName}</p>
//                   <p className="text-gray-300">{item.content}</p>
//                 </div>
//                 <Avatar>
//                   <AvatarFallback>R</AvatarFallback>
//                 </Avatar>
//               </div>
//             )
//           )}
//         </ScrollArea>
//         <div className="relative p-0">
//           <Input
//             placeHolder="type message..."
//             className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
//             value={message}
//             onChange={handleMessageChange}
//           />
//           <Button
//             onClick={handleSendMessage}
//             className="absolute right-2 top-3 rounded-full"
//             size="icon"
//             variant="ghost"
//           >
//             <PaperPlaneIcon />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatBox;
import { fetchChatByProject, fetchChatMessages, sendMessage } from "@/Redux/Chat/Action";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const { auth, chat } = useSelector((state) => state); // Updated store destructuring
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchChatByProject(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (chat.chat?.id) {
      dispatch(fetchChatMessages(chat.chat.id));
    }
  }, [dispatch, chat.chat?.id]);

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(
        sendMessage({
          senderId: auth.user?.id,
          projectId: id,
          content: message, // Ensure 'content' field matches backend expectations
        })
      );
      setMessage("");
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat Box</h1>
        <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
          {chat.messages?.map((item) =>
            item.sender.id !== auth.user.id ? (
              <div className="flex gap-2 mb-2 justify-start" key={item.id}> {/* Use unique key */}
                <Avatar>
                  <AvatarFallback>{item.sender.fullName[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                  <p>{item.sender.fullName}</p>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 mb-2 justify-end" key={item.id}> {/* Use unique key */}
                <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
                  <p>{item.sender.fullName}</p>
                  <p className="text-gray-300">{item.content}</p>
                </div>
                <Avatar>
                  <AvatarFallback>{item.sender.fullName[0]}</AvatarFallback>
                </Avatar>
              </div>
            )
          )}
        </ScrollArea>
        <div className="relative p-0">
          <Input
            placeholder="type message..." // Corrected attribute name
            className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
            value={message}
            onChange={handleMessageChange}
          />
          <Button
            onClick={handleSendMessage}
            className="absolute right-2 top-3 rounded-full"
            size="icon"
            variant="ghost"
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

