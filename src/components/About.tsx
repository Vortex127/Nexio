import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Users2, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Nexio Technologies
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded with a vision to bridge the gap between innovative technology and business success, 
              Nexio Technologies has been at the forefront of digital transformation for companies worldwide.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-foreground">10+ years of industry experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-foreground">Expert team of 25+ developers</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-foreground">ISO 9001 certified processes</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-foreground">99.9% project success rate</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Kubernetes</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm">
                  To empower businesses through innovative technology solutions that drive growth and efficiency.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <CardContent className="pt-6">
                <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  We stay ahead of technology trends to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <CardContent className="pt-6">
                <Users2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Collaboration</h3>
                <p className="text-muted-foreground text-sm">
                  We work closely with clients to understand their unique needs and goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Quality</h3>
                <p className="text-muted-foreground text-sm">
                  We maintain the highest standards in code quality and project delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;