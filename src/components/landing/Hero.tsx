"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 text-center max-w-5xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
      >
        <Globe size={16} />
        <span>Claim your username today</span>
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6"
      >
        Create Your Personal <br />
        <span className="text-primary">Portfolio in Minutes.</span>
      </motion.h1>

      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-muted-foreground mb-10 max-w-2xl"
      >
        No coding. No hosting. No domain required. <br />
        Get your own beautiful page at <span className="font-mono font-medium text-foreground">myworks.live/yourname</span>
      </motion.p>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <Link href="/login" className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
          Create My Portfolio
          <ArrowRight size={20} />
        </Link>
        <Link href="#demo" className="px-8 py-4 rounded-full text-lg font-medium border border-border hover:bg-muted transition-colors">
          View Demo
        </Link>
      </motion.div>
    </section>
  );
}
