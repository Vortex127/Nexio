import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CloudSolutions = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Solutions</h1>
        <p className="text-lg text-muted-foreground mb-8">Scalable cloud infrastructure and deployment strategies for modern applications.</p>
        <ul className="list-disc pl-6 text-muted-foreground mb-8">
          <li>AWS & Azure</li>
          <li>DevOps</li>
          <li>Microservices</li>
        </ul>
        <p>Our cloud experts help you leverage the power of the cloud for agility, scalability, and cost savings.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default CloudSolutions;
