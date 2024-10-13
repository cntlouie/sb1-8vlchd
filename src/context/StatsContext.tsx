import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Stat {
  name: string;
  value: number;
  change: number;
  editable: boolean;
}

interface StatsContextType {
  stats: Stat[];
  updateStats: (newStats: Stat[]) => void;
}

const StatsContext = createContext<StatsContextType | undefined>(undefined);

export const StatsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stats, setStats] = useState<Stat[]>([
    { name: 'Total Wins', value: 0, change: 0, editable: true },
    { name: 'Total Losses', value: 0, change: 0, editable: true },
    { name: 'Assaults Won', value: 0, change: 0, editable: true },
    { name: 'Assaults Lost', value: 0, change: 0, editable: true },
    { name: 'Defending Battles Won', value: 0, change: 0, editable: true },
    { name: 'Defending Battles Lost', value: 0, change: 0, editable: true },
    { name: 'Win Rate', value: 0, change: 0, editable: false },
    { name: 'Kills', value: 0, change: 0, editable: true },
    { name: 'Destroyed Traps', value: 0, change: 0, editable: true },
    { name: 'Lost Associates', value: 0, change: 0, editable: true },
    { name: 'Lost Traps', value: 0, change: 0, editable: true },
    { name: 'Healed Associates', value: 0, change: 0, editable: true },
    { name: 'Wounded Enemy Associates', value: 0, change: 0, editable: true },
    { name: 'Enemy Turfs Destroyed', value: 0, change: 0, editable: true },
    { name: 'Turf Destroyed Times', value: 0, change: 0, editable: true },
    { name: 'Eliminated Enemy Influence', value: 0, change: 0, editable: true },
  ]);

  const updateStats = (newStats: Stat[]) => {
    setStats(newStats);
  };

  return (
    <StatsContext.Provider value={{ stats, updateStats }}>
      {children}
    </StatsContext.Provider>
  );
};

export const useStats = () => {
  const context = useContext(StatsContext);
  if (context === undefined) {
    throw new Error('useStats must be used within a StatsProvider');
  }
  return context;
};