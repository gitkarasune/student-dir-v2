// app/creators/[username]/page.tsx
"use client"

import React from "react";
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SiGithub, SiX, SiLinkedin } from 'react-icons/si';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { teamMembersConfig } from '../teamConfig';
import { PremiumBlur } from "@/components/premium-blur";

export default function CreatorProfilePage({ params }: { params: Promise<{ username: string }> }) {
    const { username } = React.use(params);
  const [member, setMember] = useState<(typeof teamMembersConfig[0] & { bio: string; name: string; avatar: string }) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const configMember = teamMembersConfig.find(m => m.username === username);
      if (!configMember) return;
      
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        setMember({
          ...configMember,
          name: data.name || configMember.username,
          avatar: data.avatar_url || "/images/default.png",
          bio: data.bio || "No bio provided",
        });
      } catch {
        setMember({
          ...configMember,
          name: configMember.username,
          avatar: "/images/default.png",
          bio: "No bio available",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Skeleton className="h-10 w-24 rounded-xl" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <Skeleton className="w-64 h-80 rounded-2xl" />
              </div>
              <div className="lg:w-2/3 space-y-6">
                <div>
                  <Skeleton className="h-8 w-64 mb-4 rounded-xl" />
                  <Skeleton className="h-6 w-48 mb-6 rounded-xl" />
                  <Skeleton className="h-24 w-full rounded-xl" />
                </div>
                <div>
                  <Skeleton className="h-6 w-32 mb-4 rounded-xl" />
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-8 w-24 rounded-full" />
                    <Skeleton className="h-8 w-24 rounded-full" />
                    <Skeleton className="h-8 w-24 rounded-full" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Skeleton className="h-10 w-32 rounded-xl" />
                  <Skeleton className="h-10 w-32 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Profile not found</h2>
          <Link href="/creators">
            <Button>Back to Creators</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/creators">
            <Button variant="outline">
              &larr; Back to Creators
            </Button>
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`flex flex-col lg:flex-row gap-8 items-center rounded-3xl p-8 bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-lg border border-white/30 dark:border-gray-700/50 shadow-2xl`}>
            <div className="lg:w-1/3">
              <div className={`w-64 h-80 rounded-2xl ${member.bgColor} flex items-center justify-center overflow-hidden shadow-2xl`}>
                <Avatar className="w-56 h-72">
                  <AvatarImage 
                    src={member.avatar} 
                    alt={member.name} 
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/default.png";
                    }}
                  />
                  <AvatarFallback className="text-4xl font-semibold">
                    {member.name.split(" ").map((n: string )=> n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {member.name}
                </h1>
                <p className="text-xl font-medium mb-4 text-slate-700 dark:text-slate-300">
                  {member.role}
                </p>
                <p className="leading-relaxed text-lg bg-white/70 dark:bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/30 dark:border-gray-700/50">
                  {member.bio}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Core Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill: string) => (
                    <Badge 
                      key={skill} 
                      className="px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 text-slate-800 dark:text-slate-200 hover:scale-105 transition-transform"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href={`mailto:${member.username}@gmail.com`}>
                  <Button 
                    variant="outline" 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </a>
                
                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all"
                  >
                    <SiGithub className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </a>
                
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all"
                  >
                    <SiLinkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all"
                  >
                    <SiX className="h-4 w-4 mr-2" />
                    X
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-lg border border-white/30 dark:border-gray-700/50 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects & Contributions
            </h2>
            
            <PremiumBlur>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item} 
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl border border-white/30 dark:border-gray-700/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center">
                      <SiGithub className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Project Title</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        Brief description of the project and contributions...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </PremiumBlur>
          </div>
        </div>
      </div>
    </div>
  );
}