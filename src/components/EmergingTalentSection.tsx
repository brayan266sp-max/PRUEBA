import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Award,
  TrendingUp,
  Check,
  Sparkles,
  CheckCircle2,
  Terminal,
  Code2,
  Cpu,
  Layers,
} from 'lucide-react';

export const EmergingTalentSection: React.FC = () => {
  const profiles = [
    {
      icon: GraduationCap,
      category: 'TALENTO UNIVERSITARIO',
      title: 'Estudiantes de últimos semestres',
      institution: 'Universidades colombianas de primer nivel',
      focus:
        'Conocimiento de vanguardia en las últimas herramientas globales, metodologías ágiles y dedicación rigurosa para entregar proyectos impecables.',
      skills: ['Figma UI', 'Next.js', 'Meta Ads', 'Data Science'],
      verifiedBy: 'Certificado de matrícula + promedio académico',
    },
    {
      icon: Award,
      category: 'TÉCNICOS & TECNÓLOGOS',
      title: 'Graduados y Tecnólogos SENA',
      institution: 'Servicio Nacional de Aprendizaje (SENA)',
      focus:
        'Capacidad técnica comprobada, orientación directa a la resolución práctica de problemas y experiencia aplicada al aparato productivo real del país.',
      skills: ['Desarrollo Web', 'Diseño Gráfico', 'Soporte Cloud', 'Contabilidad'],
      verifiedBy: 'Registro institucional SENA verificado',
    },
    {
      icon: TrendingUp,
      category: 'NUEVA GENERACIÓN',
      title: 'Recién egresados calificados',
      institution: 'Profesionales en ascenso',
      focus:
        'Formación universitaria reciente, hambre de construir reputación intachable y dominio nativo de tecnologías modernas de diseño, marketing y software.',
      skills: ['Branding', 'Copywriting', 'Python', 'Automatización'],
      verifiedBy: 'Título profesional + cédula validados',
    },
    {
      icon: Briefcase,
      category: 'ESPECIALISTAS SENIOR',
      title: 'Profesionales independientes',
      institution: 'Especialistas por proyecto',
      focus:
        'Talento con trayectoria comprobada que valora la flexibilidad y busca proyectos claros con MiPymes serias, sin fricciones de cobro ni dilaciones.',
      skills: ['Estrategia', 'Finanzas DIAN', 'E-commerce', 'Consultoría'],
      verifiedBy: 'Portafolio con clientes reales auditado',
    },
  ];

  const ethicsGuarantees = [
    'Tarifas justas y transparentes basadas en el valor del entregable',
    'Portafolios revisados y aptitudes evaluadas antes de publicar',
    'Conexión directa con la economía productiva de Colombia',
    'Protección para el talento: pago garantizado en custodia fiduciaria',
  ];

  return (
    <section id="talento" className="py-24 sm:py-32 bg-[#FFFFFF] text-[#0F172A] relative border-b border-[#E2E8F0]">
      {/* Background glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#70AD70]/10 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#70AD70]/40 text-[#2F6F35] text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5 text-[#408340]" />
            <span>04 // RED DE TALENTO COLOMBIANO VALIDADO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-title">
            El talento que impulsa a tu empresa
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            BRINDO une la experiencia práctica con la energía y actualización del mejor talento
            colombiano. Construimos puentes éticos y profesionales donde el talento gana por su
            capacidad real y las MiPymes crecen con trabajo bien hecho.
          </p>
        </div>

        {/* 4 Contributor Profiles */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {profiles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#E2E8F0] hover:border-[#408340] hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F0FDF4] border border-[#70AD70]/40 text-[#408340] group-hover:bg-[#408340] group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#64748B]">
                      PERFIL #{idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#2F6F35] font-bold block mb-1">
                    {item.category}
                  </span>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 font-title">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {item.focus}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[10px] font-mono text-[#2F6F35] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#408340]" />
                  <span className="truncate">{item.verifiedBy}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dignity & Ethical Statement */}
        <div className="mt-12 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-mono text-[#2F6F35] font-bold uppercase tracking-wider block mb-1">
                COMPROMISO DE INTEGRIDAD BRINDO
              </span>
              <h4 className="text-xl font-bold text-[#0F172A] font-title">
                Profesionalismo, rigor y remuneración justa en COP
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                En BRINDO no promovemos la subasta a la baja ni la informalidad precaria. Creemos en
                contrataciones con alcance preciso, acuerdos transparentes en pesos colombianos y
                respeto mutuo entre empresarios y prestadores.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto shrink-0">
              {ethicsGuarantees.map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#E2E8F0] text-xs text-[#0F172A] shadow-xs"
                >
                  <Check className="w-3.5 h-3.5 text-[#408340] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
