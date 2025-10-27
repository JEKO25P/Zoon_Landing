const items = [
    { icon: "⚔️", title: "Combate de Alta Tensión", desc: "Domina mecánicas de pelea dinámicas con armas modificables y habilidades cibernéticas únicas." },
    { icon: "💻", title: "Hacking y Manipulación", desc: "El hacker te da acceso para manipular el entorno, desactivar defensas y resolver puzles tecnológicos." },
    { icon: "🏙️", title: "Mundo Abierto Pixelado", desc: "Explora una metrópolis sombría, llena de secretos, misiones secundarias y encuentros aleatorios." },
    { icon: "📈", title: "Progresión Personalizada", desc: "Define tu estilo de juego. Mejora tus implantes, armas y habilidades para escalar en los rankings de la Resistencia." },
  ];
  
  export default function Features() {
    return (
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-16">
          <span className="text-neon-scarlet">Sistemas</span> del Juego
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-gray-800/40 border border-gray-700/50 text-center
                         hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:border-neon-cyan
                         transition-all duration-300 space-y-4"
            >
              <div className="text-6xl mb-4">{f.icon}</div>
              <h3 className="mt-4 text-2xl font-semibold text-neon-cyan tracking-wide">{f.title}</h3>
              <p className="mt-2 text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
