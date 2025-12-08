import Lenis from "@studio-freight/lenis";

// Initialize Lenis globally
const lenis = new Lenis({
  duration: 1.1,
  // Easing function for a slight, soft acceleration/deceleration
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time: number): void {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Smooth scroll for anchor links
document.addEventListener("click", (event: MouseEvent) => {
  if (!event.target) return;
  const target = (event.target as Element).closest('a[href^="#"]');

  if (!target) return;

  const hash: string | null = target.getAttribute("href");
  if (!hash) return;

  // Query the section element and cast it to HTMLElement | null
  const section: HTMLElement | null = document.querySelector(
    hash
  ) as HTMLElement | null;

  if (!section) return;

  event.preventDefault();

  // --- CUSTOM OFFSET LOGIC ---
  const targetId: string = hash.substring(1);
  let scrollOffset: number = -90; // Default offset for fixed header

  if (targetId === "home") {
    scrollOffset = -80; // Specific offset for the home/hero section
  }

  const scrollDuration: number = 0.9; // 900ms

  // Scroll to the target element
  lenis.scrollTo(section, {
    offset: scrollOffset,
    duration: scrollDuration,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
  });

  const focusDelay: number = scrollDuration * 1000 + 50;

  setTimeout(() => {
    section.setAttribute("tabindex", "-1");

    section.focus();
  }, focusDelay);
});
