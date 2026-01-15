import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-ceremonial py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/teonanactl-e8527.firebasestorage.app/o/Logo%2FTEO-logo-principal-BLANCO-scaled.webp?alt=media&token=b281fa51-9453-44e6-ae5e-434a9a9e0d6a"
                alt="Teonanácatl"
                className="h-12 w-auto brightness-0"
              />
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Medicina tradicional mexicana para el bienestar ceremonial.
              Honrando las tradiciones ancestrales con productos de la más alta calidad.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hola@microdosis.shopping"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Navegación</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/productos" className="text-muted-foreground hover:text-foreground transition-colors">
                Productos
              </Link>
              <Link to="/servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                Servicios
              </Link>
              <Link to="/quienes-somos" className="text-muted-foreground hover:text-foreground transition-colors">
                Quiénes Somos
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Ciudad de México, México</span>
              </div>
              <a
                href="mailto:hola@microdosis.shopping"
                className="hover:text-foreground transition-colors"
              >
                hola@microdosis.shopping
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Teonanácatl. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Productos para uso espiritual y ceremonial tradicional.
          </p>
        </div>
      </div>
    </footer>
  );
}
