'use client';

import { useEffect, useRef } from 'react';

export function RetroBackgrounds() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 1000);
        this.y = Math.random() * (canvas?.height || 1000);
        this.size = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.twinklePhase += this.twinkleSpeed;
      }

      draw() {
        if (!ctx) return;
        const twinkle = Math.sin(this.twinklePhase) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * twinkle})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    type PlanetType = 'earth' | 'mars' | 'gas-giant' | 'ice' | 'lava' | 'ringed';

    class Planet {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      type: PlanetType;
      hasRings: boolean;
      colors: {
        base: string[];
        shadow: string;
        highlight: string;
        atmosphere?: string;
      };

      constructor() {
        this.x = Math.random() * (canvas?.width || 1000);
        this.y = Math.random() * (canvas?.height || 1000);
        
        const sizeVariation = Math.random();
        if (sizeVariation < 0.3) {
          this.size = Math.random() * 15 + 10; 
        } else if (sizeVariation < 0.7) {
          this.size = Math.random() * 25 + 25; 
        } else {
          this.size = Math.random() * 30 + 50; 
        }
        
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;

        const types: PlanetType[] = ['earth', 'mars', 'gas-giant', 'ice', 'lava', 'ringed'];
        this.type = types[Math.floor(Math.random() * types.length)];
        this.hasRings = this.type === 'ringed' || Math.random() > 0.8;

        this.colors = this.getPlanetColors(this.type);
      }

      getPlanetColors(type: PlanetType) {
        switch (type) {
          case 'earth':
            return {
              base: ['#1e3a8a', '#3b82f6', '#10b981', '#22c55e'],
              shadow: '#0c1e42',
              highlight: '#60a5fa',
              atmosphere: 'rgba(147, 197, 253, 0.3)'
            };
          case 'mars':
            return {
              base: ['#dc2626', '#ea580c', '#f97316', '#ca8a04'],
              shadow: '#7c2d12',
              highlight: '#fb923c',
              atmosphere: 'rgba(251, 146, 60, 0.2)'
            };
          case 'gas-giant':
            return {
              base: ['#f59e0b', '#fbbf24', '#fcd34d', '#fef3c7'],
              shadow: '#78350f',
              highlight: '#fef08a',
              atmosphere: 'rgba(254, 240, 138, 0.3)'
            };
          case 'ice':
            return {
              base: ['#06b6d4', '#22d3ee', '#a5f3fc', '#e0f2fe'],
              shadow: '#164e63',
              highlight: '#cffafe',
              atmosphere: 'rgba(165, 243, 252, 0.3)'
            };
          case 'lava':
            return {
              base: ['#991b1b', '#dc2626', '#f97316', '#facc15'],
              shadow: '#450a0a',
              highlight: '#fbbf24',
              atmosphere: 'rgba(251, 191, 36, 0.4)'
            };
          case 'ringed':
            return {
              base: ['#a78bfa', '#c4b5fd', '#e9d5ff', '#fae8ff'],
              shadow: '#5b21b6',
              highlight: '#f3e8ff',
              atmosphere: 'rgba(243, 232, 255, 0.3)'
            };
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        const canvasWidth = canvas?.width || 1000;
        const canvasHeight = canvas?.height || 1000;

        if (this.x < -this.size * 2) this.x = canvasWidth + this.size * 2;
        if (this.x > canvasWidth + this.size * 2) this.x = -this.size * 2;
        if (this.y < -this.size * 2) this.y = canvasHeight + this.size * 2;
        if (this.y > canvasHeight + this.size * 2) this.y = -this.size * 2;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        if (this.hasRings) {
          this.drawRings(true);
        }

        if (this.colors.atmosphere) {
          const atmosphereGradient = ctx.createRadialGradient(0, 0, this.size * 0.8, 0, 0, this.size * 1.3);
          atmosphereGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
          atmosphereGradient.addColorStop(1, this.colors.atmosphere);
          ctx.fillStyle = atmosphereGradient;
          ctx.beginPath();
          ctx.arc(0, 0, this.size * 1.3, 0, Math.PI * 2);
          ctx.fill();
        }

        const gradient = ctx.createRadialGradient(
          -this.size * 0.3, -this.size * 0.3, this.size * 0.1,
          0, 0, this.size
        );

        gradient.addColorStop(0, this.colors.highlight);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();

        const shadowGradient = ctx.createRadialGradient(
          this.size * 0.3, this.size * 0.3, 0,
          this.size * 0.3, this.size * 0.3, this.size * 1.2
        );
        shadowGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        shadowGradient.addColorStop(0.6, 'rgba(0, 0, 0, 0.4)');
        shadowGradient.addColorStop(1, 'rgba(0, 0, 0, 0.7)');
        ctx.fillStyle = shadowGradient;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();

        const highlightGradient = ctx.createRadialGradient(
          -this.size * 0.4, -this.size * 0.4, 0,
          -this.size * 0.4, -this.size * 0.4, this.size * 0.5
        );
        highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
        highlightGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
        highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = highlightGradient;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();

        if (this.hasRings) {
          this.drawRings(false);
        }

        ctx.restore();
      }

      drawRings(isBack: boolean) {
        if (!ctx) return;
        
        const ringInner = this.size * 1.3;
        const ringOuter = this.size * 2;
        const ringThickness = ringOuter - ringInner;

        ctx.save();
        
        ctx.scale(1, 0.3);

        if (isBack) {
          ctx.globalAlpha = 0.4;
          const ringGradient = ctx.createRadialGradient(0, 0, ringInner, 0, 0, ringOuter);
          ringGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
          ringGradient.addColorStop(0.3, this.colors.shadow);
          ringGradient.addColorStop(0.7, this.colors.base[0]);
          ringGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = ringGradient;
          ctx.beginPath();
          ctx.arc(0, 0, ringOuter, Math.PI, Math.PI * 2);
          ctx.arc(0, 0, ringInner, Math.PI * 2, Math.PI, true);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.globalAlpha = 0.6;
          const ringGradient = ctx.createRadialGradient(0, 0, ringInner, 0, 0, ringOuter);
          ringGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
          ringGradient.addColorStop(0.3, this.colors.base[1] || this.colors.base[0]);
          ringGradient.addColorStop(0.7, this.colors.highlight);
          ringGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = ringGradient;
          ctx.beginPath();
          ctx.arc(0, 0, ringOuter, 0, Math.PI);
          ctx.arc(0, 0, ringInner, Math.PI, 0, true);
          ctx.closePath();
          ctx.fill();

          ctx.globalAlpha = 0.3;
          for (let i = 0; i < 3; i++) {
            const bandRadius = ringInner + (ringThickness / 3) * i;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(0, 0, bandRadius, 0, Math.PI);
            ctx.stroke();
          }
        }

        ctx.globalAlpha = 1;
        ctx.restore();
      }
    }

    class Spaceship {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      size: number;
      angle: number;
      trailPositions: { x: number; y: number; opacity: number }[];

      constructor() {
        this.x = Math.random() * (canvas?.width || 1000);
        this.y = Math.random() * (canvas?.height || 1000);
        this.speedX = (Math.random() - 0.5) * 3 + 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.size = 15;
        this.angle = Math.atan2(this.speedY, this.speedX);
        this.trailPositions = [];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle = Math.atan2(this.speedY, this.speedX);

        this.trailPositions.push({ 
          x: this.x, 
          y: this.y, 
          opacity: 1 
        });

        this.trailPositions = this.trailPositions
          .map(pos => ({ ...pos, opacity: pos.opacity - 0.05 }))
          .filter(pos => pos.opacity > 0)
          .slice(-20);

        const canvasWidth = canvas?.width || 1000;
        const canvasHeight = canvas?.height || 1000;

        if (this.x < -this.size) {
          this.x = canvasWidth + this.size;
          this.trailPositions = [];
        }
        if (this.x > canvasWidth + this.size) {
          this.x = -this.size;
          this.trailPositions = [];
        }
        if (this.y < -this.size) this.y = canvasHeight + this.size;
        if (this.y > canvasHeight + this.size) this.y = -this.size;
      }

      draw() {
        if (!ctx) return;

        this.trailPositions.forEach((pos, i) => {
          ctx.fillStyle = `rgba(0, 255, 255, ${pos.opacity * 0.3})`;
          const trailSize = this.size * 0.3 * pos.opacity;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, trailSize, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        ctx.fillStyle = 'rgba(200, 200, 255, 0.9)';
        ctx.beginPath();
        ctx.moveTo(this.size, 0);
        ctx.lineTo(-this.size * 0.7, this.size * 0.5);
        ctx.lineTo(-this.size * 0.7, -this.size * 0.5);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = 'rgba(0, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(-this.size * 0.7, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    const stars: Star[] = [];
    const planets: Planet[] = [];
    const spaceships: Spaceship[] = [];

    for (let i = 0; i < 200; i++) {
      stars.push(new Star());
    }

    for (let i = 0; i < 8; i++) { 
      planets.push(new Planet());
    }

    for (let i = 0; i < 3; i++) {
      spaceships.push(new Spaceship());
    }

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      planets.forEach(planet => {
        planet.update();
        planet.draw();
      });

      spaceships.forEach(spaceship => {
        spaceship.update();
        spaceship.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}