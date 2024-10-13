import React, { useState } from 'react';
import { Users, UserPlus, X } from 'lucide-react';

const FactionManagement: React.FC = () => {
  const [invitationCode, setInvitationCode] = useState('');
  const [factionMembers, setFactionMembers] = useState(['Don Corleone', 'Michael Corleone', 'Sonny Corleone', 'Tom Hagen']);

  const handleJoinFaction = () => {
    if (invitationCode.trim() !== '') {
      setFactionMembers([...factionMembers, `New Member (${invitationCode})`]);
      setInvitationCode('');
    }
  };

  const handleRemoveMember = (index: number) => {
    const newMembers = factionMembers.filter((_, i) => i !== index);
    setFactionMembers(newMembers);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-5xl font-oswald font-semibold tracking-wider text-gray-100">Faction</h2>
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-gray-300 mb-4 flex items-center">
          <UserPlus className="mr-2 text-red-700" size={24} />
          Join Faction
        </h3>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Invitation Code"
            className="flex-grow bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-300"
            value={invitationCode}
            onChange={(e) => setInvitationCode(e.target.value)}
          />
          <button
            className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
            onClick={handleJoinFaction}
          >
            Join
          </button>
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-gray-300 mb-4 flex items-center">
          <Users className="mr-2 text-red-700" size={24} />
          Faction Members
        </h3>
        <ul className="space-y-2">
          {factionMembers.map((member, index) => (
            <li key={index} className="text-gray-300 flex items-center justify-between bg-gray-700 rounded-md p-2">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {member}
              </div>
              <button
                className="text-red-500 hover:text-red-700 transition-colors"
                onClick={() => handleRemoveMember(index)}
              >
                <X size={18} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FactionManagement;