// src/components/Layout.tsx (Ultra Simple - No active state tracking)
import React, { useState } from 'react';
import { Button } from '@repo/ui/components/ui/button';
import { Menu } from 'lucide-react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className={`hidden md:flex fixed left-0 top-0 h-screen transition-all duration-300 z-40 ${
        collapsed ? 'w-20' : 'w-64'
      }`}>
        <Sidebar 
          collapsed={collapsed} 
          onToggleCollapse={handleToggleCollapse}
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={handleMobileMenuClose}
          />
          {/* Mobile Sidebar */}
          <div className="fixed left-0 top-0 h-screen w-64 z-50 md:hidden">
            <Sidebar 
              collapsed={false} 
              onToggleCollapse={() => {}}
            />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        collapsed ? 'md:ml-20' : 'md:ml-64'
      }`}>
        <div className="p-8 ml-16 md:ml-0">
          {children}
        </div>
      </div>
    </div>
  );
};