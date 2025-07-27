import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MobileDevelopment = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile Development</h1>
        <p className="text-lg text-muted-foreground mb-8">Native and cross-platform mobile applications that engage users across all devices.</p>
        <ul className="list-disc pl-6 text-muted-foreground mb-8">
          <li>iOS & Android</li>
          <li>React Native</li>
          <li>Flutter</li>
        </ul>
        <p>We create seamless mobile experiences to help you reach your audience anywhere, anytime.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default MobileDevelopment;
