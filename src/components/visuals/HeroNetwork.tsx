"use client";

import React from "react";
import { motion } from "framer-motion";
import { Laptop, ShoppingCart, Smartphone, Cpu, Globe, Database } from "lucide-react";

const HeroNetwork = () => {
  const nodes = [
    { id: 1, x: 20, y: 25, icon: <Laptop className="w-7 h-7 md:w-9 md:h-9" />, label: "Websites" },
    { id: 2, x: 70, y: 20, icon: <ShoppingCart className="w-7 h-7 md:w-9 md:h-9" />, label: "Ecommerce" },
    { id: 3, x: 85, y: 60, icon: <Smartphone className="w-7 h-7 md:w-9 md:h-9" />, label: "Mobile Apps" },
    { id: 4, x: 50, y: 55, icon: <Cpu className="w-10 h-10 md:w-14 md:h-14 text-secondary" />, label: "Core Solution", main: true },
    { id: 5, x: 15, y: 75, icon: <Globe className="w-7 h-7 md:w-9 md:h-9" />, label: "Global Reach" },
    { id: 6, x: 65, y: 85, icon: <Database className="w-7 h-7 md:w-9 md:h-9" />, label: "Big Data" },
  ];

  const connections = [
    { from: 1, to: 4, delay: 0 },
    { from: 2, to: 4, delay: 0.5 },
    { from: 3, to: 4, delay: 1 },
    { from: 5, to: 1, delay: 1.5 },
    { from: 6, to: 4, delay: 2 },
    { from: 6, to: 3, delay: 2.5 },
  ];

  const getPos = (id: number) => {
    const n = nodes.find(node => node.id === id);
    return n ? { x: n.x, y: n.y } : { x: 0, y: 0 };
  };

  return (
    <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center overflow-visible select-none">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 rounded-full blur-[120px] -z-10"></div>

      <svg 
        className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {connections.map((conn, i) => {
          const start = getPos(conn.from);
          const end = getPos(conn.to);
          return (
            <React.Fragment key={i}>
              {/* Static faint line */}
              <line 
                x1={start.x} y1={start.y} x2={end.x} y2={end.y} 
                stroke="#4b5563" 
                strokeWidth="0.3" 
                opacity="0.3"
              />
              {/* Animated pulse */}
              <motion.line
                x1={start.x} y1={start.y} x2={end.x} y2={end.y}
                stroke="var(--secondary)"
                strokeWidth="0.4"
                strokeDasharray="1, 20"
                initial={{ strokeDashoffset: 21 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: conn.delay
                }}
                style={{ opacity: 0.6 }}
              />
            </React.Fragment>
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute z-20 cursor-default"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: node.id * 0.1 }}
        >
          <motion.div 
            className="relative -translate-x-1/2 -translate-y-1/2 group"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 2, 0]
            }}
            transition={{
              duration: 5 + node.id,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* The main sphere */}
            <div className={`
              backdrop-blur-xl border-2 rounded-full flex items-center justify-center transition-all duration-500
              ${node.main 
                ? "w-24 h-24 md:w-40 md:h-40 bg-secondary/15 border-secondary shadow-[0_0_50px_rgba(37,99,235,0.4)]" 
                : "w-16 h-16 md:w-22 md:h-22 bg-card/80 border-border group-hover:border-secondary/50 group-hover:bg-secondary/5 group-hover:shadow-lg"}
            `}>
              <div className={node.main ? "text-secondary" : "text-foreground group-hover:text-secondary"}>
                {node.icon}
              </div>
            </div>

            {/* Label Overlay */}
            <div className="absolute top-[110%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1">
              <span className="bg-card text-foreground text-[10px] md:text-xs font-black px-2 py-1 rounded-md border border-border shadow-soft uppercase tracking-tighter whitespace-nowrap">
                {node.label}
              </span>
            </div>

            {/* Orbital Rings */}
            {node.main && (
              <>
                <div className="absolute inset-[-15px] border border-secondary/20 rounded-full animate-[spin_12s_linear_infinite] opacity-50"></div>
                <div className="absolute inset-[-25px] border border-accent/10 rounded-full animate-[spin_20s_linear_infinite_reverse] opacity-30"></div>
              </>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroNetwork;
