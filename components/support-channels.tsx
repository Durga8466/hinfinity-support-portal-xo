"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export function SupportChannels() {
  const channels = [
    {
      title: "Live Chat",
      icon: MessageCircle,
      shortDesc: "Instant support",
      description: "Get immediate help from our support team",
      buttonText: "Start Chat",
      color: "bg-blue-500",
    },
    {
      title: "Phone Support",
      icon: Phone,
      shortDesc: "Direct conversation",
      description: "Speak directly with our experts",
      buttonText: "Call Now",
      color: "bg-orange-500",
    },
    {
      title: "Email Support",
      icon: Mail,
      shortDesc: "Detailed assistance",
      description: "Comprehensive support via email",
      buttonText: "Send Email",
      color: "bg-yellow-500",
    },
    {
      title: "24/7 Support",
      icon: Clock,
      shortDesc: "Always available",
      description: "Round-the-clock global support",
      buttonText: "Learn More",
      color: "bg-green-500",
    },
  ]

  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Label */}
        <div className="flex justify-center mb-8">
          <Badge
            variant="outline"
            className="text-blue-600 border-blue-300 hover:scale-105 transition-transform cursor-pointer px-4 py-2"
          >
            Multiple Ways to Get Help
          </Badge>
        </div>

        {/* Heading and Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Channels</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the support channel that works best for you. Our global team is available 24/7 to ensure your
            business never stops.
          </p>
        </div>

        {/* Support Channel Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div
                  className={`w-16 h-16 ${channel.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                >
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{channel.title}</CardTitle>
                <p className="text-lg font-medium text-gray-700">{channel.shortDesc}</p>
                <p className="text-gray-600">{channel.description}</p>
              </CardHeader>

              <CardContent>
                <Link href="/signin">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">{channel.buttonText}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
