import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

function FlyingBird({ delay = 0, top = '12%', size = 24, duration = 18 }) {
  return (
    <motion.div
      className="absolute z-20 pointer-events-none"
      style={{ top }}
      animate={{ x: ['-8%', '115%'] }}
      transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
    >
      <motion.svg
        width={size}
        height={size * 0.5}
        viewBox="0 0 40 20"
        fill="none"
        animate={{ scaleY: [1, 0.45, 1] }}
        transition={{ duration: 0.55, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d="M0 10 Q10 0 20 10 Q30 0 40 10"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}

function RegisterLayout({ title, subtitle, children }) {
  const [soundOn, setSoundOn] = useState(true); // intent: on by default
  const audioRef = useRef(null);
  const hasTriedRef = useRef(false);

  useEffect(() => {
    // try autoplay immediately on mount
    const tryPlay = async () => {
      try {
        await audioRef.current.play();
        setSoundOn(true);
      } catch {
        // blocked by browser — wait for first user interaction instead
        setSoundOn(false);
      }
    };
    tryPlay();

    // fallback: start on the user's very first interaction anywhere on the page
    const startOnInteraction = () => {
      if (hasTriedRef.current) return;
      hasTriedRef.current = true;
      audioRef.current.play().then(() => setSoundOn(true)).catch(() => {});
    };

    window.addEventListener('click', startOnInteraction, { once: true });
    window.addEventListener('keydown', startOnInteraction, { once: true });
    window.addEventListener('touchstart', startOnInteraction, { once: true });

    return () => {
      window.removeEventListener('click', startOnInteraction);
      window.removeEventListener('keydown', startOnInteraction);
      window.removeEventListener('touchstart', startOnInteraction);
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    if (soundOn) {
      audioRef.current.pause();
      setSoundOn(false);
    } else {
      audioRef.current.play().catch(() => {});
      setSoundOn(true);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1920&q=80')"
      }}
    >
      <audio ref={audioRef} loop src="/sounds/birds.mp3" />

      <button
        onClick={toggleSound}
        className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition"
        aria-label="Toggle bird sound"
      >
        {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      <FlyingBird delay={0} top="10%" size={26} duration={16} />
      <FlyingBird delay={3} top="18%" size={18} duration={20} />
      <FlyingBird delay={6} top="7%" size={20} duration={22} />
      <FlyingBird delay={1.5} top="24%" size={16} duration={19} />
      <FlyingBird delay={4.5} top="30%" size={22} duration={24} />

      <motion.div
        animate={{ x: ['-10%', '10%', '-10%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/20 to-transparent blur-2xl pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">{title}</h2>
          <p className="text-white/80 mt-2 drop-shadow">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl shadow-2xl p-6 sm:p-8"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default RegisterLayout;