"use client";

import { motion } from "framer-motion";
import { Link2, LayoutTemplate, Image, FileText, Settings, BarChart, Smartphone, Palette } from "lucide-react";

const features = [
  { icon: Link2, title: "Custom URL", description: "Claim your own myworks.live/username instantly." },
  { icon: LayoutTemplate, title: "Drag & Drop", description: "Build your site easily with our intuitive builder." },
  { icon: Palette, title: "Portfolio Templates", description: "Start with stunning designer-made templates." },
  { icon: FileText, title: "Resume Upload", description: "Host and display your resume seamlessly." },
  { icon: Image, title: "Project Gallery", description: "Showcase your work with high-quality media." },
  { icon: Settings, title: "Custom Colors", description: "Match your brand with full color control." },
  { icon: BarChart, title: "Analytics", description: "Track your visitors and see where they come from." },
  { icon: Smartphone, title: "Mobile Responsive", description: "Looks perfect on every device, automatically." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to stand out</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We've built all the tools required to create a professional online presence without the hassle of traditional web hosting.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
