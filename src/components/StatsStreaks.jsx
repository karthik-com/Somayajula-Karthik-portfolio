export default function StatsStreaks() {
  const leetcodeStats = {
    username: "somayajulakarthik97",
    totalSolved: 231,
    acceptance: 72,
    easy: 70,
    medium: 112,
    hard: 49,
    streak: 180,
    rank: 721598,
    badges: 7,
    profileUrl: "https://leetcode.com/u/somayajulakarthik97/"
  };

  const tryhackmeStats = {
    username: "karthiksoma",
    roomsCompleted: 150,
    streak: 160,
    points: 15000,
    rank: 58844,
    rankPercentage: 3,
    badges: 24,
    level: "MASTER",
    profileUrl: "https://tryhackme.com/p/karthiksoma"
  };

  
  // Easy/Medium/Hard distribution
  const totalEMH = leetcodeStats.easy + leetcodeStats.medium + leetcodeStats.hard;
  const easyPercent = (leetcodeStats.easy / totalEMH) * 100;
  const mediumPercent = (leetcodeStats.medium / totalEMH) * 100;
  const hardPercent = (leetcodeStats.hard / totalEMH) * 100;

  return (
    <section id="stats-streaks" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Coding Stats & Streaks
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Active learning & problem-solving on LeetCode and TryHackMe</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ============== LEETCODE CARD ============== */}
          <div className="border border-green-500/30 rounded-lg overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-green-500/50 transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 p-6 border-b border-green-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">💻</span>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400">LeetCode</h3>
                    <p className="text-sm text-gray-400">@{leetcodeStats.username}</p>
                  </div>
                </div>
                <a
                  href={leetcodeStats.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg hover:bg-green-500/30 text-sm font-semibold transition"
                >
                  Visit Profile →
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Main Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/10">
                  <p className="text-sm text-gray-400 mb-2">Problems Solved</p>
                  <p className="text-3xl font-bold text-green-400">{leetcodeStats.totalSolved}</p>
                  <p className="text-xs text-gray-500 mt-1">Python</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/10">
                  <p className="text-sm text-gray-400 mb-2">Rank</p>
                  <p className="text-3xl font-bold text-green-400">#{leetcodeStats.rank.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">Global Ranking</p>
                </div>
              </div>

              {/* Streak & Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/10">
                  <p className="text-sm text-gray-400 mb-2">🔥 Current Streak</p>
                  <p className="text-3xl font-bold text-orange-400">{leetcodeStats.streak}+</p>
                  <p className="text-xs text-gray-500 mt-1">Days</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/10">
                  <p className="text-sm text-gray-400 mb-2">🏆 Badges</p>
                  <p className="text-3xl font-bold text-yellow-400">{leetcodeStats.badges}</p>
                  <p className="text-xs text-gray-500 mt-1">Achievements</p>
                </div>
              </div>

              

              {/* Difficulty Distribution */}
              <div>
                <p className="text-sm text-gray-400 mb-3">Difficulty Distribution</p>
                <div className="space-y-2">
                  {/* Easy */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-green-400">Easy - {leetcodeStats.easy}</span>
                      
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: `${easyPercent}%` }}></div>
                    </div>
                  </div>
                  
                  {/* Medium */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-yellow-400">Medium - {leetcodeStats.medium}</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: `${mediumPercent}%` }}></div>
                    </div>
                  </div>
                  
                  {/* Hard */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-red-400">Hard - {leetcodeStats.hard}</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-red-500" style={{ width: `${hardPercent}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Acceptance Rate */}
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Acceptance Rate</p>
                <p className="text-2xl font-bold text-green-400">{leetcodeStats.acceptance}%</p>
              </div>
            </div>
          </div>

          {/* ============== TRYHACKME CARD ============== */}
          <div className="border border-blue-500/30 rounded-lg overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 p-6 border-b border-blue-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">🛡️</span>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">TryHackMe</h3>
                    <p className="text-sm text-gray-400">@{tryhackmeStats.username}</p>
                  </div>
                </div>
                <a
                  href={tryhackmeStats.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 text-blue-400 rounded-lg hover:bg-blue-500/30 text-sm font-semibold transition"
                >
                  Visit Profile →
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Main Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/10">
                  <p className="text-sm text-gray-400 mb-2">Rooms Completed</p>
                  <p className="text-3xl font-bold text-blue-400">{tryhackmeStats.roomsCompleted}+</p>
                  <p className="text-xs text-gray-500 mt-1">Security Training</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/10">
                  <p className="text-sm text-gray-400 mb-2">Rank</p>
                  <p className="text-3xl font-bold text-blue-400">#{tryhackmeStats.rank.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">Top {tryhackmeStats.rankPercentage}%</p>
                </div>
              </div>

              {/* Streak & Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/10">
                  <p className="text-sm text-gray-400 mb-2">🔥 Current Streak</p>
                  <p className="text-3xl font-bold text-orange-400">{tryhackmeStats.streak}+</p>
                  <p className="text-xs text-gray-500 mt-1">Days</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/10">
                  <p className="text-sm text-gray-400 mb-2">🏆 Badges</p>
                  <p className="text-3xl font-bold text-yellow-400">{tryhackmeStats.badges}</p>
                  <p className="text-xs text-gray-500 mt-1">Achievements</p>
                </div>
              </div>

              {/* Points & Level */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/10">
                  <p className="text-sm text-gray-400 mb-2">Total Points</p>
                  <p className="text-3xl font-bold text-cyan-400">{tryhackmeStats.points.toLocaleString()}+</p>
                  <p className="text-xs text-gray-500 mt-1">Experience Points</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/10">
                  <p className="text-sm text-gray-400 mb-2">🌟 Level</p>
                  <p className="text-3xl font-bold text-purple-400">{tryhackmeStats.level}</p>
                  <p className="text-xs text-gray-500 mt-1">Current Level</p>
                </div>
              </div>
        
              
              {/* Rank Percentile */}
              <div className="bg-gradient-to-r from-green-500/5 to-blue-500/5 border border-green-500/20 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Global Ranking</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Top {tryhackmeStats.rankPercentage}% Globally
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          <div className="border border-green-500/20 rounded-lg p-4 bg-gradient-to-br from-green-500/5 to-slate-800/50 text-center hover:border-green-500/50 transition">
            <p className="text-3xl font-bold text-green-400 mb-2">227</p>
            <p className="text-sm text-gray-400">LeetCode Problems</p>
          </div>
          <div className="border border-blue-500/20 rounded-lg p-4 bg-gradient-to-br from-blue-500/5 to-slate-800/50 text-center hover:border-blue-500/50 transition">
            <p className="text-3xl font-bold text-blue-400 mb-2">150+</p>
            <p className="text-sm text-gray-400">TryHackMe Rooms</p>
          </div>
          <div className="border border-orange-500/20 rounded-lg p-4 bg-gradient-to-br from-orange-500/5 to-slate-800/50 text-center hover:border-orange-500/50 transition">
            <p className="text-3xl font-bold text-orange-400 mb-2">340+</p>
            <p className="text-sm text-gray-400">Total Streaks</p>
          </div>
          <div className="border border-purple-500/20 rounded-lg p-4 bg-gradient-to-br from-purple-500/5 to-slate-800/50 text-center hover:border-purple-500/50 transition">
            <p className="text-3xl font-bold text-purple-400 mb-2">31</p>
            <p className="text-sm text-gray-400">Total Badges</p>
          </div>
        </div>
      </div>
    </section>
  );
}
