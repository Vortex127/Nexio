import type { ReactNode } from "react"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceHeroProps {
  title: string
  description: string
  features: string[]
  icon: ReactNode
}

export default function ServiceHero({ title, description, features, icon }: ServiceHeroProps) {
  return (
    <section className="pt-32 pb-24 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">{icon}</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">{description}</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-2 h-2 bg-primary rounded-full mb-3"></div>
                <h3 className="font-semibold text-lg">{feature}</h3>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="hover:shadow-intense hover:scale-105">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="hover:shadow-intense hover:scale-105">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
