import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, UserCheck, Database, Mail } from "lucide-react"

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly, including your name, email address, student ID, department, academic year, and profile information when you create an account.",
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect information about how you use PolyConnect, including pages visited, features used, and interaction patterns to improve our service.",
        },
        {
          subtitle: "Device Information",
          text: "We may collect information about the device you use to access PolyConnect, including IP address, browser type, and operating system.",
        },
      ],
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: UserCheck,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve PolyConnect's features, including student search, profile matching, and networking capabilities.",
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you important updates about your account, new features, and relevant academic opportunities.",
        },
        {
          subtitle: "Safety & Security",
          text: "We use your information to verify student identity, prevent fraud, and maintain a safe environment for all users.",
        },
      ],
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: Eye,
      content: [
        {
          subtitle: "With Other Students",
          text: "Your profile information is visible to other verified students at Kenule Benson Saro-Wiwa Polytechnic based on your privacy settings.",
        },
        {
          subtitle: "With the Institution",
          text: "We may share aggregated, non-personal information with the polytechnic administration for educational and administrative purposes.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law or to protect the rights, property, or safety of PolyConnect, our users, or others.",
        },
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: [
        {
          subtitle: "Encryption",
          text: "All data transmission is encrypted using industry-standard SSL/TLS protocols to protect your information in transit.",
        },
        {
          subtitle: "Access Controls",
          text: "We implement strict access controls and authentication measures to ensure only authorized personnel can access user data.",
        },
        {
          subtitle: "Regular Audits",
          text: "We conduct regular security audits and assessments to identify and address potential vulnerabilities.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen ">

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 ">
              <Shield className="w-4 h-4 mr-2" />
              Your Privacy Matters
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg leading-relaxed">
              We&apos;re committed to protecting your privacy and being transparent about how we collect, use, and protect
              your personal information.
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
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className=" leading-relaxed">
                At PolyConnect, we respect your privacy and are committed to protecting your personal data. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you use our student
                networking platform at Kenule Benson Saro-Wiwa Polytechnic.
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
                <CardContent className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="font-semibold mb-2">{item.subtitle}</h4>
                      <p className=" leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-blue-600" />
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="">• Access your personal data</p>
                <p className="">• Correct inaccurate information</p>
                <p className="">• Delete your account and data</p>
                <p className="">• Export your data</p>
                <p className="">• Control privacy settings</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-purple-600" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className=" mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p>Email: privacy@polyconnect.edu.ng</p>
                  <p>Phone: +234 (0) 123 456 7890</p>
                  <p>Address: Kenule Benson Saro-Wiwa Polytechnic, Rivers State, Nigeria</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer CTA */}
          <Card className="mt-12 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h3>
              <p className="mb-6">
                We&apos;re here to help. Contact our privacy team if you need clarification on any aspect of our privacy
                practices.
              </p>
              <Button className="">Contact Privacy Team</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
