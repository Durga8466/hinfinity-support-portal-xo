"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe, Cloud, Users, ShoppingCart, ArrowRight } from "lucide-react"

export function ProfessionalServices() {
  const services = [
    {
      title: "Software Development",
      icon: Code,
      color: "bg-blue-500",
      description: "Custom software solutions tailored to your business needs",
      features: ["Full-stack development", "API integration", "Database design", "Quality assurance"],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "bg-green-500",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android apps", "React Native", "Flutter development", "App store deployment"],
    },
    {
      title: "Web Applications",
      icon: Globe,
      color: "bg-purple-500",
      description: "Modern, responsive web applications and websites",
      features: ["Responsive design", "Progressive web apps", "SEO optimization", "Performance tuning"],
    },
    {
      title: "Resource Deployment",
      icon: Cloud,
      color: "bg-orange-500",
      description: "Cloud infrastructure and deployment services",
      features: ["Cloud migration", "DevOps setup", "Monitoring & alerts", "Scalability planning"],
    },
    {
      title: "Technical Consulting",
      icon: Users,
      color: "bg-red-500",
      description: "Expert guidance for your technology decisions",
      features: ["Architecture review", "Technology selection", "Best practices", "Performance optimization"],
    },
    {
      title: "eCommerce Platform",
      icon: ShoppingCart,
      color: "bg-teal-500",
      description: "Complete eCommerce solutions for online businesses",
      features: ["Online store setup", "Payment integration", "Inventory management", "Analytics & reporting"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Label */}
        <div className="flex justify-center mb-8">
          <Badge
            variant="outline"
            className="text-blue-600 border-blue-300 hover:scale-105 transition-transform cursor-pointer px-4 py-2"
          >
            Professional Services
          </Badge>
        </div>

        {/* Heading and Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage our expertise to accelerate your digital transformation. From custom development to strategic
            consulting, we deliver results.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 ${service.color} rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
