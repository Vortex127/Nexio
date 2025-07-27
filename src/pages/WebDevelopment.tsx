import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WebDevelopment = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Development</h1>
        <p className="text-lg text-muted-foreground mb-8">Custom web applications built with modern technologies for optimal performance and user experience.</p>
        <ul className="list-disc pl-6 text-muted-foreground mb-8">
          <li>React & Next.js</li>
          <li>Full-Stack Solutions</li>
          <li>Responsive Design</li>
        </ul>
        <p>We deliver robust, scalable, and high-performance web solutions tailored to your business needs.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default WebDevelopment;
