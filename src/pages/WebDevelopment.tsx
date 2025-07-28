import { Code, Smartphone, Zap, Shield, Users, Rocket } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import ServiceCTA from "@/components/service-cta"

const WebDevelopment = () => {
  const benefits = [
    {
      title: "Modern Technologies",
      description: "Built with React, Next.js, and cutting-edge frameworks for optimal performance and scalability.",
      icon: <Code className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Responsive Design",
      description: "Seamless experience across all devices with mobile-first approach and adaptive layouts.",
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Lightning Fast",
      description: "Optimized for speed with advanced caching, CDN integration, and performance monitoring.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures and robust architecture for maximum uptime.",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "User-Centric",
      description: "Intuitive interfaces designed with user experience and accessibility in mind.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your business, handling increased traffic and feature expansion.",
      icon: <Rocket className="w-6 h-6 text-blue-600" />,
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Discovery",
      description: "Understanding your requirements, goals, and target audience",
    },
    {
      step: 2,
      title: "Design",
      description: "Creating wireframes, prototypes, and visual designs",
    },
    {
      step: 3,
      title: "Development",
      description: "Building your application with modern technologies",
    },
    {
      step: 4,
      title: "Launch",
      description: "Testing, deployment, and ongoing support",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero
        title="Web Development"
        description="Custom web applications built with modern technologies for optimal performance and user experience."
        features={["React & Next.js", "Full-Stack Solutions", "Responsive Design"]}
        icon={<Code className="w-12 h-12 text-white" />}
      />
      <ServiceDetails benefits={benefits} processSteps={processSteps} />
      <ServiceCTA />
      <Footer />
    </div>
  )
}

export default WebDevelopment
