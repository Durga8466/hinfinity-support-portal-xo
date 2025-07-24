"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Building2,
  Sprout,
  MessageCircle,
  Mail,
  Globe,
  BookOpen,
  Database,
  Play,
  HelpCircle,
  Monitor,
  Shield,
  User,
  Gift,
  Clock,
  FileText,
  CreditCard,
  Phone,
  ArrowRight,
} from "lucide-react"

export function EmployeeAccess() {
  const categories = [
    {
      title: "SLATE Platform",
      subtitle: "Access your HRMS, CRM, and Agriculture modules",
      icon: Users,
      iconBg: "bg-blue-500",
      cards: [
        {
          title: "HRMS Portal",
          description: "Payroll, Leave, Performance",
          icon: Users,
          bgColor: "bg-blue-500",
          arrowColor: "text-blue-500",
        },
        {
          title: "CRM Access",
          description: "Leads, Customers, Sales",
          icon: Building2,
          bgColor: "bg-purple-500",
          arrowColor: "text-purple-500",
        },
        {
          title: "Agriculture Portal",
          description: "Farms, Crops, Livestock",
          icon: Sprout,
          bgColor: "bg-green-500",
          arrowColor: "text-green-500",
        },
      ],
    },
    {
      title: "Communication",
      subtitle: "Connect with your team and access company resources",
      icon: MessageCircle,
      iconBg: "bg-purple-500",
      cards: [
        {
          title: "Microsoft Teams",
          description: "Video calls, Chat, Collaboration",
          icon: MessageCircle,
          bgColor: "bg-blue-500",
          arrowColor: "text-blue-500",
        },
        {
          title: "Company Email",
          description: "Outlook, Gmail, Communication",
          icon: Mail,
          bgColor: "bg-orange-500",
          arrowColor: "text-orange-500",
        },
        {
          title: "Company Intranet",
          description: "News, Updates, Resources",
          icon: Globe,
          bgColor: "bg-teal-500",
          arrowColor: "text-teal-500",
        },
      ],
    },
    {
      title: "Learning & Development",
      subtitle: "Enhance your skills and access training materials",
      icon: BookOpen,
      iconBg: "bg-green-500",
      cards: [
        {
          title: "Learning Portal",
          description: "Courses, Certifications, Skills",
          icon: BookOpen,
          bgColor: "bg-green-500",
          arrowColor: "text-green-500",
        },
        {
          title: "Knowledge Base",
          description: "Documentation, Guides, FAQs",
          icon: Database,
          bgColor: "bg-blue-500",
          arrowColor: "text-blue-500",
        },
        {
          title: "Training Videos",
          description: "Tutorials, Webinars, Sessions",
          icon: Play,
          bgColor: "bg-purple-500",
          arrowColor: "text-purple-500",
        },
      ],
    },
    {
      title: "Technical Support",
      subtitle: "Get help with IT issues and system access",
      icon: HelpCircle,
      iconBg: "bg-orange-500",
      cards: [
        {
          title: "IT Helpdesk",
          description: "Support Tickets, Hardware, Software",
          icon: HelpCircle,
          bgColor: "bg-red-500",
          arrowColor: "text-red-500",
        },
        {
          title: "Software Center",
          description: "Applications, Updates, Licenses",
          icon: Monitor,
          bgColor: "bg-blue-600",
          arrowColor: "text-blue-600",
        },
        {
          title: "VPN Access",
          description: "Remote Access, Security, Network",
          icon: Shield,
          bgColor: "bg-gray-500",
          arrowColor: "text-gray-500",
        },
      ],
    },
    {
      title: "HR Resources",
      subtitle: "Manage your employee benefits and information",
      icon: User,
      iconBg: "bg-teal-500",
      cards: [
        {
          title: "Employee Portal",
          description: "Profile, Documents, Information",
          icon: User,
          bgColor: "bg-teal-500",
          arrowColor: "text-teal-500",
        },
        {
          title: "Benefits Portal",
          description: "Health, Insurance, Retirement",
          icon: Gift,
          bgColor: "bg-green-500",
          arrowColor: "text-green-500",
        },
        {
          title: "Time & Attendance",
          description: "Clock In/Out, Schedules, Reports",
          icon: Clock,
          bgColor: "bg-blue-500",
          arrowColor: "text-blue-500",
        },
      ],
    },
    {
      title: "Quick Actions",
      subtitle: "Frequently used employee services and requests",
      icon: FileText,
      iconBg: "bg-blue-800",
      cards: [
        {
          title: "Request Leave",
          description: "Vacation, Sick Leave, Time Off",
          icon: FileText,
          bgColor: "bg-yellow-500",
          arrowColor: "text-yellow-600",
        },
        {
          title: "Expense Report",
          description: "Receipts, Reimbursements, Travel",
          icon: CreditCard,
          bgColor: "bg-pink-500",
          arrowColor: "text-pink-500",
        },
        {
          title: "Employee Directory",
          description: "Contacts, Departments, Phone Book",
          icon: Phone,
          bgColor: "bg-teal-500",
          arrowColor: "text-teal-500",
        },
      ],
    },
  ]

  return (
    <section id="employee-access" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Label */}
        <div className="flex justify-center mb-8">
          <Badge
            variant="outline"
            className="text-blue-600 border-blue-300 hover:scale-105 transition-transform cursor-pointer px-4 py-2"
          >
            Employee Access Portal
          </Badge>
        </div>

        {/* Heading and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Employee Access Portal</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick access to all employee resources, systems, and tools. Everything you need to stay productive and
            connected.
          </p>
        </div>

        {/* Dashboard Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center pb-4">
                {/* Main Category Icon */}
                <div
                  className={`w-16 h-16 ${category.iconBg} rounded-full mx-auto mb-4 flex items-center justify-center`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                {/* Category Title and Subtitle */}
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">{category.title}</CardTitle>
                <p className="text-sm text-gray-600">{category.subtitle}</p>
              </CardHeader>

              <CardContent className="space-y-3 pt-0">
                {category.cards.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      {/* Card Icon */}
                      <div className={`p-2 rounded-lg ${card.bgColor}`}>
                        <card.icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Card Content */}
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{card.title}</h4>
                        <p className="text-xs text-gray-600">{card.description}</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight
                      className={`w-4 h-4 ${card.arrowColor} group-hover:translate-x-1 transition-transform`}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access all your essential business tools and resources from one centralized dashboard. Each category
            provides quick access to the systems you use daily.
          </p>
        </div>
      </div>
    </section>
  )
}
