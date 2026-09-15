(() => {
  "use strict";

  const WHATSAPP_NUMBER = "5545988025563";
  const BENEFIT_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFUGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI2LTA5LTE1PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkRhdGE+eyZxdW90O2RvYyZxdW90OzomcXVvdDtEQUhWVE9hQUVhSSZxdW90OywmcXVvdDt1c2VyJnF1b3Q7OiZxdW90O1VBRzJxNVI0QVMwJnF1b3Q7LCZxdW90O2JyYW5kJnF1b3Q7OiZxdW90O0JBRzJxOWZuR184JnF1b3Q7fTwvQXR0cmliOkRhdGE+CiAgICAgPEF0dHJpYjpFeHRJZD41ZjU4ZGUyYS1iZWE4LTRjNGUtOWI4NS1kZjQ3OTdiNzIyZTc8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4x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";

  const upgradeCheckout = () => {
    const section = document.querySelector("#planos");
    if (!section) return;
    const copy = section.querySelector(".copy");
    if (copy) {
      copy.innerHTML = `
        <span class="kicker">Plano Seu Food</span>
        <h2>Seu cardápio profissional por <em>R$ 70 por mês.</em></h2>
        <p>Comece com uma estrutura pronta para apresentar sua marca, receber pedidos e organizar a operação. A implementação inicial é gratuita.</p>
        <ul class="check-list">
          <li>Cardápio digital responsivo</li>
          <li>Painel de gestão da operação</li>
          <li>Personalização com logo e cores</li>
          <li>Atendimento via WhatsApp</li>
        </ul>`;
    }

    const card = section.querySelector(".checkout-card");
    if (card) {
      card.classList.add("purchase-card");
      card.setAttribute("aria-label", "Plano Seu Food por R$ 70 mensais");
      card.innerHTML = `
        <div class="checkout-media">
          <img src="https://cdn.seufood.com/capa-seufood.webp" alt="Apresentação visual do Seu Food com cardápio digital e painel de gestão" width="2000" height="768" loading="lazy" referrerpolicy="no-referrer">
        </div>
        <div class="purchase-head">
          <div>
            <span class="purchase-eyebrow">PLANO MENSAL</span>
            <h3>Seu Food</h3>
            <p>Cardápio digital + painel de gestão para o seu negócio.</p>
          </div>
          <span class="free-setup">Implementação grátis</span>
        </div>
        <div class="purchase-price">
          <span class="old-price">De R$ 120/mês</span>
          <div class="offer-line"><span class="offer-prefix">por</span><strong>R$ 70</strong><span class="offer-cycle">/mês</span></div>
          <small>Economize R$ 50 todos os meses.</small>
        </div>
        <div class="purchase-benefits">
          <div class="purchase-benefit"><img src="${BENEFIT_ICON}" alt="" aria-hidden="true"><div><strong>Cardápio digital profissional</strong><small>Visual responsivo para celular, tablet e computador.</small></div></div>
          <div class="purchase-benefit"><img src="${BENEFIT_ICON}" alt="" aria-hidden="true"><div><strong>Painel de gestão</strong><small>Controle pedidos, produtos e informações do negócio.</small></div></div>
          <div class="purchase-benefit"><img src="${BENEFIT_ICON}" alt="" aria-hidden="true"><div><strong>Identidade da sua marca</strong><small>Logo, cores e apresentação personalizada.</small></div></div>
          <div class="purchase-benefit"><img src="${BENEFIT_ICON}" alt="" aria-hidden="true"><div><strong>Implementação gratuita</strong><small>Configuração inicial sem taxa de implantação.</small></div></div>
        </div>
        <a class="btn btn-primary btn-large full purchase-cta" href="https://wa.me/5545988025563?text=Ol%C3%A1!%20Quero%20contratar%20o%20Seu%20Food.%20Vi%20a%20oferta%20de%20R%24%20120%20por%20R%24%2070%20por%20m%C3%AAs%20com%20implementa%C3%A7%C3%A3o%20gr%C3%A1tis." target="_blank" rel="noopener noreferrer">QUERO CONTRATAR AGORA</a>
        <a class="demo-link" href="https://seufood.com/japapou" target="_blank" rel="noopener noreferrer">Ver um modelo do cardápio funcionando →</a>
        <p class="checkout-note">Atendimento e contratação pelo WhatsApp.</p>`;
    }

    const style = document.createElement("style");
    style.id = "purchase-checkout-style";
    style.textContent = `
      .purchase-card{position:relative;overflow:hidden;background:linear-gradient(180deg,rgba(14,30,20,.97),rgba(7,15,10,.98));border-color:rgba(104,255,97,.18)}
      .purchase-card::before{content:"";position:absolute;inset:0 0 auto 0;height:3px;background:linear-gradient(90deg,transparent,var(--green),transparent)}
      .purchase-head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;margin-top:4px;padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,.08)}
      .purchase-head h3{margin:6px 0 6px;font-size:32px;font-weight:600}
      .purchase-head p{margin:0;color:var(--muted);line-height:1.6;max-width:390px}
      .purchase-eyebrow{font-size:12px;letter-spacing:.13em;color:var(--green-soft);font-weight:700}
      .free-setup{flex:0 0 auto;padding:9px 13px;border-radius:999px;background:rgba(104,255,97,.1);border:1px solid rgba(104,255,97,.22);color:#dffff0;font-size:12px;font-weight:700;white-space:nowrap}
      .purchase-price{padding:22px 0;border-bottom:1px solid rgba(255,255,255,.08)}
      .old-price{display:inline-block;color:#93a597;font-size:15px;text-decoration:line-through;text-decoration-thickness:2px;margin-bottom:6px}
      .offer-line{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
      .offer-prefix{color:#b5c7b9;font-size:15px}
      .offer-line strong{font-family:Outfit,sans-serif;font-size:56px;line-height:.95;font-weight:700;color:#fff;letter-spacing:-.05em}
      .offer-cycle{color:#d4e0d6;font-size:18px;font-weight:600}
      .purchase-price small{display:block;margin-top:8px;color:#9eb0a2}
      .purchase-benefits{display:grid;gap:11px;padding:20px 0}
      .purchase-benefit{display:grid;grid-template-columns:48px minmax(0,1fr);align-items:center;gap:12px;padding:12px;border-radius:17px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06)}
      .purchase-benefit img{width:44px;height:44px;object-fit:contain;filter:drop-shadow(0 5px 10px rgba(0,0,0,.18))}
      .purchase-benefit strong{display:block;font-family:Inter,sans-serif;font-size:14px;letter-spacing:0;margin-bottom:3px}
      .purchase-benefit small{display:block;color:#9fb1a3;line-height:1.45;font-size:12px}
      .purchase-cta{margin-top:2px;font-size:14px;letter-spacing:.02em}
      @media (max-width:740px){.purchase-head{display:grid;gap:12px}.free-setup{width:max-content}.offer-line strong{font-size:50px}.purchase-benefit{grid-template-columns:42px minmax(0,1fr);padding:11px}.purchase-benefit img{width:38px;height:38px}}
    `;
    if (!document.querySelector("#purchase-checkout-style")) document.head.appendChild(style);
  };

  upgradeCheckout();
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
