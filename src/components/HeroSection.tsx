import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Search,
  Sparkles,
  Terminal,
  Copy,
  Check,
  Zap,
  Building2,
  Award,
  ChevronRight,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { BrindoLogo } from './BrindoLogo';

interface HeroSectionProps {
  onCtaClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick, onExploreClick }) => {
  const [activeTab, setActiveTab] = useState<'talent' | 'escrow' | 'triple_a'>('talent');
  const [copied, setCopied] = useState(false);
  const [approvedEscrow, setApprovedEscrow] = useState(false);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText('npx brindo --connect-mipyme');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-32 overflow-hidden bg-[#FFFFFF] border-b border-[#E2E8F0]">
      {/* Ambient glowing orbs with smooth breathing motion exclusively in hero */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-[#70AD70]/25 via-[#408340]/10 to-transparent blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          x: [-20, 20, -20],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -left-48 w-[400px] h-[400px] bg-[#70AD70]/20 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          y: [-20, 20, -20],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 -right-48 w-[400px] h-[400px] bg-[#408340]/15 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-gh-grid opacity-70 pointer-events-none" aria-hidden="true" />

      {/* Iconic vertical spine line starting from hero */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#CBD5E1] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tag / Release pill with motion entrance */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#70AD70]/40 shadow-xs backdrop-blur-md hover:border-[#408340] transition-all cursor-pointer group">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#408340] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#408340]" />
            </span>
            <span className="text-xs font-mono font-medium text-[#2F6F35]">
              Protocolo Triple-A para MiPymes en Colombia
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#70AD70] group-hover:text-[#2F6F35] group-hover:translate-x-0.5 transition-all" />
          </div>
        </motion.div>

        {/* Hero Headline and introductory elements with staggered entrance */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] font-title"
          >
            Talento profesional.
            <br />
            <span className="bg-gradient-to-r from-[#408340] via-[#2F6F35] to-[#70AD70] bg-clip-text text-transparent">
              Cero anticipos a ciegas.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-xl text-[#475569] font-normal leading-relaxed max-w-2xl mx-auto font-sans"
          >
            La plataforma tecnológica que conecta a las MiPymes colombianas con profesionales
            verificados de universidades y del SENA. Servicios con alcance cerrado, custodia de
            fondos y tarifas fijas en COP.
          </motion.p>

          {/* CTA Group with subtle motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCtaClick}
              id="hero-primary-cta"
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#408340] hover:bg-[#2F6F35] border border-[#408340] text-white font-semibold text-sm sm:text-base shadow-[0_4px_14px_rgba(64,131,64,0.3)] hover:shadow-[0_6px_20px_rgba(47,111,53,0.4)] transition-all duration-200 cursor-pointer"
            >
              <span>Quiero conocer BRINDO</span>
              <ArrowRight className="w-4 h-4 text-emerald-100" />
            </motion.button>

            {/* CLI Command Copy */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleCopyCommand}
              className="w-full sm:w-auto inline-flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#408340] text-xs font-mono text-[#0F172A] cursor-pointer transition-colors group shadow-xs"
              title="Copiar comando de integración"
            >
              <div className="flex items-center gap-2">
                <span className="text-[#408340] font-bold">$</span>
                <span className="font-semibold">npx brindo --connect-mipyme</span>
                <span className="inline-block w-1.5 h-3.5 bg-[#408340] animate-pulse ml-0.5" />
              </div>
              <div className="flex items-center pl-2 border-l border-[#CBD5E1]">
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-[#408340]" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#0F172A]" />
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Colombian Trust Badges Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#64748B] font-medium"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#408340]" />
              <span>Custodia de pago protegida</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#408340]" />
              <span>Verificación Triple-A (SENA y Universidades)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#408340]" />
              <span>Exclusivo para MiPymes en Colombia</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Platform Inspector (The centerpiece mockup) with dedicated motion */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl bg-white border border-[#CBD5E1] shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden group">
            {/* Animated Laser beam running across the top border */}
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#70AD70] to-transparent z-20 pointer-events-none"
            />

            {/* Window title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]" />
                  <span className="w-3 h-3 rounded-full bg-[#408340]/90 border border-[#2F6F35]" />
                </div>
                <span className="text-[11px] font-mono text-[#64748B] ml-2 hidden sm:inline">
                  brindo.co/terminal/colombia-mipyme
                </span>
              </div>

              {/* Interactive Tabs with animated active indicator */}
              <div className="flex items-center gap-1 bg-[#EDF2F7] p-1 rounded-lg border border-[#CBD5E1] relative">
                <button
                  type="button"
                  onClick={() => setActiveTab('talent')}
                  className={`relative px-3 py-1 rounded-md text-xs font-mono transition-colors z-10 ${
                    activeTab === 'talent' ? 'text-white font-semibold' : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {activeTab === 'talent' && (
                    <motion.span
                      layoutId="heroActiveTabBg"
                      className="absolute inset-0 bg-[#408340] rounded-md -z-10 shadow-xs"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                    />
                  )}
                  01. Talento Verificado
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('escrow')}
                  className={`relative px-3 py-1 rounded-md text-xs font-mono transition-colors z-10 ${
                    activeTab === 'escrow' ? 'text-white font-semibold' : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {activeTab === 'escrow' && (
                    <motion.span
                      layoutId="heroActiveTabBg"
                      className="absolute inset-0 bg-[#408340] rounded-md -z-10 shadow-xs"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                    />
                  )}
                  02. Bóveda Escrow (PSE)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('triple_a')}
                  className={`relative px-3 py-1 rounded-md text-xs font-mono transition-colors z-10 ${
                    activeTab === 'triple_a' ? 'text-white font-semibold' : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {activeTab === 'triple_a' && (
                    <motion.span
                      layoutId="heroActiveTabBg"
                      className="absolute inset-0 bg-[#408340] rounded-md -z-10 shadow-xs"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                    />
                  )}
                  03. Filtro Triple-A
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#2F6F35]">
                <span className="w-2 h-2 rounded-full bg-[#408340] animate-pulse" />
                <span className="font-semibold">ONLINE</span>
              </div>
            </div>

            {/* Window Content with AnimatePresence for smooth tab switching */}
            <div className="p-6 sm:p-8 bg-white min-h-[380px] overflow-hidden">
              <AnimatePresence mode="wait">
                {/* TAB 1: TALENTO VERIFICADO */}
                {activeTab === 'talent' && (
                  <motion.div
                    key="talent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#408340] to-[#2F6F35] text-white font-bold text-xl flex items-center justify-center border border-[#70AD70]/40 shadow-sm">
                            LG
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold text-[#0F172A]">Laura Gómez</h3>
                              <span className="px-2 py-0.5 rounded-full bg-[#F0FDF4] border border-[#70AD70]/50 text-[#2F6F35] text-[10px] font-mono font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-[#408340]" /> TRIPLE-A VALIDADO
                              </span>
                            </div>
                            <p className="text-xs text-[#64748B]">
                              Tecnóloga en Desarrollo de Software • Egresada SENA + U. de Antioquia
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                          <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-[10px] font-mono text-[#64748B] block font-semibold">
                              CUMPLIMIENTO
                            </span>
                            <span className="text-sm font-bold text-[#2F6F35] font-mono">100%</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-[10px] font-mono text-[#64748B] block font-semibold">
                              PROYECTOS
                            </span>
                            <span className="text-sm font-bold text-[#0F172A] font-mono">42 MiPymes</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-[10px] font-mono text-[#64748B] block font-semibold">
                              CALIFICACIÓN
                            </span>
                            <span className="text-sm font-bold text-amber-500 font-mono">
                              ★ 4.98 / 5
                            </span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                            <span className="text-[10px] font-mono text-[#64748B] block font-semibold">
                              TIEMPO RESPUESTA
                            </span>
                            <span className="text-sm font-bold text-[#0F172A] font-mono">&lt; 15 min</span>
                          </div>
                        </div>

                        {/* Package Example */}
                        <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-[#0F172A]">
                              Servicio: Catálogo Digital + Botón de Pagos PSE
                            </span>
                            <span className="text-xs font-mono font-bold text-[#2F6F35]">
                              $580.000 COP
                            </span>
                          </div>
                          <p className="text-xs text-[#475569]">
                            Entregables: Sitio responsive, integración con WhatsApp Business, pasarela
                            PSE y manual de administración.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['React', 'Tailwind', 'PSE API', 'WhatsApp Web'].map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-[#475569] border border-[#CBD5E1]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right action block */}
                      <div className="w-full lg:w-64 p-4 rounded-xl bg-[#F0FDF4] border border-[#70AD70]/40 flex flex-col justify-between space-y-4">
                        <div>
                          <span className="text-[11px] font-mono text-[#2F6F35] block uppercase tracking-wider font-bold">
                            Garantía BRINDO
                          </span>
                          <div className="mt-2 space-y-2 text-xs text-[#0F172A]">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#408340]" />
                              <span>Identidad confirmada</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#408340]" />
                              <span>Pago retenido en custodia</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#408340]" />
                              <span>Factura legal en COP</span>
                            </div>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={onCtaClick}
                          className="w-full py-2.5 px-3 rounded-lg bg-[#408340] hover:bg-[#2F6F35] text-white text-xs font-bold font-mono transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                        >
                          <span>Contratar con Escrow</span>
                          <ArrowRight className="w-3 h-3" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: BÓVEDA ESCROW PSE */}
                {activeTab === 'escrow' && (
                  <motion.div
                    key="escrow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="max-w-3xl mx-auto space-y-6">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#F0FDF4] border border-[#70AD70]/40 flex items-center justify-center text-[#408340]">
                            <Lock className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-[#64748B] uppercase font-semibold">
                              Bóveda de Fondos #BR-84920
                            </span>
                            <h4 className="text-base font-bold text-[#0F172A]">
                              $580.000 COP en Custodia Protegida
                            </h4>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#F0FDF4] text-[#2F6F35] border border-[#70AD70]/50">
                          {approvedEscrow ? 'FONDOS LIBERADOS ✓' : 'EN CUSTODIA SEGURA'}
                        </span>
                      </div>

                      {/* Timeline flow */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                          <span className="text-[10px] font-mono text-[#2F6F35] block font-bold">
                            PASO 1: DEPÓSITO PSE
                          </span>
                          <p className="text-xs text-[#0F172A] mt-1 font-medium">
                            La MiPyme deposita $580.000 COP mediante PSE/Tarjeta sin riesgo.
                          </p>
                          <span className="mt-2 text-[10px] font-mono text-[#408340] inline-flex items-center gap-1 font-semibold">
                            <CheckCircle2 className="w-3 h-3" /> Confirmado
                          </span>
                        </div>

                        <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                          <span className="text-[10px] font-mono text-[#2F6F35] block font-bold">
                            PASO 2: EJECUCIÓN
                          </span>
                          <p className="text-xs text-[#0F172A] mt-1 font-medium">
                            El talento entrega los archivos y código en el plazo pactado.
                          </p>
                          <span className="mt-2 text-[10px] font-mono text-[#408340] inline-flex items-center gap-1 font-semibold">
                            <CheckCircle2 className="w-3 h-3" /> Entregable recibido
                          </span>
                        </div>

                        <div
                          className={`p-3.5 rounded-lg border transition-all ${
                            approvedEscrow
                              ? 'bg-[#F0FDF4] border-[#408340]'
                              : 'bg-[#F8FAFC] border-[#E2E8F0]'
                          }`}
                        >
                          <span className="text-[10px] font-mono text-[#2F6F35] block font-bold">
                            PASO 3: TU APROBACIÓN
                          </span>
                          <p className="text-xs text-[#0F172A] mt-1 font-medium">
                            Revisas el trabajo. Si estás satisfecho, liberas el desembolso.
                          </p>
                          <button
                            type="button"
                            onClick={() => setApprovedEscrow(!approvedEscrow)}
                            className="mt-2 text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-[#408340] hover:bg-[#2F6F35] text-white cursor-pointer transition-colors"
                          >
                            {approvedEscrow ? 'Deshacer prueba' : 'Probar Liberar Pago'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 3: FILTRO TRIPLE-A */}
                {activeTab === 'triple_a' && (
                  <motion.div
                    key="triple_a"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="max-w-3xl mx-auto space-y-3 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
                        <div className="flex items-center justify-between text-[#64748B] text-[11px] pb-2 border-b border-[#E2E8F0]">
                          <span>REGISTRO DE AUDITORÍA AUTOMÁTICA DE TALENTO</span>
                          <span className="text-[#2F6F35] font-bold">STATUS: 3/3 APROBADOS</span>
                        </div>

                        <div className="flex items-start gap-2.5 text-[#0F172A]">
                          <span className="text-[#408340] font-bold">[PASS]</span>
                          <div>
                            <span className="font-bold text-[#0F172A]">01. AUTENTICIDAD:</span> Validación
                            de Cédula de Ciudadanía colombiana + cruce con bases oficiales y
                            antecedentes judiciales (Policía / Procuraduría / Contraloría).
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 text-[#0F172A]">
                          <span className="text-[#408340] font-bold">[PASS]</span>
                          <div>
                            <span className="font-bold text-[#0F172A]">02. APTITUD:</span> Verificación
                            de títulos universitarios y certificaciones del SENA. Revisión de código /
                            portafolio técnico por pares especialistas.
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 text-[#0F172A]">
                          <span className="text-[#408340] font-bold">[PASS]</span>
                          <div>
                            <span className="font-bold text-[#0F172A]">03. APROBACIÓN:</span> Compromiso de
                            estándar de comunicación ejecutiva, cumplimiento de plazos y acuerdo de
                            confidencialidad firmado.
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-[#F0FDF4] border border-[#70AD70]/40 text-[#2F6F35] flex items-center justify-between">
                        <span>Resultado del filtro: Perfil habilitado para recibir depósitos protegidos</span>
                        <span className="text-[#408340] font-bold">100% CONFIABLE</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Terminal Status bar */}
            <div className="px-4 py-2 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#408340]" />
                  <span className="font-semibold text-[#0F172A]">brindo-core v1.0.4</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Modo: MiPyme Segura</span>
              </div>
              <div className="flex items-center gap-2 text-[#2F6F35] font-semibold">
                <span>Transacciones PSE protegidas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
