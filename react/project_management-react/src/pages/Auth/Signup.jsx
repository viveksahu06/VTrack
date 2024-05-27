// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";

// const Signup = () => {
//   const dispatch = useDispatch();
//     const form = useForm({
//         // resolver: zodResolver(schema),
//         defaultValues: {
//           email: "",
//           password: "", // Corrected typo here
//           fullName: ""
//         },
//       });
    
//       const onSubmit = (data) => {
//         dispatch(register(data))
//         console.log("create project data", data);
//       };
//   return (
//     <div className="space-y-5">
//         <h1>Register</h1>
//         <Form {...form}>
//         <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
//         <FormField
//             control={form.control}
//             name="fullName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     type="text"
//                     className="border w-full border-grey-700 py-5 px-5"
//                     placeholder="fullName..."
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />


//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     type="text"
//                     className="border w-full border-grey-700 py-5 px-5"
//                     placeholder="email..."
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

// <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     type="text"
//                     className="border w-full border-grey-700 py-5 px-5"
//                     placeholder="password..."
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />


//             <Button type="submit" className="w-full mt-5">
//               {" "}
//               Register
//             </Button>
//         </form>
//       </Form>

//     </div>
//   )
// }

// export default Signup; 
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { register } from "@/Redux/Auth/Action.js";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
//import { register } from "@/path/to/your/action"; // Adjust the import path

const Signup = () => {
  const dispatch = useDispatch();
  const form = useForm({
    // resolver: zodResolver(schema), // Uncomment and define your schema if needed
    defaultValues: {
      email: "",
      password: "",
      fullName: ""
    },
  });

  const onSubmit = (data) => {
    dispatch(register(data));
    console.log("Registration data", data);
  };

  return (
    <div className="space-y-5">
      <h1>Register</h1>
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-grey-700 py-5 px-5"
                    placeholder="Full Name..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="border w-full border-grey-700 py-5 px-5"
                    placeholder="Email..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="password" // Changed type to 'password'
                    className="border w-full border-grey-700 py-5 px-5"
                    placeholder="Password..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-5">
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Signup;

