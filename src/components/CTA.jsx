export default function CTA() {
    return (
      <section id="cta" className="py-32 px-6 text-center bg-gray-900 border-t-2 border-b-2 border-neon-cyan/50">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white">
          ¿Listo para <span className="text-neon-scarlet">Activar</span> la Rebelión?
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-gray-300">
          Únete a miles de rebeldes. Descarga el juego o agrégalo a tu Wishlist hoy.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8">
          {/* Botón Principal (Escarlata) con animación de pulso */}
          <a
            href="#"
            className="px-8 py-4 rounded-xl bg-[#FF4500] text-gray-900 font-extrabold uppercase tracking-widest text-xl
                       shadow-xl shadow-[#FF4500]/50 transform hover:scale-[1.05] transition-all duration-300 animate-pulse-neon"
          >
            Descargar (Acceso Total)
          </a>
          {/* Botón Secundario (Cian Neón) */}
          <a
            href="#"
            className="px-8 py-4 rounded-xl border-2 border-neon-cyan text-neon-cyan font-bold uppercase tracking-widest text-xl
                       hover:bg-[#00FFFF]/20 transform hover:scale-[1.02] transition-all duration-300"
          >
            Añadir a Wishlist
          </a>
        </div>
      </section>
    );
  }
