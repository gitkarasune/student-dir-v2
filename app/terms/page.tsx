import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Shield, AlertTriangle, Scale, Gavel } from "lucide-react"

export default function TermsOfService() {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: FileText,
      content:
        "By accessing and using PolyConnect, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    },
    {
      id: "eligibility",
      title: "Eligibility",
      icon: Users,
      content:
        "PolyConnect is exclusively available to current students, faculty, and staff of Kenule Benson Saro-Wiwa Polytechnic. You must provide accurate and complete registration information, including a valid institutional email address.",
    },
    {
      id: "user-conduct",
      title: "User Conduct",
      icon: Shield,
      content:
        "You agree to use PolyConnect responsibly and respectfully. Prohibited activities include harassment, sharing inappropriate content, impersonation, spam, or any activity that violates institutional policies or applicable laws.",
    },
    {
      id: "content-policy",
      title: "Content Policy",
      icon: AlertTriangle,
      content:
        "You are responsible for all content you post on PolyConnect. Content must be appropriate for an academic environment. We reserve the right to remove content that violates our community guidelines or terms of service.",
    },
    {
      id: "privacy-data",
      title: "Privacy & Data",
      icon: Scale,
      content:
        "Your use of PolyConnect is also governed by our Privacy Policy. We collect and use your information as described in our Privacy Policy to provide and improve our services.",
    },
    {
      id: "termination",
      title: "Account Termination",
      icon: Gavel,
      content:
        "We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.",
    },
  ]

  const guidelines = [
    "Respect other students and maintain professional communication",
    "Protect your account credentials and report suspicious activity",
    "Use accurate information in your profile and interactions",
    "Respect intellectual property rights and academic integrity",
    "Report inappropriate behavior or content to administrators",
    "Follow all institutional policies and local laws",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white">

      {/* Hero Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 ">
              <Scale className="w-4 h-4 mr-2" />
              Legal Agreement
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
              Terms of Service
            </h1>
            <p className="text-lg leading-relaxed">
              Please read these terms carefully before using PolyConnect. These terms govern your use of our platform
              and services.
            </p>
            <p className="text-sm mt-4">Last updated: December 7, 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <Card className="mb-12 border-0 shadow-lg ">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Agreement Overview</h2>
              <p className=" leading-relaxed">
                These Terms of Service <b>Terms</b> govern your use of PolyConnect, a student networking platform designed
                for the academic community of Kenule Benson Saro-Wiwa Polytechnic. By using our service, you agree to
                these terms.
              </p>
            </CardContent>
          </Card>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <Card key={section.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Community Guidelines */}
          <Card className="mt-12 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Users className="h-6 w-6" />
                Community Guidelines
              </CardTitle>
              <CardDescription>
                To maintain a positive and productive environment for all users, please follow these guidelines:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="">{guideline}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="mt-12 border-l-4 border-l-orange-500 ">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Important Legal Notice</h3>
                  <p className=" text-sm leading-relaxed">
                    These terms constitute a legally binding agreement. We may update these terms from time to time, and
                    continued use of PolyConnect constitutes acceptance of any changes. For questions about these terms,
                    please contact our legal team.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="mt-12 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
              <p className="mb-6 ">
                Our legal team is available to help clarify any aspects of our Terms of Service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="">Contact Legal Team</Button>
                <Button variant="outline" className="border-white ">
                  View Privacy Policy
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
