import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormItem,
  FormMessage,
  FormField,
} from "@/components/ui/form"; // Ensure FormField is imported
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { tags } from "../ProjectList/ProjectList";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { createProject } from "@/Redux/ProjectSer/Action";
//import { CREATE_PROJECT_FAILURE } from "@/Redux/ProjectSer/ActionType";

const CreateProjectForm = () => {
  const dispatch = useDispatch();

  const handleTagsChange = (newValue) => {
    const currentTags = form.getValues("tags");

    const updatedTags = currentTags.includes(newValue)
      ? currentTags.filter((tag) => tag !== newValue)
      : [...currentTags, newValue];

    form.setValue("tags", updatedTags);
  };

  const form = useForm({
    // resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: ["javascript", "react"],
    },
  });

  const onSubmit = (data) => {
    dispatch(createProject(data))
    console.log("create project data", data);
  };

  return (
    <div>
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-grey-700 py-5 px-5"
                    placeholder="project name..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-grey-700 py-5 px-5"
                    placeholder="project discription..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    defaultValue="fullstack"
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}

                    // className="border w-full border-grey-700 py-5 px-5"
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fullstack">Full Stack</SelectItem>
                      <SelectItem value="frontend">Frontend</SelectItem>
                      <SelectItem value="backend">Backend</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      handleTagsChange(value);
                    }}

                    // className="border w-full border-grey-700 py-5 px-5"
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tags" />
                    </SelectTrigger>
                    <SelectContent>
                      {tags.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <div className="flex gap-1 flex-wrap">
                  {field.value.map((item) => (
                    <div
                      key={item}
                      onClick={() => handleTagsChange(item)}
                      className="cursor-pointer flex rounded-full items-center border gap-2 px-4 py-1"
                    >
                      <span className="text-sm">{item}</span>
                      <Cross1Icon className="h-3 w-3" />
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogClose>
            {false ? (
              <div>
                <p>
                  you can create only 3 project with free plan, please upgrade
                  your plan
                </p>
              </div>
            ) : (
              <Button type="submit" className="w-full mt-5">
                {" "}
                Create Project
              </Button>
            )}
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};
export default CreateProjectForm;
// import { Button } from "@/components/ui/button";
// import { DialogClose } from "@/components/ui/dialog";
// import {
//   Form,
//   FormControl,
//   FormItem,
//   FormMessage,
//   FormField,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useForm } from "react-hook-form";
// import { tags } from "../ProjectList/ProjectList";
// import { Cross1Icon } from "@radix-ui/react-icons";
// import { useDispatch } from "react-redux";
// import { createProject } from "@/Redux/ProjectSer/Action";
// import PropTypes from 'prop-types';

// const CreateProjectForm = () => {
//   const dispatch = useDispatch();
//   const form = useForm({
//     defaultValues: {
//       name: "",
//       description: "",
//       category: "",
//       tags: ["javascript", "react"],
//     },
//   });

//   const handleTagsChange = (newValue) => {
//     const currentTags = form.getValues("tags");
//     const updatedTags = currentTags.includes(newValue)
//       ? currentTags.filter((tag) => tag !== newValue)
//       : [...currentTags, newValue];

//     form.setValue("tags", updatedTags);
//   };

//   const onSubmit = (data) => {
//     dispatch(createProject(data));
//     console.log("create project data", data);
//   };

//   return (
//     <div>
//       <Form {...form}>
//         <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     type="text"
//                     className="border w-full border-grey-700 py-5 px-5"
//                     placeholder="project name..."
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     type="text"
//                     className="border w-full border-grey-700 py-5 px-5"
//                     placeholder="project description..."
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="category"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Select
//                     defaultValue="fullstack"
//                     value={field.value}
//                     onValueChange={(value) => field.onChange(value)}
//                   >
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="fullstack">Full Stack</SelectItem>
//                       <SelectItem value="frontend">Frontend</SelectItem>
//                       <SelectItem value="backend">Backend</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="tags"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Select
//                     onValueChange={(value) => handleTagsChange(value)}
//                   >
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Tags" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {tags.map((item) => (
//                         <SelectItem key={item} value={item}>
//                           {item}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </FormControl>
//                 <div className="flex gap-1 flex-wrap">
//                   {field.value.map((item) => (
//                     <div
//                       key={item}
//                       onClick={() => handleTagsChange(item)}
//                       className="cursor-pointer flex rounded-full items-center border gap-2 px-4 py-1"
//                     >
//                       <span className="text-sm">{item}</span>
//                       <Cross1Icon className="h-3 w-3" />
//                     </div>
//                   ))}
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <DialogClose asChild>
//             {false ? (
//               <div>
//                 <p>
//                   You can create only 3 projects with the free plan, please upgrade
//                   your plan.
//                 </p>
//               </div>
//             ) : (
//               <Button type="submit" className="w-full mt-5">
//                 Create Project
//               </Button>
//             )}
//           </DialogClose>
//         </form>
//       </Form>
//     </div>
//   );
// };

// CreateProjectForm.propTypes = {
//   tags: PropTypes.arrayOf(PropTypes.string),
// };

// export default CreateProjectForm;
