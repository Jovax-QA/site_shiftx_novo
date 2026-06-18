import { useEffect, useRef } from 'react';

export function useIntersectionObserver(threshold = 0.1) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-in');
            elements.forEach((el) => el.classList.add('visible'));
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return ref;
}

export function useMultiIntersect() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
