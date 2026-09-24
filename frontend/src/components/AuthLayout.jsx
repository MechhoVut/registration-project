import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

function Duck({ delay = 0, x = '20%', size = 60, flip = false }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, bottom: '36%', transform: flip ? 'scaleX(-1)' : 'none' }}
      animate={{ y: [0, -5, 0], rotate: [-1.5, 1.5, -1.5] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <svg width={size} height={size} viewBox="0 0 120 110" fill="none">
        <ellipse cx="55" cy="95" rx="34" ry="5" fill="#0e7490" opacity="0.25" />
        <path d="M18 62 Q6 56 8 68 Q14 72 22 66 Z" fill="#D97706" />
        <ellipse cx="52" cy="68" rx="34" ry="22" fill="#FCD34D" />
        <path d="M24 62 Q34 58 44 63" stroke="#F59E0B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M28 70 Q38 66 48 71" stroke="#F59E0B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M32 78 Q42 74 52 79" stroke="#F59E0B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M30 55 Q46 50 58 62 Q46 68 32 66 Z" fill="#F59E0B" />
        <path d="M34 57 Q44 55 52 61" stroke="#B45309" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M34 61 Q44 59 53 65" stroke="#B45309" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M74 55 Q80 38 70 28 Q84 26 90 38 Q92 50 80 58 Z" fill="#16A34A" />
        <circle cx="82" cy="36" r="15" fill="#16A34A" />
        <path d="M72 30 Q80 24 90 30" stroke="#15803D" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M70 46 Q82 52 94 46" stroke="#FFFFFF" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M95 34 L112 30 Q114 36 112 40 L95 38 Z" fill="#EA580C" />
        <line x1="98" y1="35" x2="109" y2="34" stroke="#9A3412" strokeWidth="1" />
        <circle cx="86" cy="31" r="2.6" fill="#1e293b" />
        <path d="M46 88 L44 100" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
        <path d="M60 88 L63 101" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 100 L48 100 L44 105 Z" fill="#EA580C" />
        <path d="M59 101 L67 101 L63 106 Z" fill="#EA580C" />
      </svg>
    </motion.div>
  );
}

function Fish({ delay = 0, x = '30%', size = 34 }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, bottom: '10%' }}
      animate={{ x: [0, 14, 0], opacity: [0.55, 0.85, 0.55] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <svg width={size} height={size * 0.55} viewBox="0 0 60 32" fill="none">
        <ellipse cx="26" cy="16" rx="20" ry="9" fill="#0891B2" opacity="0.7" />
        <path d="M6 16 L-4 8 L-4 24 Z" fill="#0891B2" opacity="0.7" />
        <path d="M22 8 Q26 2 32 8" stroke="#155E75" strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="38" cy="14" r="1.6" fill="#083344" />
      </svg>
    </motion.div>
  );
}

