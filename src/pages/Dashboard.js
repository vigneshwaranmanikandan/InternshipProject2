import React from 'react';
import Header from '../components/Header';
import ProjectOverview from '../components/ProjectOverview';
import TaskTracking from '../components/TaskTracking';
import ProgressVisualization from '../components/ProgressVisualization';
import BudgetMonitoring from '../components/BudgetMonitoring';

const Dashboard = () => (
  <div className="bg-gray-100 min-h-screen">
    <Header />
    <main className="p-4 space-y-8">
      <ProjectOverview />
      <TaskTracking />
      <ProgressVisualization />
      <BudgetMonitoring />
    </main>
  </div>
);

export default Dashboard;
