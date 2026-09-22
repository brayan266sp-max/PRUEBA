import React from 'react';
import {
  MessageSquareOff,
  HelpCircle,
  AlertTriangle,
  Clock,
  CheckCircle2,
  XCircle,
  Terminal,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      code: 'ERR_INFORMAL_CHAT',
      icon: MessageSquareOff,
      title: 'Acuerdos informales por chat',
      description:
        'Cadenas eternas de WhatsApp, notas de voz sin soporte legal y alcances difusos que terminan en malos entendidos o cobros imprevistos.',
      metric: '82% de MiPymes',
    },
    {
      code: 'ERR_UNKNOWN_APTITUDE',
      icon: HelpCircle,
      title: 'Incertidumbre sobre aptitud real',
      description:
        'Contratar a ciegas basándose en recomendaciones de conocidos, sin verificación de identidad, experiencia técnica ni portafolio comprobado.',
      metric: 'Cero filtros',
    },
    {
      code: 'ERR_BLIND_ADVANCE',
      icon: AlertTriangle,
      title: 'El dilema de los anticipos',
      description:
        'Pagar el 50% por adelantado a cuentas personales sin garantía de cumplimiento o profesionales con temor de no cobrar su trabajo.',
      metric: 'Riesgo total de capital',
    },
    {
      code: 'ERR_LOST_PRODUCTIVITY',
      icon: Clock,
      title: 'Tiempo perdido en negociaciones',
      description:
        'Días y semanas cuadrando precios y cotizaciones dispares, quitándole horas críticas a la operación principal de tu empresa.',
      metric: '~14 días perdidos',
    },
  ];

  return (
    <section id="problema" className="py-24 sm:py-32 bg-[#FFFFFF] relative border-b border-[#E2E8F0]">
      {/* Background glow */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>01 // DIAGNÓSTICO DEL MERCADO COLOMBIANO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-title">
            Encontrar talento no debería ser una apuesta
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            Hoy, la mayoría de micro, pequeñas y medianas empresas en Colombia resuelven sus
            servicios a través de canales informales, asumiendo riesgos innecesarios de tiempo y dinero.
          </p>
        </div>

        {/* Diff Comparison: WhatsApp Informal vs BRINDO Protocol */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white border border-[#CBD5E1] overflow-hidden shadow-lg">
          <div className="px-4 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#64748B]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#408340]" />
              <span className="font-semibold text-[#0F172A]">comparativa_flujo_laboral.diff</span>
            </div>
            <span className="text-[11px] text-[#64748B]">MiPymes Colombia</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0]">
            {/* Left: Informal Way (Red) */}
            <div className="p-6 bg-red-50/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-red-600 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-red-500" />
                  CANAL INFORMAL (WhatsApp / Amigos)
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-100 text-red-700 border border-red-200 font-bold">
                  ALTO RIESGO
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs text-[#475569]">
                <div className="p-2.5 rounded bg-white border border-red-200 text-red-900 shadow-xs">
                  <span className="text-red-600 font-bold block mb-1">− 09:30 AM [Audio 4m 12s]</span>
                  "Buenas, transfiérame el 50% de anticipo a mi Nequi personal y yo le tengo eso listo el viernes sin falta..."
                </div>
                <div className="p-2.5 rounded bg-white border border-red-200 text-red-900 shadow-xs">
                  <span className="text-red-600 font-bold block mb-1">− 5 DÍAS DESPUÉS:</span>
                  "Es que se me dañó el computador y tuve un tema familiar, deme unos días más..."
                </div>
                <div className="text-[11px] text-red-600 pt-1 flex items-center gap-1.5 font-medium">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>Resultado: Dinero retenido, trabajo incompleto y sin amparo legal.</span>
                </div>
              </div>
            </div>

            {/* Right: BRINDO Protocol (Green) */}
            <div className="p-6 bg-[#F0FDF4]/50 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#2F6F35] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#408340]" />
                  PROTOCOLO BRINDO (Estándar Seguro)
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F0FDF4] text-[#2F6F35] border border-[#70AD70]/50 font-bold">
                  100% BLINDADO
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs text-[#334155]">
                <div className="p-2.5 rounded bg-white border border-[#70AD70]/40 text-[#0F172A] shadow-xs">
                  <span className="text-[#408340] font-bold block mb-1">+ PASO 01 [ALCANCE CLARO]:</span>
                  Entregables delimitados, plazos definidos y precio fijo pactado en pesos colombianos.
                </div>
                <div className="p-2.5 rounded bg-white border border-[#70AD70]/40 text-[#0F172A] shadow-xs">
                  <span className="text-[#408340] font-bold block mb-1">+ PASO 02 [CUSTODIA PSE]:</span>
                  Tu dinero queda resguardado en bóveda fiduciaria. El talento cobra solo al recibir tu aprobación.
                </div>
                <div className="text-[11px] text-[#2F6F35] pt-1 flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#408340]" />
                  <span>Resultado: Servicio terminado a tiempo, con factura y garantía.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bento Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-[#E2E8F0] hover:border-[#408340] hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-amber-600 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#64748B] px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-red-600">
                  <span>Impacto MiPyme:</span>
                  <span className="font-bold">{item.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
