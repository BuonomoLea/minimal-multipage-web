const btn = document.getElementById('btnToggle');
const menu = document.getElementById("menu");
const croix = document.getElementById('croix');

btn.addEventListener("click", () => {
  if (menu.style.transform === "translateX(0)") {
    menu.style.transform = "translateX(100%)";
  } else {
    menu.style.transform = "translateX(0)";
  }
});
croix.addEventListener("click", () => {
    if (menu.style.transform === "translateX(100%)") {
      menu.style.transform = "translateX(0)";
    } else {
      menu.style.transform = "translateX(100%)";
    }
  });