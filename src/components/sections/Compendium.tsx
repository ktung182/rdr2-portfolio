"use client";

import { motion } from "framer-motion";

export default function Compendium() {
  const skills = [
    { name: "Python", category: "Programming" },
    { name: "SQL", category: "Database" },
    { name: "Stata", category: "Econometrics" },
    { name: "Panel Data Analysis", sub: "(AMG, CCEMG)", category: "Methodology" },
    { name: "LMDI", category: "Analysis" },
    { name: "Tapio Decoupling", category: "Analysis" },
  ];

  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-4xl font-bebas text-rdr-text-active uppercase border-b-2 border-rdr-red pb-2 mb-2 inline-block w-max">
        Compendium
      </h2>
      <p className="font-special italic text-gray-400 mb-4">
        An index of discovered tools, methodologies, and technical artifacts...
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skills.map((skill, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative flex flex-col justify-between bg-black/60 h-32 p-4 border-2 border-transparent hover:border-rdr-red transition-colors duration-300 cursor-pointer overflow-hidden"
          >
            {/* Subtle grunge inner border / texture */}
            <div className="absolute inset-2 border border-white/5 pointer-events-none mix-blend-overlay"></div>
            
            {/* Main Content inside the card */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full pb-4 text-center">
              <span className="block font-special text-xl text-rdr-text-active group-hover:text-white transition-colors">
                {skill.name}
              </span>
              {skill.sub && (
                <span className="block font-special text-sm text-gray-400 mt-1 italic">
                  {skill.sub}
                </span>
              )}
            </div>

            {/* Title at the bottom left */}
            <div className="absolute bottom-2 left-4 z-10">
              <span className="text-xs font-bebas text-gray-500 group-hover:text-rdr-red uppercase tracking-widest transition-colors">
                {skill.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
