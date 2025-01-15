import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function UsersSection() {
  const users = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 890',
      location: 'New York, USA',
      role: 'Admin',
      status: 'Active',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234 567 891',
      location: 'Los Angeles, USA',
      role: 'User',
      status: 'Active',
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      phone: '+1 234 567 892',
      location: 'Chicago, USA',
      role: 'User',
      status: 'Inactive',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">Users</h2>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {users.map((user, i) => (
            <div key={i} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{user.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Role: {user.role}</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail size={16} className="mr-2" />
                    {user.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone size={16} className="mr-2" />
                    {user.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    {user.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}