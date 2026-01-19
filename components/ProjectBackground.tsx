// ProjectBackground.tsx
'use client';

export default function ProjectBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(0, 255, 136, 0.3) 1px, transparent 1px),
            radial-gradient(circle, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 25px 25px',
          animation: 'scrollDots 20s linear infinite',
        }}
      />
      
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
        }}
      />

      <style jsx>{`
        @keyframes scrollDots {
          0% {
            background-position: 0 0, 25px 25px;
          }
          100% {
            background-position: 50px 50px, 75px 75px;
          }
        }
      `}</style>
    </div>
  );
}