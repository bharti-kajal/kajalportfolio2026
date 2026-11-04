import React from 'react';
import { Code2, Users, Zap, ShieldCheck } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: <Code2 className="w-7 h-7 text-[#c9962b]" />,
      value: "50+",
      label: "Projects Delivered",
    },
    {
      icon: <Users className="w-7 h-7 text-[#c9962b]" />,
      value: "100K+",
      label: "Users Served",
    },
    {
      icon: <Zap className="w-7 h-7 text-[#c9962b]" />,
      value: "70%",
      label: "Faster API Response",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#c9962b]" />,
      value: "99.9%",
      label: "System Availability",
    },
  ];

  return (
    <section className="relative z-30 w-full">
      <div className="glass-bar rounded-2xl sm:rounded-3xl p-3 sm:p-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#e6dac0]">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3.5 sm:gap-4 px-2 sm:px-5 py-1 transition-transform hover:scale-105 duration-200"
          >
            <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#14261e] tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-[#5d6f64] font-medium mt-1">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
