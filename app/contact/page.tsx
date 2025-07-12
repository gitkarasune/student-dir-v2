import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, GraduationCap } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white">

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Mail className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Get in Touch</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="">
              Contact Us
            </span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto">
            Have questions about the Student Directory? Need technical support? We&apos;re here to help you connect with your
            fellow students.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-white/80 to-purple-50/80 dark:from-gray-900/80 dark:to-purple-950/20 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-purple-500" />
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input
                      placeholder="Enter your first name"
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <Input
                      placeholder="Enter your last name"
                      className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Student ID (Optional)
                  </label>
                  <Input
                    placeholder="Enter your student ID"
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <Input
                    placeholder="What is this regarding?"
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={12}
                    className="bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                  />
                </div>

                <Button size={"lg"} className="w-full border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-950/20 dark:to-cyan-950/20 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  Email Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">For general inquiries and technical support:</p>
                <a href="mailto:support@studentdirectory.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  support@studentdirectory.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-950/20 dark:to-pink-950/20 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-500" />
                  Phone Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">Call us during business hours:</p>
                <p className="text-purple-600 font-medium mb-2">+234 803 123 4567</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50/80 to-blue-50/80 dark:from-cyan-950/20 dark:to-blue-950/20 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-500" />
                  Visit Us
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">Find us on campus:</p>
                <address className="text-cyan-600 font-medium not-italic">
                  Kenule Benson Saro-Wiwa Polytechnic
                  <br />
                  Student Affairs Office
                  <br />
                  Bori, Rivers State, Nigeria
                </address>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 dark:from-green-950/20 dark:to-emerald-950/20 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 border-0 px-4 py-2 mb-4"
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Quick Response
                </Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
