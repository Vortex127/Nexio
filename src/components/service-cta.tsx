import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export default function ServiceCTA() {
  return (
    <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how we can help you achieve your goals with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="hover:shadow-intense hover:scale-105">
              Start Your Project
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="hover:shadow-intense hover:scale-105">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
