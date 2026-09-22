import React, { useState } from 'react';
import { BrindoLogo } from './BrindoLogo';
import { Shield, Lock, FileText, CheckCircle2, X, Terminal, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#FFFFFF] text-[#64748B] text-xs border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand + Colombian Mission */}
          <div className="md:col-span-2 space-y-4">
            <BrindoLogo
              variant="horizontal"
              iconSize={40}
              color="#408340"
              textColor="#0F172A"
            />

            <p className="text-xs text-[#475569] leading-relaxed max-w-sm">
              Plataforma tecnológica colombiana que conecta micro, pequeñas y medianas empresas con
              talento profesional y técnico verificado. Custodia fiduciaria de pagos y contratos
              delimitados.
            </p>

            {/* Live Operational Status */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0FDF4] border border-[#70AD70]/40 text-[11px] font-mono text-[#2F6F35] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#408340] animate-pulse" />
                <span>Sistemas operacionales • Bogotá D.C., Colombia 🇨🇴</span>
              </div>
            </div>
          </div>

          {/* Col 3: Plataforma */}
          <div>
            <h4 className="text-[#0F172A] font-mono text-xs font-bold uppercase tracking-wider mb-3">
              Plataforma
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a href="#solucion" className="hover:text-[#0F172A] transition-colors">
                  Protocolo Triple-A
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#0F172A] transition-colors">
                  Custodia Escrow (PSE)
                </a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-[#0F172A] transition-colors">
                  Catálogo de Servicios
                </a>
              </li>
              <li>
                <a href="#problema" className="hover:text-[#0F172A] transition-colors">
                  Comparativa de Riesgo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Talento */}
          <div>
            <h4 className="text-[#0F172A] font-mono text-xs font-bold uppercase tracking-wider mb-3">
              Talento Verificado
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a href="#talento" className="hover:text-[#0F172A] transition-colors">
                  Egresados SENA
                </a>
              </li>
              <li>
                <a href="#talento" className="hover:text-[#0F172A] transition-colors">
                  Talento Universitario
                </a>
              </li>
              <li>
                <a href="#talento" className="hover:text-[#0F172A] transition-colors">
                  Especialistas Senior
                </a>
              </li>
              <li>
                <a href="#registro" className="hover:text-[#2F6F35] transition-colors text-[#408340] font-bold">
                  Postularme como Talento ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Cumplimiento */}
          <div>
            <h4 className="text-[#0F172A] font-mono text-xs font-bold uppercase tracking-wider mb-3">
              Seguridad & Legal
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => setModalContent('privacy')}
                  className="hover:text-[#0F172A] transition-colors text-left cursor-pointer"
                >
                  Habeas Data (Ley 1581)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalContent('terms')}
                  className="hover:text-[#0F172A] transition-colors text-left cursor-pointer"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <a href="#confianza" className="hover:text-[#0F172A] transition-colors">
                  Protección al Consumidor
                </a>
              </li>
              <li>
                <a href="#confianza" className="hover:text-[#0F172A] transition-colors">
                  Mesa de Mediación
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#64748B]">
          <p>© {new Date().getFullYear()} BRINDO SAS. Todos los derechos reservados. Colombia.</p>
          <div className="flex items-center gap-4">
            <span>Hecho para las MiPymes de Colombia</span>
            <span>•</span>
            <span className="text-[#2F6F35] font-bold">Estándar Triple-A</span>
          </div>
        </div>
      </div>

      {/* Modal: Legal Terms / Privacy Policy */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-white border border-[#CBD5E1] rounded-2xl p-6 sm:p-8 overflow-y-auto text-[#0F172A] shadow-2xl">
            <button
              onClick={() => setModalContent(null)}
              type="button"
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 p-2 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] border border-[#E2E8F0] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {modalContent === 'privacy' && (
              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#2F6F35] font-bold text-sm">
                  <Shield className="w-5 h-5 text-[#408340]" />
                  <span>POLÍTICA DE PRIVACIDAD Y HABEAS DATA (COLOMBIA)</span>
                </div>
                <p className="text-[#475569] leading-relaxed">
                  En cumplimiento de la <strong>Ley Estatutaria 1581 de 2012</strong> y el Decreto
                  1377 de 2013 de la República de Colombia, BRINDO SAS informa que los datos
                  recolectados serán tratados con las siguientes finalidades:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#475569]">
                  <li>
                    Gestionar el aviso de lanzamiento oficial de las aplicaciones móviles en Colombia.
                  </li>
                  <li>
                    Verificar antecedentes e identidad con bases de datos públicas oficiales.
                  </li>
                  <li>
                    Custodiar y garantizar las transacciones financieras a través de la pasarela PSE.
                  </li>
                  <li>
                    No compartimos ni comercializamos bases de datos con terceros con fines
                    publicitarios.
                  </li>
                </ul>
                <p className="text-[#475569]">
                  Para ejercer sus derechos de conocer, actualizar, rectificar y suprimir sus datos,
                  puede escribir a <span className="text-[#408340] font-bold">habeasdata@brindo.co</span>.
                </p>
              </div>
            )}

            {modalContent === 'terms' && (
              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#2F6F35] font-bold text-sm">
                  <FileText className="w-5 h-5 text-[#408340]" />
                  <span>TÉRMINOS Y CONDICIONES DE SERVICIO</span>
                </div>
                <p className="text-[#475569] leading-relaxed">
                  BRINDO opera como un intermediario tecnológico seguro que facilita la contratación
                  de servicios independientes entre empresarios MiPyme y profesionales verificados
                  en Colombia.
                </p>
                <div className="space-y-2 text-[#475569]">
                  <p>
                    <strong className="text-[#0F172A]">1. Custodia Fiduciaria:</strong> Los pagos
                    efectuados por las MiPymes se depositan en una cuenta de custodia temporal
                    (Escrow). El prestador no recibe los fondos hasta que el cliente emita la
                    aprobación formal del entregable acordado.
                  </p>
                  <p>
                    <strong className="text-[#0F172A]">2. Filtro Triple-A:</strong> Todo prestador debe
                    aportar cédula de ciudadanía colombiana válida y soportar títulos académicos o
                    técnicos. Perfiles con antecedentes judiciales sancionatorios serán inhabilitados.
                  </p>
                  <p>
                    <strong className="text-[#0F172A]">3. Mesa de Mediación:</strong> En caso de
                    inconformidad con el alcance pactado, ambas partes se acogen al procedimiento de
                    resolución imparcial de BRINDO antes de cualquier liberación o reintegro de
                    fondos.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex justify-end">
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="px-4 py-2 rounded-lg bg-[#408340] hover:bg-[#2F6F35] text-white text-xs font-mono font-bold cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
