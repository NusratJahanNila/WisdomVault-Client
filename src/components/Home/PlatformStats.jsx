const PlatformStats = () => {
  const stats = [
    { 
      label: "Lessons Created", 
      value: 1200,
      icon: "📚",
      color: "#F69074"
    },
    { 
      label: "Registered Users", 
      value: 850,
      icon: "👥",
      color: "#EDBC98"
    },
    { 
      label: "Lessons Saved", 
      value: 4200,
      icon: "💖",
      color: "#A0EBEB"
    },
    { 
      label: "Active Contributors", 
      value: 180,
      icon: "⭐",
      color: "#02A2A2"
    },
  ];

  return (
    <section className="py-16 px-6 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#F69074] dark:bg-[#F69074]/80 rounded-full" />
            <span className="text-[#02A2A2] dark:text-[#A0EBEB] font-semibold uppercase tracking-wider text-sm">
              Our Impact
            </span>
            <div className="w-8 h-1 bg-[#02A2A2] dark:bg-[#02A2A2]/80 rounded-full" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Platform <span className="text-[#F69074] dark:text-[#F69074]">Statistics</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real numbers showing the growth of our wisdom-sharing community
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-800/50 transition-all duration-300 hover:-translate-y-2">
                
                {/* Icon Circle */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900"
                    style={{ 
                      background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}40)`
                    }}
                  >
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                </div>

                {/* Number */}
                <div className="pt-8 mb-4">
                  <div className="text-4xl font-black text-gray-800 dark:text-white tracking-tight">
                    {stat.value.toLocaleString()}
                    <span 
                      className="text-3xl ml-1 font-bold"
                      style={{ color: stat.color }}
                    >
                      +
                    </span>
                  </div>
                </div>

                {/* Label */}
                <p className="text-gray-600 dark:text-gray-300 font-medium text-center">
                  {stat.label}
                </p>

                {/* Animated Underline */}
                <div 
                  className="mt-4 h-1 w-0 group-hover:w-full transition-all duration-500 mx-auto rounded-full"
                  style={{ backgroundColor: stat.color }}
                />
              </div>

              {/* Decorative dots */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: `${stat.color}50`,
                      left: `${20 + i * 30}%`,
                      top: '15%',
                      animation: `float 3s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Connecting Line */}
        <div className="mt-12 relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-linear-to-r from-[#F69074]/20 via-[#EDBC98]/20 to-[#02A2A2]/20 dark:from-[#F69074]/10 dark:via-[#EDBC98]/10 dark:to-[#02A2A2]/10 transform -translate-y-1/2" />
          
          <div className="relative flex justify-between max-w-3xl mx-auto px-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                <div 
                  className="w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"
                  style={{ backgroundColor: stat.color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: stat.color }}
                />
                <span>{stat.label.split(' ')[0]}</span>
                {index < stats.length - 1 && (
                  <span className="text-gray-300 dark:text-gray-600">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

export default PlatformStats;