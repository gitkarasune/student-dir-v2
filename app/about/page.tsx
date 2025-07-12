import { Card, CardContent } from "@/components/ui/card"
import { Search, User, MessageCircle, GraduationCap, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">

      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <GraduationCap className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">About the Student Directory</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About the Student Directory
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The Student Directory app at Kenule Benson Saro-Wiwa Polytechnic is designed to enhance communication and
            connectivity within our school community. It serves as a comprehensive platform for students to easily find
            and connect with their peers, fostering collaboration and support.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-cyan-950/20 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Heart className="w-6 h-6 text-pink-500" />
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our mission is to create a more connected and supportive campus environment by providing students with a
              user-friendly tool to access contact information, academic interests, and extracurricular activities of
              their fellow students. We aim to facilitate networking, study groups, and peer support, ultimately
              enriching the overall student experience.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Key Features
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Advanced Search</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Quickly search for students by name, department, or interests.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Student Profiles</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Access detailed profiles including contact information, academic background, and interests.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-cyan-950/20 dark:to-purple-950/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Direct Messaging</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Connect with peers directly through the app for study groups or collaborative projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
      </div>
    </div>
  )
}