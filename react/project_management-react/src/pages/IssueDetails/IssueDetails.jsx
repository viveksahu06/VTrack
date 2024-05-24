import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";

const IssueDetails = () => {
  const { projectId, issueId } = useParams();
  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border p-10 rounded-lg">
        <ScrollArea className="h-[80vh] w-[60%]">
          <div>
            <h1 className="text-lg font-semibold text-gray-400">
              create navbar
            </h1>
            <div className="py-5">
              <h2 className="font-semibold text-gray-400">Description</h2>
              <p className="text-gray-400 text-sm mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                
              </p>
            </div>
            <div className="mt-5">
                <h1 className="pb-3">Activity</h1>
                <Tabs defaultValue="comments" className="w-[400px]">
                    <TabsList value="mb-5">
                        <TabsTrigger value="all">
                            All
                        </TabsTrigger>
                        <TabsTrigger value="comments">
                            Comments
                        </TabsTrigger>
                        <TabsTrigger value="history">
                            History
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        all Make changes to your account here
                    </TabsContent>
                    <TabsContent value="comment">
                        <CreateCommentForm issueId={issueId}/>
                    </TabsContent>
                    <TabsContent value="history">
                        History Change your password here
                    </TabsContent>
                </Tabs>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default IssueDetails;
