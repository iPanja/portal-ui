// src/components/Sidebar.tsx (Ultra Simple - No active state tracking)
import React from 'react';
import Link from 'next/link';
import { Button } from '@repo/ui/components/ui/button';
import { 
  Home, 
  Users, 
  Settings, 
  FileText, 
  BarChart3, 
  Mail, 
  Calendar,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Navigation items configuration
const navigationItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: Users, label: 'Team', href: '/team' },
  { icon: FileText, label: 'Documents', href: '/documents' },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  { icon: Mail, label: 'Messages', href: '/messages' },
  { icon: Calendar, label: 'Calendar', href: '/calendar' },
  { icon: Settings, label: 'Settings', href: '/settings' }
];

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  collapsed, 
  onToggleCollapse
}) => {
  return (
    <div className="flex flex-col h-full bg-white border-r">
      {/* Logo/Brand */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          {!collapsed && <span className="font-semibold text-lg">Acme Inc</span>}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-3 py-4 overflow-y-auto">
        <nav className="space-y-2">
          {navigationItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Button
                variant="ghost"
                className={`w-full justify-start gap-3 h-12 ${
                  collapsed ? 'px-2' : 'px-3'
                }`}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!collapsed && (
                  <span className="flex-1 text-left">{item.label}</span>
                )}
              </Button>
            </Link>
          ))}
        </nav>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t">
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center shrink-0">
            <span className="text-sm font-medium">JD</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-none truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">john@example.com</p>
            </div>
          )}
        </div>
      </div>

      {/* Collapse Toggle Button */}
      <div className="absolute -right-3 top-6 z-10">
        <Button
          variant="outline"
          size="sm"
          className="h-6 w-6 rounded-full p-0 bg-white border shadow-md"
          onClick={onToggleCollapse}
        >
          {collapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </Button>
      </div>
    </div>
  );
};