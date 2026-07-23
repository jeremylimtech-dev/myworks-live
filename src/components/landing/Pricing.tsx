"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for students and beginners.",
    features: ["One template", "Basic customization", "Small storage (50MB)", "Standard Support"],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$5",
    period: "/month",
    description: "For freelancers and creatives.",
    features: ["Everything in Starter", "Custom themes", "Unlimited projects", "Basic Analytics", "Remove Branding"],
    buttonText: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Business",
    price: "$15",
    period: "/month",
    description: "For agencies and teams.",
    features: ["Everything in Professional", "Advanced Analytics", "Custom CSS", "Priority Support", "Large Storage (5GB)"],
    buttonText: "Get Business",
    popular: false,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Start for free, upgrade when you need more power.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular ? 'border-primary shadow-xl shadow-primary/10' : 'border-border bg-background'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm min-h-[40px]">{plan.description}</p>
              </div>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/login" 
                className={`w-full py-3 rounded-full text-center font-medium transition-colors ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-foreground hover:bg-muted/80'}`}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
