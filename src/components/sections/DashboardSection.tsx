import React from 'react';
import { BarChart2, Users, DollarSign, Clock, TrendingUp, Activity, Target, Award, Zap, Coffee, Settings } from 'lucide-react';

export default function DashboardSection() {
  const stats = [
    { icon: Users, label: 'Total Users', value: '1,234', change: '+12%' },
    { icon: DollarSign, label: 'Revenue', value: '$12,345', change: '+8%' },
    { icon: BarChart2, label: 'Engagement', value: '87%', change: '+5%' },
    { icon: Clock, label: 'Avg. Time', value: '12m', change: '-2%' },
  ];

  const projects = [
    { name: 'E-commerce Platform', progress: 75, status: 'In Progress', team: 5 },
    { name: 'Mobile App Development', progress: 90, status: 'Review', team: 3 },
    { name: 'Website Redesign', progress: 60, status: 'In Progress', team: 4 },
    { name: 'API Integration', progress: 85, status: 'Testing', team: 2 },
  ];

  const activities = [
    { icon: TrendingUp, title: 'Sales Report', description: 'Monthly sales exceeded targets by 15%', time: '2h ago' },
    { icon: Activity, title: 'System Update', description: 'Core system components updated successfully', time: '4h ago' },
    { icon: Target, title: 'New Milestone', description: 'Project Alpha reached 1000 active users', time: '6h ago' },
    { icon: Award, title: 'Achievement', description: 'Team completed quarterly goals ahead of schedule', time: '12h ago' },
    { icon: Zap, title: 'Performance', description: 'System optimization improved response time by 25%', time: '1d ago' },
    { icon: Coffee, title: 'Team Meeting', description: 'Quarterly planning session completed', time: '1d ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${
                stat.change.startsWith('+') ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <stat.icon size={24} className={
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                } />
              </div>
            </div>
            <p className={`text-sm mt-2 ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Active Projects</h2>
        <div className="space-y-4">
          {projects.map((project, i) => (
            <div key={i} className="border-b last:border-0 pb-4 last:pb-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-600">Team Size: {project.team} • Status: {project.status}</p>
                </div>
                <span className="text-sm font-medium text-blue-600">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-6">
          {activities.map((activity, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <activity.icon size={20} className="text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{activity.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {activity.description}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
                {i !== activities.length - 1 && (
                  <div className="absolute left-5 ml-5 w-0.5 h-16 bg-gray-200"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">System Performance</h2>
          <div className="space-y-4">
            {[
              { label: 'CPU Usage', value: '45%' },
              { label: 'Memory Usage', value: '60%' },
              { label: 'Disk Space', value: '75%' },
              { label: 'Network Load', value: '30%' },
            ].map((metric, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">{metric.label}</span>
                  <span className="text-sm font-medium">{metric.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: metric.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: 'Team Members' },
              { icon: Target, label: 'Set Goals' },
              { icon: Activity, label: 'Analytics' },
              { icon: Settings, label: 'Settings' },
            ].map((action, i) => (
              <button
                key={i}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex flex-col items-center gap-2"
              >
                <action.icon size={24} className="text-blue-600" />
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}