"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Spotlight } from "@/components/ui/spotlight"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  MessageSquare,
  Search,
  Star,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Heart,
  Award,
} from "lucide-react"
import Squares from "@/components/square-bg"
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  // for form placeholders 
  const placeholders = [
    "Learn, collaborate, and grow",
    "Find your study group",
    "Connect with classmates",
    "Discover new opportunities",
    "Expand your academic network",
    "Join the PolyConnect community",
    "Start your journey with us",
    "Empower your academic experience",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  // for feaures
  const features = [
    {
      icon: Search,
      title: "Smart Student Search",
      description:
        "Find classmates instantly by name, department, interests, or academic year with our advanced search algorithms.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Rich Student Profiles",
      description:
        "Discover comprehensive profiles with academic details, interests, projects, and contact information.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageSquare,
      title: "Seamless Networking",
      description:
        "Connect instantly, join study groups, collaborate on projects, and build lasting academic relationships.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security. Control your privacy settings with ease.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Academic Growth",
      description: "Track your academic journey, showcase achievements, and discover opportunities for growth.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Globe,
      title: "Campus Community",
      description: "Stay connected with campus events, announcements, and build a stronger school community.",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  // for testimonas 
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      content:
        "PolyConnect helped me find study partners and collaborate on projects. It's been a game-changer for my academic life!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      role: "Engineering Student",
      content:
        "The networking features are incredible. I've connected with students from different departments and learned so much.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Aisha Patel",
      role: "Business Administration",
      content:
        "Finding classmates and forming study groups has never been easier. PolyConnect is essential for every student!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  // for the stat count of numbers and percentage
  const animatedStats = [
    { initial: 500, target: 5000, suffix: "+", label: "Active Students" },
    { initial: 10, target: 50, suffix: "+", label: "Departments" },
    { initial: 700, target: 1200, suffix: "+", label: "Study Groups" },
    { initial: 10, target: 98, suffix: "%", label: "Satisfaction Rate" },
  ];

  const [stats, setStats] = useState(animatedStats.map(stat => ({
    value: stat.initial,
    label: stat.label,
    suffix: stat.suffix
  })));

  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const duration = 1000; // 1 second animation

  useEffect(() => {
    const animateStats = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      const nextStats = animatedStats.map((stat) => {
        const currentValue = Math.floor(
          stat.initial + (stat.target - stat.initial) * progress
        );
        return {
          value: currentValue,
          label: stat.label,
          suffix: stat.suffix
        };
      });

      setStats(nextStats);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateStats);
      }
    };

    animationRef.current = requestAnimationFrame(animateStats);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          // Light mode: soft blue grid, Dark mode: soft blue/gray grid
          "[background-image:linear-gradient(to_right,#c7d2fe_1px,transparent_1px),linear-gradient(to_bottom,#c7d2fe_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)]"
  )}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 border-blue-200 hover:from-blue-200 hover:to-purple-200 py-2 ">
              <Zap className="w-4 h-4 mr-2" />
              Now Live at Kenule Benson Saro-Wiwa Polytechnic
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Connect with Students Like Never Before
            </h1>

            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />

            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              The ultimate platform for finding classmates, building study groups, and expanding your
              academic network at Kenule Benson Saro-Wiwa Polytechnic.
            </p>
            <div className="flex justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value} {stat.suffix}
                  </div>
                  <div className=" font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <Squares
            speed={0.5}
            squareSize={40}
            direction='up' // up, down, left, right, diagonal
            borderColor='#fff'
            hoverFillColor='#222'
          />
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 border-emerald-200 py-[6px]">
                <Star className="w-4 h-4 mr-2" />
                Powerful Features
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold mb-7">
                Everything You Need to Connect
              </h2>

              <div className="bg-gray-800/10 backdrop-blur-sm p-6 rounded-lg mb-8">
                <p className="text-xl max-w-3xl mx-auto">
                  We offers a comprehensive suite of features designed to enhance your networking experience and
                  academic success.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg backdrop-blur-sm hover:-translate-y-2 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white"
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(index === 0 || index === 1 || index === 2 || index == 3 || index === 4 || index === 5) ? (
                      // Gradient backdrop for the first card
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-300/10 via-blue-200/10 to-cyan-200/10 blur-md z-0" />
                        <div className="relative z-10">
                          <CardDescription className="leading-relaxed text-base">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                    ) : (
                      <CardDescription className="leading-relaxed text-base">
                        {feature.description}
                      </CardDescription>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Backdrop */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 md:w-[80%] w-[95%] h-[110%] bg-gradient-to-br from-purple-300/40 via-blue-200/40 to-cyan-200/40 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-cyan-900/40 rounded-3xl blur-2xl z-0"
          style={{ filter: "blur(60px)" }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 border-orange-200 py-[6px]">
              <Heart className="w-4 h-4 mr-2" />
              Student Love
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
              What Students Are Saying
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Join thousands of students who have transformed their academic experience with PolyConnect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  {(index === 0 || index === 1 || index === 2) ? (
                    // Gradient backdrop for the first card
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/40 via-blue-500/40 to-cyan-500/40 blur-md z-0" />
                      <div className="relative z-10">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-slate-700 mb-6 leading-relaxed italic">{testimonial.content}</p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold mr-4">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{testimonial.name}</div>
                            <div className="text-slate-600 text-sm">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Normal card for others
                    <>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-700 mb-6 leading-relaxed italic">{testimonial.content}</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold mr-4">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{testimonial.name}</div>
                          <div className="text-slate-600 text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white py-[7px] border-white/30 hover:bg-white/30">
              <Award className="w-4 h-4 mr-2" />
              Ready to Transform Your Academic Life?
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Join PolyConnect Today</h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
              Start building meaningful connections and take your academic journey to the next level. Join thousands of
              students already on PolyConnect.
            </p>

            {/* Email NewsLetter */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-3">
                <Input
                  placeholder="Join our Newsletter"
                  className="bg-white/90 border-white/30 text-white dark:placeholder:text-white placeholder:text-black placeholder:font-bold h-10"
                />
                <Button size={"lg"} className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">Enter</Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Buy Us A Coffee
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
