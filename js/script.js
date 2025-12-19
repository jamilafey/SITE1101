
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  
  
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (toggle) {
      toggle.checked = true;
    }
  } else if (savedTheme === "light") {
    document.body.classList.remove("dark");
    if (toggle) {
      toggle.checked = false;
    }
  }
  
  
  if (toggle) {
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    });
  }
});
