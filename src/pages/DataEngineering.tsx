import { Database, BarChart3, Zap, Brain, Shield, TrendingUp } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import ServiceCTA from "@/components/service-cta"

const DataEngineering = () => {
  const benefits = [
    {
      title: "Big Data Processing",
      description: "Handle massive datasets with distributed computing and modern data lakes.",
      icon: <Database className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Real-time Analytics",
      description: "Stream processing and real-time dashboards for immediate insights.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "ML/AI Integration",
      description: "Seamless integration with machine learning models and AI workflows.",
      icon: <Brain className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Data Visualization",
      description: "Interactive dashboards and reports for data-driven decision making.",
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Data Security",
      description: "Encryption, access controls, and compliance with data protection regulations.",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and patterns to drive strategic business decisions.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Data Audit",
      description: "Assess current data sources and quality",
    },
    {
      step: 2,
      title: "Pipeline Design",
      description: "Architecture for data collection and processing",
    },
    {
      step: 3,
      title: "Implementation",
      description: "Build robust data pipelines and warehouses",
    },
    {
      step: 4,
      title: "Analytics",
      description: "Deploy analytics and monitoring solutions",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero
        title="Data Engineering"
        description="Robust data pipelines and analytics solutions to unlock business insights."
        features={["Big Data", "ML/AI Integration", "Real-time Analytics"]}
        icon={<Database className="w-12 h-12 text-white" />}
      />
      <ServiceDetails benefits={benefits} processSteps={processSteps} />
      <ServiceCTA />
      <Footer />
    </div>
  )
}

export default DataEngineering
