document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".project, .project.reverse");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  reveals.forEach(el => observer.observe(el));
});