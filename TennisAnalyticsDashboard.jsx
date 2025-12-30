import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, ScatterChart, Scatter, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TennisAnalysisDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Historical Results Data (2018-2025)
  const historicalResults = [
    { date: '2018-02-01', opponent: 'BRN', result: 'W', score: '2-1' },
    { date: '2018-01-30', opponent: 'MGL', result: 'L', score: '0-3' },
    { date: '2018-01-29', opponent: 'SGP', result: 'W', score: '3-0' },
    { date: '2018-02-02', opponent: 'TJK', result: 'L', score: '0-3' },
    { date: '2018-01-31', opponent: 'TKM', result: 'L', score: '0-3' },
    { date: '2018-02-03', opponent: 'OMA', result: 'W', score: '2-0' },
    { date: '2019-09-13', opponent: 'JOR', result: 'W', score: '3-0' },
    { date: '2019-09-11', opponent: 'MGL', result: 'L', score: '1-2' },
    { date: '2019-09-12', opponent: 'TKM', result: 'W', score: '3-0' },
    { date: '2019-09-14', opponent: 'BRN', result: 'L', score: '1-2' },
    { date: '2021-10-22', opponent: 'BRN', result: 'W', score: '3-0' },
    { date: '2021-10-19', opponent: 'KSA', result: 'W', score: '3-0' },
    { date: '2021-10-18', opponent: 'UAE', result: 'W', score: '3-0' },
    { date: '2021-10-23', opponent: 'KGZ', result: 'W', score: '2-1' },
    { date: '2022-10-18', opponent: 'BRN', result: 'L', score: '0-3' },
    { date: '2022-10-19', opponent: 'LAO', result: 'L', score: '1-2' },
    { date: '2022-10-21', opponent: 'SGP', result: 'W', score: '3-0' },
    { date: '2022-10-17', opponent: 'KUW', result: 'W', score: '3-0' },
    { date: '2022-10-22', opponent: 'BHU', result: 'L', score: '0-3' },
    { date: '2023-10-19', opponent: 'KGZ', result: 'W', score: '3-0' },
    { date: '2023-10-18', opponent: 'KUW', result: 'W', score: '3-0' },
    { date: '2023-10-20', opponent: 'TKM', result: 'L', score: '1-2' },
    { date: '2023-10-21', opponent: 'IRQ', result: 'W', score: '2-0' },
    { date: '2024-11-21', opponent: 'BRU', result: 'L', score: '1-2' },
    { date: '2024-11-20', opponent: 'NEP', result: 'W', score: '2-1' },
    { date: '2024-11-23', opponent: 'BAN', result: 'L', score: '0-3' },
    { date: '2025-11-21', opponent: 'MGL', result: 'L', score: '1-2' },
    { date: '2025-11-20', opponent: 'MYA', result: 'L', score: '1-2' },
    { date: '2025-11-22', opponent: 'TKM', result: 'W', score: '3-0' }
  ];

  // 2025 Detailed Match Statistics
  const detailedStats2025 = [
    // Guam vs Turkmenistan (Nov 22, 2025)
    { player: 'Junhyuk Seo', country: 'GUM', opponent: 'Selim Chagylov', oppCountry: 'TKM', date: '2025-11-22',
      aces: 0, doubleFaults: 8, firstServePct: 56.8, firstServeWonPct: 45.2, secondServeWonPct: 54.2, 
      breakPointsPct: 75, pointsWon: 64, result: 'W' },
    { player: 'Selim Chagylov', country: 'TKM', opponent: 'Junhyuk Seo', oppCountry: 'GUM', date: '2025-11-22',
      aces: 0, doubleFaults: 6, firstServePct: 62.9, firstServeWonPct: 56.4, secondServeWonPct: 47.1,
      breakPointsPct: 88.9, pointsWon: 72, result: 'L' },
    { player: 'Bryce Manalo', country: 'GUM', opponent: 'Allanur Dayanjov', oppCountry: 'TKM', date: '2025-11-22',
      aces: 0, doubleFaults: 2, firstServePct: 71.8, firstServeWonPct: 25, secondServeWonPct: 44.4,
      breakPointsPct: 50, pointsWon: 25, result: 'L' },
    { player: 'Allanur Dayanjov', country: 'TKM', opponent: 'Bryce Manalo', oppCountry: 'GUM', date: '2025-11-22',
      aces: 1, doubleFaults: 1, firstServePct: 76.2, firstServeWonPct: 75, secondServeWonPct: 44.4,
      breakPointsPct: 54.5, pointsWon: 56, result: 'W' },
    { player: 'Emil Penafiel', country: 'GUM', opponent: 'Meylis Orazmuhamedow', oppCountry: 'TKM', date: '2025-11-22',
      aces: 0, doubleFaults: 3, firstServePct: 78, firstServeWonPct: 65.2, secondServeWonPct: 40,
      breakPointsPct: 33.3, pointsWon: 56, result: 'L' },
    { player: 'Daniel Llarenas', country: 'GUM', opponent: 'Yuriy Rogusskiy', oppCountry: 'TKM', date: '2025-11-22',
      aces: 1, doubleFaults: 2, firstServePct: 72.4, firstServeWonPct: 57.1, secondServeWonPct: 85.7,
      breakPointsPct: 28.6, pointsWon: 61, result: 'W' },
    
    // Guam vs Mongolia (Nov 21, 2025)
    { player: 'Junhyuk Seo', country: 'GUM', opponent: 'Zolbayar Ganbold', oppCountry: 'MGL', date: '2025-11-21',
      aces: 1, doubleFaults: 7, firstServePct: 56.5, firstServeWonPct: 80.8, secondServeWonPct: 61.5,
      breakPointsPct: 66.7, pointsWon: 56, result: 'W' },
    { player: 'Zolbayar Ganbold', country: 'MGL', opponent: 'Junhyuk Seo', oppCountry: 'GUM', date: '2025-11-21',
      aces: 0, doubleFaults: 3, firstServePct: 64.3, firstServeWonPct: 37, secondServeWonPct: 41.7,
      breakPointsPct: 20, pointsWon: 32, result: 'L' },
    { player: 'Bryce Manalo', country: 'GUM', opponent: 'Zolbadar Urnukh', oppCountry: 'MGL', date: '2025-11-21',
      aces: 0, doubleFaults: 8, firstServePct: 60.9, firstServeWonPct: 46.4, secondServeWonPct: 40,
      breakPointsPct: 66.7, pointsWon: 34, result: 'L' },
    { player: 'Zolbadar Urnukh', country: 'MGL', opponent: 'Bryce Manalo', oppCountry: 'GUM', date: '2025-11-21',
      aces: 0, doubleFaults: 0, firstServePct: 86.4, firstServeWonPct: 63.2, secondServeWonPct: 50,
      breakPointsPct: 60, pointsWon: 56, result: 'W' },
    { player: 'Emil Penafiel', country: 'GUM', opponent: 'Zolbadar Urnukh', oppCountry: 'MGL', date: '2025-11-21',
      aces: 1, doubleFaults: 4, firstServePct: 63.9, firstServeWonPct: 69.6, secondServeWonPct: 72.7,
      breakPointsPct: 36.4, pointsWon: 86, result: 'W' },
    { player: 'Daniel Llarenas', country: 'GUM', opponent: 'Zolbayar Ganbold', oppCountry: 'MGL', date: '2025-11-21',
      aces: 2, doubleFaults: 7, firstServePct: 64.4, firstServeWonPct: 55.4, secondServeWonPct: 75,
      breakPointsPct: 28.6, pointsWon: 73, result: 'L' },

    // Guam vs Myanmar (Nov 20, 2025)
    { player: 'Daniel Llarenas', country: 'GUM', opponent: 'Dah Woo', oppCountry: 'MYA', date: '2025-11-20',
      aces: 2, doubleFaults: 8, firstServePct: 53.1, firstServeWonPct: 61.5, secondServeWonPct: 60,
      breakPointsPct: 16.7, pointsWon: 48, result: 'L' },
    { player: 'Dah Woo', country: 'MYA', opponent: 'Daniel Llarenas', oppCountry: 'GUM', date: '2025-11-20',
      aces: 0, doubleFaults: 6, firstServePct: 58.3, firstServeWonPct: 71.4, secondServeWonPct: 63.2,
      breakPointsPct: 40, pointsWon: 61, result: 'W' },
    { player: 'Junhyuk Seo', country: 'GUM', opponent: 'Hein Htet Zaw', oppCountry: 'MYA', date: '2025-11-20',
      aces: 1, doubleFaults: 7, firstServePct: 63.1, firstServeWonPct: 68.3, secondServeWonPct: 64.7,
      breakPointsPct: 46.2, pointsWon: 74, result: 'W' },
    { player: 'Hein Htet Zaw', country: 'MYA', opponent: 'Junhyuk Seo', oppCountry: 'GUM', date: '2025-11-20',
      aces: 1, doubleFaults: 9, firstServePct: 50, firstServeWonPct: 54.8, secondServeWonPct: 45.5,
      breakPointsPct: 42.9, pointsWon: 53, result: 'L' },
    { player: 'Emil Penafiel', country: 'GUM', opponent: 'Aung Myo Thant', oppCountry: 'MYA', date: '2025-11-20',
      aces: 2, doubleFaults: 2, firstServePct: 70, firstServeWonPct: 71.4, secondServeWonPct: 76.9,
      breakPointsPct: 33.3, pointsWon: 62, result: 'W' },
    { player: 'Daniel Llarenas', country: 'GUM', opponent: 'Hein Latt Kyaw', oppCountry: 'MYA', date: '2025-11-20',
      aces: 1, doubleFaults: 6, firstServePct: 63.2, firstServeWonPct: 66.7, secondServeWonPct: 40,
      breakPointsPct: 100, pointsWon: 45, result: 'L' }
  ];

  // Calculate yearly performance
  const yearlyPerformance = historicalResults.reduce((acc, match) => {
    const year = match.date.split('-')[0];
    if (!acc[year]) acc[year] = { year, wins: 0, losses: 0, total: 0 };
    acc[year].total++;
    match.result === 'W' ? acc[year].wins++ : acc[year].losses++;
    return acc;
  }, {});

  const yearlyData = Object.values(yearlyPerformance).map(y => ({
    year: y.year,
    winRate: ((y.wins / y.total) * 100).toFixed(1),
    wins: y.wins,
    losses: y.losses,
    total: y.total
  }));

  // Calculate opponent performance
  const opponentPerformance = historicalResults.reduce((acc, match) => {
    if (!acc[match.opponent]) acc[match.opponent] = { opponent: match.opponent, wins: 0, losses: 0, total: 0 };
    acc[match.opponent].total++;
    match.result === 'W' ? acc[match.opponent].wins++ : acc[match.opponent].losses++;
    return acc;
  }, {});

  const opponentData = Object.values(opponentPerformance)
    .map(o => ({
      opponent: o.opponent,
      winRate: ((o.wins / o.total) * 100).toFixed(1),
      matches: o.total,
      record: `${o.wins}-${o.losses}`
    }))
    .sort((a, b) => b.matches - a.matches)
    .slice(0, 8);

  // Overall stats
  const totalMatches = historicalResults.length;
  const totalWins = historicalResults.filter(m => m.result === 'W').length;
  const overallWinRate = ((totalWins / totalMatches) * 100).toFixed(1);

  // Guam players 2025 stats
  const guamStats = detailedStats2025.filter(s => s.country === 'GUM');
  const opponentStats = detailedStats2025.filter(s => s.country !== 'GUM');

  const avgGuamStats = {
    firstServePct: (guamStats.reduce((sum, s) => sum + s.firstServePct, 0) / guamStats.length).toFixed(1),
    firstServeWonPct: (guamStats.reduce((sum, s) => sum + s.firstServeWonPct, 0) / guamStats.length).toFixed(1),
    secondServeWonPct: (guamStats.reduce((sum, s) => sum + s.secondServeWonPct, 0) / guamStats.length).toFixed(1),
    aces: (guamStats.reduce((sum, s) => sum + s.aces, 0) / guamStats.length).toFixed(1),
    doubleFaults: (guamStats.reduce((sum, s) => sum + s.doubleFaults, 0) / guamStats.length).toFixed(1),
    breakPointsPct: (guamStats.reduce((sum, s) => sum + s.breakPointsPct, 0) / guamStats.length).toFixed(1)
  };

  const avgOppStats = {
    firstServePct: (opponentStats.reduce((sum, s) => sum + s.firstServePct, 0) / opponentStats.length).toFixed(1),
    firstServeWonPct: (opponentStats.reduce((sum, s) => sum + s.firstServeWonPct, 0) / opponentStats.length).toFixed(1),
    secondServeWonPct: (opponentStats.reduce((sum, s) => sum + s.secondServeWonPct, 0) / opponentStats.length).toFixed(1),
    aces: (opponentStats.reduce((sum, s) => sum + s.aces, 0) / opponentStats.length).toFixed(1),
    doubleFaults: (opponentStats.reduce((sum, s) => sum + s.doubleFaults, 0) / opponentStats.length).toFixed(1),
    breakPointsPct: (opponentStats.reduce((sum, s) => sum + s.breakPointsPct, 0) / opponentStats.length).toFixed(1)
  };

  // Player breakdown
  const playerBreakdown = guamStats.reduce((acc, stat) => {
    if (!acc[stat.player]) {
      acc[stat.player] = { player: stat.player, matches: 0, wins: 0, avgFirstServe: 0, totalAces: 0, totalDF: 0 };
    }
    acc[stat.player].matches++;
    if (stat.result === 'W') acc[stat.player].wins++;
    acc[stat.player].avgFirstServe += stat.firstServePct;
    acc[stat.player].totalAces += stat.aces;
    acc[stat.player].totalDF += stat.doubleFaults;
    return acc;
  }, {});

  const playerData = Object.values(playerBreakdown).map(p => ({
    player: p.player,
    winRate: ((p.wins / p.matches) * 100).toFixed(0),
    avgFirstServe: (p.avgFirstServe / p.matches).toFixed(1),
    aces: p.totalAces,
    doubleFaults: p.totalDF,
    matches: p.matches
  }));

  // Serve comparison data
  const serveComparisonData = [
    { metric: '1st Serve %', Guam: parseFloat(avgGuamStats.firstServePct), Opponents: parseFloat(avgOppStats.firstServePct) },
    { metric: '1st Serve Won', Guam: parseFloat(avgGuamStats.firstServeWonPct), Opponents: parseFloat(avgOppStats.firstServeWonPct) },
    { metric: '2nd Serve Won', Guam: parseFloat(avgGuamStats.secondServeWonPct), Opponents: parseFloat(avgOppStats.secondServeWonPct) }
  ];

  const COLORS = ['#22c55e', '#ef4444'];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-2xl p-8 mb-6">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">Guam Davis Cup Analytics</h1>
        <p className="text-slate-600">Comprehensive Performance Analysis (2018-2025)</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {['overview', 'historical', '2025stats', 'players'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === tab
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            {tab === 'overview' && '📊 Overview'}
            {tab === 'historical' && '📈 Historical Trends'}
            {tab === '2025stats' && '🎾 2025 Detailed Stats'}
            {tab === 'players' && '👥 Player Analysis'}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-blue-600">{totalMatches}</div>
              <div className="text-slate-600 text-sm">Total Matches</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-green-600">{totalWins}</div>
              <div className="text-slate-600 text-sm">Wins</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-red-600">{totalMatches - totalWins}</div>
              <div className="text-slate-600 text-sm">Losses</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl font-bold text-purple-600">{overallWinRate}%</div>
              <div className="text-slate-600 text-sm">Win Rate</div>
            </div>
          </div>

          {/* Win/Loss Pie Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Overall Win/Loss Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Wins', value: totalWins },
                    { name: 'Losses', value: totalMatches - totalWins }
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Key Insights */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">📌 Key Insights</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Guam has competed in <strong>{totalMatches} Davis Cup matches</strong> from 2018-2025</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Best year: <strong>2021</strong> with {yearlyData.find(y => y.year === '2021')?.winRate}% win rate</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">✓</span>
                <span>Most frequent opponent: <strong>{opponentData[0]?.opponent}</strong> ({opponentData[0]?.matches} matches)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-2">✓</span>
                <span>2025 detailed analysis includes <strong>{guamStats.length} match performances</strong></span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Historical Trends Tab */}
      {activeTab === 'historical' && (
        <div className="space-y-6">
          {/* Win Rate by Year */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Win Rate by Year</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis domain={[0, 100]} label={{ value: 'Win Rate (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="winRate" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Matches by Year */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Matches Played by Year</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="wins" stackId="a" fill="#22c55e" name="Wins" />
                <Bar dataKey="losses" stackId="a" fill="#ef4444" name="Losses" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Performance by Opponent */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Performance by Top Opponents</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Opponent</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Matches</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Record</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Win Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {opponentData.map((opp, idx) => (
                    <tr key={idx} className="border-b hover:bg-slate-50">
                      <td className="px-4 py-3 font-semibold">{opp.opponent}</td>
                      <td className="px-4 py-3 text-center">{opp.matches}</td>
                      <td className="px-4 py-3 text-center">{opp.record}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`font-bold ${parseFloat(opp.winRate) >= 50 ? 'text-green-600' : 'text-red-600'}`}>
                          {opp.winRate}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 2025 Detailed Stats Tab */}
      {activeTab === '2025stats' && (
        <div className="space-y-6">
          {/* Average Stats Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">🇬🇺 Guam Average Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">First Serve %:</span>
                  <span className="font-bold text-blue-600">{avgGuamStats.firstServePct}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">1st Serve Won %:</span>
                  <span className="font-bold text-blue-600">{avgGuamStats.firstServeWonPct}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">2nd Serve Won %:</span>
                  <span className="font-bold text-blue-600">{avgGuamStats.secondServeWonPct}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Aces per match:</span>
                  <span className="font-bold text-green-600">{avgGuamStats.aces}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Double Faults:</span>
                  <span className="font-bold text-red-600">{avgGuamStats.doubleFaults}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Break Points %:</span>
                  <span className="font-bold text-purple-600">{avgGuamStats.breakPointsPct}%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">🌍 Opponents Average Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">First Serve %:</span>
                  <span className="font-bold text-blue-600">{avgOppStats.firstServePct}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">1st Serve Won %:</span>
                  <span className="font-bold text-blue-600">{avgOppStats.firstServeWonPct}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">2nd Serve Won %:</span>
                  <span className="font-bold text-blue-600">{avgOppStats.secondServeWonPct}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Aces per match:</span>
                  <span className="font-bold text-green-600">{avgOppStats.aces}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Double Faults:</span>
                  <span className="font-bold text-red-600">{avgOppStats.doubleFaults}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Break Points %:</span>
                  <span className="font-bold text-purple-600">{avgOppStats.breakPointsPct}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Serve Comparison Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Serving Efficiency Comparison</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={serveComparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Guam" fill="#3b82f6" />
                <Bar dataKey="Opponents" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Aces vs Double Faults Scatter */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Aces vs Double Faults (2025 Matches)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="aces" name="Aces" label={{ value: 'Aces', position: 'bottom' }} />
                <YAxis dataKey="doubleFaults" name="Double Faults" label={{ value: 'Double Faults', angle: -90, position: 'insideLeft' }} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Guam Players" data={guamStats} fill="#3b82f6" />
                <Scatter name="Opponents" data={opponentStats} fill="#f97316" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* Key Findings */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">🎯 2025 Key Findings</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>Guam players average <strong>{avgGuamStats.firstServePct}% first serve</strong> compared to opponents' {avgOppStats.firstServePct}%</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">⚠</span>
                <span>Double faults are higher for Guam (<strong>{avgGuamStats.doubleFaults} per match</strong>) vs opponents ({avgOppStats.doubleFaults})</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>First serve points won: Guam {avgGuamStats.firstServeWonPct}% vs Opponents {avgOppStats.firstServeWonPct}%</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">📊</span>
                <span>Break point conversion needs improvement: <strong>{avgGuamStats.breakPointsPct}%</strong> vs opponents' {avgOppStats.breakPointsPct}%</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Players Tab */}
      {activeTab === 'players' && (
        <div className="space-y-6">
          {/* Player Performance Table */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Individual Player Performance (2025)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Player</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Matches</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Win Rate</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Avg 1st Serve %</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Total Aces</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">Total DFs</th>
                  </tr>
                </thead>
                <tbody>
                  {playerData.map((player, idx) => (
                    <tr key={idx} className="border-b hover:bg-slate-50">
                      <td className="px-4 py-3 font-semibold">{player.player}</td>
                      <td className="px-4 py-3 text-center">{player.matches}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`font-bold ${parseFloat(player.winRate) >= 50 ? 'text-green-600' : 'text-red-600'}`}>
                          {player.winRate}%
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">{player.avgFirstServe}%</td>
                      <td className="px-4 py-3 text-center text-green-600 font-semibold">{player.aces}</td>
                      <td className="px-4 py-3 text-center text-red-600 font-semibold">{player.doubleFaults}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* First Serve % by Player */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">First Serve Percentage by Player</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={playerData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="player" type="category" width={150} />
                <Tooltip />
                <Bar dataKey="avgFirstServe" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Match-by-Match Detail */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Match-by-Match Details (Guam Players)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-semibold">Date</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold">Player</th>
                    <th className="px-3 py-2 text-left text-xs font-semibold">vs</th>
                    <th className="px-3 py-2 text-center text-xs font-semibold">Result</th>
                    <th className="px-3 py-2 text-center text-xs font-semibold">1st Serve</th>
                    <th className="px-3 py-2 text-center text-xs font-semibold">Aces</th>
                    <th className="px-3 py-2 text-center text-xs font-semibold">DFs</th>
                    <th className="px-3 py-2 text-center text-xs font-semibold">BP %</th>
                  </tr>
                </thead>
                <tbody>
                  {guamStats.map((match, idx) => (
                    <tr key={idx} className="border-b hover:bg-slate-50">
                      <td className="px-3 py-2">{match.date}</td>
                      <td className="px-3 py-2 font-semibold">{match.player}</td>
                      <td className="px-3 py-2">{match.opponent} ({match.oppCountry})</td>
                      <td className="px-3 py-2 text-center">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${match.result === 'W' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {match.result}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-center">{match.firstServePct}%</td>
                      <td className="px-3 py-2 text-center">{match.aces}</td>
                      <td className="px-3 py-2 text-center">{match.doubleFaults}</td>
                      <td className="px-3 py-2 text-center">{match.breakPointsPct}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Player Insights */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">👤 Player Insights</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">🏆</span>
                <span><strong>Junhyuk Seo</strong> shows highest first serve won percentage and strong break point conversion</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">📊</span>
                <span><strong>Emil Penafiel</strong> demonstrates consistency with high second serve won percentages</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 font-bold mr-2">⚠</span>
                <span>Double faults remain a team-wide area for improvement across all players</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">💡</span>
                <span>Players with <strong>first serve % above 65%</strong> show significantly higher win rates</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 text-center text-slate-600 text-sm">
        <p>Data Source: Davis Cup Official Website | Analysis Period: 2018-2025</p>
        <p className="mt-2">Created for Guam National Tennis Team Performance Analysis</p>
      </div>
    </div>
  );
};

export default TennisAnalysisDashboard;
