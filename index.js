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
