"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  name: string
  position: string
  company: string
  content: string
  rating: number
  image: string
  projectType: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null)

  const nextSlide = useCallback(() => {
    setSlideDirection('right')
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setSlideDirection(null)
    }, 300)
  }, [testimonials.length])

  const prevSlide = useCallback(() => {
    setSlideDirection('left')
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setSlideDirection(null)
    }, 300)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentIndex ? 'right' : 'left')
    setTimeout(() => {
      setCurrentIndex(index)
      setSlideDirection(null)
    }, 300)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Main Carousel Card */}
      <div className="relative h-[420px] flex items-center justify-center">
        <Card
          className={`bg-card shadow-lg border-border hover:shadow-xl absolute w-full transition-all ease-in-out duration-300
            ${slideDirection === 'right' ? 'animate-slide-left' : ''}
            ${slideDirection === 'left' ? 'animate-slide-right' : ''}
          `}
          style={{
            opacity: slideDirection ? 0 : 1,
          }}
        >
          <CardContent className="p-8 relative">
            {/* Subtle quote icon */}
            <div className="absolute top-6 right-6 text-muted-foreground/20">
              <Quote className="w-8 h-8" />
            </div>

            {/* Project type badge */}
            <div className="mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                {currentTestimonial.projectType}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-6 space-x-1">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground font-medium">5.0</span>
            </div>

            {/* Content */}
            <blockquote className="text-foreground/80 text-lg leading-relaxed mb-8 font-medium italic">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center space-x-4 pt-6 border-t border-border">
              <img
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
              />
              <div>
                <h4 className="font-semibold text-foreground">{currentTestimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{currentTestimonial.position}</p>
                <p className="text-sm text-primary font-medium">{currentTestimonial.company}</p>
              </div>
            </div>

            {/* Subtle accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary opacity-20"></div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Buttons */}
      <Button
        onClick={prevSlide}
        variant="outline"
        size="sm"
        className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border-border hover:border-primary/50 hover:text-primary shadow-md hover:shadow-lg transition-all duration-200"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button
        onClick={nextSlide}
        variant="outline"
        size="sm"
        className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border-border hover:border-primary/50 hover:text-primary shadow-md hover:shadow-lg transition-all duration-200"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-primary w-8"
                : "bg-muted-foreground/20 hover:bg-muted-foreground/40 w-2"
            }`}
          />
        ))}
      </div>

      {/* Progress indicator */}
      <div className="mt-4 text-center">
        <span className="text-xs text-muted-foreground font-medium">
          {currentIndex + 1} of {testimonials.length}
        </span>
      </div>

      <style jsx>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(-60px); opacity: 0; }
        }
        @keyframes slideRight {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(60px); opacity: 0; }
        }
        .animate-slide-left {
          animation: slideLeft 0.3s forwards;
        }
        .animate-slide-right {
          animation: slideRight 0.3s forwards;
        }
      `}</style>
    </div>
  )
}
