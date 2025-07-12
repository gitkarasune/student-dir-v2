"use client"

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LampContainer } from "@/components/ui/creator-lamp"
import { Mail } from "lucide-react"
import { Skeleton } from '@/components/ui/skeleton';
import { SiGithub, SiX, SiLinkedin } from 'react-icons/si'
import Link from 'next/link';

// Define the team member structure
interface TeamMember {
  id: number;
  username: string;
  role: string;
  description?: string;
  bgColor: string;
  skills: string[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  name?: string;
  avatar?: string;
}


// Define team members with GitHub usernames
const teamMembersConfig: TeamMember[] = [
  {
    id: 1,
    username: "gitKarasune",  // Replace with actual GitHub username
    role: "Web and Full-Stack Frontend Engineer | Full Stack Developer",
    bgColor: "bg-rose-200",
    skills: ["Frontend Engineer", "Full Stack Development", "Database Design"],
    social: {
      github: "https://github.com/gitKarasune",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    username: "marcdev001",  // Replace with actual GitHub username
    role: "Full-Stack Developer | Frontend Developer",
    bgColor: "bg-emerald-200",
    skills: ["Full-Stack Development", "Frontend Engineer", "Prototyping"],
    social: {
      github: "https://github.com/marcdev001",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    username: "KingZedPriest",  // Replace with actual GitHub username
    role: "Backend Developer | Full Stack Developer | DevOps Engineer",
    bgColor: "bg-amber-200",
    skills: ["Backend Development", "API Development", "Frontend Engineer"],
    social: {
      github: "https://github.com/KingZedPriest",
      linkedin: "#",
      twitter: "#",
    },
  },
];

export default function CreatorPage() {

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const membersWithData = await Promise.all(
          teamMembersConfig.map(async (member) => {
            try {
              const response = await fetch(
                `https://api.github.com/users/${member.username}`
              );

              if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
              }

              const data = await response.json();

              return {
                ...member,
                name: data.name || member.username,
                avatar: data.avatar_url || "/images/default.png",
                description: data.bio || "No bio provided on GitHub.",
              };
            } catch (err) {
              console.error(`Error fetching data for ${member.username}:`, err);
              return {
                ...member,
                name: member.username,
                avatar: "/images/default.png",
                description: "No bio provided.",
              };
            }
          })
        );

        setTeamMembers(membersWithData);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch team data:", err);
        setError("Failed to load team information. Please try again later.");
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white flex items-center justify-center">
        <main className="container mx-auto px-4 py-12 w-full">
          <div className="mb-12 text-center">
            <Skeleton className="mx-auto h-10 w-72 mb-4 rounded-lg" />
            <Skeleton className="mx-auto h-6 w-96 rounded-lg" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/70 shadow-lg flex flex-col items-center">
                <Skeleton className="h-32 w-32 rounded-full mb-4" />
                <Skeleton className="h-6 w-32 mb-2 rounded" />
                <Skeleton className="h-4 w-40 mb-4 rounded" />
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-5 w-16 rounded" />
                  <Skeleton className="h-5 w-16 rounded" />
                </div>
                <div className="flex gap-3">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white flex items-center justify-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <LampContainer>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Creators</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Meet the talented team behind the student directory application that connects and empowers our academic
            community.
          </p>
        </LampContainer>

        {/* Team Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer">
                <Link href={`/creators/${member.username}`}>
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-32 h-32 rounded-full ${member.bgColor} mx-auto mb-4 flex items-center justify-center overflow-hidden`}
                    >
                      <Avatar className="w-28 h-28">
                        <AvatarImage
                          src={member.avatar}
                          alt={member.name || member.username}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/default.png";
                          }}
                        />
                        <AvatarFallback className="text-2xl font-semibold">
                          {member.name
                            ? member.name.split(" ").map((n) => n[0]).join("")
                            : member.username.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-lg font-medium">{member.role}</CardDescription>
                  </CardHeader>
                </Link>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-3">
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <SiGithub className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <SiLinkedin className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <SiX className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Individual Profiles */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Individual Profiles</h2>
          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="lg:w-1/3">
                  <div
                    className={`w-64 h-80 rounded-2xl ${member.bgColor} flex items-center justify-center overflow-hidden shadow-2xl`}
                  >
                    <Avatar className="w-56 h-72">
                      <AvatarImage
                        src={member.avatar}
                        alt={member.name || member.username}
                        className="object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/default.png";
                        }}
                      />
                      <AvatarFallback className="text-4xl font-semibold">
                        {member.name
                          ? member.name.split(" ").map((n) => n[0]).join("")
                          : member.username.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="lg:w-2/3 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{member.name || member.username}</h3>
                    <p className="text-lg font-medium mb-4">{member.role}</p>
                    <p className=" leading-relaxed text-lg">{member.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Core Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a href={`mailto:${member.username}@gmail.com`}>
                      <Button variant="outline" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                    </a>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <SiLinkedin className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Call to Action */}
        <section className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-slate-900 to-slate-700 text-white border-0">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Want to Connect with Our Team?</h2>
              <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
                Have questions about the project or interested in collaboration? We&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Mail className="h-5 w-5 mr-2" />
                  Get in Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  View Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

    </div>
  )
}