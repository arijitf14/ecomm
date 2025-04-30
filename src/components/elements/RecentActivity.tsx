import bottomdisplay from "../../assets/bottomdisplay.svg";
import topdisplay from "../../assets/topdisplay.svg";
import rightdisplay from "../../assets/rightdisplay.svg";

const activities = [
  {
    id: 1,
    type: "Deposit",
    date: "April 14, 2025",
    amount: "+$22,500",
    icon: <img src={topdisplay} alt="Apple" className="h-8 w-8" />,
    note: "deposited",
  },
  {
    id: 2,
    type: "Withdrawal",
    date: "April 16, 2025",
    amount: "-$10,000",
    icon: <img src={bottomdisplay} alt="Apple" className="h-8 w-8" />,
    note: "taken out",
  },
  {
    id: 3,
    type: "Sent via Wire Transfer",
    date: "April 16, 2025",
    amount: "-$1,000",
    icon: <img src={rightdisplay} alt="Apple" className="h-8 w-8" />,
    note: "taken out",
  },
];

export function RecentActivity() {
  return (
    <div className="mt-6 px-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-emerald-900">
          Recent activity
        </h2>
        <button className="text-sm text-emerald-700 font-medium">
          See all
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="bg-gray-100 p-2 rounded-full">
                {activity.icon}
              </div>
              <div>
                <p className="font-medium text-emerald-900">{activity.type}</p>
                <p className="text-sm text-gray-500">{activity.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-emerald-900">{activity.amount}</p>
              <p className="text-sm text-gray-400">{activity.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
