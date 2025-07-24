"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowLeft, Users, Building2, Sprout, Zap } from "lucide-react"

export function ProductSuite() {
  const products = [
    {
      name: "MCP",
      title: "Master Control Panel",
      icon: Zap,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      features: ["Centralized Dashboard", "Real-time Analytics", "System Integration", "Performance Monitoring"],
      setupTime: "2 hours",
      training: "Included",
    },
    {
      name: "HRMS",
      title: "Human Resource Management",
      icon: Users,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      features: ["Employee Management", "Payroll Processing", "Attendance Tracking", "Performance Reviews"],
      setupTime: "4 hours",
      training: "Included",
    },
    {
      name: "CRM",
      title: "Customer Relationship Management",
      icon: Building2,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      features: ["Lead Management", "Sales Pipeline", "Customer Support", "Analytics & Reports"],
      setupTime: "3 hours",
      training: "Included",
    },
    {
      name: "CROP",
      title: "Comprehensive Resource Operations",
      icon: Sprout,
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      features: ["Resource Planning", "Inventory Management", "Supply Chain", "Quality Control"],
      setupTime: "5 hours",
      training: "Included",
    },
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Label */}
        <div className="flex justify-center mb-8">
          <Badge
            variant="outline"
            className="text-blue-600 border-blue-300 hover:scale-105 transition-transform cursor-pointer px-4 py-2"
          >
            SLATE Product Suite
          </Badge>
        </div>

        {/* Heading and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Integrated Business Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive SLATE product suite. Seamlessly integrated
            solutions designed for modern enterprises.
          </p>
        </div>

        {/* Product Image Placeholder */}
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-2xl h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-600">Integrated Business Dashboard</p>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Real-time Data Synchronization",
              "Advanced Analytics & Reporting",
              "Mobile-First Design",
              "Enterprise Security",
              "API Integration",
              "Cloud-Based Infrastructure",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Start Free Trial Button */}
        <div className="text-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Start Free Trial
          </Button>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 ${product.color} rounded-full mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform`}
                >
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <p className="text-sm text-gray-600">{product.title}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Setup Time:</span>
                    <span className="font-medium">{product.setupTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Training:</span>
                    <span className="font-medium text-green-600">{product.training}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  size="sm"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
