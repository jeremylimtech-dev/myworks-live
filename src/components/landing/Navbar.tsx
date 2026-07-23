"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layout } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <Layout size={18} />
          </div>
          MyWorks.live
        </Link>
        <div className="flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Log in
          </Link>
          <Link href="/login" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
            Start Free
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
