import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        isAuthenticated={isAuthenticated}
        onAuthChange={setIsAuthenticated}
      />

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* Main Content */}
        <main className="flex-1 bg-gray-50" style={{ paddingTop: '4rem' }}>
          <div className="container mx-auto p-6">
            {/* Example content */}
            <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet felis lorem. Cras commodo nec
              nisi at tincidunt. Fusce sit amet orci id lectus vehicula luctus.
            </p>
            <div className="mt-6">
              {/* Long content to enable scrolling */}
              {[...Array(50)].map((_, i) => (
                <p key={i}>This is line {i + 1} of content.</p>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
