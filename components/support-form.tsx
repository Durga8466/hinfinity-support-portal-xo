"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Ticket, ArrowRight } from "lucide-react"

export function SupportForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    priority: "",
    subject: "",
    description: "",
    environment: "",
    urgent: false,
    emailUpdates: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Create Support Ticket</CardTitle>
            <p className="text-gray-600">
              Need help? Fill out the form below and our support team will get back to you shortly.
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="91+ 0000000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <Label htmlFor="company">Company / Organization</Label>
                <Input
                  id="company"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              {/* Category and Priority */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Support Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="slate-mcp">SLATE AI Terminal - MCP</SelectItem>
                      <SelectItem value="slate-hrms">SLATE HRMS Support</SelectItem>
                      <SelectItem value="slate-crm">SLATE CRM Support</SelectItem>
                      <SelectItem value="slate-crop">SLATE CROP Support</SelectItem>
                      <SelectItem value="integration">Product Integration</SelectItem>
                      <SelectItem value="software">Software</SelectItem>
                      <SelectItem value="custom">Custom Services</SelectItem>
                      <SelectItem value="ecommerce">eCommerce Platform</SelectItem>
                      <SelectItem value="mobile">Mobile Development</SelectItem>
                      <SelectItem value="web">Web Application</SelectItem>
                      <SelectItem value="deployment">Resource Deployment</SelectItem>
                      <SelectItem value="consulting">Technical Consulting</SelectItem>
                      <SelectItem value="billing">Billing & Account</SelectItem>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="priority">Priority Level *</Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) => setFormData({ ...formData, priority: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low – General question or request</SelectItem>
                      <SelectItem value="medium">Medium – Non-critical issue</SelectItem>
                      <SelectItem value="high">High – Business impact</SelectItem>
                      <SelectItem value="critical">Critical – System down / urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <Label htmlFor="subject">Subject / Title *</Label>
                <Input
                  id="subject"
                  placeholder="Brief description of your issue or request"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide detailed information about your issue, including:
- Steps to reproduce (if applicable)
- Error messages
- Expected vs actual behavior
- Any relevant screenshots or files"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={6}
                  required
                />
              </div>

              {/* Environment */}
              <div>
                <Label htmlFor="environment">Environment / System Information</Label>
                <Textarea
                  id="environment"
                  placeholder="Browser version, operating system, SLATE product version, etc."
                  value={formData.environment}
                  onChange={(e) => setFormData({ ...formData, environment: e.target.value })}
                  rows={3}
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="urgent"
                    checked={formData.urgent}
                    onCheckedChange={(checked) => setFormData({ ...formData, urgent: checked as boolean })}
                  />
                  <Label htmlFor="urgent">This is an urgent issue affecting business operations</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="emailUpdates"
                    checked={formData.emailUpdates}
                    onCheckedChange={(checked) => setFormData({ ...formData, emailUpdates: checked as boolean })}
                  />
                  <Label htmlFor="emailUpdates">Send me email updates on ticket progress and resolution</Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Ticket className="w-5 h-5 mr-2" />
                Create Support Ticket
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Footer Text */}
              <div className="text-center text-sm text-gray-600 space-y-1">
                <p>By submitting this ticket, you agree to our Terms of Service and Privacy Policy.</p>
                <p>You will receive a confirmation email with your ticket number shortly.</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
