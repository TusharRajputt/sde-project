import React from 'react';
import { Menu, X, User } from 'lucide-react';

type NavbarProps = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  isAuthenticated: boolean;
  onAuthChange: (status: boolean) => void;
};

export default function Navbar({ toggleSidebar, isSidebarOpen, isAuthenticated, onAuthChange }: NavbarProps) {
  const handleAuth = () => {
    if (isAuthenticated) {
      onAuthChange(false);
    } else {
      alert("Auth Modal Placeholder");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <span className="ml-4 text-xl font-semibold">Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <button
                onClick={handleAuth}
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={handleAuth}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
