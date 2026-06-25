window.addEventListener("scroll", () => {
  const about = document.querySelector(".deal-items");

  if (about.getBoundingClientRect().top < window.innerHeight - 100) {
    about.classList.add("active");
  }
});
