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

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((0.5 - y / rect.height)) * 18;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
  });
});
gsap.from(".hero-kicker, #page1 h1, #page1 h2, #page1 p, .hero-actions, .hero-stats", {
  y: 35,
  opacity: 0,
  duration: 0.8,
  stagger: 0.12,
  ease: "power3.out",
});
