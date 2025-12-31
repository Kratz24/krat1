/* ===============================
   SAFETY CHECK (VERY IMPORTANT)
================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     CURSOR-FOLLOWING GOLD AURA
  ================================ */
  const aura = document.createElement("div");
  aura.classList.add("gold-aura");
  document.body.appendChild(aura);

  let mouseX = 0, mouseY = 0;
  let auraX = 0, auraY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateAura() {
    auraX += (mouseX - auraX) * 0.12;
    auraY += (mouseY - auraY) * 0.12;

    aura.style.transform = `translate(${auraX}px, ${auraY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateAura);
  }
  animateAura();

  /* ===============================
     HERO INTRO ANIMATION
  ================================ */
  const hero = document.querySelector(".hero-content");
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {
      hero.style.transition = "1.6s ease";
      hero.style.opacity = 1;
      hero.style.transform = "translateY(0)";
    }, 300);
  }

  /* ===============================
     SCROLL REVEAL (LUXURY STYLE)
  ================================ */
  const revealElements = document.querySelectorAll(
    ".product-card, .footer"
  );

  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "1.2s ease";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ===============================
     MAGNETIC BUTTON EFFECT
  ================================ */
  const btn = document.querySelector(".primary-btn");
  if (btn) {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0)";
    });
  }

});