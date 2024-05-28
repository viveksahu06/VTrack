// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { DotFilledIcon } from "@radix-ui/react-icons";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const ProjectCard = ({ item }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteProject({ projectId: item.id }));
//   }

//   return (
//     <Card className="p-5 w-full lg:max-w-3xl">
//       <div className="space-y-5">
//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <div className="flex items-center gap-5">
//               <h1 onClick={() => navigate("/project/3")} className="cursor-pointer font-bold text-lg">
//                 {item.name}
//               </h1>
//               <DotFilledIcon />
//               <p className="text-sm text-gray-400">{item.category}</p>
//             </div>
//             <div>
//               <DropdownMenu>
//                 <DropdownMenuTrigger>
//                   <Button className="rounded-full" variant="ghost" size="icon">
//                     <DotsVerticalIcon />
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem>Updata</DropdownMenuItem>
// //                   <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
// //                 </DropdownMenuContent>
// //               </DropdownMenu>
// //             </div>
// //           </div>
// //           <p className="text-sm text-gray-500">
// //             {item.description}
// //           </p>
// //         </div>
// //         <div className="flex flex-wrap gap-2 items-center">
// //           {item.tags.map((tag, index) => <Badge key={index} variant="outline">{tag}</Badge>)}
// //         </div>
// //       </div>
// //     </Card>
// //   );
// // };

// // export default ProjectCard;

// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { Card } from "@/components/ui/card";
// // import {
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu";
// // import { deleteProject } from "@/Redux/ProjectSer/Action";
// // import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
// // import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
// // import { useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";

// // const ProjectCard = ({item}) => {
// //   const navigate=useNavigate()
// //   const dispatch = useDispatch();
// //   const handleDelete=()=>{
// //     dispatch(deleteProject({projectId: item.id}))
// //   }
// //   return (
// //     <Card className="p-5 w-full lg:max-w-3xl">
// //       <div className="space-y-5">
// //         <div className="space-y-2">
// //           <div className="flex justify-between">
// //             <div className="flex items-center gap-5">
// //               <h1 onClick={()=>navigate("/project/3")} className="cursor-pointer font-bold text-lg">
// //                 {item.name}
// //               </h1>
// //               <DotFilledIcon />
// //               <p className="text-sm text-gray-400">{item.category}</p>
// //             </div>
// //             <div>
// //               <DropdownMenu>
// //                 <DropdownMenuTrigger>
// //                   <Button className="rounded-full" variant="ghost" size="icon">
// //                     <DotsVerticalIcon />
// //                   </Button>
// //                 </DropdownMenuTrigger>
// //                 <DropdownMenuContent>
// //                   <DropdownMenuItem>Updata</DropdownMenuItem>
// //                   <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
// //                 </DropdownMenuContent>
// //               </DropdownMenu>
// //             </div>
// //           </div>
// //           <p className="text-sm text-gray-500">
// //             {item.description}
// //           </p>
// //         </div>
// //         <div className="flex flex-wrap gap-2 items-center">
// //             {item.tags.map((tag) =><Badge key={item} variant="outline">{tag}</Badge>)}

// //         </div>
// //       </div>
// //     </Card>
// //   );
// // };

// // export default ProjectCard;
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import {
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { deleteProject } from "@/Redux/ProjectSer/Action";
// import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
// import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import PropTypes from 'prop-types';

// const ProjectCard = ({item}) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteProject({ projectId: item.id }));
//   };

//   return (
//     <Card className="p-5 w-full lg:max-w-3xl">
//       <div className="space-y-5">
//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <div className="flex items-center gap-5">
//               <h1 onClick={() => navigate(`/project/${item.id}`)} className="cursor-pointer font-bold text-lg">
//                 {item.name || 'Unnamed Project'}
//               </h1>
//               <DotFilledIcon />
//               <p className="text-sm text-gray-400">{item.category || 'No Category'}</p>
//             </div>
//             <div>
//               <DropdownMenu>
//                 <DropdownMenuTrigger>
//                   <Button className="rounded-full" variant="ghost" size="icon">
//                     <DotsVerticalIcon />
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem>Update</DropdownMenuItem>
//                   <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//           <p className="text-sm text-gray-500">
//             {item.description || 'No Description'}
//           </p>
//         </div>
//         <div className="flex flex-wrap gap-2 items-center">
//           {item?.tags?.length > 0 ? (
//             item.tags.map((item) => <Badge key={item} variant="outline">{item}</Badge>)
//           ) : (
//             <p>No Tags</p>
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// };

// ProjectCard.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     category: PropTypes.string,
//     description: PropTypes.string,
//     tags: PropTypes.arrayOf(PropTypes.string),
//   }),
// };

// export default ProjectCard;
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteProject } from "@/Redux/ProjectSer/Action";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProjectCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete=()=>{
    dispatch(deleteProject({projectId: item.id}))
  }; 
 
  return (
    <Card className="p-5 w-full lg:max-w-3xl">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <h1 onClick={()=>navigate("/project/"+item.id)} className="cursor-pointer font-bold text-lg">
                {item.name}
              </h1>
              <DotFilledIcon />
              <p className="text-sm text-gray-400">{item.category || 'No Category'}</p>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="rounded-full" variant="ghost" size="icon">
                    <DotsVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Update</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            {item.description || 'No Description'}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {item?.tags?.length > 0 ? (
            item.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)
          ) : (
            <p>No Tags</p>
          )}
        </div>
      </div>
    </Card>
  );
};

ProjectCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ProjectCard;

