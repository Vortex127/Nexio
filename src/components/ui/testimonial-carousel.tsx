"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

interface Testimonial {
  name: string
  position: string
  company: string
  content: string
  rating: number
  image: string
  projectType: string
  results: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
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

    const element = document.getElementById("testimonial-carousel")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [testimonials.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div id="testimonial-carousel" className="relative">
      {/* Main Carousel Card */}
      <div className="relative max-w-4xl mx-auto">
        <Card
          className={`group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)`,
          }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

          <CardContent className="p-12 md:p-16 relative z-10">
            {/* Quote icon */}
            <div className="absolute top-8 right-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Project type badge */}
            <div className="mb-8">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                {currentTestimonial.projectType}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-8 space-x-2">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <div key={i} className="relative">
                  <Star className="w-8 h-8 text-yellow-400 fill-current drop-shadow-lg" />
                  <div className="absolute inset-0 w-8 h-8 bg-yellow-400/30 rounded-full blur-sm"></div>
                </div>
              ))}
              <span className="ml-4 text-lg font-bold text-gray-600">5.0</span>
            </div>

            {/* Content */}
            <blockquote className="text-gray-700 leading-relaxed mb-10 text-2xl md:text-3xl font-medium relative">
              <span className="text-6xl text-blue-200 absolute -top-4 -left-4 font-serif">"</span>
              <span className="relative z-10 block px-8">{currentTestimonial.content}</span>
              <span className="text-6xl text-blue-200 absolute -bottom-8 -right-4 font-serif">"</span>
            </blockquote>

            {/* Results highlight */}
            <div className="mb-10 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-400 shadow-lg">
              <p className="text-green-800 font-bold text-lg">
                <span className="text-green-600">Results:</span> {currentTestimonial.results}
              </p>
            </div>

            {/* Author section */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div className="ml-6 text-center">
                <h4 className="font-black text-2xl text-gray-900 mb-1">{currentTestimonial.name}</h4>
                <p className="text-gray-600 font-semibold text-lg">{currentTestimonial.position}</p>
                <p className="text-blue-600 font-bold text-lg">{currentTestimonial.company}</p>
              </div>
            </div>
          </CardContent>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20 blur-sm"></div>
        </Card>

        {/* Navigation Buttons */}
        <Button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl border-0 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl border-0 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center mt-12 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <div className="flex justify-center mt-6">
        <Button
          onClick={toggleAutoPlay}
          variant="outline"
          className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white/90 transition-all duration-300"
        >
          {isAutoPlaying ? (
            <>
              <Pause className="w-4 h-4 mr-2" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Play
            </>
          )}
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 max-w-md mx-auto">
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>
            {currentIndex + 1} of {testimonials.length}
          </span>
          <span>Client Stories</span>
        </div>
      </div>
    </div>
  )
}
