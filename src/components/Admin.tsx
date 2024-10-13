import React, { useState } from 'react';
import { Users, Database, AlertTriangle, Activity, Settings } from 'lucide-react';

const Admin: React.FC = () => {
  const [userStats, setUserStats] = useState({
    totalUsers: 10000,
    onlineUsers: 1500,
    premiumUsers: 500
  });
  const [factionStats, setFactionStats] = useState({
    totalFactions: 50
  });
  const [serverLoad, setServerLoad] = useState(65);

  const handleResetStats = () => {
    console.log('Resetting all user stats...');
    // Implement the logic to reset all user stats
  };

  const handleBackupDatabase = () => {
    console.log('Backing up the database...');
    // Implement the logic to backup the database
  };

  const handleBanUser = () => {
    console.log('Banning user...');
    // Implement the logic to ban a user
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-oswald font-semibold tracking-wider text-gray-100 mb-8">Admin Control Panel</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-oswald font-semibold text-gray-100 mb-4 flex items-center">
            <Users className="mr-2 text-red-700" size={24} />
            Statistics
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">Users</h3>
              <div className="space-y-2">
                <p className="text-lg text-gray-300">Total: <span className="font-bold text-gray-100">{userStats.totalUsers.toLocaleString()}</span></p>
                <p className="text-lg text-gray-300">Online: <span className="font-bold text-gray-100">{userStats.onlineUsers.toLocaleString()}</span></p>
                <p className="text-lg text-gray-300">Premium: <span className="font-bold text-gray-100">{userStats.premiumUsers.toLocaleString()}</span></p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">Factions</h3>
              <div className="space-y-2">
                <p className="text-lg text-gray-300">Total: <span className="font-bold text-gray-100">{factionStats.totalFactions.toLocaleString()}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-oswald font-semibold text-gray-100 mb-4 flex items-center">
            <Activity className="mr-2 text-red-700" size={24} />
            Server Load
          </h2>
          <p className="text-3xl font-bold text-gray-100">{serverLoad}%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
          <h2 className="text-3xl font-oswald font-semibold text-gray-100 mb-4 flex items-center">
            <Settings className="mr-2 text-red-700" size={28} />
            Global Actions
          </h2>
          <div className="space-y-4">
            <button
              onClick={handleResetStats}
              className="w-full bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
            >
              Reset All User Stats
            </button>
            <button
              onClick={handleBackupDatabase}
              className="w-full bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
            >
              Backup Database
            </button>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
          <h2 className="text-3xl font-oswald font-semibold text-gray-100 mb-4 flex items-center">
            <AlertTriangle className="mr-2 text-red-700" size={28} />
            Moderation
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter user ID"
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={handleBanUser}
              className="w-full bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
            >
              Ban User
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
        <h2 className="text-3xl font-oswald font-semibold text-gray-100 mb-4 flex items-center">
          <Database className="mr-2 text-red-700" size={28} />
          System Logs
        </h2>
        <div className="bg-gray-900 p-4 rounded-lg h-64 overflow-y-auto">
          <p className="text-gray-400">2023-04-01 12:34:56 - User login: ID 12345</p>
          <p className="text-gray-400">2023-04-01 12:35:23 - New faction created: "Shadow Syndicate"</p>
          <p className="text-gray-400">2023-04-01 12:36:45 - Battle completed: Faction "Red Dragons" vs "Black Cobras"</p>
          <p className="text-gray-400">2023-04-01 12:38:12 - User banned: ID 67890</p>
          <p className="text-gray-400">2023-04-01 12:40:01 - Database backup completed</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;