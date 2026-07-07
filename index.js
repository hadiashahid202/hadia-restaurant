const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("hidden-right")) {
          entry.target.classList.add("show-right");
        }

        if (entry.target.classList.contains("hidden-up")) {
          entry.target.classList.add("show-up");
        }

        if (entry.target.classList.contains("hidden-down")) {
          entry.target.classList.add("show-down");
        }
      } else {
        if (entry.target.classList.contains("hidden-right")) {
          entry.target.classList.remove("show-right");
        }

        if (entry.target.classList.contains("hidden-up")) {
          entry.target.classList.remove("show-up");
        }

        if (entry.target.classList.contains("hidden-down")) {
          entry.target.classList.remove("show-down");
        }
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document
  .querySelectorAll(".hidden-right, .hidden-up, .hidden-down")
  .forEach((el) => observer.observe(el));

// sidebar

const sidebar = document.getElementById("sidebar");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".slide-sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
