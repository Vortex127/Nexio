import { Smartphone, Apple, SmartphoneIcon as Android, Zap, Users, Shield } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import ServiceCTA from "@/components/service-cta"

const MobileDevelopment = () => {
  const benefits = [
    {
      title: "Cross-Platform",
      description: "Develop once, deploy everywhere with React Native and Flutter for maximum reach.",
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Native Performance",
      description: "Optimized performance that feels native on both iOS and Android platforms.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "iOS Excellence",
      description: "Native iOS development following Apple's design guidelines and best practices.",
      icon: <Apple className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Android Expertise",
      description: "Material Design implementation with Android-specific optimizations.",
      icon: <Android className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "User Engagement",
      description: "Push notifications, offline capabilities, and engaging user experiences.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "App Store Ready",
      description: "Complete deployment support for both App Store and Google Play Store.",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Strategy",
      description: "Platform selection and feature planning",
    },
    {
      step: 2,
      title: "UI/UX Design",
      description: "Mobile-first design and user experience",
    },
    {
      step: 3,
      title: "Development",
      description: "Native or cross-platform development",
    },
    {
      step: 4,
      title: "App Store",
      description: "Testing, submission, and launch support",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero
        title="Mobile Development"
        description="Native and cross-platform mobile applications that engage users across all devices."
        features={["iOS & Android", "React Native", "Flutter"]}
        icon={<Smartphone className="w-12 h-12 text-white" />}
      />
      <ServiceDetails benefits={benefits} processSteps={processSteps} />
      <ServiceCTA />
      <Footer />
    </div>
  )
}

export default MobileDevelopment
