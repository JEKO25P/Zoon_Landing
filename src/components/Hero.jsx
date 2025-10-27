import logo from "../assets/logo.png"; // Manteniendo el logo, asumiendo que estará disponible

export default function Hero() {
  // URLs de placeholders genéricos para que el componente compile y se visualice.
  // En tu entorno local, estas URL deben ser reemplazadas por tus assets reales.
  const FAKE_BACKGROUND = "https://placehold.co/1920x1080/0D1117/FFFFFF?text=CYBERPUNK+CITY";
  const FAKE_REBEL_AVATAR = "https://placehold.co/400x400/FF4500/0D1117?text=REBELDE";
  const FAKE_HACKER_AVATAR = "https://placehold.co/400x400/00FFFF/0D1117?text=HACKER";
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-16">
      {/* Fondo con movimiento lento */}
      <img
        // Usando la URL de placeholder
        src={FAKE_BACKGROUND} 
        alt="Pixel city background"
        className="absolute inset-0 w-full h-full object-cover animate-zoom-slow"
      />
      {/* Overlay oscuro para mejorar el contraste del texto */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" /> 
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Contenido centrado */}
      <div className="relative z-10 max-w-5xl px-6 space-y-12">
        
        {/* Nombre del juego - ENORME y GLOWING */}
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter drop-shadow-2xl animate-glow">
          ZOON <span className="text-neon-cyan">GAME</span>
        </h1>
        
        {/* Slogan */}
        <h2 className="text-white text-2xl md:text-4xl font-light italic tracking-wider animate-fade-in-delay">
          Rompe las cadenas y desata la <span className="text-neon-scarlet font-semibold">Venganza Digital</span>
        </h2>

        {/* Avatares con efectos de Borde Neón */}
        <div className="flex justify-center items-center gap-16 animate-fade-up">
          {/* Rebelde (Fuego/Venganza) */}
          <img
            // Usando la URL de placeholder
            src={FAKE_REBEL_AVATAR}
            alt="Rebelde Protagonista"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-[#FF4500] shadow-[0_0_20px_rgba(255,69,0,0.8)] transform hover:scale-110 hover:rotate-3 transition duration-500"
          />
          {/* Hacker (Hielo/Tecnología) */}
          <img
            // Usando la URL de placeholder
            src={FAKE_HACKER_AVATAR}
            alt="Hacker Aliado"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-[#00FFFF] shadow-[0_0_20px_rgba(0,255,255,0.8)] transform hover:scale-110 hover:-rotate-3 transition duration-500"
          />
        </div>
        
        {/* Botones - CTA en escarlata (foco en Jugar/Descargar) */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 animate-fade-up-delay">
          <a
            href="#cta"
            className="px-8 py-4 rounded-xl bg-[#FF4500] text-gray-900 font-extrabold uppercase tracking-widest text-xl shadow-lg shadow-[#FF4500]/50 transform hover:scale-[1.02] transition duration-300 animate-pulse-neon"
          >
            Jugar Ahora
          </a>
          <a
            href="#trailer"
            className="px-8 py-4 rounded-xl border-2 border-neon-cyan text-neon-cyan font-bold uppercase tracking-widest text-xl hover:bg-[#00FFFF]/20 transition duration-300"
          >
            Ver Tráiler
          </a>
        </div>
      </div>
    </section>
  );
}
