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
      icon: <Eye className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Penetration Testing",
      description: "Ethical hacking to test your defenses and strengthen security posture.",
      icon: <AlertTriangle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Compliance Support",
      description: "Meet regulatory requirements with GDPR, HIPAA, and industry standards.",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Data Protection",
      description: "Advanced encryption and secure data handling practices.",
      icon: <Lock className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Threat Monitoring",
      description: "24/7 monitoring and incident response for proactive security.",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Security Training",
      description: "Employee education and awareness programs to prevent breaches.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
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
    <div className="min-h-screen">
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
