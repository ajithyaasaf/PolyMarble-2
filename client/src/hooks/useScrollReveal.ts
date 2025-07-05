import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const parallaxObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Enhanced reveal animations with multiple types
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade, .reveal-scale, .reveal-rotate');
    
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

    // Parallax effect observer
    const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
    
    parallaxObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const rect = element.getBoundingClientRect();
          const speed = element.classList.contains('parallax-slow') ? 0.5 : 
                       element.classList.contains('parallax-medium') ? 0.8 : 1.2;
          const offset = (window.innerHeight - rect.top) * speed * 0.1;
          element.style.transform = `translateY(${offset}px)`;
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px'
    });

    // Staggered animations for groups
    const staggerElements = document.querySelectorAll('.stagger-group');
    staggerElements.forEach(group => {
      const children = group.querySelectorAll('.stagger-item');
      children.forEach((child, index) => {
        child.classList.add('stagger-delay-' + (index % 6));
      });
    });

    // Observe all elements
    revealElements.forEach(element => {
      observerRef.current?.observe(element);
    });

    parallaxElements.forEach(element => {
      parallaxObserverRef.current?.observe(element);
    });

    // Scroll event for parallax
    const handleScroll = () => {
      parallaxElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const el = element as HTMLElement;
        const speed = el.classList.contains('parallax-slow') ? 0.5 : 
                     el.classList.contains('parallax-medium') ? 0.8 : 1.2;
        const offset = (window.innerHeight - rect.top) * speed * 0.1;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      parallaxObserverRef.current?.disconnect();
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
