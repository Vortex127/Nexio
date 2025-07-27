import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Cloud, Database, Shield, Cpu } from "lucide-react";

const services = [
	{
		icon: Globe,
		title: "Web Development",
		description:
			"Custom web applications built with modern technologies for optimal performance and user experience.",
		features: ["React & Next.js", "Full-Stack Solutions", "Responsive Design"],
	},
	{
		icon: Smartphone,
		title: "Mobile Development",
		description:
			"Native and cross-platform mobile applications that engage users across all devices.",
		features: ["iOS & Android", "React Native", "Flutter"],
	},
	{
		icon: Cloud,
		title: "Cloud Solutions",
		description:
			"Scalable cloud infrastructure and deployment strategies for modern applications.",
		features: ["AWS & Azure", "DevOps", "Microservices"],
	},
	{
		icon: Database,
		title: "Data Engineering",
		description:
			"Robust data pipelines and analytics solutions to unlock business insights.",
		features: ["Big Data", "ML/AI Integration", "Real-time Analytics"],
	},
	{
		icon: Shield,
		title: "Cybersecurity",
		description:
			"Comprehensive security solutions to protect your digital assets and user data.",
		features: ["Security Audits", "Penetration Testing", "Compliance"],
	},
	{
		icon: Cpu,
		title: "AI & Machine Learning",
		description:
			"Intelligent solutions that leverage AI and ML to automate and optimize business processes.",
		features: ["Custom AI Models", "Automation", "Predictive Analytics"],
	},
];

const serviceLinks = [
	"/webdevelopment",
	"/mobiledevelopment",
	"/cloudsolutions",
	"/dataengineering",
	"/cybersecurity",
	"/aimachinelearning",
];

const Services = () => {
	return (
		<section
			id="services"
			className="py-24 bg-gradient-card relative overflow-hidden"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
			<div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
			<div
				className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse-glow"
				style={{ animationDelay: "3s" }}
			></div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="text-center mb-20">
					<h2 className="text-5xl md:text-6xl font-display font-black text-foreground mb-8 animate-slide-up">
						Our Services
					</h2>
					<p
						className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up"
						style={{ animationDelay: "0.2s" }}
					>
						Comprehensive software development services tailored to meet your
						unique business needs
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{services.map((service, index) => (
						<div
							key={index}
							className="group animate-zoom-in"
							style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
						>
							<div className="relative bg-gradient-card backdrop-blur-xl border border-border/30 rounded-3xl p-8 h-full transition-all duration-500 hover:shadow-floating hover:-translate-y-4 hover:border-primary/30 group">
								{/* Glow Effect */}
								<div className="absolute inset-0 bg-gradient-glow rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

								{/* Content */}
								<div className="relative z-10">
									<div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-2xl mb-8 group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
										<service.icon className="w-10 h-10 text-primary group-hover:text-primary-glow transition-colors duration-300" />
									</div>

									<h3 className="text-2xl font-display font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
										{service.title}
									</h3>

									<p className="text-muted-foreground mb-8 leading-relaxed text-base">
										{service.description}
									</p>

									<div className="space-y-3 mb-8">
										{service.features.map((feature, idx) => (
											<div
												key={idx}
												className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mr-3 mb-2 border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
											>
												{feature}
											</div>
										))}
									</div>
									<a href={serviceLinks[index]} className="block">
										<Button
											variant="outline"
											className="w-full font-medium hover:shadow-glow transition-all duration-300 group-hover:border-primary/40"
										>
											Learn More
										</Button>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;