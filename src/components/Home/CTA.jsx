import { Crown, Sparkles, ArrowRight, Users, Star } from "lucide-react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden dark:bg-gray-900">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-[#F2FAEF]/50 dark:from-gray-900 via-transparent to-[#F69074]/5 dark:to-[#02A2A2]/10" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-linear-to-br from-white dark:from-gray-800 to-gray-50 dark:to-gray-850 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-[#02A2A2]/20 dark:from-[#02A2A2]/10 to-[#F69074]/20 dark:to-[#F69074]/10 mb-6 border border-white/50 dark:border-gray-700/50 shadow-lg">
                <Sparkles className="w-8 h-8 text-[#02A2A2] dark:text-[#A0EBEB]" />
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">
                Start Your <span className="text-[#F69074] dark:text-[#F69074]">Wisdom Journey</span> Today
              </h2>
              
              {/* Subheading */}
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join a community where experiences become lessons, and lessons become growth. Your story matters.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center gap-8 mb-10">
                {[
                  { label: "Active Members", value: "5K+", icon: Users, color: "#02A2A2" },
                  { label: "Lessons Shared", value: "25K+", icon: Star, color: "#F69074" },
                  { label: "Avg. Rating", value: "4.9★", icon: Crown, color: "#EDBC98" },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                           style={{ backgroundColor: `${stat.color}15` }}>
                        <Icon className="w-4 h-4" style={{ color: stat.color }} />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-gray-800 dark:text-white text-lg">{stat.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/register"
                  className="group px-8 py-4 bg-linear-to-r from-[#F69074] to-[#F69074]/90 dark:from-[#F69074] dark:to-[#EDBC98] text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 min-w-[220px]"
                >
                  <Sparkles className="w-5 h-5" />
                  Create Free Account
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/pricing"
                  className="group px-8 py-4 bg-white dark:bg-gray-800 border-2 border-[#02A2A2] dark:border-[#A0EBEB] text-[#02A2A2] dark:text-[#A0EBEB] font-semibold rounded-xl hover:bg-[#02A2A2]/5 dark:hover:bg-gray-750 transition-all duration-300 flex items-center justify-center gap-3 min-w-[220px]"
                >
                  <Crown className="w-5 h-5" />
                  Explore Premium
                  <span className="text-xs px-2 py-1 rounded-full bg-[#02A2A2]/10 dark:bg-[#A0EBEB]/10 text-[#02A2A2] dark:text-[#A0EBEB]">
                    Popular
                  </span>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 dark:text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#02A2A2] dark:bg-[#A0EBEB]" />
                    <span>No credit card required for free plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#F69074] dark:bg-[#EDBC98]" />
                    <span>30-day premium satisfaction guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#A0EBEB] dark:bg-[#02A2A2]" />
                    <span>Join 5,000+ wisdom seekers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;