import { ReactNode, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * For GSAP-pinned scrollytelling sections, we can't navigate directly to a
 * "slide" via an ID (they're all position:absolute at the same DOM location).
 * Instead, we calculate the exact scroll-Y offset that places the timeline
 * at the correct progress fraction where the target slide is visible.
 *
 * Formula: targetY = sectionTop + (pinMultiplier * vh * timelineProgress)
 *   - sectionTop: the offsetTop of the sentinel anchor div
 *   - pinMultiplier: the % in '+=N00%' divided by 100 (e.g. '+=900%' → 9)
 *   - timelineProgress: fraction of timeline when the slide is visible
 *     (e.g. for II CONFIAR: slide peaks at t≈3.5 out of ~18 → 0.19)
 */
const PINNED_SLIDE_TARGETS: Record<string, { pinMultiplier: number; timelineProgress: number }> = {
  '#confiar-anchor':   { pinMultiplier: 9, timelineProgress: 0.19 }, // II CONFIAR  @ ~t3.5/18 of 900% pin
  '#construir-anchor': { pinMultiplier: 3, timelineProgress: 0.65 }, // III CONSTRUIR @ ~t3.5/5 of 300% pin
};

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();

      const pinnedTarget = PINNED_SLIDE_TARGETS[href];
      if (pinnedTarget) {
        // Navigate to a specific slide inside a GSAP-pinned section
        const anchorEl = document.querySelector(href) as HTMLElement | null;
        if (anchorEl) {
          const sectionTop = anchorEl.offsetTop;
          const pinScrollDistance = pinnedTarget.pinMultiplier * window.innerHeight;
          const targetY = sectionTop + pinnedTarget.timelineProgress * pinScrollDistance;
          lenis.scrollTo(targetY, { immediate: false });
          return;
        }
      }

      lenis.scrollTo(href);
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick as EventListener));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick as EventListener));
      delete (window as any).lenis;
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
}
