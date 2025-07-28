import type { ReactNode } from "react"

interface ServiceHeroProps {
  title: string
  description: string
  features: string[]
  icon: ReactNode
}

export default function ServiceHero({ title, description, features, icon }: ServiceHeroProps) {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">{icon}</div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">{description}</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full mb-3"></div>
                <h3 className="font-semibold text-lg">{feature}</h3>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
