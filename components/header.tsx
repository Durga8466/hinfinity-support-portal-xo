"use client"

import { Button } from "@/components/ui/button"
import { Infinity } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Infinity className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Hinfinity</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#products" className="hover:text-blue-200 transition-colors">
              Products
            </Link>
            <Link href="#services" className="hover:text-blue-200 transition-colors">
              Services
            </Link>
            <Link href="#employee-access" className="hover:text-blue-200 transition-colors">
              Employee Access
            </Link>
            <Link href="#support" className="hover:text-blue-200 transition-colors">
              Support
            </Link>
            <Link href="#contact" className="hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Corner - Sign In Button */}
          <Link href="/signin">
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
