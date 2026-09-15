(() => {
  "use strict";

  /* CONFIGURAÇÃO RÁPIDA
     Troque apenas o número abaixo pelo WhatsApp comercial com DDI + DDD.
     Exemplo: 5568999999999
     Enquanto estiver vazio, o formulário copia a mensagem para a área de transferência.
  */
  const WHATSAPP_NUMBER = "";

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector("#mobile-menu");
  const backToTop = document.querySelector(".back-to-top");
  const year = document.querySelector("#year");
  const form = document.querySelector("#lead-form");
  const formNote = document.querySelector("#form-note");

  year.textContent = new Date().getFullYear();

  const syncScrollState = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 18);
    backToTop.classList.toggle("visible", y > 650);
  };
  syncScrollState();
  window.addEventListener("scroll", syncScrollState, { passive: true });

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.hidden = true;
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const details = [...document.querySelectorAll(".faq-list details")];
  details.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      details.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      return ok;
    }
  };

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const empresa = String(data.get("empresa") || "").trim();
    const segmento = String(data.get("segmento") || "").trim();

    if (!nome || !empresa || !segmento) return;

    const message =
      `Olá! Meu nome é ${nome}. Tenho a empresa ${empresa}, do segmento ${segmento}, ` +
      `e gostaria de conhecer melhor o Seu Food e solicitar uma apresentação da plataforma.`;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "generate_lead",
      lead_source: "landing_page",
      business_segment: segmento
    });

    if (WHATSAPP_NUMBER) {
      const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
      window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      formNote.textContent = "Abrindo o WhatsApp com sua mensagem...";
      formNote.classList.add("success");
      return;
    }

    const copied = await copyText(message);
    formNote.textContent = copied
      ? "Mensagem copiada. Configure o número comercial no arquivo script.js para abrir o WhatsApp automaticamente."
      : "Configure o número comercial no arquivo script.js para ativar o envio pelo WhatsApp.";
    formNote.classList.add("success");
  });
})();
