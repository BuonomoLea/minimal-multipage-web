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

const formulaire = document.getElementById("form");
const btnFilter = document.getElementById("btn-filter");

btnFilter.addEventListener("click", showFilter);
btnFilter.addEventListener("mouseover", overFilter);

function showFilter() {
  const computedStyle = window.getComputedStyle(formulaire);
  const currentOpacity = parseFloat(computedStyle.opacity);

  if (currentOpacity === 0) {
    formulaire.style.opacity = "1";
  } else {
    formulaire.style.opacity = "0";
  }
}
function overFilter() {
  formulaire.style.opacity = "1";
}
