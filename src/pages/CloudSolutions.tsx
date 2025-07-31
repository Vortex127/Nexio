import { Cloud, Server, Database, Lock, BarChart3, Cog } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import ServiceCTA from "@/components/service-cta"

const CloudSolutions = () => {
  const benefits = [
    {
      title: "AWS & Azure Expertise",
      description: "Certified professionals with deep knowledge of leading cloud platforms.",
      icon: Cloud,
    },
    {
      title: "DevOps Integration",
      description: "Streamlined CI/CD pipelines and automated deployment processes.",
      icon: Cog,
    },
    {
      title: "Microservices Architecture",
      description: "Scalable, maintainable applications with containerized microservices.",
      icon: Server,
    },
    {
      title: "Data Management",
      description: "Robust database solutions with backup, recovery, and optimization.",
      icon: Database,
    },
    {
      title: "Security First",
      description: "Enterprise-grade security with encryption, monitoring, and compliance.",
      icon: Lock,
    },
    {
      title: "Cost Optimization",
      description: "Smart resource allocation and monitoring to minimize cloud costs.",
      icon: BarChart3,
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Assessment",
      description: "Current infrastructure analysis and requirements",
    },
    {
      step: 2,
      title: "Architecture",
      description: "Cloud strategy and solution design",
    },
    {
      step: 3,
      title: "Migration",
      description: "Seamless transition to cloud infrastructure",
    },
    {
      step: 4,
      title: "Optimization",
      description: "Performance tuning and cost optimization",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero
        title="Cloud Solutions"
        description="Scalable cloud infrastructure and deployment strategies for modern applications."
        features={["AWS & Azure", "DevOps", "Microservices"]}
        icon={<Cloud className="w-12 h-12 text-white" />}
      />
      <ServiceDetails benefits={benefits} processSteps={processSteps} />
      <ServiceCTA />
      <Footer />
    </div>
  )
}

export default CloudSolutions
