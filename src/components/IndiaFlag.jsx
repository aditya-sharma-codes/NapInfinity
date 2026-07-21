import React from 'react';

export default function IndiaFlag({ className = "w-5 h-3.5" }) {
  return (
    <svg 
      viewBox="0 0 900 600" 
      className={`inline-block align-middle rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.15)] border border-slate-200/50 shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="900" height="200" fill="#FF9933" />
      <rect y="200" width="900" height="200" fill="#FFFFFF" />
      <rect y="400" width="900" height="200" fill="#138808" />
      <g transform="translate(450, 300)">
        <circle r="92" fill="none" stroke="#000080" strokeWidth="6.5" />
        <circle r="16" fill="#000080" />
        {[...Array(24)].map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x = 92 * Math.cos(angle);
          const y = 92 * Math.sin(angle);
          return (
            <line 
              key={i} 
              x1="0" 
              y1="0" 
              x2={x} 
              y2={y} 
              stroke="#000080" 
              strokeWidth="3.5" 
            />
          );
        })}
      </g>
    </svg>
  );
}
