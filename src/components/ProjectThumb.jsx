import React from 'react';

// Stylised dashboard "screenshot": dark sidebar + white content area (as in the reference design).
export default function ProjectThumb({ sidebar = '#14287a', accent = '#3b82f6', variant = 'line' }) {
  const gid = `g-${accent.replace('#', '')}-${variant}`;
  return (
    <svg viewBox="0 0 200 112" className="w-full h-full block" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={accent} stopOpacity="0.35" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="200" height="112" fill={sidebar} />
      {/* sidebar */}
      <rect x="7" y="9" width="8" height="8" rx="2" fill={accent} />
      <rect x="18" y="11" width="12" height="3" rx="1.5" fill="#fff" opacity="0.7" />
      {[26, 36, 46, 56, 66, 76].map((y) => (
        <rect key={y} x="8" y={y} width="20" height="3.5" rx="1.75" fill="#fff" opacity="0.22" />
      ))}
      {/* white content */}
      <path d="M36 112 V14 Q36 8 42 8 H192 Q198 8 198 14 V112 Z" fill="#f7f9ff" />
      <rect x="42" y="13" width="34" height="4" rx="2" fill="#1e293b" opacity="0.7" />
      <circle cx="176" cy="15" r="2.5" fill="#94a3b8" />
      <circle cx="184" cy="15" r="2.5" fill="#94a3b8" />
      <circle cx="192" cy="15" r="2.5" fill={accent} />
      {/* stat tiles */}
      {[42, 83, 124, 165].map((x, i) => (
        <g key={x}>
          <rect x={x} y="23" width={i === 3 ? 28 : 37} height="19" rx="3" fill="#fff" stroke="#e2e8f0" />
          <rect x={x + 4} y="27" width="12" height="2.5" rx="1.25" fill="#94a3b8" />
          <rect x={x + 4} y="33" width="14" height="4.5" rx="2" fill={accent} opacity="0.9" />
        </g>
      ))}
      {/* main visual */}
      <rect x="42" y="47" width="108" height="62" rx="3" fill="#fff" stroke="#e2e8f0" />
      <rect x="156" y="47" width="37" height="62" rx="3" fill="#fff" stroke="#e2e8f0" />
      {[54, 62, 70, 78, 86].map((y) => (
        <g key={y}>
          <rect x="160" y={y} width="5" height="4" rx="1" fill={accent} opacity="0.8" />
          <rect x="168" y={y + 0.5} width="20" height="3" rx="1.5" fill="#cbd5e1" />
        </g>
      ))}
      {variant === 'line' && (
        <>
          <path d="M48 98 L62 88 L76 92 L92 78 L106 84 L122 66 L136 72 L146 60 L146 104 L48 104 Z" fill={`url(#${gid})`} />
          <path d="M48 98 L62 88 L76 92 L92 78 L106 84 L122 66 L136 72 L146 60" fill="none" stroke={accent} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
        </>
      )}
      {variant === 'bars' &&
        [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const h = [10, 16, 12, 22, 17, 28, 22, 34][i];
          return <rect key={i} x={52 + i * 12} y={104 - h} width="7" height={h} rx="1.5" fill={accent} />;
        })}
      {variant === 'table' &&
        [0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x="48" y={54 + i * 10} width="96" height="6" rx="2" fill={i === 0 ? '#e0e7ff' : '#f1f5f9'} />
            <rect x="51" y={56 + i * 10} width="26" height="2.5" rx="1.25" fill="#64748b" />
            <rect x="122" y={56 + i * 10} width="18" height="2.5" rx="1.25" fill={accent} />
          </g>
        ))}
    </svg>
  );
}
