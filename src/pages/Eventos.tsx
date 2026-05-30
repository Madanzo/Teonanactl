import { Calendar, Users, Sparkles, HelpCircle } from 'lucide-react';

const UPCOMING_EVENTS = [
  {
    title: 'Ceremonia del Despertar: Cacao & Microdosis',
    description: 'Un viaje sagrado combinando el espíritu del cacao orgánico mexicano con microdosis puras de Teonanácatl para abrir el corazón e intencionar el camino personal.',
    date: 'Sábado 20 de Junio, 2026',
    time: '17:00 - 21:00',
    location: 'Valle de Bravo, Edomex',
    price: '$1,800 MXN',
    capacity: 'Limitado a 15 personas'
  },
  {
    title: 'Círculo de Integración Psiquedélica y Meditación',
    description: 'Espacio de contención grupal y diálogo guiado para integrar experiencias con medicina sagrada y compartir aprendizajes en comunidad.',
    date: 'Jueves 2 de Julio, 2026',
    time: '19:30 - 21:30',
    location: 'Coyoacán, CDMX',
    price: '$600 MXN',
    capacity: 'Limitado a 20 personas'
  }
];

const Eventos = () => {
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      {/* Background ambient glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-green-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="container-ceremonial max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="badge-sage mb-4">Medicina y Comunidad</span>
          <h1 className="text-display text-4xl md:text-6xl mb-4">Eventos y Ceremonias</h1>
          <p className="text-lg text-muted-foreground">
            Espacios sagrados presenciales y en línea diseñados para reconectar con tu esencia, 
            aprender de la micología y transitar tu camino espiritual en comunidad.
          </p>
          <div className="divider-sacred mt-6" />
        </div>

        {/* Ceremonies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {UPCOMING_EVENTS.map((event, index) => (
            <div
              key={event.title}
              className="card-sacred p-8 flex flex-col justify-between border border-border bg-card/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Próximo Evento
                </span>
                <h3 className="font-display text-2xl font-semibold mb-3 leading-snug">{event.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{event.description}</p>
              </div>

              <div className="space-y-3 pt-6 border-t border-border/60 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fecha:</span>
                  <span className="font-medium text-foreground">{event.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Horario:</span>
                  <span className="font-medium text-foreground">{event.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ubicación:</span>
                  <span className="font-medium text-foreground">{event.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Aportación:</span>
                  <span className="font-medium text-primary font-display text-base">{event.price}</span>
                </div>
                <p className="text-xs text-gold/80 italic mt-2 text-center">{event.capacity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cal.com Embed Title */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="badge-sage mb-3">Agenda con Nosotros</span>
          <h2 className="text-heading text-3xl md:text-4xl mb-4">Calendario y Sesiones</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Agenda una consulta personalizada de acompañamiento o reserva tu lugar en nuestras 
            próximas ceremonias de forma directa y segura.
          </p>
        </div>

        {/* Cal.com Embed Container */}
        <div className="w-full rounded-3xl border border-border shadow-elevated bg-card/40 backdrop-blur-md overflow-hidden relative min-h-[700px] mb-12">
          {/* Subtle decoration lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500/30 via-primary/30 to-purple-500/30" />
          
          <iframe
            src="https://cal.com/teonanactl"
            className="w-full min-h-[700px] border-0"
            title="Agenda de Ceremonias Teonanácatl"
            style={{ colorScheme: 'light dark' }}
          />
        </div>

        {/* FAQs info */}
        <div className="card-sacred p-8 bg-secondary/10 border border-secondary/20 flex flex-col md:flex-row items-start gap-6 max-w-4xl mx-auto">
          <div className="p-3 rounded-full bg-secondary/30 text-secondary-foreground shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display text-xl font-semibold mb-2">¿Tienes dudas sobre las ceremonias presenciales?</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Todas nuestras ceremonias y círculos grupales se llevan a cabo siguiendo estrictos protocolos de contención y acompañamiento.
              Si tienes alguna duda de salud o resistencia previa, o requieres una sesión personalizada, puedes agendar una consulta gratuita de 15 minutos en el calendario de arriba.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
