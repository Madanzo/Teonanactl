import { useState, useEffect } from 'react';

export function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('teonanacatl-age-verified');
    if (verified !== 'true') {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('teonanacatl-age-verified', 'true');
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-background/95 backdrop-blur-md">
      {/* Background Glowing Ambient Circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-green-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-500/10 blur-[80px] pointer-events-none" />

      {/* Modal Container */}
      <div className="relative max-w-lg w-full p-8 md:p-10 rounded-3xl bg-card border border-border shadow-elevated text-center animate-scale-in">
        <div className="flex justify-center mb-6">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/teonanactl-e8527.firebasestorage.app/o/Logo%2FTEO-logo-principal-BLANCO-scaled.webp?alt=media&token=b281fa51-9453-44e6-ae5e-434a9a9e0d6a"
            alt="Teonanácatl"
            className="h-16 w-auto brightness-0 dark:brightness-100"
          />
        </div>

        <h2 className="text-heading text-2xl md:text-3xl mb-4 font-semibold tracking-tight">
          Verificación de Edad
        </h2>
        
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
          Este sitio web contiene información sobre productos de medicina ancestral, microdosis, CBD y THC.
          Para ingresar, debes confirmar que eres mayor de edad (18+).
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleVerify}
            className="w-full sm:w-auto px-8 py-3 rounded-full font-medium transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-soft"
          >
            Sí, soy mayor de edad
          </button>
          
          <button
            onClick={handleDecline}
            className="w-full sm:w-auto px-8 py-3 rounded-full font-medium transition-all duration-300 border-2 border-border text-muted-foreground hover:bg-muted hover:text-foreground active:scale-95"
          >
            No, salir
          </button>
        </div>
      </div>
    </div>
  );
}
