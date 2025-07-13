"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Users, BookOpen, Wifi, Award, CreditCard, Smartphone, Building, Star } from "lucide-react" 
import { useState } from "react"

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(25)
  const [customAmount, setCustomAmount] = useState("")
  const [donorName, setDonorName] = useState("")
  const [donorEmail, setDonorEmail] = useState("")
  const [message, setMessage] = useState("")

  const donationAmounts = [10, 25, 50, 100, 250, 500]

  const impactAreas = [
    {
      icon: BookOpen,
      title: "Academic Resources",
      description: "Fund digital libraries, research tools, and educational content for students",
      gradient: "from-blue-500 to-cyan-500",
      raised: 15420,
      goal: 25000,
    },
    {
      icon: Wifi,
      title: "Technology Infrastructure",
      description: "Improve server capacity, security, and platform reliability",
      gradient: "from-purple-500 to-pink-500",
      raised: 8750,
      goal: 15000,
    },
    {
      icon: Users,
      title: "Student Support",
      description: "Provide scholarships and support for underprivileged students",
      gradient: "from-emerald-500 to-teal-500",
      raised: 12300,
      goal: 20000,
    },
    {
      icon: Award,
      title: "Innovation Programs",
      description: "Support hackathons, competitions, and innovation initiatives",
      gradient: "from-orange-500 to-red-500",
      raised: 6800,
      goal: 12000,
    },
  ]

  const paymentMethods = [
    { icon: CreditCard, name: "Credit/Debit Card", description: "Visa, Mastercard, Verve" },
    { icon: Smartphone, name: "Mobile Money", description: "MTN, Airtel, Glo, 9mobile" },
    { icon: Building, name: "Bank Transfer", description: "Direct bank transfer" },
  ]

  const testimonials = [
    {
      name: "Dr. Adaora Okafor",
      role: "Alumni, Class of 2018",
      content:
        "PolyConnect transformed my academic experience. I'm proud to give back to help current students succeed.",
      amount: "$500",
    },
    {
      name: "Eng. Chidi Nwankwo",
      role: "Industry Partner",
      content:
        "Supporting education technology is investing in Nigeria's future. PolyConnect is making a real difference.",
      amount: "$250",
    },
    {
      name: "Prof. Amina Hassan",
      role: "Faculty Member",
      content: "Seeing students connect and collaborate through this platform is incredible. Every donation counts.",
      amount: "$100",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white">     

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 border-rose-200">
              <Heart className="w-4 h-4 mr-2" />
              Support Our Mission
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
              Help Us Connect More Students
            </h1>
            <p className="text-lg leading-relaxed mb-8">
              Your donation helps us maintain and improve PolyConnect, ensuring every student at Kenule Benson Saro-Wiwa
              Polytechnic can access quality networking and educational resources.
            </p>
            <div className="flex flex-col justify-center">
              <Button
                size="xl"
                className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-xl"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Where Your Donation Goes</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Every donation directly supports our mission to enhance student connectivity and academic success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-r ${area.gradient} flex items-center justify-center`}
                    >
                      <area.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      <CardDescription className="">{area.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-bold">
                        ${area.raised.toLocaleString()} / ${area.goal.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-[4px]">
                      <div
                        className={`bg-gradient-to-r ${area.gradient} h-[4px] rounded-full transition-all duration-500`}
                        style={{ width: `${(area.raised / area.goal) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm">{Math.round((area.raised / area.goal) * 100)}% funded</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Make a Donation</h2>
              <p className="text-lg">Choose your donation amount and help us continue our mission.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Donation Amount */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Select Amount</CardTitle>
                  <CardDescription>Choose a preset amount or enter a custom donation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    {donationAmounts.map((amount) => (
                      <Button
                        size={"xl"}
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className={selectedAmount === amount ? "bg-gradient-to-r from-blue-600 to-purple-600 font-bold" : ""}
                        onClick={() => {
                          setSelectedAmount(amount)
                          setCustomAmount("")
                        }}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Custom Amount</label>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setSelectedAmount(0)
                      }}
                      className="text-lg h-14"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Donor Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Donor Information</CardTitle>
                  <CardDescription>Help us recognize your generous contribution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      placeholder="Enter your full name"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="h-14"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Email Address</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="h-14"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Message (Optional)</label>
                    <Textarea
                      placeholder="Leave a message for the community"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={10}
                      className="resize-none"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Methods */}
            <Card className="mt-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Payment Method</CardTitle>
                <CardDescription>Choose your preferred payment option</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {paymentMethods.map((method, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-center gap-3 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                    >
                      <method.icon className="h-8 w-8 text-blue-600" />
                      <div className="text-center">
                        <div className="font-semibold">{method.name}</div>
                        <div className="text-sm">{method.description}</div>
                      </div>
                    </Button>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl text-lg py-4"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate ${customAmount || selectedAmount}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Donors Say</h2>
            <p className="text-xl">Join a community of supporters making a difference in education.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <p className=" mb-4 font-bold italic">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm">{testimonial.role}</div>
                    </div>
                    <Badge className="rounded-full w-16 h-10">
                      {testimonial.amount}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Donor Recognition</h2>
            <p className="text-lg text-blue-100 mb-8">
              We believe in recognizing the generous individuals and organizations that make PolyConnect possible.
            </p>
            <div className="grid md:grid-cols-3 mb-10 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-xl font-bold mb-2">Platinum Donors</h3>
                  <p className="text-blue-100">$500+ donations</p>
                  <p className="text-sm text-blue-200 mt-2">Featured on our website and annual report</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-xl font-bold mb-2">Gold Donors</h3>
                  <p className="text-blue-100">$100+ donations</p>
                  <p className="text-sm text-blue-200 mt-2">Listed in our donor hall of fame</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-red-400" />
                  <h3 className="text-xl font-bold mb-2">Community Supporters</h3>
                  <p className="text-blue-100">All donations</p>
                  <p className="text-sm text-blue-200 mt-2">Thank you message and updates</p>
                </CardContent>
              </Card>
            </div>
            <p className=" mb-8 max-w-2xl mx-auto">
              Thank you for considering a donation to PolyConnect. Together, we&apos;re building a stronger academic
              community at Kenule Benson Saro-Wiwa Polytechnic.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
