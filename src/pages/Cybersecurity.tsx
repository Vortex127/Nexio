import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import ServiceCTA from "@/components/service-cta"

const Cybersecurity = () => {
  const benefits = [
    {
      title: "Security Audits",
      description: "Comprehensive security assessments to identify vulnerabilities and risks.",
      icon: Eye,
    },
    {
      title: "Penetration Testing",
      description: "Ethical hacking to test your defenses and strengthen security posture.",
      icon: AlertTriangle,
    },
    {
      title: "Compliance Support",
      description: "Meet regulatory requirements with GDPR, HIPAA, and industry standards.",
      icon: CheckCircle,
    },
    {
      title: "Data Protection",
      description: "Advanced encryption and secure data handling practices.",
      icon: Lock,
    },
    {
      title: "Threat Monitoring",
      description: "24/7 monitoring and incident response for proactive security.",
      icon: Shield,
    },
    {
      title: "Security Training",
      description: "Employee education and awareness programs to prevent breaches.",
      icon: Users,
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Assessment",
      description: "Current security posture evaluation",
    },
    {
      step: 2,
      title: "Strategy",
      description: "Comprehensive security plan development",
    },
    {
      step: 3,
      title: "Implementation",
      description: "Deploy security measures and controls",
    },
    {
      step: 4,
      title: "Monitoring",
      description: "Ongoing monitoring and maintenance",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero
        title="Cybersecurity"
        description="Comprehensive security solutions to protect your digital assets and user data."
        features={["Security Audits", "Penetration Testing", "Compliance"]}
        icon={<Shield className="w-12 h-12 text-white" />}
      />
      <ServiceDetails benefits={benefits} processSteps={processSteps} />
      <ServiceCTA />
      <Footer />
    </div>
  )
}

export default Cybersecurity
