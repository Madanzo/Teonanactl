import { Sparkles } from 'lucide-react';

interface Quote {
  text: string;
  author: string;
}

const QUOTES: Quote[] = [
  {
    text: "Los hongos son el puente que conecta el reino mineral con el reino vegetal, y a nosotros con el cosmos.",
    author: "Paul Stamets"
  },
  {
    text: "Todos nos estamos acompañando a casa de regreso.",
    author: "Ram Dass"
  },
  {
    text: "Los psicodélicos son para el estudio de la psique lo que el microscopio es para la biología y el telescopio para la astronomía.",
    author: "Stanislav Grof"
  },
  {
    text: "La naturaleza ama la valentía. Te comprometes y ella responderá eliminando los obstáculos imposibles.",
    author: "Terence McKenna"
  },
  {
    text: "El hongo te enseña que no estás solo, que eres parte de un tejido inteligente y vivo que cubre toda la Tierra.",
    author: "Paul Stamets"
  }
];

interface QuoteOrnamentProps {
  index?: number;
}

export function QuoteOrnament({ index }: QuoteOrnamentProps) {
  // If no index is provided, select a random one
  const quoteIndex = index !== undefined ? index % QUOTES.length : Math.floor(Math.random() * QUOTES.length);
  const quote = QUOTES[quoteIndex];

  return (
    <div className="relative py-20 overflow-hidden flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
      {/* Background Glowing Soft Effects in Dark Green/Purple */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-48 h-48 rounded-full bg-green-500/5 blur-[60px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-48 h-48 rounded-full bg-purple-500/5 blur-[60px] pointer-events-none" />

      {/* Quote Symbol Ornament */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary/40" />
        <div className="p-2 rounded-full bg-secondary/20 text-primary/80 animate-pulse">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* The Quote Text */}
      <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground/90 italic leading-relaxed mb-4 max-w-3xl">
        “{quote.text}”
      </blockquote>

      {/* The Author */}
      <cite className="font-display text-lg md:text-xl font-medium text-gold not-italic">
        — {quote.author}
      </cite>

      {/* Bottom elegant line decoration */}
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-8" />
    </div>
  );
}
