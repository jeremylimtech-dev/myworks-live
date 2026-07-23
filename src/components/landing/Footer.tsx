"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Layout } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <Layout size={18} />
              </div>
              MyWorks.live
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The easiest way to build a professional portfolio. No coding, no hosting, just create.
            </p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#features" className="hover:text-foreground">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-foreground">Pricing</Link></li>
                <li><Link href="#templates" className="hover:text-foreground">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">About</Link></li>
                <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} MyWorks.live. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
