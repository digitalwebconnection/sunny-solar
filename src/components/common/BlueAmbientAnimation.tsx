import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  speedY: number;
  speedX: number;
  color: string;
  pulseSpeed: number;
  pulseOffset: number;
}

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export const BlueAmbientAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  // Floating Blue Solar Energy Particles (Canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Color palette: Clean Solar Photovoltaic Blue, Cyan, Sky, and Cobalt
    const blueColors = [
      '#38bdf8', // Light sky blue
      '#60a5fa', // Electric blue
      '#2563eb', // Solar panel royal blue
      '#0284c7', // Cyan-blue
      '#93c5fd', // Soft luminous highlight
    ];

    // Number of particles: balanced for high performance and visual elegance
    const particleCount = Math.min(36, Math.floor(window.innerWidth / 35));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 1.2, // 1.2px - 3.0px
        baseAlpha: Math.random() * 0.25 + 0.12, // 0.12 - 0.37
        alpha: 0.2,
        speedY: -(Math.random() * 0.35 + 0.15), // Slow upward drift
        speedX: (Math.random() - 0.5) * 0.2, // Gentle wobble
        color: blueColors[Math.floor(Math.random() * blueColors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Organic alpha pulse
        p.alpha = p.baseAlpha + Math.sin(tick * p.pulseSpeed + p.pulseOffset) * 0.08;

        // Mouse proximity gentle interaction
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            p.x += (dx / dist) * force * 0.6;
            p.y += (dy / dist) * force * 0.6;
          }
        }

        // Move particle upward
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(tick * 0.01 + i) * 0.1;

        // Wrap around smoothly
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle with subtle radiant aura
        ctx.save();
        ctx.globalAlpha = Math.max(0.05, Math.min(0.5, p.alpha));
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.radius * 3.5;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Subtle Interactive Blue Ripple on User Click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: ClickRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-4), newRipple]);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 700);
    };

    window.addEventListener('click', handleClick, { passive: true });
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ── 1. Top Radiant Blue Energy Beam (Glides across every page header) ── */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 overflow-hidden bg-sky-500/10">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent animate-blue-beam shadow-[0_0_12px_#38bdf8]" />
      </div>

      {/* ── 2. Background Solar Blue Aurora Orbs (Soft, organic floating glow) ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top-Right Ambient Cyan-Blue Glow */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/10 via-sky-400/8 to-transparent blur-[140px] animate-blue-drift-1"
          style={{ willChange: 'transform, opacity' }}
        />

        {/* Bottom-Left Ambient Solar Panel Deep Blue Glow */}
        <div
          className="absolute top-1/2 -left-36 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-sky-500/8 via-blue-600/6 to-transparent blur-[130px] animate-blue-drift-2"
          style={{ willChange: 'transform, opacity' }}
        />

        {/* Center Floating Ambient Energy Pulse */}
        <div
          className="absolute top-3/4 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-blue-400/6 to-cyan-400/4 blur-[120px] animate-blue-pulse"
          style={{ willChange: 'transform, opacity' }}
        />
      </div>

      {/* ── 3. Luminous Solar Blue Floating Sparks (Smooth 60fps Canvas) ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* ── 4. Subtle Tactile Solar Blue Click Ripples ── */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute w-6 h-6 rounded-full border border-sky-400/60 shadow-[0_0_16px_rgba(56,189,248,0.5)] animate-ping pointer-events-none"
          style={{
            left: `${ripple.x - 12}px`,
            top: `${ripple.y - 12}px`,
            animationDuration: '650ms',
          }}
        />
      ))}
    </div>
  );
};

export default BlueAmbientAnimation;
