"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { useSubscription } from "@/context/subscription-context"
import Link from "next/link"

export default function PricingPage() {
  const { setSubscription } = useSubscription()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white">

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">Choose Your Plan</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="">
              Unlock Premium Features
            </span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto">
            Subscribe to access detailed student information and connect with your classmates at Kenule Benson Saro-Wiwa Polytechnic.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Basic Plan */}
          <Card className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950/20 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">Basic</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold">Free</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Access to basic student profiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Search and filter students</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                  <Check className="w-5 h-5" />
                  <span>View GPA and academic details</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                  <Check className="w-5 h-5" />
                  <span>Access to alumni network</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/directory">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan */}
          <Card className="bg-gradient-to-br from-purple-50/90 to-blue-50/90 dark:from-purple-900/30 dark:to-blue-900/30 border-0 relative shadow-2xl">
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1">
                <Star className="w-4 h-4 mr-1" />
                Popular
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">Premium</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold">$3</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>View GPA and academic details</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Access to extracurricular activities</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                  <Check className="w-5 h-5" />
                  <span>Access to alumni network</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" size={"lg"}
                onClick={() => setSubscription('premium')}
              >
                Subscribe Now
              </Button>
            </CardFooter>
          </Card>

          {/* Unlimited Plan */}
          <Card className="bg-gradient-to-br from-blue-50/90 to-cyan-50/90 dark:from-blue-900/30 dark:to-cyan-900/30 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">Unlimited</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold">Custom</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Full access to alumni network</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Custom features</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => setSubscription('unlimited')}
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-800/20">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
            Feature Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="py-3 px-4">Features</th>
                  <th className="py-3 px-4 text-center">Basic</th>
                  <th className="py-3 px-4 text-center">Premium</th>
                  <th className="py-3 px-4 text-center">Unlimited</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium">Student Profiles</td>
                  <td className="py-3 px-4 text-center">Basic</td>
                  <td className="py-3 px-4 text-center">Enhanced</td>
                  <td className="py-3 px-4 text-center">Full Access</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium">Academic Details</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-gray-400">Limited</span>
                  </td>
                  <td className="py-3 px-4 text-center">✓</td>
                  <td className="py-3 px-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium">Extracurricular Activities</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-gray-400">-</span>
                  </td>
                  <td className="py-3 px-4 text-center">✓</td>
                  <td className="py-3 px-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium">Alumni Network</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-gray-400">-</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-gray-400">Limited</span>
                  </td>
                  <td className="py-3 px-4 text-center">Full Access</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Priority Support</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-gray-400">-</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-gray-400">-</span>
                  </td>
                  <td className="py-3 px-4 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">How does the subscription work?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our subscriptions are billed monthly. You can cancel anytime and still access premium features until the end of your billing period.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Can I switch plans later?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, you can upgrade or downgrade your plan at any time. Your account will be prorated based on the changes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Is there a student discount?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! Students of Kenule Benson Saro-Wiwa Polytechnic receive a 20% discount on all plans. Contact us with your student ID for details.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We accept all major credit cards, bank transfers, and mobile money payments. All transactions are securely processed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Still have questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Our team is ready to help you choose the right plan for your needs.
          </p>
          <Button 
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
          >
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}