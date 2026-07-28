import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { Camera, Compass, Sparkles, ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface VillaSequenceShowcaseProps {
  language?: Language;
}

const TOTAL_FRAMES = 140;

export const VillaSequenceShowcase: React.FC<VillaSequenceShowcaseProps> = ({ language = 'EN' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [currentFrameDisplay, setCurrentFrameDisplay] = useState<number>(1);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const translations = {
    EN: {
      badge: '3D CINEMATIC VILLA WALKTHROUGH',
      title: 'BUILD COTTA ARCHITECTURE',
      frame: 'FRAME',
      hint: 'SCROLL TO CONTROL CAMERA SEQUENCE',
      scroll: 'Scroll',
      loading: 'Preloading 3D Villa Frames',
    },
    HI: {
      badge: '3D सिनेमाई विला वॉकथ्रू',
      title: 'बिल्डकोटा वास्तुकला',
      frame: 'फ्रेम',
      hint: 'कैमरा अनुक्रम के लिए स्क्रॉल करें',
      scroll: 'स्क्रॉल',
      loading: '3D विला फ्रेम प्रीलोड हो रहे हैं',
    },
    GU: {
      badge: '3D સિનેમેટિક વિલા વોકથ્રુ',
      title: 'બિલ્ડકોટા આર્કિટેક્ચર',
      frame: 'ફ્રેમ',
      hint: 'કેમેરા નિયંત્રિત કરવા સ્ક્રોલ કરો',
      scroll: 'સ્ક્રોલ',
      loading: '3D વિલા ફ્રેમ્સ પ્રીલોડ થઈ રહ્યા છે',
    },
  };

  const t = translations[language] || translations.EN;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndexValue = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedNum = String(i + 1).padStart(3, '0');
      img.src = `/homeImages3/ezgif-frame-${paddedNum}.jpg`;

      img.onload = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let currentFrame = 0;

    const render = () => {
      const targetFrame = frameIndexValue.get();
      const diff = targetFrame - currentFrame;

      if (Math.abs(diff) > 0.001) {
        currentFrame += diff * 0.2;
      } else {
        currentFrame = targetFrame;
      }

      const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrame)));
      setCurrentFrameDisplay(frameIdx + 1);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth * dpr;
      const height = canvas.clientHeight * dpr;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.clearRect(0, 0, width, height);

      const img = imagesRef.current[frameIdx];
      if (img && img.complete && img.naturalWidth > 0) {
        const imgWidth = img.naturalWidth;
        const imgHeight = img.naturalHeight;
        const imgAspect = imgWidth / imgHeight;
        const canvasAspect = width / height;

        let drawWidth: number;
        let drawHeight: number;
        let offsetX: number;
        let offsetY: number;

        if (canvasAspect > imgAspect) {
          drawWidth = width;
          drawHeight = width / imgAspect;
          offsetX = 0;
          offsetY = (height - drawHeight) / 2;
        } else {
          drawHeight = height;
          drawWidth = height * imgAspect;
          offsetX = (width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [frameIndexValue]);

  return (
    <section ref={containerRef} className="relative w-full h-[350vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {!isLoaded && (
          <div className="absolute inset-0 z-30 bg-[#0a0a0d] flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-white/60 font-mono">
              <Sparkles className="w-4 h-4 text-[#b08d57] animate-spin" />
              <span>{t.loading} ({loadedCount}/{TOTAL_FRAMES})</span>
            </div>
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#b08d57] transition-all duration-150 ease-out"
                style={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
              />
            </div>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block"
          style={{ width: '100vw', height: '100vh' }}
        />

        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0a0a0d] to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a0d] to-transparent pointer-events-none z-10" />

        <div className="absolute top-4 left-4 sm:top-8 sm:left-12 z-20 flex flex-col gap-1.5 sm:gap-2 max-w-[80vw]">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-mono text-white/80 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#b08d57] animate-pulse" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white drop-shadow-md">
            {t.title}
          </h2>
        </div>

        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-12 z-20 flex items-center gap-2 sm:gap-4">
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-white/90">
            <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b08d57]" />
            <span>{t.frame} {String(currentFrameDisplay).padStart(2, '0')} / {TOTAL_FRAMES}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-xs text-white/60">
            <Compass className="w-4 h-4 text-[#e5c185]" />
            <span>{t.hint}</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-12 z-20 flex flex-col items-center gap-0.5 sm:gap-1 text-white/50 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest">
          <span>{t.scroll}</span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-[#b08d57]" />
        </div>
      </div>
    </section>
  );
};
