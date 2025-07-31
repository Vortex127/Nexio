import type { ElementType } from "react"
import { Card, CardContent } from "./ui/card"

interface ServiceDetailsProps {
  benefits: Array<{
    title: string
    description: string
    icon: ElementType
  }>
  processSteps: Array<{
    step: number
    title: string
    description: string
  }>
}

export default function ServiceDetails({ benefits, processSteps }: ServiceDetailsProps) {
  return (
    <>
      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Why Choose Our <span className="text-primary">Solutions?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver exceptional results through proven methodologies and cutting-edge technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group border-0 shadow-card bg-gradient-card backdrop-blur-sm hover:shadow-floating hover:scale-105 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to deliver outstanding results.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            {/* Dotted line connector for larger screens */}
            <div className="hidden lg:block absolute top-8 left-0 h-full w-full">
              <div className="h-full w-full border-t-2 border-dashed border-accent/30"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative px-4">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-card rounded-full mb-6 ring-8 ring-background/80 backdrop-blur-sm">
                    <span className="text-2xl font-bold text-accent">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
