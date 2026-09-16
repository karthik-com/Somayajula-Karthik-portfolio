export default function StatsStreaks() {
  const leetcodeStats = {
    username: '@somayajulakarthik97',
    profileUrl: 'https://leetcode.com/u/somayajulakarthik97',
    problemsSolved: 231,
    language: 'Python',
    globalRank: 721598,
    acceptanceRate: '72%',
    easyCount: 70,
    mediumCount: 112,
    hardCount: 49,
    currentStreak: '180+',
    badges: 7,
    contestRating: 1660,
    contestsParticipated: 8
  };

  const tryhackmeStats = {
    username: '@karthiksoma',
    profileUrl: 'https://tryhackme.com/p/karthiksoma',
    roomsCompleted: '150+',
    globalRank: 58844,
    percentile: 'Top 3%',
    totalPoints: '15,000+',
    currentStreak: '160+',
    badges: 24,
    level: 'MASTER'
  };

  return (
    <section id="stats-streaks" className="py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Stats & Streaks
          </span>
        </h2>

        {/* Container for both platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* LeetCode Card */}
          <div className="border border-green-500/20 rounded-lg p-5 md:p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-green-500/50 transition-colors">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 mb-6 md:mb-8 pb-6 border-b border-green-500/10">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl md:text-3xl">💻</span>
                  <h3 className="text-xl md:text-2xl font-bold text-green-400">LeetCode</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-400 truncate">{leetcodeStats.username}</p>
              </div>
              <a
                href={leetcodeStats.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-3 md:px-4 py-2 bg-green-500/20 border border-green-500/50 text-green-400 hover:bg-green-500/30 rounded-lg text-xs md:text-sm font-semibold transition-colors"
              >
                Visit Profile →
              </a>
            </div>

            {/* Stats Grid - 2x3 for mobile, responsive */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 mb-6">
              {/* Problems Solved */}
              <div className="bg-slate-800/50 border border-green-500/20 rounded-lg p-4 md:p-5 hover:border-green-500/30 transition-colors">
                <p className="text-xs md:text-sm text-gray-400 mb-2">Problems Solved</p>
                <p className="text-2xl md:text-3xl font-bold text-green-400">{leetcodeStats.problemsSolved}</p>
                <p className="text-xs text-gray-500 mt-1">{leetcodeStats.language}</p>
              </div>

              {/* Acceptance Rate */}
              <div className="bg-slate-800/50 border border-green-500/20 rounded-lg p-4 md:p-5 hover:border-green-500/30 transition-colors">
                <p className="text-xs md:text-sm text-gray-400 mb-2">Acceptance Rate</p>
                <p className="text-2xl md:text-3xl font-bold text-green-400">{leetcodeStats.acceptanceRate}</p>
                <p className="text-xs text-gray-500 mt-1">of Accepted Submissions</p>
              </div>

              {/* Rank */}
              <div className="bg-slate-800/50 border border-green-500/20 rounded-lg p-4 md:p-5 hover:border-green-500/30 transition-colors">
                <p className="text-xs md:text-sm text-gray-400 mb-2">Rank</p>
                <p className="text-2xl md:text-3xl font-bold text-green-400">#{leetcodeStats.globalRank.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">Global Ranking</p>
              </div>

              {/* Current Streak */}
              <div className="bg-slate-800/50 border border-green-500/20 rounded-lg p-4 md:p-5 hover:border-green-500/30 transition-colors">
                <p className="text-xs md:text-sm text-gray-400 mb-2 flex items-center gap-1">
                  <span>🔥</span> Current Streak
                </p>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">{leetcodeStats.currentStreak}</p>
                <p className="text-xs text-gray-500 mt-1">Days</p>
              </div>

              {/* Badges */}
              <div className="bg-slate-800/50 border border-green-500/20 rounded-lg p-4 md:p-5 hover:border-green-500/30 transition-colors">
                <p className="text-xs md:text-sm text-gray-400 mb-2 flex items-center gap-1">
                  <span>🏆</span> Badges
                </p>
                <p className="text-2xl md:text-3xl font-bold text-yellow-400">{leetcodeStats.badges}</p>
                <p className="text-xs text-gray-500 mt-1">Achievements</p>
              </div>

              {/* Contest Rating */}
              <div className="bg-slate-800/50 border border-green-500/20 rounded-lg p-4 md:p-5 hover:border-green-500/30 transition-colors">
                <p className="text-xs md:text-sm text-gray-400 mb-2 flex items-center gap-1">
                  <span>🏆</span> Contest Rating
                </p>
                <p className="text-2xl md:text-3xl font-bold text-yellow-400">{leetcodeStats.contestRating}</p>
                <p className="text-xs text-gray-500 mt-1">Contests Participated - {leetcodeStats.contestsParticipated}</p>
              </div>
            </div>

            {/* Difficulty Distribution */}
            <div className="bg-slate-800/30 rounded-lg p-4 md:p-5">
              <p className="text-sm md:text-base font-semibold text-gray-300 mb-4">Difficulty Distribution</p>
              <div className="space-y-3">
                {/* Easy */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs md:text-sm text-gray-400">Easy</span>
                    <span className="text-xs md:text-sm text-green-400 font-semibold">{leetcodeStats.easyCount}</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(leetcodeStats.easyCount / leetcodeStats.problemsSolved) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs md:text-sm text-gray-400">Medium</span>
                    <span className="text-xs md:text-sm text-yellow-400 font-semibold">{leetcodeStats.mediumCount}</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${(leetcodeStats.mediumCount / leetcodeStats.problemsSolved) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs md:text-sm text-gray-400">Hard</span>
                    <span className="text-xs md:text-sm text-red-400 font-semibold">{leetcodeStats.hardCount}</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${(leetcodeStats.hardCount / leetcodeStats.problemsSolved) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TryHackMe Card */}
          <div className="border border-blue-500/20 rounded-lg p-5 md:p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 mb-6 md:mb-8 pb-6 border-b border-blue-500/10">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl md:text-3xl">🛡️</span>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-400">TryHackMe</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-400 truncate">{tryhackmeStats.username}</p>
              </div>
              <a
                href={tryhackmeStats.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-3 md:px-4 py-2 bg-blue-500/20 border border-blue-500/50 text-blue-400 hover:bg-blue-500/30 rounded-lg text-xs md:text-sm font-semibold transition-colors"
              >
                Visit Profile →
              </a>
            </div>

            {/* Stats Grid - 2x3 for mobile, responsive */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 mb-6">
              {/* Rooms Completed */}
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-4 md:p-5 hover:border-blue-500/30 transition-colors">
                <p className="text-xs md:text-sm text-gray-400 mb-2">Rooms Completed</p>
                <p className="text-2xl md:text-3xl font-bold text-blue-400">{tryhackmeStats.roomsCompleted}</p>
                <p className="text-xs text-gray-500 mt-1">Security Training</p>
              </div>

              {/* Rank */}
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-4 md:p-5 hover:border-blue-500/30 transition-colors">
                <p className="text-xs md:text-sm text-gray-400 mb-2">Rank</p>
                <p className="text-2xl md:text-3xl font-bold text-blue-400">#{tryhackmeStats.globalRank.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">{tryhackmeStats.percentile}</p>
              </div>

              {/* Current Streak */}
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-4 md:p-5 hover:border-blue-500/30 transition-colors">
                <p className="text-xs md:text-sm text-gray-400 mb-2 flex items-center gap-1">
                  <span>🔥</span> Current Streak
                </p>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">{tryhackmeStats.currentStreak}</p>
                <p className="text-xs text-gray-500 mt-1">Days</p>
              </div>

              {/* Badges */}
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-4 md:p-5 hover:border-blue-500/30 transition-colors">
                <p className="text-xs md:text-sm text-gray-400 mb-2 flex items-center gap-1">
                  <span>🏆</span> Badges
                </p>
                <p className="text-2xl md:text-3xl font-bold text-yellow-400">{tryhackmeStats.badges}</p>
                <p className="text-xs text-gray-500 mt-1">Achievements</p>
              </div>

              {/* Total Points */}
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-4 md:p-5 hover:border-blue-500/30 transition-colors">
                <p className="text-xs md:text-sm text-gray-400 mb-2">Total Points</p>
                <p className="text-2xl md:text-3xl font-bold text-cyan-400">{tryhackmeStats.totalPoints}</p>
                <p className="text-xs text-gray-500 mt-1">Experience Points</p>
              </div>

              {/* Level */}
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-4 md:p-5 hover:border-blue-500/30 transition-colors">
                <p className="text-xs md:text-sm text-gray-400 mb-2 flex items-center gap-1">
                  <span>⭐</span> Level
                </p>
                <p className="text-2xl md:text-3xl font-bold text-purple-400">{tryhackmeStats.level}</p>
                <p className="text-xs text-gray-500 mt-1">Current Level</p>
              </div>
            </div>

            {/* Global Ranking Bar */}
            <div className="bg-slate-800/30 rounded-lg p-4 md:p-5">
              <p className="text-sm md:text-base font-semibold text-gray-300 mb-3">Global Ranking</p>
              <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                  style={{ width: '95%' }}
                ></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Top 3% Globally</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}