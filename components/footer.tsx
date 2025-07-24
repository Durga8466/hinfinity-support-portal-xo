"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Infinity,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Users,
  Building2,
  Sprout,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Infinity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Hinfinity</span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Empowering businesses with comprehensive SLATE products and professional services. Your trusted partner
              for digital transformation and growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">support@hinfinity.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Global Headquarters, Business District</span>
              </div>
            </div>
          </div>

          {/* SLATE Products */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">SLATE Products</h3>
            <div className="space-y-3">
              <Link
                href="#"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-medium">SLATE HRMS</div>
                  <div className="text-sm text-gray-400">Human Resource Management</div>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-medium">SLATE CRM</div>
                  <div className="text-sm text-gray-400">Customer Relationship Management</div>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Sprout className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-medium">SLATE CROP</div>
                  <div className="text-sm text-gray-400">Comprehensive Resource Operations</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              <Link href="#products" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Products & Services
              </Link>
              <Link href="#employee-access" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Employee Access Portal
              </Link>
              <Link href="#support" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Support Center
              </Link>
              <Link href="/signin" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Sign In
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Documentation
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                API Reference
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">
                System Status
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest updates, features, and industry insights.
            </p>

            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="font-medium text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">© 2024 Hinfinity. All rights reserved.</div>

          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
