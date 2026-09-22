import React from 'react';
import {
  ShieldCheck,
  Lock,
  FileText,
  UserCheck,
  Headphones,
  CheckCircle2,
  Terminal,
  Server,
  KeyRound,
  FileCode2,
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  const securityPillars = [
    {
      icon: Lock,
      title: 'Custodia de Fondos Fiduciaria',
      spec: 'ESCROW BANCARIO PSE',
      description:
        'Tu dinero permanece asegurado en una bóveda neutral durante todo el desarrollo del servicio. Solo se desembolsa cuando confirmas la recepción del entregable a satisfacción.',
      status: 'ACTIVO',
    },
    {
      icon: UserCheck,
      title: 'Validación de Identidad & Antecedentes',
      spec: 'CÉDULA + POLICÍA NACIONAL',
      description:
        'Cada profesional es autenticado mediante su Cédula de Ciudadanía colombiana, con verificación automática de antecedentes en la Policía, Procuraduría y Contraloría.',
      status: 'VERIFICADO',
    },
    {
      icon: FileText,
      title: 'Cumplimiento Legal y Habeas Data',
      spec: 'LEY 1581 DE 2012 (COLOMBIA)',
      description:
        'Tus datos comerciales y personales están protegidos bajo estricto cumplimiento de la legislación colombiana, con acuerdos de confidencialidad (NDA) por defecto.',
      status: 'CONFORME',
    },
    {
      icon: Headphones,
      title: 'Mesa de Mediación Imparcial',
      spec: 'RESOLUCIÓN DE DISPUTAS',
      description:
        'Si un entregable no cumple con las especificaciones acordadas en la plataforma, nuestro equipo audita las evidencias y garantiza el reembolso oportuno.',
      status: '24/7 SOPORTE',
    },
  ];

  return (
    <section id="confianza" className="py-24 sm:py-32 bg-[#FFFFFF] relative border-b border-[#E2E8F0]">
      {/* Background glow */}
      <div
        className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-[#70AD70]/10 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#70AD70]/40 text-[#2F6F35] text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#408340]" />
            <span>06 // TRUST & SECURITY ENTERPRISE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-title">
            Diseñado para operar con total tranquilidad
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            Un marco de seguridad informática, legal y fiduciario construido meticulosamente para
            proteger el patrimonio y el tiempo de las empresas en Colombia.
          </p>
        </div>

        {/* 4 Security Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {securityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#E2E8F0] hover:border-[#408340] hover:shadow-md transition-all duration-200 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F0FDF4] border border-[#70AD70]/40 text-[#408340] flex items-center justify-center group-hover:bg-[#408340] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#F0FDF4] text-[#2F6F35] border border-[#70AD70]/40">
                      {item.status}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#64748B] block mb-1 font-semibold">
                    {item.spec}
                  </span>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 font-title">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-mono text-[#2F6F35] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#408340]" />
                  <span>Protocolo verificado</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Terminal / Audit Log */}
        <div className="mt-12 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-8 font-mono text-xs shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-[#0F172A] font-bold">
              <Server className="w-4 h-4 text-[#408340]" />
              <span>COLOMBIA COMPLIANCE & SECURITY AUDIT</span>
            </div>
            <span className="text-[11px] text-[#2F6F35] flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#408340] animate-pulse" />
              <span>SISTEMAS OPERACIONALES EN BOGOTÁ D.C.</span>
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#475569]">
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] shadow-xs">
              <span className="text-[#0F172A] block font-bold mb-1">Cifrado de Extremo a Extremo</span>
              <p className="text-[11px] text-[#64748B]">
                Comunicaciones y transacciones financieras procesadas bajo cifrado TLS 1.3 de grado
                bancario.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] shadow-xs">
              <span className="text-[#0F172A] block font-bold mb-1">Pasarela Bancaria PSE</span>
              <p className="text-[11px] text-[#64748B]">
                Integración directa con ACH Colombia para pagos inmediatos desde cualquier entidad
                financiera del país.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0] shadow-xs">
              <span className="text-[#0F172A] block font-bold mb-1">Habeas Data Certificado</span>
              <p className="text-[11px] text-[#64748B]">
                Superintendencia de Industria y Comercio (SIC): estricta privacidad sobre datos de
                clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
