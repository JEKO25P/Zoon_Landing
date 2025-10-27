import { Github, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
      <footer className="py-12 px-6 bg-[#0D1117] border-t border-gray-800/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Logo y Copyright */}
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-electrolize text-neon-cyan mb-2">ZOON GAME</h4>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Zoon Game Studios. Todos los derechos reservados. 
              <span className="block text-xs text-gray-600 mt-1">"Venganza Digital" es una marca registrada.</span>
            </p>
          </div>
  
          {/* Enlaces de Navegación */}
          <nav className="flex space-x-6">
            {['Inicio', 'Historia', 'Características', 'Tráiler'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace('á', 'a').replace('í', 'i')}`}
                className="text-gray-400 hover:text-neon-scarlet transition-colors font-inter text-sm uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </nav>
  
          {/* Redes Sociales */}
          <div className="flex space-x-6">
            <a href="#" aria-label="Github" className="text-gray-400 hover:text-neon-cyan transition-colors">
              <Github size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-neon-cyan transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" aria-label="Youtube" className="text-gray-400 hover:text-neon-cyan transition-colors">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
