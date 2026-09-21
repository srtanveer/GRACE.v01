'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AlumniPhoto({ studentId, name, src, sizes, className = 'object-cover' }) {
  const sources = [...new Set([src, `/images/alumni/${studentId}.jpg`, `/images/alumni/${studentId}.webp`, `/images/alumni/${studentId}.png`].filter(Boolean))];
  const [sourceIndex, setSourceIndex] = useState(0);
  const currentSource = sources[sourceIndex];

  if (!currentSource) {
    return <PhotoPlaceholder />;
  }

  return (
    <Image
      src={currentSource}
      alt={`${name} photo`}
      fill
      sizes={sizes}
      className={className}
      onError={() => {
        if (sourceIndex < sources.length - 1) {
          setSourceIndex((index) => index + 1);
        } else {
          setSourceIndex(sources.length);
        }
      }}
    />
  );
}

export function PhotoPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-green/25 to-brand-blue/20 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue/55">
      Photo<br />placeholder
    </div>
  );
}
