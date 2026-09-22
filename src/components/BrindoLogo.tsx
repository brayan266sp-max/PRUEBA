import React from 'react';

interface BrindoLogoProps {
  className?: string;
  variant?: 'vertical' | 'horizontal' | 'icon-only';
  color?: string; // stroke and text color
  textColor?: string;
  iconSize?: number;
  showText?: boolean;
}

export const BrindoLogo: React.FC<BrindoLogoProps> = ({
  className = '',
  variant = 'vertical',
  color = '#408340',
  textColor,
  iconSize = 54,
  showText = true,
}) => {
  const resolvedTextColor = textColor || (color === '#FFFFFF' ? '#FFFFFF' : '#2F6F35');

  // Single-line smiley + handshake SVG matching the user's brand emblem
  const renderIcon = () => (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
      aria-label="Logo BRINDO - Apretón de manos y rostro sonriente"
    >
      <g
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Upper head arch of the smiling face */}
        <path d="M 38 98 C 38 46 68 28 100 28 C 132 28 162 46 162 98" />

        {/* Smiling Eyes (curved closed happy eye arcs) */}
        <path d="M 72 68 C 76 61 84 61 88 68" strokeWidth="8" />
        <path d="M 112 68 C 116 61 124 61 128 68" strokeWidth="8" />

        {/* Happy Smile */}
        <path d="M 80 88 C 90 102 110 102 120 88" strokeWidth="8" />

        {/* Outer arms entering the handshake */}
        {/* Left forearm */}
        <path d="M 32 102 C 50 106 66 102 80 108" />
        {/* Right forearm */}
        <path d="M 168 102 C 150 106 134 102 120 108" />

        {/* Handshake clasping: right thumb crossing over left palm */}
        <path d="M 80 108 C 92 100 102 91 116 102 C 126 111 118 123 104 130 L 92 135" />
        <path d="M 106 106 C 97 115 88 122 74 129" />

        {/* Interlocking 4 rounded fingers underneath gripping securely */}
        <path d="M 66 130 C 60 137 67 148 76 142 C 81 150 90 153 97 146 C 104 153 115 150 120 141 C 125 147 135 141 138 132" />

        {/* Lower wrist cuff contours */}
        <path d="M 30 130 L 56 139" />
        <path d="M 170 130 L 144 139" />
      </g>
    </svg>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-flex items-center ${className}`}>{renderIcon()}</div>;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        {renderIcon()}
        {showText && (
          <span
            className="font-extrabold tracking-wider leading-none select-none"
            style={{
              color: resolvedTextColor,
              fontFamily: "'Sora', sans-serif",
              fontSize: `${Math.round(iconSize * 0.44)}px`,
            }}
          >
            BRINDO
          </span>
        )}
      </div>
    );
  }

  // Default: vertical layout (Icon on top, BRINDO bold text below) as specified in brand guide
  return (
    <div className={`inline-flex flex-col items-center justify-center text-center ${className}`}>
      {renderIcon()}
      {showText && (
        <span
          className="font-extrabold tracking-[0.18em] leading-tight select-none mt-1"
          style={{
            color: resolvedTextColor,
            fontFamily: "'Sora', sans-serif",
            fontSize: `${Math.round(iconSize * 0.38)}px`,
          }}
        >
          BRINDO
        </span>
      )}
    </div>
  );
};
