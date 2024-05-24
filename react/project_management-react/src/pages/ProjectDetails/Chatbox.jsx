import { ScrollArea } from "@/components/ui/scroll-area";

const ChatBox = () => {
  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat Box</h1>
        <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">

        </ScrollArea>
      </div>
    </div>
  );
};

export default ChatBox;
