"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TheJournal from "@/components/sections/TheJournal";
import Missions from "@/components/sections/Missions";
import Compendium from "@/components/sections/Compendium";
import Discoveries from "@/components/sections/Discoveries";
import Telegraph from "@/components/sections/Telegraph";
import clsx from "clsx";

const MENU_ITEMS = [
  { id: "journal", label: "THE JOURNAL", component: TheJournal },
  { id: "missions", label: "MISSIONS", component: Missions },
  { id: "compendium", label: "COMPENDIUM", component: Compendium },
  { id: "discoveries", label: "DISCOVERIES", component: Discoveries },
  { id: "telegraph", label: "TELEGRAPH", component: Telegraph },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(MENU_ITEMS[0].id);

  const ActiveComponent = MENU_ITEMS.find((item) => item.id === activeTab)?.component || TheJournal;

  return (
    <>
      {/* SVG Filter for rough brush edge */}
      <svg width="0" height="0" className="absolute hidden">
        <filter id="rough-brush" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Blurred, Desaturated Forest Background (simple) */}
      <div 
        className="fixed inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale blur-md opacity-30 scale-105"
        aria-hidden="true"
      />

      <main className="flex h-screen w-full relative z-10 overflow-hidden">
        
        {/* Left Sidebar (Strict 40%) */}
        <aside className="w-[40%] flex-shrink-0 h-full relative">
          {/* The Slanted, Brush-Stroked Red Background */}
          <div 
            className="absolute inset-0 bg-rdr-red" 
            style={{
              clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0% 100%)',
              filter: "url('#rough-brush')",
              transform: 'scale(1.05)', // Slightly scale to avoid filter clipping at the window edges
              transformOrigin: 'left center'
            }}
            aria-hidden="true" 
          />
          
          {/* Navigation Menu */}
          <nav className="relative z-10 h-full flex flex-col justify-center space-y-2 pl-12 lg:pl-24">
            {MENU_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={clsx(
                    "font-bebas text-left uppercase text-6xl lg:text-7xl xl:text-8xl transition-all duration-300 ease-out leading-none tracking-tight",
                    isActive
                      ? "text-white translate-x-6"
                      : "text-black hover:text-white hover:translate-x-3 opacity-95 hover:opacity-100"
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Right Content Area (Strict 60%) */}
        <section className="w-[60%] h-full flex items-center justify-center relative p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -50, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full max-w-3xl h-[80vh] overflow-y-auto pr-4"
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </>
  );
}
