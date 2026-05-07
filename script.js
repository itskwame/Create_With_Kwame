const BOOKING_URL = "https://calendly.com/YOUR-LINK";
const PARENTPREP_HOME_URL = "https://parent-prep.com/";
const PARENTPREP_QUIZ_URL = "https://parent-prep.com/quiz";
const iconPaths = {
  learn: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H7a3 3 0 0 0-3 3V5.5Z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>',
  build: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4.5 8 7.5 4.2L19.5 8"/><path d="M12 12.2V21"/>',
  implement: '<circle cx="6" cy="7" r="3"/><circle cx="18" cy="7" r="3"/><circle cx="12" cy="18" r="3"/><path d="M8.7 8.7 10.5 15"/><path d="m15.3 8.7-1.8 6.3"/><path d="M9 7h6"/>',
  parentprep: '<path d="M12 3 20 6v6c0 5-3.4 7.7-8 9-4.6-1.3-8-4-8-9V6l8-3Z"/><path d="M9 12l2 2 4-5"/>',
  shield: '<path d="M12 3 20 6v6c0 5-3.4 7.7-8 9-4.6-1.3-8-4-8-9V6l8-3Z"/>',
  gps: '<path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  autocorrect: '<path d="M4 17 10 5l6 12"/><path d="M6.2 13h7.6"/><path d="m16 7 2 2 4-4"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/>',
  streaming: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3V9Z"/>',
  social: '<path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"/><path d="M4 19c1.8-2.2 4.4-3.5 8-3.5s6.2 1.3 8 3.5"/><path d="M17 5.5h3.5V9"/>',
  phone: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18h2"/>',
  watch: '<path d="M9 3h6l1 4H8l1-4Z"/><rect x="7" y="7" width="10" height="10" rx="3"/><path d="m8 17 1 4h6l1-4"/>',
  support: '<path d="M4 12a8 8 0 0 1 16 0"/><path d="M4 12v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z"/><path d="M20 12v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z"/><path d="M14 20h2a4 4 0 0 0 4-4"/>',
  workplace: '<rect x="4" y="6" width="16" height="12" rx="2"/><path d="M9 6V4h6v2"/><path d="M4 12h16"/>',
  presentation: '<rect x="4" y="4" width="16" height="12" rx="1.5"/><path d="M12 16v5"/><path d="m8 21 4-5 4 5"/>',
  content: '<path d="M6 3h9l3 3v15H6V3Z"/><path d="M14 3v4h4"/><path d="M8.5 11h7"/><path d="M8.5 15h7"/>',
  visuals: '<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m4 16 4-3 3 2 4-4 5 5"/>',
  systems: '<path d="M5 6h14"/><path d="M5 12h14"/><path d="M5 18h14"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/>',
  automation: '<path d="M4 12a8 8 0 0 1 13.7-5.7"/><path d="M17 3v4h4"/><path d="M20 12a8 8 0 0 1-13.7 5.7"/><path d="M7 21v-4H3"/>',
  agent: '<rect x="5" y="6" width="14" height="12" rx="4"/><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M10 14h4"/><path d="M12 3v3"/>',
  human: '<circle cx="12" cy="8" r="4"/><path d="M5 21c1.4-4 4-6 7-6s5.6 2 7 6"/>',
  brain: '<path d="M9 4a4 4 0 0 0-4 4v1a3 3 0 0 0 0 6v1a4 4 0 0 0 7 2.6V5.4A4 4 0 0 0 9 4Z"/><path d="M15 4a4 4 0 0 1 4 4v1a3 3 0 0 1 0 6v1a4 4 0 0 1-7 2.6V5.4A4 4 0 0 1 15 4Z"/>',
  family: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c1.1-4 3.3-6 5.5-6s4.4 2 5.5 6"/><path d="M14.5 16c1.1-1.2 2.2-1.8 3.5-1.8 1.8 0 3.2 1.6 4 4.8"/>',
  educator: '<path d="m12 4 9 5-9 5-9-5 9-5Z"/><path d="M6 12v4c2 2 10 2 12 0v-4"/>',
  team: '<circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3 20c1-3.2 2.8-5 5-5s4 1.8 5 5"/><path d="M11 20c1-3.2 2.8-5 5-5s4 1.8 5 5"/>',
  spark: '<path d="M12 3v5"/><path d="M12 16v5"/><path d="M3 12h5"/><path d="M16 12h5"/><path d="m5.6 5.6 3.5 3.5"/><path d="m14.9 14.9 3.5 3.5"/><path d="m18.4 5.6-3.5 3.5"/><path d="m9.1 14.9-3.5 3.5"/>'
};

