import { Brain, Cpu, BarChart3, Zap, Target, Cog } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import ServiceCTA from "@/components/service-cta"

const AIMachineLearning = () => {
  const benefits = [
    {
      title: "Custom AI Models",
      description: "Tailored machine learning models designed specifically for your business needs.",
      icon: <Brain className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Process Automation",
      description: "Intelligent automation to streamline operations and reduce manual work.",
      icon: <Cog className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Predictive Analytics",
      description: "Advanced algorithms to forecast trends and optimize business decisions.",
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "High Performance",
      description: "Optimized models with GPU acceleration and distributed computing.",
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Precision Targeting",
      description: "Enhanced customer segmentation and personalization capabilities.",
      icon: <Target className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Real-time Processing",
      description: "Lightning-fast inference and real-time decision making systems.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Data Analysis",
      description: "Evaluate data quality and model feasibility",
    },
    {
      step: 2,
      title: "Model Design",
      description: "Architecture selection and algorithm choice",
    },
    {
      step: 3,
      title: "Training",
      description: "Model training and validation processes",
    },
    {
      step: 4,
      title: "Deployment",
      description: "Production deployment and monitoring",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero
        title="AI & Machine Learning"
        description="Intelligent solutions that leverage AI and ML to automate and optimize business processes."
        features={["Custom AI Models", "Automation", "Predictive Analytics"]}
        icon={<Brain className="w-12 h-12 text-white" />}
      />
      <ServiceDetails benefits={benefits} processSteps={processSteps} />
      <ServiceCTA />
      <Footer />
    </div>
  )
}

export default AIMachineLearning
