import { DashboardCard } from "../components/partials/dashboard/dashboard-card";
import { DashboardChart } from "../components/partials/dashboard/dashboard-chart";
import TaskTable from "../components/partials/dashboard/task-table";
import UserTable from "../components/partials/dashboard/user-table";

import {
  DashboardStatsData,
  DashboardSummaryData,
} from "../static/dashboard-data";

const Dashboard = () => {
  return (
    <div className="h-full py-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {DashboardStatsData.map(({ icon, bg, label, total }, index) => (
          <DashboardCard
            key={index}
            icon={icon}
            bg={bg}
            label={label}
            count={total}
          />
        ))}
      </div>

      <div className="w-full bg-white my-16 p-4 rounded shadow-sm">
        <h4 className="text-xl text-gray-600 font-semibold">
          Chart by Priority
        </h4>
        <DashboardChart />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4 2xl:gap-10 py-8">
        {/* left side */}
        <TaskTable tasks={DashboardSummaryData.last10Task} />

        {/* right side */}
        <UserTable users={DashboardSummaryData.users} />
      </div>
    </div>
  );
};

export default Dashboard;
