"use client"

import { useState, useEffect } from "react"
import TestimonialCarousel from "@/components/ui/testimonial-carousel"

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp Solutions",
      content:
        "Nexio Technologies transformed our business with their innovative e-commerce platform. The team's expertise and dedication resulted in a 300% increase in our online sales within just 6 months.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      projectType: "E-Commerce Platform",
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "HealthTech Pro",
      content:
        "The healthcare management system developed by Nexio has revolutionized our patient care. Their attention to detail and understanding of healthcare compliance is exceptional.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      projectType: "Healthcare System",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder",
      company: "FinanceFlow",
      content:
        "Working with Nexio on our financial analytics platform was a game-changer. Their technical expertise and ability to understand complex financial workflows is unmatched.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      projectType: "Analytics Platform",
    },
    {
      name: "David Thompson",
      position: "Director of Innovation",
      company: "Smart City Solutions",
      content:
        "The IoT platform delivered by Nexio exceeded all our expectations. Their innovative approach to smart city challenges helped us create a truly connected urban environment.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      projectType: "IoT Platform",
    },
    {
      name: "Lisa Park",
      position: "VP of Sales",
      company: "CustomerFirst Inc",
      content:
        "The AI-powered CRM system from Nexio has transformed how we interact with our customers. The predictive analytics and automation features have increased our conversion rates by 250%.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      projectType: "AI-Powered CRM",
    },
    {
      name: "Robert Kim",
      position: "Supply Chain Manager",
      company: "GlobalTrade Corp",
      content:
        "The blockchain supply chain solution provided complete transparency and traceability for our operations. Nexio's expertise in emerging technologies is truly impressive.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      projectType: "Blockchain Solution",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6">
              Client Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about working with Nexio Technologies.
            </p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        {/* Simple stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-blue-600">500+</span> Happy Clients
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div>
              <span className="font-semibold text-blue-600">98%</span> Satisfaction Rate
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div>
              <span className="font-semibold text-blue-600">100+</span> 5-Star Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
