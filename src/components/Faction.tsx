import React, { useState } from 'react';
import { Users, UserPlus, Briefcase, Target, Shield, Flag } from 'lucide-react';

interface FactionMember {
  name: string;
  kills: number;
  lostAssociates: number;
  healedAssociates: number;
  eliminatedInfluence: number;
}

const Faction: React.FC = () => {
  const [factionMembers, setFactionMembers] = useState<FactionMember[]>([
    { name: "Don Corleone", kills: 50, lostAssociates: 5, healedAssociates: 20, eliminatedInfluence: 100 },
    { name: "Michael Corleone", kills: 30, lostAssociates: 2, healedAssociates: 15, eliminatedInfluence: 75 },
    { name: "Sonny Corleone", kills: 40, lostAssociates: 8, healedAssociates: 10, eliminatedInfluence: 60 },
    { name: "Tom Hagen", kills: 10, lostAssociates: 1, healedAssociates: 25, eliminatedInfluence: 50 },
    { name: "Fredo Corleone", kills: 5, lostAssociates: 3, healedAssociates: 5, eliminatedInfluence: 20 },
  ]);

  const [factionTag, setFactionTag] = useState('');
  const [factionName, setFactionName] = useState('');
  const [error, setError] = useState('');

  const handleCreateFaction = () => {
    if (factionTag.length > 3) {
      setError('Faction tag must be 3 letters or less.');
      return;
    }
    if (factionName.trim() === '') {
      setError('Faction name cannot be empty.');
      return;
    }
    // Here you would typically send this data to your backend
    console.log('Creating faction:', { tag: factionTag, name: factionName });
    setError('');
    // Reset form
    setFactionTag('');
    setFactionName('');
    // You might want to add some success feedback here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-oswald font-semibold tracking-wider text-gray-100 mb-8">Faction Headquarters</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
          <h2 className="text-3xl font-oswald font-semibold text-gray-100 mb-4 flex items-center">
            <Flag className="mr-2 text-red-700" size={28} />
            Create a Faction
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="factionTag" className="block text-sm font-medium text-gray-300">Faction Tag (max 3 letters)</label>
              <input
                type="text"
                id="factionTag"
                maxLength={3}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                value={factionTag}
                onChange={(e) => setFactionTag(e.target.value.toUpperCase())}
              />
            </div>
            <div>
              <label htmlFor="factionName" className="block text-sm font-medium text-gray-300">Faction Name</label>
              <input
                type="text"
                id="factionName"
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                value={factionName}
                onChange={(e) => setFactionName(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              onClick={handleCreateFaction}
              className="w-full bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
            >
              Create Faction
            </button>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
          <h2 className="text-3xl font-oswald font-semibold text-gray-100 mb-4 flex items-center">
            <UserPlus className="mr-2 text-red-700" size={28} />
            Recruitment
          </h2>
          <p className="text-gray-300">Open Positions: 5</p>
        </div>
      </div>

      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700 mb-8">
        <h2 className="text-3xl font-oswald font-semibold text-gray-100 mb-4 flex items-center">
          <Users className="mr-2 text-red-700" size={28} />
          Faction Members
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="pb-2">Name</th>
                <th className="pb-2">Kills</th>
                <th className="pb-2">Lost Associates</th>
                <th className="pb-2">Healed Associates</th>
                <th className="pb-2">Eliminated Influence</th>
              </tr>
            </thead>
            <tbody>
              {factionMembers.map((member, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-3">{member.name}</td>
                  <td className="py-3">{member.kills}</td>
                  <td className="py-3">{member.lostAssociates}</td>
                  <td className="py-3">{member.healedAssociates}</td>
                  <td className="py-3">{member.eliminatedInfluence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
          <h2 className="text-3xl font-oswald font-semibold text-gray-100 mb-4 flex items-center">
            <Briefcase className="mr-2 text-red-700" size={28} />
            Operations
          </h2>
          <p className="text-gray-300">Active Operations: 3</p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
          <h2 className="text-3xl font-oswald font-semibold text-gray-100 mb-4 flex items-center">
            <Target className="mr-2 text-red-700" size={28} />
            Rival Factions
          </h2>
          <p className="text-gray-300">Known Rivals: 2</p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
          <h2 className="text-3xl font-oswald font-semibold text-gray-100 mb-4 flex items-center">
            <Shield className="mr-2 text-red-700" size={28} />
            Faction Resources
          </h2>
          <p className="text-gray-300">Available Resources: $1,000,000</p>
        </div>
      </div>
    </div>
  );
};

export default Faction;