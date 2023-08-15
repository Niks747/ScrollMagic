// Import GSAP and the ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger);

// Initialize GSAP timeline
const tl = gsap.timeline();

// Add a parallax effect using GSAP ScrollTrigger
tl.to(".parallax-bg", {
  y: "-30%",
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-header",
    start: "top 30%",
    end: "bottom 20%",
    scrub: 2,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const controller = new ScrollMagic.Controller();

  const imageContainers = document.querySelectorAll(".image-container");

  imageContainers.forEach((container, index) => {
    const image = container.querySelector("img");

    const fadeInAnimation = gsap
      .timeline()
      .fromTo(
        image,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );

    new ScrollMagic.Scene({
      triggerElement: container,
      triggerHook: 0.8, // Adjust this value as needed
      scrub: 2,
    })
      .setTween(fadeInAnimation)
      .addTo(controller);
  });
});

const navbar = document.querySelector(".navbar");
const scrollThreshold = 100; // Change this value as needed

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
