"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MessageCircle, ArrowRight, Star, Globe, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Global Services Badge */}
        <div className="flex justify-center mb-8">
          <Badge
            variant="outline"
            className="text-blue-600 border-blue-300 hover:scale-105 transition-transform cursor-pointer px-4 py-2 text-sm"
          >
            <Clock className="w-4 h-4 mr-2" />
            24/7 – Global Services
          </Badge>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-black">Expert Support for</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Business Growth
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get comprehensive support for SLATE products (HRMS, CRM, AGRI-CROP) and professional services. Our global
            team ensures your business operations run smoothly 24/7.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
          >
            Get Instant Support
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
          >
            Live Chat
            <MessageCircle className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-gray-600">Rating</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">Global</div>
              <div className="text-gray-600">Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
