// Active link highlight on scroll
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

const setActive = () => {
  let current = "";
  sections.forEach(s => {
    const top = s.offsetTop - 90;
    if (window.scrollY >= top) current = s.id;
  });
  links.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
};

window.addEventListener("scroll", setActive);
setActive();
