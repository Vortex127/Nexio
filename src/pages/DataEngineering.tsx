import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DataEngineering = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Engineering</h1>
        <p className="text-lg text-muted-foreground mb-8">Robust data pipelines and analytics solutions to unlock business insights.</p>
        <ul className="list-disc pl-6 text-muted-foreground mb-8">
          <li>Big Data</li>
          <li>ML/AI Integration</li>
          <li>Real-time Analytics</li>
        </ul>
        <p>We help you harness your data for smarter decisions and business growth.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default DataEngineering;
