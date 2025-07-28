export default function ServiceCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help you achieve your goals with our innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
            Start Your Project
          </button>
          <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
