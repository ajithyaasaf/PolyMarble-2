import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const parallaxObserverRef = useRef<IntersectionObserver | null>(null);
  const magneticObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Enhanced reveal animations with multiple types
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale, .reveal-rotate, .reveal-flip, .reveal-bounce, .reveal-elastic');

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Advanced parallax with multiple layers
    const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast, .parallax-reverse, .parallax-zoom');

    parallaxObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const rect = element.getBoundingClientRect();
          const speed = element.classList.contains('parallax-slow') ? 0.3 :
            element.classList.contains('parallax-medium') ? 0.6 :
              element.classList.contains('parallax-fast') ? 1.2 :
                element.classList.contains('parallax-reverse') ? -0.5 : 0.8;
          const offset = (window.innerHeight - rect.top) * speed * 0.05;

          if (element.classList.contains('parallax-zoom')) {
            const scale = 1 + (window.innerHeight - rect.top) * 0.0001;
            element.style.transform = `scale(${Math.max(0.8, Math.min(1.2, scale))})`;
          } else {
            element.style.transform = `translateY(${offset}px)`;
          }
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px'
    });

    // Simplified hover effects - reduced magnetic distraction

    // Simplified scroll effects - removed overwhelming velocity effects

    // Staggered animations for groups
    const staggerElements = document.querySelectorAll('.stagger-group');
    staggerElements.forEach(group => {
      const children = group.querySelectorAll('.stagger-item');
      children.forEach((child, index) => {
        child.classList.add('stagger-delay-' + (index % 8));
      });
    });

    // Typing effect for text elements
    const typeElements = document.querySelectorAll('.type-effect');
    const typeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
          const element = entry.target as HTMLElement;
          const text = element.textContent || '';
          element.textContent = '';
          element.classList.add('typed');

          let i = 0;
          const typeInterval = setInterval(() => {
            element.textContent = text.substring(0, i + 1);
            i++;
            if (i >= text.length) {
              clearInterval(typeInterval);
            }
          }, 50);
        }
      });
    }, { threshold: 0.5 });

    typeElements.forEach(element => {
      typeObserver.observe(element);
    });

    // Number counter animation
    const counterElements = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          const element = entry.target as HTMLElement;
          const target = parseInt(element.dataset.target || '0');
          element.classList.add('counted');

          let current = 0;
          const increment = target / 60; // 60 frames for 1 second
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              element.textContent = target.toLocaleString('en-IN');
              clearInterval(timer);
            } else {
              element.textContent = Math.floor(current).toLocaleString('en-IN');
            }
          }, 16);
        }
      });
    }, { threshold: 0.8 });

    counterElements.forEach(element => {
      counterObserver.observe(element);
    });

    // Observe all elements
    revealElements.forEach(element => {
      observerRef.current?.observe(element);
    });

    parallaxElements.forEach(element => {
      parallaxObserverRef.current?.observe(element);
    });

    // Simplified scroll handler - focus on content, not effects
    const handleScroll = () => {
      // Minimal parallax for depth without distraction
      parallaxElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const el = element as HTMLElement;
        const speed = 0.3; // Consistent subtle parallax
        const offset = (window.innerHeight - rect.top) * speed * 0.02; // Reduced intensity

        el.style.transform = `translateY(${offset}px)`;
      });

      // Scroll progress indicators
      const progressElements = document.querySelectorAll('.scroll-progress');
      progressElements.forEach(element => {
        const el = element as HTMLElement;
        const rect = el.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        el.style.setProperty('--scroll-progress', (progress * 100) + '%');
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      parallaxObserverRef.current?.disconnect();
      magneticObserverRef.current?.disconnect();
      typeObserver.disconnect();
      counterObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}

export function useScrollProgress() {
  useEffect(() => {
    const progressElements = document.querySelectorAll('.progress-bar');

    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const progress = element.dataset.progress || '100';
          element.style.setProperty('--progress', progress + '%');
          element.classList.add('animate-progress');
        }
      });
    }, {
      threshold: 0.5
    });

    progressElements.forEach(element => {
      progressObserver.observe(element);
    });

    return () => {
      progressObserver.disconnect();
    };
  }, []);
}
