const toggle = document.querySelector("#toggle");
const toggleDiv = document.querySelector("#toggle-div");
const toggleText = document.querySelector("#toggle-text");
const toggleIcon = document.querySelector("#toggle-icon");

toggleDiv.addEventListener("click", () => {
  toggle.classList.toggle("hide");
  if (toggleText.textContent === "Show less") {
    toggleText.textContent = "Show more";
    toggleIcon.classList.remove("fa-square-minus");
    toggleIcon.classList.add("fa-square-plus");
  } else {
    toggleText.textContent = "Show less";
    toggleIcon.classList.add("fa-square-minus");
    toggleIcon.classList.remove("fa-square-plus");
  }
});
