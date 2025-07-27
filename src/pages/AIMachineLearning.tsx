import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AIMachineLearning = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AI & Machine Learning</h1>
        <p className="text-lg text-muted-foreground mb-8">Intelligent solutions that leverage AI and ML to automate and optimize business processes.</p>
        <ul className="list-disc pl-6 text-muted-foreground mb-8">
          <li>Custom AI Models</li>
          <li>Automation</li>
          <li>Predictive Analytics</li>
        </ul>
        <p>Unlock new possibilities and efficiencies with our AI and machine learning expertise.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default AIMachineLearning;
