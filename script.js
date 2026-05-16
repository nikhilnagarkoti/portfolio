const nav = document.querySelector("#nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

gsap.to("#nav", {
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top 5%",
    end: "top -5%",
    scrub: 2,
  },
});

gsap.to(".main", {
  backgroundColor: "var(--bg-main)",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

const projectTrack = document.querySelector("#projectTrack");

if (projectTrack) {
  document.querySelectorAll("[data-project-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.projectScroll === "left" ? -1 : 1;
      const card = projectTrack.querySelector(".project-card");
      const gap = 28;
      const scrollAmount = card.offsetWidth + gap;
      const maxScroll = projectTrack.scrollWidth - projectTrack.clientWidth;
      const atStart = projectTrack.scrollLeft <= 8;
      const atEnd = projectTrack.scrollLeft >= maxScroll - 8;

      if (direction === 1 && atEnd) {
        projectTrack.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        return;
      }

      if (direction === -1 && atStart) {
        projectTrack.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        });
        return;
      }

      projectTrack.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    });
  });
}
gsap.from(".hero-kicker, #page1 h1, #page1 h2, #page1 p, .hero-actions, .hero-stats", {
  y: 35,
  opacity: 0,
  duration: 0.8,
  stagger: 0.12,
  ease: "power3.out",
});
