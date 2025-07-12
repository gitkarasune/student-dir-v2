
export interface TeamMemberConfig {
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
}

export const teamMembersConfig: TeamMemberConfig[] = [
  {
    id: 1,
    username: "gitKarasune",
    role: "Web and Full-Stack Frontend Engineer | Full Stack Developer",
    bgColor: "bg-rose-200",
    skills: ["Frontend Engineer", "Full Stack Development", "Database Design"],
    social: {
      github: "https://github.com/gitKarasune",
      linkedin: "https://www.linkedin.com/in/sune-kara",
      twitter: "https://x.com/_kendev",
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
      linkedin: "https://www.linkedin.com/in/martin-chikwuelum-0036052a1/",
      twitter: "https://x.com/Martin543216?t=mYRrq18PLqCjxXmqCOdpBg&s=09",
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
      linkedin: "https://linkedin.com/in/charles-chukwuemeka-b2b9a2270",
      twitter: "https://twitter.com/Zed_Priest",
    },
  },
  // ... other members ...
];