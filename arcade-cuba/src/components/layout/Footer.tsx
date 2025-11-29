import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-arcade-darkGray border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-orbitron font-bold text-white">
              ARCADE<span className="text-arcade-neonBlue">.CU</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              La primera plataforma de gaming inmersivo en Cuba. 
              Tecnología de punta, comunidad y pasión por los videojuegos.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-orbitron text-arcade-neonPurple mb-6 tracking-wider">Explorar</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/catalogo" className="hover:text-white transition-colors">Catálogo de Juegos</a></li>
              <li><a href="/sala-kohly" className="hover:text-white transition-colors">Sala Kohly</a></li>
              <li><a href="/torneos" className="hover:text-white transition-colors">Torneos E-Sports</a></li>
              <li><a href="/vip" className="hover:text-white transition-colors">Sistema VIP</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-orbitron text-arcade-neonPurple mb-6 tracking-wider">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-arcade-neonBlue shrink-0" />
                <span>Calle Principal #123, Reparto Kohly, Playa, La Habana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-arcade-neonBlue shrink-0" />
                <span>+53 5 555 5555</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-arcade-neonBlue shrink-0" />
                <span>contacto@arcade.cu</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-orbitron text-arcade-neonPurple mb-6 tracking-wider">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-arcade-neonBlue hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-arcade-neonBlue hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-arcade-neonBlue hover:text-black transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Arcade Cuba. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}