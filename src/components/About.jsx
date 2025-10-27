export default function About() {
    return (
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto space-y-12">
        
        <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-16">
          ¿Qué es <span className="text-neon-cyan">ZOON GAME</span>?
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Imagen Cinemática del Juego */}
            <div className="order-2 lg:order-1 relative p-2 bg-gradient-to-br from-[#FF4500]/50 to-[#00FFFF]/50 rounded-2xl shadow-2xl">
                <img
                    src="/concept-art.jpg"
                    alt="Concept art - Protagonista vs Espía"
                    className="rounded-xl w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-xl pointer-events-none border-4 border-gray-950/50" />
            </div>

            {/* Texto de la Misión */}
            <div className="order-1 lg:order-2 space-y-6 text-left">
                <h3 className="text-3xl font-extrabold text-neon-scarlet tracking-wider">
                    La Misión: Venganza y Código
                </h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed border-l-4 border-neon-cyan pl-4">
                    ZOON GAME te sumerge en una distopía retro-futurista. Eres un rebelde
                    impulsado por la venganza, en una cacería contra el enigmático espía
                    que dirige las corporaciones opresoras.
                </p>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed border-l-4 border-neon-cyan pl-4">
                    Tu única esperanza es tu inesperado aliado: un **hacker genio** que te ayuda
                    a infiltrarte, manipular sistemas y eliminar enemigos en una ciudad pixelada
                    donde cada decisión cuenta para el destino de la rebelión.
                </p>
            </div>
        </div>
      </section>
    );
  }
