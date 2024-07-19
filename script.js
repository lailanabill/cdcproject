document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const closeBtn = document.getElementById("closeBtn");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
      navLinks.classList.remove("open");
    }
  });

  console.log("DOM fully loaded and parsed");
  console.log("navToggle:", navToggle);
  console.log("navLinks:", navLinks);
  console.log("closeBtn:", closeBtn);
});
