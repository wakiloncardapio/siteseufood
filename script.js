(() => {
  "use strict";

  const WHATSAPP_NUMBER = "5545988025563";
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector("#mobile-menu");
  const backToTop = document.querySelector(".back-to-top");
  const year = document.querySelector("#year");
  const form = document.querySelector("#lead-form");
  const formNote = document.querySelector("#form-note");
  const parallaxCard = document.querySelector("#parallax-card");
  const productStage = parallaxCard?.querySelector(".product-stage");

  if (year) year.textContent = new Date().getFullYear();

  const syncScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle("scrolled", y > 18);
    backToTop?.classList.toggle("visible", y > 650);
  };
  syncScroll();
  window.addEventListener("scroll", syncScroll, { passive: true });

  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    mobileMenu.hidden = open;
  });

  mobileMenu?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.hidden = true;
      menuButton?.setAttribute("aria-expanded", "false");
    });
  });

  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("in-view"));
  }

  document.querySelectorAll(".faq-list details").forEach(item => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      document.querySelectorAll(".faq-list details").forEach(other => {
        if (other !== item) other.open = false;
      });
    });
  });

  if (parallaxCard && productStage && window.matchMedia("(pointer:fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    parallaxCard.addEventListener("pointermove", event => {
      const rect = parallaxCard.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      productStage.style.transform = `perspective(1000px) rotateX(${y * -3.2}deg) rotateY(${x * 4}deg) translateZ(0)`;
    });
    parallaxCard.addEventListener("pointerleave", () => {
      productStage.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
  }

  form?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const empresa = String(data.get("empresa") || "").trim();
    const segmento = String(data.get("segmento") || "").trim();
    if (!nome || !empresa || !segmento) return;

    const message = `Olá! Meu nome é ${nome}. Tenho a empresa ${empresa}, do segmento ${segmento}, e gostaria de conhecer melhor o Seu Food e solicitar uma apresentação da plataforma.`;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "generate_lead", lead_source: "landing_page", business_segment: segmento });

    const number = WHATSAPP_NUMBER.replace(/\D/g, "");
    if (formNote) {
      formNote.textContent = "Abrindo o WhatsApp...";
      formNote.classList.add("success");
    }
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
})();