"use client"

import { AIChatbot } from '@/components/ai-chatbot';
import { Button } from '@/components/ui/button';
import { LampContainer } from '@/components/ui/creator-lamp';
import { MessageSquare, Users, BookOpen, Award } from "lucide-react" // Bot
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AIChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-12">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            PolyConnect AI Assistant
          </motion.h1>
        </LampContainer>

        <div className="max-w-5xl mx-auto mt-16 mb-6">
          <AIChatbot />
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            How PolyConnect AI Can Help You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Academic Support",
                description: "Get information about courses, departments, and academic resources.",
                color: "from-purple-500 to-indigo-500",
              },
              {
                icon: MessageSquare,
                title: "Campus Life",
                description: "Learn about events, clubs, and student activities on campus.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Users,
                title: "Administrative Help",
                description: "Answers about admissions, registration, fees, and policies.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Award,
                title: "Career Guidance",
                description: "Explore career paths, internships, and professional development.",
                color: "from-orange-500 to-red-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className={`bg-gradient-to-br ${feature.color} rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full backdrop-blur-sm">
                  <feature.icon className="h-12 w-12 mb-4 text-gray-700 dark:text-gray-300" />
                  <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl text-white shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-6 text-purple-100">
            Join thousands of students already using PolyConnect AI to enhance their academic journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Explore PolyConnect
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Learn More
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}