import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const { useForm } = require("react-hook-form");

const CreateIssueForm = () => {
  const form = useForm({
    // resolver: zodResolver(schema),
    defaultValues: {
      issueName: "",
      discription: "",
    },
  });

  const onSubmit = (data) => {
    console.log("create project data", data);
  };
  return <div>
    <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-grey-700 py-5 px-5"
                    placeholder="user email..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogClose>
            <Button type="submit" className="w-full mt-5">
              {" "}
              Invite User
            </Button>
          </DialogClose>
        </form>
      </Form>
  </div>;
};

export default CreateIssueForm;
