import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductSuite } from "@/components/product-suite"
import { ProfessionalServices } from "@/components/professional-services"
import { EmployeeAccess } from "@/components/employee-access"
import { SupportChannels } from "@/components/support-channels"
import { SupportForm } from "@/components/support-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductSuite />
        <ProfessionalServices />
        <EmployeeAccess />
        <SupportChannels />
        <SupportForm />
      </main>
      <Footer />
    </div>
  )
}
