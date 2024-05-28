import { store } from "@/Redux/Store";
import {
  getUserSubscription,
  upgradeSubscription,
} from "@/Redux/Subscription/Action";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const UpgradeSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subscription } = useSelector(store => store);

  const queryParams = new URLSearchParams(location.search);

  const paymentId = queryParams.get("payment_id");
  const planType = queryParams.get("planType");

  useEffect(() => {
    dispatch(upgradeSubscription({ planType }));
    dispatch(getUserSubscription());
  }, []);
  return (
    <div className="flex justify-center">
      <Card className="mt-20 p-5 space-y-5 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <CheckCircledIcon className="h-9 w-9 text-green-500" />
          <p className="text-xl">Plan Upgraded Successfully</p>
        </div>
        <div className="space-y-3">
          <p className="text-green-500">state date: {subscription.getUserSubscription?.subscriptionStartDate}</p>
          <p className="text-red-500">end date: {subscription.getUserSubscription?.getSubscriptionEndDate}</p>
          <p className="">plan type : {subscription.getUserSubscription?.planType}</p>
        </div>
        <Button onClick={() => navigate("/")}>Go to home</Button>
      </Card>
    </div>
  );
};

export default UpgradeSuccess;
