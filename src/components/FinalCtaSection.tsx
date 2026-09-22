import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Terminal,
  Send,
  Check,
  Building2,
  Briefcase,
} from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'mipyme' | 'talento'>('mipyme');
  const [companyName, setCompanyName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const randomId = Math.floor(1000 + Math.random() * 9000);
    setTicketId(`BOG-${randomId}`);
    setSubmitted(true);
  };

  return (
    <section id="registro" className="py-24 sm:py-32 bg-[#FFFFFF] relative border-b border-[#E2E8F0]">
      {/* Background glow effects */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#70AD70]/15 blur-[180px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#F8FAFC] border border-[#CBD5E1] p-8 sm:p-14 shadow-xl relative overflow-hidden">
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 bg-gh-grid opacity-10 pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center relative z-10">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#70AD70]/40 text-[#2F6F35] text-xs font-mono mb-4">
              <Terminal className="w-3.5 h-3.5 text-[#408340]" />
              <span>LANZAMIENTO OFICIAL 2026 // ACCESO ANTICIPADO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-title">
              El nuevo estándar para contratar en tu MiPyme
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
              Estamos preparando el lanzamiento de las aplicaciones en App Store y Google Play.
              Déjanos tu correo para recibir acceso prioritario y una bonificación de bienvenida en
              tu primer servicio contratado.
            </p>

            {/* Role Toggle Pill */}
            <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-white border border-[#E2E8F0] shadow-xs">
              <button
                type="button"
                onClick={() => setRole('mipyme')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  role === 'mipyme'
                    ? 'bg-[#408340] text-white font-bold shadow-xs'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Soy Empresario / MiPyme</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('talento')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  role === 'talento'
                    ? 'bg-[#408340] text-white font-bold shadow-xs'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Soy Talento Profesional</span>
              </button>
            </div>

            {/* Form or Confirmation */}
            {submitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-white border border-[#70AD70] text-center shadow-md animate-in fade-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-[#F0FDF4] border border-[#70AD70] text-[#408340] flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-title">
                  ¡Registro confirmado con éxito!
                </h3>
                <p className="text-xs text-[#475569] mt-1.5 max-w-md mx-auto">
                  Hemos reservado tu lugar para el lanzamiento con el identificador{' '}
                  <span className="font-mono text-[#2F6F35] font-bold">#{ticketId}</span>. Te
                  escribiremos a <strong className="text-[#0F172A] font-mono">{email}</strong> en cuanto
                  las aplicaciones estén disponibles en Colombia.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setEmail('');
                    setCompanyName('');
                  }}
                  className="mt-4 text-xs font-mono text-[#408340] hover:text-[#2F6F35] underline cursor-pointer font-semibold"
                >
                  Registrar otro correo de mi equipo
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-3">
                <div className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
                  <div className="relative flex-1">
                    <input
                      id="cta-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu.correo@empresa.com.co"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#408340] focus:ring-1 focus:ring-[#408340] font-mono shadow-xs transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#408340] hover:bg-[#2F6F35] border border-[#408340] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer shrink-0 active:scale-98"
                  >
                    <span>Pedir aviso prioritario</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] font-mono text-[#64748B]">
                  Cero spam. Tratamiento de datos regido por la Ley 1581 de 2012 (Habeas Data Colombia).
                </p>
              </form>
            )}

            {/* Mobile App Store Teaser */}
            <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-4 font-semibold">
                Próximamente en tiendas de aplicaciones móviles
              </span>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* App Store */}
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs text-left opacity-95 hover:opacity-100 transition-opacity">
                  <Smartphone className="w-6 h-6 text-[#408340]" />
                  <div>
                    <span className="text-[10px] font-mono text-[#64748B] block leading-tight">
                      Descárgalo en el
                    </span>
                    <span className="text-xs font-bold text-[#0F172A] font-sans">App Store (iOS)</span>
                  </div>
                </div>

                {/* Google Play */}
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs text-left opacity-95 hover:opacity-100 transition-opacity">
                  <Smartphone className="w-6 h-6 text-[#408340]" />
                  <div>
                    <span className="text-[10px] font-mono text-[#64748B] block leading-tight">
                      Disponible en
                    </span>
                    <span className="text-xs font-bold text-[#0F172A] font-sans">Google Play (Android)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
