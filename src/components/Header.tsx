import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Skull, User, Users, Settings, LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-md text-gray-100 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Skull size={32} className="text-red-700 animate-pulse" />
          <h1 className="text-5xl font-oswald font-semibold tracking-wider text-gray-100">MAFIA MANAGER</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className={`flex items-center space-x-1 hover:text-red-400 transition-colors ${location.pathname === '/' ? 'text-red-400' : ''}`}
              >
                <User size={18} /><span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/faction"
                className={`flex items-center space-x-1 hover:text-red-400 transition-colors ${location.pathname === '/faction' ? 'text-red-400' : ''}`}
              >
                <Users size={18} /><span>Faction</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className={`flex items-center space-x-1 hover:text-red-400 transition-colors ${location.pathname === '/admin' ? 'text-red-400' : ''}`}
              >
                <Settings size={18} /><span>Admin</span>
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                <LogOut size={18} /><span>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;