import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import IssueCard from "./IssueCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import CreateIssueForm from "./CreateIssueForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { store } from "@/Redux/Store";
import { useParams } from "react-router-dom";
import { fetchIssues } from "@/Redux/Issue/Action";

export const IssueList = ({ title, status }) => {
  const dispatch=useDispatch();
  const {issue}=useSelector(store=>store)
  const {id}=useParams();

  useEffect(()=>{
    dispatch(fetchIssues(id))
  },[id])
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[310px]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <div className="space-y-2">
              {issue.issues.filter(issue=>issue.status==status).map(item => (
                <IssueCard projectId = {id} item={item} key={item.id} />
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <DialogTrigger>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <PlusIcon />
                Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
          <CreateIssueForm status={status}/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IssueList;
