const navLinks = document.querySelectorAll(".nav-item");

function setActiveAnchor() {
  const hash = window.location.hash;

  navLinks.forEach((link) => {
    link.classList.remove("is-active");

    if (hash && link.getAttribute("href") === hash) {
      link.classList.add("is-active");
    }
  });

  // стан за замовчуванням (перша секція)
  if (!hash) {
    navLinks[0].classList.add("is-active");
  }
}

setActiveAnchor();
window.addEventListener("hashchange", setActiveAnchor);
