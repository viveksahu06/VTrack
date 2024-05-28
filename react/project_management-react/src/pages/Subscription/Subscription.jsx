import { useSelector } from "react-redux";
import SubscriptionCard from "./SubscriptionCard";
import { store } from "@/Redux/Store";

const paidPlan = [
  "Add unlimited project",
  "Access to live chat",
  "Add unlimited team member",
  "Advanced Reporting",
  "Priority Support",
  "Customization Options",
  "Integration Support",
  "Advanced Security",
  "Training and Resources",
  "Access Control",
  "Custom Workflows",
];

const annualPlan = [
  "Add unlimited project",
  "Access to live chat",
  "Add unlimited team member",
  "Advanced Reporting",
  "Priority Support",
  "Everything which montly plan has",
];

const freePlan = [
  "Add only 3 projects",
  "Basic Task Management",
  "Project Collaboration",
  "Basic Reporting",
  "Email Notifications",
  "Basic Access Control",
];

const Subscription = () => {
  const { subscription } = useSelector(store => store);
  return (
    <div className="p-10">
      <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <SubscriptionCard
          data={{
            planName: "Free",
            fetures: freePlan,
            planType: "FREE",
            price: 0,
            buttonName:
              subscription.userSubscription?.planType == "FREE"
                ? "Current Plan"
                : "Get Started",
          }}
        />
        <SubscriptionCard
          data={{
            planName: "Monthly Paid Plan",
            fetures: paidPlan,
            planType: "MONTHLY",
            price: 799,
            buttonName:
              subscription.userSubscription?.planType == "MONTHLY"
                ? "Current Plan"
                : "Get Started",
          }}
        />
        <SubscriptionCard
          data={{
            planName: "Annual Paid Plan",
            fetures: annualPlan,
            planType: "ANNUALLY",
            price: 6711,
            buttonName:
              subscription.userSubscription?.planType == "ANNUALLY"
                ? "Current Plan"
                : "Get Started",
          }}
        />
      </div>
    </div>
  );
};

export default Subscription;
