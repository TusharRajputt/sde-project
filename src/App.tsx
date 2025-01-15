import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import { useResponsiveScale } from './hooks/useResponsiveScale';
import DashboardSection from './components/sections/DashboardSection';
import UsersSection from './components/sections/UsersSection';
import SettingsSection from './components/sections/SettingsSection';
import HelpSection from './components/sections/HelpSection';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const scale = useResponsiveScale();

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
    <div className="min-h-screen" style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Navbar 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          isSidebarOpen={isSidebarOpen}
          isAuthenticated={isAuthenticated}
          onAuthChange={setIsAuthenticated}
        />
      </div>
      
      {/* Main Content Area */}
      <div className="flex pt-16 min-h-screen">
        <Sidebar 
          isOpen={isSidebarOpen} 
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
        />
        
        {/* Scrollable Main Content */}
        <main className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } bg-gray-50`}>
          <div className="container mx-auto p-6">
            <div className="flex gap-6">
              {/* Main Content */}
              <div className="flex-1">
                {renderSection()}
              </div>
              
              {/* Fixed Right Panel */}
              <div className="hidden lg:block w-80">
                <div className="sticky top-20">
                  <RightPanel isAuthenticated={isAuthenticated} />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
export default App;
