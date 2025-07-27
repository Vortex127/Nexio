import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cybersecurity = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity</h1>
        <p className="text-lg text-muted-foreground mb-8">Comprehensive security solutions to protect your digital assets and user data.</p>
        <ul className="list-disc pl-6 text-muted-foreground mb-8">
          <li>Security Audits</li>
          <li>Penetration Testing</li>
          <li>Compliance</li>
        </ul>
        <p>Protect your business with our end-to-end cybersecurity services and expertise.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Cybersecurity;
