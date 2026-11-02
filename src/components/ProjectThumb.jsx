import React from 'react';

// Stylised dashboard preview used as the project card image.
export default function ProjectThumb({ accent = '#38bdf8', variant = 'line' }) {
  const gid = `g-${accent.replace('#', '')}-${variant}`;
  return (
    <svg viewBox="0 0 200 112" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={accent} stopOpacity="0.55" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`bg-${gid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f1f4d" />
          <stop offset="1" stopColor="#071231" />
        </linearGradient>
      </defs>
      <rect width="200" height="112" fill={`url(#bg-${gid})`} />
      {/* sidebar */}
      <rect x="0" y="0" width="34" height="112" fill="#0a1740" />
      <rect x="8" y="10" width="18" height="5" rx="2.5" fill={accent} />
      {[26, 38, 50, 62, 74].map((y) => (
        <rect key={y} x="8" y={y} width="18" height="4" rx="2" fill="#ffffff" opacity="0.18" />
      ))}
      {/* top bar */}
      <rect x="42" y="8" width="60" height="6" rx="3" fill="#ffffff" opacity="0.2" />
      <circle cx="186" cy="11" r="5" fill={accent} opacity="0.9" />
      {/* stat tiles */}
      {[42, 83, 124].map((x, i) => (
        <g key={x}>
          <rect x={x} y="22" width="36" height="20" rx="4" fill="#ffffff" opacity="0.08" />
          <rect x={x + 5} y="27" width="14" height="3" rx="1.5" fill="#ffffff" opacity="0.4" />
          <rect x={x + 5} y="33" width={10 + i * 4} height="5" rx="2" fill={accent} opacity="0.9" />
        </g>
      ))}
      <rect x="165" y="22" width="26" height="20" rx="4" fill="#ffffff" opacity="0.08" />
      {/* main visual */}
      <rect x="42" y="48" width="149" height="56" rx="5" fill="#ffffff" opacity="0.06" />
      {variant === 'line' && (
        <>
          <path d="M46 94 L66 80 L84 86 L104 66 L124 74 L146 56 L168 62 L187 54 L187 102 L46 102 Z" fill={`url(#${gid})`} />
          <path d="M46 94 L66 80 L84 86 L104 66 L124 74 L146 56 L168 62 L187 54" fill="none" stroke={accent} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        </>
      )}
      {variant === 'bars' &&
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          const h = [18, 26, 20, 34, 28, 40, 32, 44, 36, 46][i];
          return <rect key={i} x={50 + i * 14} y={100 - h} width="9" height={h} rx="2" fill={accent} opacity={0.5 + i * 0.05} />;
        })}
      {variant === 'table' &&
        [0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x="48" y={54 + i * 10} width="137" height="7" rx="2" fill="#ffffff" opacity={i === 0 ? 0.22 : 0.09} />
            <rect x="52" y={56 + i * 10} width="30" height="3" rx="1.5" fill="#ffffff" opacity="0.5" />
            <rect x="150" y={56 + i * 10} width="26" height="3" rx="1.5" fill={accent} opacity="0.9" />
          </g>
        ))}
    </svg>
  );
}
