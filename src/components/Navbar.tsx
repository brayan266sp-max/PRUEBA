import React, { useState, useEffect } from 'react';
import { BrindoLogo } from './BrindoLogo';
import { Menu, X, ArrowRight, Terminal, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'El Reto', href: '#problema' },
    { label: 'Solución', href: '#solucion' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Talento', href: '#talento' },
    { label: 'Categorías', href: '#categorias' },
    { label: 'Seguridad', href: '#confianza' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] py-2.5 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#E2E8F0]/70 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo on Left */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="BRINDO Inicio"
          >
            <BrindoLogo
              variant="horizontal"
              iconSize={38}
              color="#408340"
              textColor="#2F6F35"
            />
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#F0FDF4] border border-[#70AD70]/40 text-[#2F6F35]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#408340] animate-pulse" />
              v1.0-preview
            </span>
          </a>

          {/* Centered Navigation Links */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-1 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-[#475569] hover:text-[#2F6F35] px-3.5 py-1.5 rounded-full hover:bg-white hover:shadow-xs transition-all duration-150 font-sans"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions on Right */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#como-funciona"
              className="text-xs font-mono text-[#64748B] hover:text-[#2F6F35] px-2.5 py-1.5 transition-colors hidden lg:flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-[#408340]" />
              <span>docs</span>
            </a>

            <button
              onClick={onCtaClick}
              id="nav-cta-btn"
              type="button"
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-[#408340] hover:bg-[#2F6F35] border border-[#408340] px-4 py-2 rounded-md shadow-[0_2px_8px_rgba(64,131,64,0.25)] hover:shadow-[0_4px_12px_rgba(47,111,53,0.35)] transition-all duration-150 active:scale-98 cursor-pointer"
            >
              <span>Acceso prioritario</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-100" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="p-2 rounded-lg text-[#475569] hover:text-[#2F6F35] hover:bg-[#F1F5F9] border border-[#E2E8F0] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#475569] hover:text-[#2F6F35] hover:bg-[#F8FAFC] px-3 py-2 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E2E8F0]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCtaClick();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#408340] hover:bg-[#2F6F35] border border-[#408340] px-4 py-2.5 rounded-md shadow-sm transition-colors"
            >
              <span>Acceso prioritario MiPyme</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
