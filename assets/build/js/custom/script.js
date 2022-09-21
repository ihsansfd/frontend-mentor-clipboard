const themeToggler = document.querySelector(".theme-toggler");
const themeTogglerButton = themeToggler.querySelector(".theme-toggler__button");
const body = document.getElementsByTagName("BODY")[0];

themeTogglerButton.addEventListener("click", () => {
  console.log("FJAPOFjpafjp");
  themeToggler.classList.toggle("active");
  if (themeToggler.classList.contains("active")) {
    body.classList.add("body-dark");
  } else {
    body.classList.remove("body-dark");
  }
});
