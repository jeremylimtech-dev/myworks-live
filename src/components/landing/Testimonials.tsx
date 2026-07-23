"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Freelance Designer",
    content: "MyWorks.live completely changed how I get clients. I set up my portfolio in 10 minutes and it looks like I spent thousands on a developer.",
    avatar: "SJ"
  },
  {
    name: "David Chen",
    role: "Software Engineer",
    content: "Finally, a portfolio builder that doesn't feel clunky. The minimal themes are exactly what I was looking for to showcase my GitHub projects.",
    avatar: "DC"
  },
  {
    name: "Emily Rodriguez",
    role: "Photographer",
    content: "The image gallery features are beautiful. Having my own myworks.live/emily URL makes it so easy to share my work on Instagram.",
    avatar: "ER"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Loved by creators everywhere</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Join thousands of professionals who have already claimed their space.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border p-8 rounded-2xl"
            >
              <div className="flex gap-1 mb-4 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 line-clamp-4">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
