import React from 'react';
import { Bell, Activity, Calendar, MessageSquare } from 'lucide-react';

export default function RightPanel() {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <Bell size={20} className="text-gray-600" />
        </div>
        <div className="space-y-3">
          {[
            { icon: Activity, text: 'System update completed' },
            { icon: Calendar, text: 'Team meeting in 30 minutes' },
            { icon: MessageSquare, text: 'New message from John' },
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md">
              <item.icon size={18} className="text-blue-600 mt-0.5" />
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
        <div className="space-y-3">
          {[
            { label: 'Active Users', value: '1,234' },
            { label: 'Total Revenue', value: '$12,345' },
            { label: 'Pending Tasks', value: '23' },
          ].map((stat, i) => (
            <div key={i} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{stat.label}</span>
              <span className="font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}