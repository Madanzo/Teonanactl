import { Heart, Brain, Users, Sparkles } from 'lucide-react';

const QuienesSomos = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 via-background to-background">
                <div className="container-ceremonial text-center px-4">
                    <div className="max-w-3xl mx-auto">
                        <span className="inline-block badge-sage mb-4 animate-fade-up">
                            Nuestra Historia
                        </span>
                        <h1 className="text-display text-4xl md:text-5xl mb-6 animate-fade-up delay-100">
                            Quiénes Somos
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200">
                            Somos un equipo de profesionales de la salud mental comprometidos con
                            el bienestar integral a través de la medicina tradicional mexicana.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-20">
                <div className="container-ceremonial">
                    <div className="text-center mb-16">
                        <span className="badge-sage mb-4">Fundadores</span>
                        <h2 className="text-heading mb-4">Conoce a Nuestro Equipo</h2>
                        <div className="divider-sacred" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {/* Loredana Tavano */}
                        <div className="text-center p-8 rounded-2xl bg-card border border-border">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                                <Brain className="w-16 h-16 text-primary" />
                            </div>
                            <h3 className="font-display text-2xl font-semibold mb-2">
                                Loredana Tavano
                            </h3>
                            <p className="text-primary font-medium mb-4">Psicóloga</p>
                            <p className="text-muted-foreground leading-relaxed">
                                Especialista en salud mental con enfoque en terapias alternativas
                                y medicina tradicional. Comprometida con el acompañamiento integral
                                de cada persona en su camino hacia el bienestar.
                            </p>
                        </div>

                        {/* Arturo Martinez */}
                        <div className="text-center p-8 rounded-2xl bg-card border border-border">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/teonanactl-e8527.firebasestorage.app/o/Logo%2Farturo%20ai.png?alt=media&token=3f2f4d9e-4716-4a74-93fa-f31b420ea440"
                                    alt="Arturo Martinez"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-display text-2xl font-semibold mb-2">
                                Arturo Martinez
                            </h3>
                            <p className="text-primary font-medium mb-4">Psicólogo</p>
                            <p className="text-muted-foreground leading-relaxed">
                                Profesional de la salud mental con experiencia en abordajes
                                terapéuticos innovadores. Dedicado a conectar la sabiduría
                                ancestral con las prácticas contemporáneas de bienestar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-card">
                <div className="container-ceremonial">
                    <div className="text-center mb-16">
                        <span className="badge-sage mb-4">Nuestra Filosofía</span>
                        <h2 className="text-heading mb-4">Lo Que Nos Guía</h2>
                        <div className="divider-sacred" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Brain,
                                title: 'Ciencia y Tradición',
                                description: 'Combinamos conocimientos de psicología moderna con la sabiduría de las tradiciones ancestrales mexicanas.',
                            },
                            {
                                icon: Heart,
                                title: 'Acompañamiento',
                                description: 'Cada persona es única. Ofrecemos guía personalizada para tu proceso de bienestar y crecimiento personal.',
                            },
                            {
                                icon: Users,
                                title: 'Comunidad',
                                description: 'Creemos en el poder de la comunidad y el apoyo mutuo en el camino hacia la sanación.',
                            },
                        ].map((value) => (
                            <div
                                key={value.title}
                                className="text-center p-8 rounded-2xl bg-background transition-all duration-300 hover:shadow-soft"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                                    <value.icon className="w-7 h-7 text-secondary-foreground" />
                                </div>
                                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container-ceremonial">
                    <div className="max-w-3xl mx-auto text-center">
                        <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
                        <h2 className="text-heading mb-6">Nuestra Misión</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            En Teonanácatl, nuestra misión es facilitar el acceso a productos ceremoniales
                            de la más alta calidad, elaborados con respeto a las tradiciones ancestrales
                            mexicanas. Como psicólogos, entendemos la importancia del bienestar integral
                            y nos comprometemos a acompañar a cada persona en su camino hacia la sanación
                            y el autoconocimiento.
                        </p>
                        <p className="text-muted-foreground">
                            Trabajamos con los más altos estándares de calidad y ética profesional,
                            siempre priorizando la seguridad y el bienestar de nuestra comunidad.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QuienesSomos;
