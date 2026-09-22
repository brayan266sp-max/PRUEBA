import React from 'react';
import {
  Palette,
  Megaphone,
  Code2,
  Calculator,
  Video,
  FileSpreadsheet,
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface CategoriesCarouselProps {
  onSelectCategory?: (category: string) => void;
}

export const CategoriesCarousel: React.FC<CategoriesCarouselProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'diseno',
      name: 'Diseño & Identidad Visual',
      description: 'Logotipos, manuales de marca, piezas comerciales y material publicitario.',
      icon: Palette,
      deliverables: 'Archivos vectoriales + Guía de marca',
      typicalSla: '3 a 5 días hábiles',
      startingCop: 'Desde $350.000 COP',
      tags: ['Figma', 'Illustrator', 'Branding'],
    },
    {
      id: 'marketing',
      name: 'Marketing Digital & Pauta',
      description: 'Campañas en Meta Ads, Google Ads, estrategia de contenidos y SEO local.',
      icon: Megaphone,
      deliverables: 'Estrategia + Configuración de píxeles',
      typicalSla: '4 a 7 días hábiles',
      startingCop: 'Desde $420.000 COP',
      tags: ['Meta Ads', 'Google Ads', 'Growth'],
    },
    {
      id: 'web',
      name: 'Desarrollo Web & Tiendas',
      description: 'Sitios web institucionales, tiendas Shopify, catálogos interactivos y pasarelas PSE.',
      icon: Code2,
      deliverables: 'Web responsive + Código fuente',
      typicalSla: '5 a 10 días hábiles',
      startingCop: 'Desde $580.000 COP',
      tags: ['Next.js', 'WordPress', 'Shopify'],
    },
    {
      id: 'contabilidad',
      name: 'Gestión & Finanzas MiPyme',
      description: 'Plantillas financieras avanzadas, parametrización de costos y asesoría básica.',
      icon: Calculator,
      deliverables: 'Modelos en Excel/Sheets + Asesoría',
      typicalSla: '2 a 4 días hábiles',
      startingCop: 'Desde $280.000 COP',
      tags: ['Excel Avanzado', 'Costos', 'DIAN'],
    },
    {
      id: 'audiovisual',
      name: 'Video & Contenido Digital',
      description: 'Edición de Reels, TikToks comerciales, videos corporativos y animación gráfica.',
      icon: Video,
      deliverables: 'Videos optimizados 9:16 + Subtítulos',
      typicalSla: '3 a 5 días hábiles',
      startingCop: 'Desde $320.000 COP',
      tags: ['Premiere', 'CapCut Pro', 'After Effects'],
    },
    {
      id: 'administrativo',
      name: 'Soporte & Asesoría Legal',
      description: 'Estatutos, contratos comerciales básicos, políticas de datos y servicio al cliente.',
      icon: FileSpreadsheet,
      deliverables: 'Documentos contractuales auditados',
      typicalSla: '2 a 4 días hábiles',
      startingCop: 'Desde $290.000 COP',
      tags: ['Habeas Data', 'Contratos', 'Procesos'],
    },
  ];

  // Duplicate for seamless infinite loop
  const duplicatedCategories = [...categories, ...categories];

  return (
    <section id="categorias" className="py-24 sm:py-32 bg-[#FFFFFF] relative border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#70AD70]/40 text-[#2F6F35] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#408340]" />
            <span>05 // CATÁLOGO DE SERVICIOS PROFESIONALES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-title">
            Servicios listos para contratar
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            Paquetes delimitados y estandarizados para que resuelvas las necesidades más urgentes
            de tu empresa con entregables precisos y presupuestos claros.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="mt-14 relative w-full overflow-hidden">
        {/* Left & Right Gradient Shadows */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="animate-infinite-scroll flex gap-5 py-4">
          {duplicatedCategories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => onSelectCategory && onSelectCategory(item.name)}
                className="w-[300px] sm:w-[340px] shrink-0 bg-white rounded-xl p-6 border border-[#E2E8F0] hover:border-[#408340] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F0FDF4] border border-[#70AD70]/40 text-[#408340] flex items-center justify-center group-hover:bg-[#408340] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#64748B] px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                      ENTREGABLE ESTANDARIZADO
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#408340] transition-colors font-title">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-[#64748B] text-[11px]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#408340]" />
                      <span>{item.typicalSla}</span>
                    </span>
                    <span className="text-[#0F172A] font-bold">{item.startingCop}</span>
                  </div>

                  <div className="flex items-center justify-between text-[#408340] text-[11px] font-semibold pt-1">
                    <span>Ver paquetes disponibles</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
