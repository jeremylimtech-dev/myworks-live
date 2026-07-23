"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to buy a domain name?",
    answer: "No! Every user gets a free, professional URL under myworks.live (e.g., myworks.live/yourname)."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your paid subscription at any time from your dashboard settings."
  },
  {
    question: "Do I need to know how to code?",
    answer: "Not at all. Our intuitive visual builder lets you customize everything with just a few clicks."
  },
  {
    question: "Can I connect a custom domain later?",
    answer: "Yes! Our Professional and Business plans allow you to connect your own custom domain if you prefer."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about MyWorks.live</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-medium"
              >
                {faq.question}
                <ChevronDown 
                  size={20} 
                  className={`text-muted-foreground transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
