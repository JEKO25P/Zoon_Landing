export default function Trailer() {
    return (
      <section id="trailer" className="py-32 px-6 max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-5xl md:text-6xl font-extrabold">
          Mira la <span className="text-neon-scarlet">Acción</span>
        </h2>
        
        {/* Contenedor del Iframe con borde neón */}
        <div className="mt-8 aspect-video rounded-xl overflow-hidden 
                        shadow-2xl border-4 border-[#00FFFF] shadow-[0_0_25px_rgba(0,255,255,0.7)]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/SJF3HZHffAI"
            title="Trailer Zoon Game - Venganza Digital"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    );
  }
