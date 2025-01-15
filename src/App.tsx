import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import DashboardSection from './components/sections/DashboardSection';
import UsersSection from './components/sections/UsersSection';
import SettingsSection from './components/sections/SettingsSection';
import HelpSection from './components/sections/HelpSection';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <DashboardSection />;
      case 'users':
        return <UsersSection />;
      case 'settings':
        return <SettingsSection />;
      case 'help':
        return <HelpSection />;
      default:
        return <DashboardSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <Navbar
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        isAuthenticated={isAuthenticated}
        onAuthChange={setIsAuthenticated}
      />

      {/* Main Layout */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
        />

        {/* Main Content Area */}
        <main
          className={`flex-1 bg-gray-50 transition-all duration-300 ${
            isSidebarOpen ? 'ml-64' : 'ml-0'
          }`}
        >
          <div className="container mx-auto p-6">
            <div className="flex gap-6">
              {/* Main Content */}
              <div className="flex-1">{renderSection()}</div>

              {/* Right Panel */}
              <div className="hidden lg:block w-80">
                <RightPanel isAuthenticated={isAuthenticated} />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
