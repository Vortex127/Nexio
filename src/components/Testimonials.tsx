"use client"

import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Users, Award, TrendingUp, Shield } from "lucide-react"
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
      position: "CEO & Founder",
      company: "TechCorp Solutions",
      content:
        "Nexio Technologies didn't just build us a platform—they transformed our entire business model. Their innovative approach and technical excellence exceeded every expectation.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      projectType: "E-Commerce Platform",
      results: "300% increase in online sales within 6 months",
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      company: "HealthTech Pro",
      content:
        "The healthcare management system revolutionized our patient care delivery. Nexio's deep understanding of healthcare compliance and user experience is unmatched.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      projectType: "Healthcare System",
      results: "50% reduction in patient wait times",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder & CEO",
      company: "FinanceFlow",
      content:
        "Working with Nexio was a game-changer. Their ability to translate complex financial workflows into intuitive software solutions is absolutely remarkable.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      projectType: "Analytics Platform",
      results: "40% improvement in decision-making speed",
    },
    {
      name: "David Thompson",
      position: "Director of Innovation",
      company: "Smart City Solutions",
      content:
        "The IoT platform exceeded all expectations. Nexio's innovative approach to smart city challenges helped us create a truly connected urban environment.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      projectType: "IoT Platform",
      results: "25% reduction in energy consumption",
    },
    {
      name: "Lisa Park",
      position: "VP of Sales & Marketing",
      company: "CustomerFirst Inc",
      content:
        "The AI-powered CRM transformed our customer relationships. The predictive analytics and automation features have revolutionized our sales process.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      projectType: "AI-Powered CRM",
      results: "250% increase in conversion rates",
    },
    {
      name: "Robert Kim",
      position: "Supply Chain Manager",
      company: "GlobalTrade Corp",
      content:
        "The blockchain solution provided unprecedented transparency. Nexio's expertise in emerging technologies and attention to detail is truly impressive.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      projectType: "Blockchain Solution",
      results: "100% supply chain transparency achieved",
    },
  ]

  const stats = [
    {
      number: "500+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Star className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      number: "100+",
      label: "5-Star Reviews",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-[0.02]"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold mb-8 shadow-2xl">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Client Success Stories
              <TrendingUp className="w-4 h-4 ml-2" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Don't just take our word for it. Here's what industry leaders say about working with{" "}
              <span className="text-blue-600 font-bold">Nexio Technologies</span>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-4">
                <div
                  className={`w-16 h-16 mx-auto bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{stat.icon}</div>
                </div>
              </div>
              <div
                className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-gray-700 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <TestimonialCarousel testimonials={testimonials} />

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 rounded-3xl p-12 text-white overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4">Join 500+ Happy Clients</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
                Ready to transform your business? Let's start your success story today and see why industry leaders
                choose <span className="text-white font-bold">Nexio Technologies</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent font-bold px-8 py-3 rounded-xl backdrop-blur-sm"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
