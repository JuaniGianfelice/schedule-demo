import React from "react";
import ScheduleGuard from "../components/schedule/scheduleGuard";

const VisitDashboard = () => {
  return (
    <div className="user-dashboard">
      <ScheduleGuard isVisitDashboard={true} />
    </div>
  );
};

export default VisitDashboard;
