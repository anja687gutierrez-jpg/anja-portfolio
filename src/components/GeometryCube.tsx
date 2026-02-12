"use client";

interface GeometryCubeProps {
  size?: number;
}

export function GeometryCube({ size = 80 }: GeometryCubeProps) {
  const half = size / 2;

  return (
    <div className="geo-cube-scene" style={{ width: size, height: size }}>
      <div className="geo-cube">
        <div className="geo-cube-face" style={{ transform: `rotateY(0deg) translateZ(${half}px)` }}>
          <svg viewBox="0 0 32 32" className="size-full">
            <line x1="8" y1="16" x2="24" y2="16" className="geo-cube-line" />
            <line x1="16" y1="8" x2="16" y2="24" className="geo-cube-line" />
            <circle cx="16" cy="16" r="3" className="geo-cube-dot" />
          </svg>
        </div>
        <div className="geo-cube-face" style={{ transform: `rotateY(180deg) translateZ(${half}px)` }}>
          <svg viewBox="0 0 32 32" className="size-full">
            <circle cx="16" cy="16" r="6" className="geo-cube-line" fill="none" />
            <circle cx="16" cy="16" r="1.5" className="geo-cube-dot" />
          </svg>
        </div>
        <div className="geo-cube-face" style={{ transform: `rotateY(90deg) translateZ(${half}px)` }}>
          <svg viewBox="0 0 32 32" className="size-full">
            <polygon points="16,9 23,20 9,20" className="geo-cube-line" fill="none" />
            <circle cx="16" cy="9" r="1.5" className="geo-cube-dot" />
            <circle cx="23" cy="20" r="1.5" className="geo-cube-dot" />
            <circle cx="9" cy="20" r="1.5" className="geo-cube-dot" />
          </svg>
        </div>
        <div className="geo-cube-face" style={{ transform: `rotateY(-90deg) translateZ(${half}px)` }}>
          <svg viewBox="0 0 32 32" className="size-full">
            <rect x="10" y="10" width="12" height="12" rx="1" className="geo-cube-line" fill="none" />
            <line x1="10" y1="10" x2="22" y2="22" className="geo-cube-line" />
            <line x1="22" y1="10" x2="10" y2="22" className="geo-cube-line" />
          </svg>
        </div>
        <div className="geo-cube-face" style={{ transform: `rotateX(90deg) translateZ(${half}px)` }}>
          <svg viewBox="0 0 32 32" className="size-full">
            <polygon points="16,8 24,16 16,24 8,16" className="geo-cube-line" fill="none" />
            <circle cx="16" cy="16" r="1.5" className="geo-cube-dot" />
          </svg>
        </div>
        <div className="geo-cube-face" style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }}>
          <svg viewBox="0 0 32 32" className="size-full">
            <line x1="8" y1="8" x2="24" y2="24" className="geo-cube-line" />
            <line x1="24" y1="8" x2="8" y2="24" className="geo-cube-line" />
            <circle cx="16" cy="16" r="6" className="geo-cube-line" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  );
}
