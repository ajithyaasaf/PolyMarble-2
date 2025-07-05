import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-up');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

    return () => {
      revealElements.forEach(element => {
        revealObserver.unobserve(element);
      });
    };
  }, []);
}
