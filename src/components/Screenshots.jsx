const images = ["/screen1.jpg", "/screen2.jpg", "/screen3.jpg", "/screen4.jpg"];

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-16">
        <span className="text-neon-cyan">Capturas</span> del Juego
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="p-1 border border-gray-700/50 rounded-xl overflow-hidden
                       shadow-xl hover:shadow-[0_0_20px_rgba(255,69,0,0.5)] transition-all duration-300"
          >
            <img
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="w-full h-full object-cover rounded-lg transform hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