function makeIcon(name) {
  const paths = iconPaths[name] || iconPaths.spark;
  return `<svg class="line-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths}</svg>`;
}

document.querySelectorAll("[data-icon]").forEach((element) => {
  const label = element.textContent.trim();
  element.innerHTML = `${makeIcon(element.dataset.icon)}${label ? `<span>${label}</span>` : ""}`;
});

document.querySelectorAll("[data-booking-link]").forEach((link) => {
  if (BOOKING_URL.includes("YOUR-LINK")) {
    link.href = "contact.html";
  } else {
    link.href = BOOKING_URL;
    link.target = "_blank";
    link.rel = "noopener";
  }
});

document.querySelectorAll("[data-parentprep-home-link]").forEach((link) => {
  link.href = PARENTPREP_HOME_URL;
});

document.querySelectorAll("[data-quiz-link]").forEach((link) => {
  link.href = PARENTPREP_QUIZ_URL;
});

const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const siteHeader = document.querySelector(".site-header");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.focus();
    }
  });
}

function updateHeader() {
  siteHeader?.classList.toggle("scrolled", window.scrollY > 24);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("[data-nav-link]").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === current || (current === "" && href === "index.html")) {
    link.classList.add("active");
  }
});

document.querySelectorAll("[data-scenario-option]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-scenario-option]").forEach((item) => {
      item.classList.remove("selected");
    });
    button.classList.add("selected");
  });
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".section, .card, .mini-pill, .process, .agents-banner, .old-new-side, .shift-arrow").forEach((item, index) => {
    item.classList.add("js-reveal");
    item.style.setProperty("--stagger", `${Math.min(index % 8, 7) * 55}ms`);
    revealObserver.observe(item);
  });

  const processObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-active");
        processObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  document.querySelectorAll(".process").forEach((process) => processObserver.observe(process));
}

document.querySelectorAll("[data-filter]").forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === filter));
    document.querySelectorAll("[data-category]").forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.hidden = category !== "all" && !categories.includes(category);
    });
  });
});

document.querySelectorAll("form[data-static-form]").forEach((form) => {
  const status = form.querySelector("[data-form-status]");
  const submit = form.querySelector("button[type='submit']");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    form.querySelectorAll(".field-error").forEach((error) => error.textContent = "");

    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid").forEach((field) => {
        const error = form.querySelector(`[data-error-for="${field.name}"]`);
        if (error) error.textContent = field.validity.valueMissing ? "This field is required." : "Please enter a valid value.";
      });
      form.reportValidity();
      return;
    }

    if (form.querySelector("[name='bot-field']")?.value) return;

    submit.disabled = true;
    submit.dataset.originalText = submit.textContent;
    submit.textContent = "Sending...";
    if (status) {
      status.hidden = false;
      status.textContent = "Sending your request...";
      status.className = "form-status";
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
      });

      if (!response.ok) throw new Error("Form submission failed.");

      form.reset();
      if (status) {
        status.textContent = "Thanks. Your request was sent. I'll review it and follow up with the best next step.";
        status.classList.add("success");
      }
    } catch (error) {
      if (status) {
        status.textContent = "Something went wrong. Please try again or email hello@createwithkwame.com.";
        status.classList.add("error");
      }
    } finally {
      submit.disabled = false;
      submit.textContent = submit.dataset.originalText;
    }
  });
});
