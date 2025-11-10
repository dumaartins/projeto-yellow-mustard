// ===== Scroll suave até Músicas =====
function scrollToMusic() {
  document.getElementById("musicas").scrollIntoView({ behavior: "smooth" });
}

// ===== Alternar tema escuro/claro =====
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// ===== Música de fundo com fade =====
const player = document.getElementById("player");
player.volume = 0;
player.play().catch(() => {}); // evita erro de autoplay bloqueado
let vol = 0;
const fade = setInterval(() => {
  if (vol < 0.3) {
    vol += 0.01;
    player.volume = vol;
  } else {
    clearInterval(fade);
  }
}, 200);
// ===== MENU MOBILE =====
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("ativo");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("ativo");
  });
});

let ultimaPosicao = window.scrollY;
window.addEventListener("scroll", () => {
  if (window.scrollY > ultimaPosicao) {
    nav.classList.remove("ativo");
  }
  ultimaPosicao = window.scrollY;
});
