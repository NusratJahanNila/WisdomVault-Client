const stats = [
  { 
    label: "Lessons Created", 
    value: 1200,
    icon: "📚",
    bgColor: "bg-[#F69074]/10",
    borderColor: "border-[#F69074]/30",
    textColor: "text-[#F69074]"
  },
  { 
    label: "Registered Users", 
    value: 850,
    icon: "👥",
    bgColor: "bg-[#EDBC98]/10",
    borderColor: "border-[#EDBC98]/30",
    textColor: "text-[#EDBC98]"
  },
  { 
    label: "Lessons Saved", 
    value: 4200,
    icon: "💖",
    bgColor: "bg-[#A0EBEB]/10",
    borderColor: "border-[#A0EBEB]/30",
    textColor: "text-[#A0EBEB]"
  },
  { 
    label: "Active Contributors", 
    value: 180,
    icon: "⭐",
    bgColor: "bg-[#02A2A2]/10",
    borderColor: "border-[#02A2A2]/30",
    textColor: "text-[#02A2A2]"
  },
];

const PlatformStats = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg--to-b from-[#F2FAEF] to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#F69074]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#02A2A2]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#EDBC98]/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg--to-r from-[#F69074] to-[#02A2A2] rounded-full" />
            <span className="text-[#02A2A2] font-semibold uppercase tracking-wider text-sm">
              Impact In Numbers
            </span>
            <div className="w-10 h-1 bg-linear-to-l from-[#F69074] to-[#02A2A2] rounded-full" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building a<span className="text-[#F69074]"> Community</span> of<br />
            <span className="text-[#02A2A2]"> Shared Wisdom</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real stories, real lessons, real impact. See how our community grows together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative"
            >
              {/* Main Card */}
              <div className={`relative ${stat.bgColor} border ${stat.borderColor} rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/70 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm overflow-hidden`}>
                
                {/* Animated background effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/10 to-transparent" />
                </div>
                
                {/* Icon Circle */}
                <div className={`relative w-20 h-20 rounded-2xl ${stat.textColor} flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{stat.icon}</span>
                  {/* Corner accent */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-current" />
                </div>

                {/* Number */}
                <div className="mb-3">
                  <div className="text-4xl font-black text-center text-gray-800">
                    {stat.value.toLocaleString()}
                    <span className="ml-1 text-2xl font-bold" style={{ color: stat.textColor.split('text-')[1]?.replace(']', '') }}>
                      +
                    </span>
                  </div>
                </div>

                {/* Label */}
                <p className="text-gray-700 font-medium text-center">
                  {stat.label}
                </p>

                {/* Animated underline */}
                <div className="mt-6 h-1.5 w-0 group-hover:w-full transition-all duration-700 mx-auto rounded-full"
                     style={{ backgroundColor: stat.textColor.split('text-')[1]?.replace(']', '') }} />
              </div>

              {/* Floating dots */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-bounce"
                    style={{
                      backgroundColor: stat.textColor.split('text-')[1]?.replace(']', ''),
                      left: `${15 + i * 25}%`,
                      top: '20%',
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Connecting line with dots */}
        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg--to-r from-[#F69074]/20 via-[#EDBC98]/20 to-[#02A2A2]/20 transform -translate-y-1/2" />
          
          <div className="relative flex justify-between max-w-3xl mx-auto px-12">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                <div 
                  className="w-4 h-4 rounded-full border-2 border-white shadow-lg"
                  style={{ backgroundColor: stat.textColor.split('text-')[1]?.replace(']', '') }}
                />
                {index < stats.length - 1 && (
                  <div className="absolute top-1/2 left-full w-12 h-0.5 bg-linear-to-r from-current to-transparent opacity-30" 
                       style={{ color: stat.textColor.split('text-')[1]?.replace(']', '') }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 text-gray-500 text-sm">
            <span className="w-2 h-2 rounded-full bg-[#F69074] animate-pulse" />
            <span>Live Statistics</span>
            <span className="w-2 h-2 rounded-full bg-[#02A2A2] animate-pulse" />
            <span>Updated Daily</span>
            <span className="w-2 h-2 rounded-full bg-[#A0EBEB] animate-pulse" />
            <span>Growing Community</span>
          </div>
        </div>
      </div>

      {/* Add bounce animation for dots */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PlatformStats;