function Bird({ delay = 0, top = '15%', size = 22, duration = 20 }) {
  return (
    <motion.div
      className="absolute"
      style={{ top }}
      animate={{ x: ['-8%', '115%'] }}
      transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
    >
      <motion.svg
        width={size}
        height={size * 0.5}
        viewBox="0 0 40 20"
        fill="none"
        animate={{ scaleY: [1, 0.5, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M0 10 Q10 0 20 10 Q30 0 40 10" stroke="#334155" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </motion.svg>
    </motion.div>
  );
}

function PersonOnBoat({ x, skirt }) {
  return (
    <g transform={`translate(${x}, 0)`}>
      <circle cx="0" cy="0" r="5" fill="#F3D5B5" />
      <path d={`M-6 6 Q0 2 6 6 L${skirt ? 5 : 4} 26 L${skirt ? -5 : -4} 26 Z`} fill={skirt ? '#DC2626' : '#1E3A8A'} />
      <line x1="-6" y1="10" x2="-11" y2="18" stroke="#F3D5B5" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6" y1="10" x2="11" y2="18" stroke="#F3D5B5" strokeWidth="2.5" strokeLinecap="round" />
      {!skirt && (
        <>
          <line x1="-3" y1="26" x2="-3" y2="34" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <line x1="3" y1="26" x2="3" y2="34" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </g>
  );
}

function VikingBoat() {
  return (
    <motion.div
      className="absolute"
      style={{ bottom: '40%' }}
      animate={{ x: ['-10%', '115%'] }}
      transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
    >
      <motion.div
        animate={{ y: [0, -4, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="150" height="130" viewBox="0 0 150 130" fill="none">
          <path d="M10 88 Q75 110 140 88 L128 102 Q75 116 22 102 Z" fill="#78350F" />
          <path d="M10 88 Q75 102 140 88" stroke="#451a03" strokeWidth="2" fill="none" />
          <path d="M138 88 Q150 70 142 50 Q136 52 136 62 Q132 72 124 78 Q130 84 138 88 Z" fill="#78350F" />
          <path d="M12 88 Q0 72 8 52 Q14 54 14 64 Q18 74 26 78 Q20 84 12 88 Z" fill="#78350F" />
          <line x1="75" y1="88" x2="75" y2="18" stroke="#451a03" strokeWidth="4" />
          <path d="M75 23 L108 33 Q108 58 75 65 Z" fill="#F8FAFC" />
          <rect x="82" y="27" width="5" height="34" fill="#DC2626" transform="skewY(6)" />
          <rect x="94" y="30" width="5" height="30" fill="#DC2626" transform="skewY(6)" />
          <motion.g
            animate={{ scaleX: [1, 0.92, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '75px 18px' }}
          >
            <rect x="75" y="8" width="26" height="4" fill="#FF9933" />
            <rect x="75" y="12" width="26" height="4" fill="#FFFFFF" />
            <rect x="75" y="16" width="26" height="4" fill="#138808" />
            <circle cx="88" cy="14" r="1.6" fill="#000080" />
          </motion.g>
          <circle cx="35" cy="93" r="6" fill="#DC2626" stroke="#7F1D1D" strokeWidth="1.5" />
          <circle cx="55" cy="97" r="6" fill="#F8FAFC" stroke="#7F1D1D" strokeWidth="1.5" />
          <circle cx="95" cy="97" r="6" fill="#DC2626" stroke="#7F1D1D" strokeWidth="1.5" />
          <circle cx="115" cy="93" r="6" fill="#F8FAFC" stroke="#7F1D1D" strokeWidth="1.5" />
          <PersonOnBoat x={62} skirt={false} />
          <PersonOnBoat x={88} skirt={true} />
        </svg>
      </motion.div>
    </motion.div>
  );
}

function WaterScene() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-cyan-100" />
      <div className="absolute top-14 right-16 w-20 h-20 rounded-full bg-yellow-100/90 shadow-lg" />
      <div className="absolute top-24 left-10 w-24 h-8 bg-white/70 rounded-full" />
      <div className="absolute top-28 left-20 w-16 h-6 bg-white/60 rounded-full" />

      <Bird delay={0} top="10%" size={22} duration={18} />
      <Bird delay={3} top="16%" size={16} duration={22} />
      <Bird delay={6} top="8%" size={18} duration={25} />
      <Bird delay={1.5} top="20%" size={14} duration={20} />

      <div className="absolute bottom-0 left-0 right-0 h-[48%] bg-gradient-to-b from-cyan-300 via-cyan-500 to-cyan-700 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          className="absolute top-2 left-0 w-[200%] h-4 opacity-60"
          style={{ backgroundImage: 'repeating-linear-gradient(100deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 20px, transparent 20px, transparent 60px)' }}
        />
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 left-0 w-[200%] h-5 opacity-40"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 30px, transparent 30px, transparent 75px)' }}
        />
        <motion.div
          animate={{ x: ['0%', '-40%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute top-24 left-0 w-[200%] h-4 opacity-25"
          style={{ backgroundImage: 'repeating-linear-gradient(95deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 25px, transparent 25px, transparent 65px)' }}
        />
        <Fish delay={0} x="20%" size={32} />
        <Fish delay={1.2} x="55%" size={26} />
        <Fish delay={2.4} x="75%" size={36} />
      </div>

      <VikingBoat />

      <Duck delay={0} x="10%" size={52} />
      <Duck delay={0.8} x="38%" size={66} flip />
      <Duck delay={1.6} x="62%" size={44} />
    </div>
  );
}

function AuthLayout({ title, subtitle, children }) {
  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef(null);
  const hasTriedRef = useRef(false);

  useEffect(() => {
    const tryPlay = async () => {
      try {
        await audioRef.current.play();
        setSoundOn(true);
      } catch {
        setSoundOn(false);
      }
    };
    tryPlay();

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
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      <audio ref={audioRef} loop src="/sounds/viking-waves.mp3" />

      <div className="hidden md:flex md:w-1/2 relative">
        <WaterScene />

        <button
          onClick={toggleSound}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-black/30 transition"
          aria-label="Toggle ambient sound"
        >
          {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>

        <div className="relative z-10 flex flex-col justify-end h-full px-12 lg:px-16 pb-16 text-slate-800">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-3 leading-tight drop-shadow-sm"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-700 text-lg max-w-sm drop-shadow-sm"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 bg-slate-50">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}

export default AuthLayout;