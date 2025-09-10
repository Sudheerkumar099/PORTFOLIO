// 1. Active navbar highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.style.fontWeight = "normal";
    link.style.borderBottom = "none";
    if (link.getAttribute("href").includes(current)) {
      link.style.fontWeight = "bold";
      link.style.borderBottom = "2px solid #00bcd4";
    }
  });
});

// 2. Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
document.body.appendChild(scrollBtn);

// inline styles so no CSS edit needed
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.background = "#2196f3";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.width = "45px";
scrollBtn.style.height = "45px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.fontSize = "1.5rem";
scrollBtn.style.display = "none";
scrollBtn.style.boxShadow = "0 3px 10px rgba(0,0,0,0.3)";

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 3. Typing effect for subtitle
const subtitle = document.querySelector(".subtitle p");
if (subtitle) {
  const text = subtitle.textContent;
  subtitle.textContent = "";
  let i = 0;
  (function typeEffect() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
    }
  })();
}

// 4. Fade-in on scroll
const faders = document.querySelectorAll(".section, .card, .mini-project-card");

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = "1";
    entry.target.style.transform = "translateY(0)";
    entry.target.style.transition = "opacity 1s ease, transform 1s ease";
    observer.unobserve(entry.target);
  });
}, { threshold: 0.1 });

faders.forEach(fader => {
  fader.style.opacity = "0";
  fader.style.transform = "translateY(20px)";
  appearOnScroll.observe(fader);
});
