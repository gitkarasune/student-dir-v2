import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Users, Shield, AlertTriangle, Scale, Gavel } from "lucide-react"
import Link from "next/link"

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PolyConnect
              </span>
            </div>
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border-emerald-200">
              <Scale className="w-4 h-4 mr-2" />
              Legal Agreement
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-900 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Please read these terms carefully before using PolyConnect. These terms govern your use of our platform
              and services.
            </p>
            <p className="text-sm text-slate-500 mt-4">Last updated: December 7, 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <Card className="mb-12 border-0 shadow-lg bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Agreement Overview</h2>
              <p className="text-slate-700 leading-relaxed">
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-slate-900">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Community Guidelines */}
          <Card className="mt-12 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900 flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600" />
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
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">{guideline}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="mt-12 border-l-4 border-l-orange-500 bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-900 mb-2">Important Legal Notice</h3>
                  <p className="text-orange-800 text-sm leading-relaxed">
                    These terms constitute a legally binding agreement. We may update these terms from time to time, and
                    continued use of PolyConnect constitutes acceptance of any changes. For questions about these terms,
                    please contact our legal team.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
              <p className="mb-6 text-emerald-100">
                Our legal team is available to help clarify any aspects of our Terms of Service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-emerald-600 hover:bg-emerald-50">Contact Legal Team</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
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
