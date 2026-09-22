import React from 'react';
import {
  UserCheck,
  Shield,
  Zap,
  CircleDollarSign,
  BadgeCheck,
  FileCheck,
  Award,
  Sparkles,
  ArrowRight,
  Terminal,
  Check,
} from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const solutionCards = [
    {
      id: '01',
      icon: UserCheck,
      title: 'Profesionales verificados',
      description:
        'Cada perfil pasa por nuestro filtro riguroso Triple-A (Autenticidad, Aptitud y Aprobación), garantizando que quien contratas cuenta con la capacidad real para ejecutar tu servicio.',
      tag: 'TRIPLE-A CHECKED',
      badgeColor: 'text-[#3FB950] bg-[#238636]/15 border-[#2EA043]/40',
      metric: '0% Perfiles falsos',
    },
    {
      id: '02',
      icon: Shield,
      title: 'Pago protegido en custodia',
      description:
        'Tu dinero permanece resguardado en bóveda fiduciaria dentro de la plataforma. El profesional cobra únicamente cuando tú revisas y apruebas el entregable final a entera satisfacción.',
      tag: 'ESCROW FIDUCIARIO',
      badgeColor: 'text-[#58A6FF] bg-[#1F6FEB]/15 border-[#388BFD]/40',
      metric: '100% Cero anticipos ciegos',
    },
    {
      id: '03',
      icon: Zap,
      title: 'Servicios bajo demanda',
      description:
        'Resuelve requerimientos puntuales de tu empresa en minutos. Sin nóminas fijas, sin trámites engorrosos y con la agilidad que exige la operación diaria de una MiPyme.',
      tag: 'ON-DEMAND SLA',
      badgeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
      metric: '&lt; 24h Inicio estimado',
    },
    {
      id: '04',
      icon: CircleDollarSign,
      title: 'Precios claros en COP',
      description:
        'Paquetes estandarizados con entregables delimitados y tarifas fijas en pesos colombianos. Sabes con exactitud qué recibirás y cuánto vas a pagar desde el primer clic.',
      tag: 'TARIFA FIJA COP',
      badgeColor: 'text-[#7EE787] bg-[#238636]/10 border-[#3FB950]/30',
      metric: '0% Costos ocultos',
    },
  ];

  const tripleAPillars = [
    {
      letter: 'A',
      name: 'Autenticidad',
      icon: BadgeCheck,
      spec: 'CÉDULA + ANTECEDENTES',
      description:
        'Validación documental de cédula de ciudadanía colombiana y cruce en tiempo real con bases judiciales y tributarias de la Policía, Contraloría y Procuraduría.',
    },
    {
      letter: 'A',
      name: 'Aptitud',
      icon: FileCheck,
      spec: 'TÍTULOS SENA & UNIVERSIDADES',
      description:
        'Revisión técnica de portafolio, diplomas universitarios, actas de grado y certificaciones del Servicio Nacional de Aprendizaje (SENA).',
    },
    {
      letter: 'A',
      name: 'Aprobación',
      icon: Award,
      spec: 'SLA DE CALIDAD Y PUNTUALIDAD',
      description:
        'Evaluación de estándar de servicio, acuerdos de confidencialidad (NDA) y compromiso de entregas dentro del cronograma pactado.',
    },
  ];

  return (
    <section id="solucion" className="py-24 sm:py-32 bg-[#FFFFFF] relative border-b border-[#E2E8F0]">
      {/* Background ambient glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#70AD70]/10 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#70AD70]/40 text-[#2F6F35] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#408340]" />
            <span>02 // ARQUITECTURA DE LA PLATAFORMA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-title">
            Conoce BRINDO
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            Una plataforma diseñada para que contratar servicios profesionales en Colombia sea tan
            seguro, ágil y transparente como cualquier transacción digital de primer nivel.
          </p>
        </div>

        {/* 4 Solution Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutionCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-xl p-6 sm:p-7 border border-[#E2E8F0] hover:border-[#408340] hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-[#F0FDF4] border border-[#70AD70]/40 text-[#408340] flex items-center justify-center group-hover:bg-[#408340] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border text-[#2F6F35] bg-[#F0FDF4] border-[#70AD70]/50"
                    >
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 font-title">
                    {card.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                  <span>Garantía:</span>
                  <span className="text-[#2F6F35] font-bold">{card.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Inspection: Triple-A Protocol */}
        <div className="mt-12 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-10 shadow-md relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#70AD70]/40 text-[#2F6F35] text-xs font-mono mb-3 font-semibold">
              <Terminal className="w-3.5 h-3.5 text-[#408340]" />
              <span>ESTÁNDAR DE VERIFICACIÓN INSTITUCIONAL</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-title">
              El Sistema de Verificación Triple-A
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              No permitimos perfiles anónimos ni habilidades infladas. Cada prestador pasa por 3
              filtros de seguridad antes de poder postularse a una solicitud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tripleAPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-[#E2E8F0] hover:border-[#408340] hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg bg-[#F0FDF4] border border-[#70AD70]/40 text-[#2F6F35] font-mono font-bold flex items-center justify-center text-sm">
                        {pillar.letter}
                      </div>
                      <span className="text-[10px] font-mono text-[#64748B]">
                        FILTRO {idx + 1}/3
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#0F172A] mb-1">
                      {pillar.name}
                    </h4>

                    <span className="text-[10px] font-mono text-[#2F6F35] block mb-3 font-bold">
                      {pillar.spec}
                    </span>

                    <p className="text-xs text-[#475569] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-mono text-[#2F6F35] font-semibold">
                    <Check className="w-3.5 h-3.5 text-[#408340]" />
                    <span>Validación automatizada</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
