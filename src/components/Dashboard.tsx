import React from 'react';
import StatsCard from './StatsCard';
import BattleStatistics from './BattleStatistics';
import FactionManagement from './FactionManagement';
import { Skull, UserMinus, Heart, Target } from 'lucide-react';
import { useStats } from '../context/StatsContext';

const Dashboard: React.FC = () => {
  const { stats } = useStats();

  const getStatValue = (name: string) => {
    const stat = stats.find(s => s.name === name);
    return stat ? stat.value.toLocaleString() : '0';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <h2 className="text-5xl font-oswald font-semibold tracking-wider text-gray-100">Your Empire</h2>
        <div className="grid grid-cols-2 gap-4">
          <StatsCard title="Kills" value={getStatValue('Kills')} icon={<Skull className="text-red-700" size={24} />} />
          <StatsCard title="Lost Associates" value={getStatValue('Lost Associates')} icon={<UserMinus className="text-red-700" size={24} />} />
          <StatsCard title="Healed Associates" value={getStatValue('Healed Associates')} icon={<Heart className="text-red-700" size={24} />} />
          <StatsCard title="Eliminated Enemy Influence" value={getStatValue('Eliminated Enemy Influence')} icon={<Target className="text-red-700" size={24} />} />
        </div>
        <BattleStatistics />
      </div>
      <div className="lg:col-span-1">
        <FactionManagement />
      </div>
    </div>
  );
};

export default Dashboard;