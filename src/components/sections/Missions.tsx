"use client";

import { motion } from "framer-motion";

export default function Missions() {
  const missions = [
    {
      title: "Giza E&C | Project Intern",
      period: "06/2026 - Present",
      bullets: [
        "Coordinate with cross-functional teams to facilitate project execution and assist in daily operational tasks.",
        "Provide customer service and client support, ensuring smooth communication and timely resolution of project-related inquiries.",
        "Contribute to project documentation, tracking, and overall team support to ensure project milestones are met.",
      ]
    },
    {
      title: "Freelance English Tutor | IELTS & Secondary Education",
      period: "2025 - Present",
      bullets: [
        "Design and deliver customized English and IELTS lesson plans for secondary school students.",
        "Evaluate student progress through comprehensive grading rubrics and tailored feedback reports, significantly improving their writing and speaking proficiency.",
        "Communicate effectively with students to motivate and guide them toward their academic goals.",
      ]
    }
  ];

  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-4xl font-bebas text-rdr-text-active uppercase border-b-2 border-rdr-red pb-2 mb-2 inline-block w-max">
        Active Missions
      </h2>
      <p className="font-special italic text-gray-400 mb-6">
        A log of recent undertakings and completed bounties...
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {missions.map((mission, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative flex flex-col justify-between bg-black/60 min-h-[320px] p-6 border-2 border-transparent hover:border-rdr-red transition-colors duration-300 cursor-pointer overflow-hidden"
          >
            {/* Subtle grunge inner border / texture */}
            <div className="absolute inset-2 border border-white/5 pointer-events-none mix-blend-overlay"></div>
            
            {/* Content at the top */}
            <div className="relative z-10 font-special text-rdr-text text-sm leading-relaxed mb-12">
              <span className="block text-rdr-red/80 font-bold mb-4">{mission.period}</span>
              <ul className="list-disc pl-4 space-y-2">
                {mission.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>

            {/* Title at the bottom left */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-sm font-bebas text-rdr-text-active uppercase tracking-widest group-hover:text-white transition-colors">
                {mission.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
