import React, { useState, useCallback } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useStats } from '../context/StatsContext';

const BattleStatistics: React.FC = () => {
  const { stats, updateStats } = useStats();
  const [tempValues, setTempValues] = useState<(number | undefined)[]>(new Array(stats.length).fill(undefined));

  const handleInputChange = useCallback((index: number, value: string) => {
    const newTempValues = [...tempValues];
    newTempValues[index] = value === '' ? undefined : Number(value);
    setTempValues(newTempValues);
  }, [tempValues]);

  const handleSubmit = useCallback(() => {
    const newStats = stats.map((stat, index) => {
      if (tempValues[index] !== undefined) {
        const newValue = tempValues[index] as number;
        return {
          ...stat,
          change: newValue - stat.value,
          value: newValue,
        };
      }
      return stat;
    });

    // Calculate win rate
    const totalWins = newStats.find(s => s.name === 'Total Wins')?.value || 0;
    const totalLosses = newStats.find(s => s.name === 'Total Losses')?.value || 0;
    const totalBattles = totalWins + totalLosses;
    const winRate = totalBattles > 0 ? (totalWins / totalBattles) * 100 : 0;

    const updatedStats = newStats.map(stat => 
      stat.name === 'Win Rate' 
        ? { ...stat, value: winRate, change: winRate - stat.value }
        : stat
    );

    updateStats(updatedStats);
    setTempValues(new Array(stats.length).fill(undefined));
  }, [stats, tempValues, updateStats]);

  const isNegativeStat = (statName: string) => {
    return ['Total Losses', 'Assaults Lost', 'Defending Battles Lost', 'Lost Associates', 'Lost Traps', 'Turf Destroyed Times'].includes(statName);
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700">
      <h3 className="text-4xl font-oswald font-semibold tracking-wider text-gray-100 mb-4">Battle Statistics</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-700">
              <th className="pb-2">Statistic</th>
              <th className="pb-2">Current Value</th>
              <th className="pb-2">Change</th>
              <th className="pb-2">Manual Update</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-3">{stat.name}</td>
                <td className="py-3">
                  {stat.name === 'Win Rate' ? `${stat.value.toFixed(2)}%` : stat.value.toLocaleString()}
                </td>
                <td className="py-3 flex items-center">
                  {stat.change !== 0 && (
                    <>
                      {(stat.change > 0 && !isNegativeStat(stat.name)) || (stat.change < 0 && isNegativeStat(stat.name)) ? (
                        <TrendingUp className="text-green-500 mr-1" size={16} />
                      ) : (
                        <TrendingDown className="text-red-500 mr-1" size={16} />
                      )}
                      <span className={
                        (isNegativeStat(stat.name) && stat.change > 0) || (!isNegativeStat(stat.name) && stat.change < 0)
                          ? 'text-red-500'
                          : 'text-green-500'
                      }>
                        {stat.change > 0 ? '+' : ''}{stat.change.toFixed(2)}
                        {stat.name === 'Win Rate' ? '%' : ''}
                      </span>
                    </>
                  )}
                </td>
                <td className="py-3">
                  {stat.editable ? (
                    <input
                      type="number"
                      className="bg-gray-700 border border-gray-600 rounded px-2 py-1 w-24 text-gray-300"
                      value={tempValues[index] !== undefined ? tempValues[index] : ''}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      placeholder="0"
                    />
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="mt-4 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
        onClick={handleSubmit}
      >
        Submit Updates
      </button>
    </div>
  );
};

export default BattleStatistics;