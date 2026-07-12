"use client";

let audioCtx: AudioContext | null = null;

// Initialize audio context lazily so it doesn't break SSR
const initAudio = () => {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
};

// A very subtle, deep click sound (perfect for dark mode toggle)
export const playClickSound = () => {
  const ctx = initAudio();
  if (!ctx) return;

  // Resume context if it's suspended (browsers do this automatically until first user interaction)
  if (ctx.state === "suspended") ctx.resume();

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(150, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);

  gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.1);
};

// A very short, high-pitched "tick" sound for hovering
export const playHoverSound = () => {
  const ctx = initAudio();
  if (!ctx) return;

  if (ctx.state === "suspended") ctx.resume();

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(800, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);

  gainNode.gain.setValueAtTime(0.05, ctx.currentTime); // Very quiet
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.05);
};
