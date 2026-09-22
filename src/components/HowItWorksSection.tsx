import React, { useState } from 'react';
import {
  Search,
  CheckCircle,
  CreditCard,
  Gift,
  ArrowRight,
  ShieldCheck,
  GitBranch,
  Terminal,
  ChevronRight,
  Check,
  Lock,
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      action: 'Busca',
      tagline: 'Encuentra el servicio exacto',
      description:
        'Explora por especialidad o escribe la necesidad puntual de tu MiPyme. Visualiza paquetes estandarizados con entregables claros, tiempos de entrega y precios en COP.',
      icon: Search,
      commitHash: 'feat: search_query',
      sla: '&lt; 3 minutos',
      output: 'Cotización con precio fijo y entregable delimitado',
    },
    {
      number: '02',
      action: 'Elige',
      tagline: 'Evalúa perfiles con respaldo Triple-A',
      description:
        'Revisa la cédula y antecedentes validados del profesional, su experiencia demostrable, proyectos anteriores en Colombia y calificaciones de otros empresarios.',
      icon: CheckCircle,
      commitHash: 'verify: triple_a_pipeline',
      sla: 'Inmediato',
      output: 'Portafolio verificado + antecedentes limpios confirmados',
    },
    {
      number: '03',
      action: 'Contrata',
      tagline: 'Pago protegido en custodia',
      description:
        'Acepta el alcance acordado y transfiere de manera segura mediante PSE, tarjeta o transferencia. Tu dinero queda retenido en bóveda fiduciaria sin riesgo de pérdida.',
      icon: CreditCard,
      commitHash: 'lock: escrow_deposit_pse',
      sla: 'Confirmación instantánea',
      output: 'Bóveda de custodia activada. El dinero no se desembolsa aún.',
    },
    {
      number: '04',
      action: 'Recibe',
      tagline: 'Aprueba y libera el pago',
      description:
        'El talento entrega el trabajo dentro del plazo. Revisas el entregable final, solicitas revisiones si aplica y, cuando estés 100% satisfecho, liberas el desembolso.',
      icon: Gift,
      commitHash: 'release: payout_approved',
      sla: 'Garantía total',
      output: 'Entregable aprobado a satisfacción + factura y pago liberado.',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 sm:py-32 bg-[#FFFFFF] relative border-b border-[#E2E8F0]">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#70AD70]/10 blur-[180px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#70AD70]/40 text-[#2F6F35] text-xs font-mono mb-4">
            <GitBranch className="w-3.5 h-3.5 text-[#408340]" />
            <span>03 // WORKFLOW CI/CD DE CONTRATACIÓN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-title">
            Cómo funciona
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            De la necesidad a la solución en 4 pasos conectados. Sin fricciones, sin notas de voz y
            sin incertidumbre financiera.
          </p>
        </div>

        {/* 4 Connected Pipeline Nodes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isSelected = activeStep === index;
            return (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-200 relative flex flex-col justify-between select-none shadow-xs ${
                  isSelected
                    ? 'bg-[#F0FDF4] border-2 border-[#408340] shadow-md -translate-y-1'
                    : 'bg-white border border-[#E2E8F0] hover:border-[#408340]'
                }`}
              >
                <div>
                  {/* Top node header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#64748B]">
                      STAGE {step.number}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#408340] text-white'
                          : 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-1 font-title">
                    {step.action}
                  </h3>

                  <span className="text-xs font-mono text-[#2F6F35] block mb-3 font-semibold">
                    {step.tagline}
                  </span>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                  <span className="truncate max-w-[120px]">{step.commitHash}</span>
                  <span className="text-[#2F6F35] font-bold">{step.sla}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step Deep Visualizer */}
        <div className="mt-10 max-w-3xl mx-auto bg-white border border-[#CBD5E1] rounded-xl p-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#408340] text-white flex items-center justify-center font-mono font-bold text-xs">
                {steps[activeStep].number}
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#64748B]">
                  Fase seleccionada
                </span>
                <h4 className="text-base font-bold text-[#0F172A]">
                  Paso {steps[activeStep].number}: {steps[activeStep].action} — {steps[activeStep].tagline}
                </h4>
              </div>
            </div>

            {/* Step Pills */}
            <div className="flex items-center gap-1.5">
              {steps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  aria-label={`Ver paso ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeStep === i ? 'w-6 bg-[#408340]' : 'w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-[10px] text-[#64748B] uppercase block font-semibold">
                Entregable garantizado de esta etapa:
              </span>
              <p className="text-[#0F172A] font-medium">
                {steps[activeStep].output}
              </p>
            </div>

            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs text-[#408340] hover:text-[#2F6F35] transition-colors self-start sm:self-center font-mono font-bold cursor-pointer"
            >
              <span>Siguiente etapa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
