"use client";
import { useEffect, useRef } from "react";
export default function Network() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!, x = c.getContext("2d")!, parent = c.parentElement!;
    const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const m = { x: -999, y: -999 }; let w = 0, h = 0, raf = 0;
    type P = { x: number; y: number; vx: number; vy: number }; let pts: P[] = [];
    const v = (n: string) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
    const size = () => {
      const r = c.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
      w = r.width; h = r.height; c.width = w * d; c.height = h * d; x.setTransform(d, 0, 0, d, 0, 0);
      pts = Array.from({ length: Math.round(Math.min(70, (w * h) / 16000)) }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 }));
    };
    const draw = () => {
      const a = v("--accent"), l = v("--line"); x.clearRect(0, 0, w, h);
      pts.forEach((p, i) => {
        if (!still) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; }
        for (let j = i + 1; j < pts.length; j++) { const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) { x.globalAlpha = 1 - d / 120; x.strokeStyle = l; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.stroke(); } }
        const dm = Math.hypot(p.x - m.x, p.y - m.y);
        if (dm < 160) { x.globalAlpha = 1 - dm / 160; x.strokeStyle = a; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(m.x, m.y); x.stroke(); }
        x.globalAlpha = 1; x.fillStyle = a; x.beginPath(); x.arc(p.x, p.y, 2.2, 0, 6.283); x.fill();
      });
      if (!still) raf = requestAnimationFrame(draw);
    };
    const move = (e: PointerEvent) => { const r = c.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top; };
    const leave = () => { m.x = m.y = -999; };
    const resize = () => { size(); if (still) draw(); };
    parent.addEventListener("pointermove", move); parent.addEventListener("pointerleave", leave); addEventListener("resize", resize);
    size(); draw();
    return () => { cancelAnimationFrame(raf); parent.removeEventListener("pointermove", move); parent.removeEventListener("pointerleave", leave); removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} id="net" aria-hidden="true" />;
}
