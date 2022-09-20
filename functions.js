// Show less Show more topple
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

// Navbat Text links show hide
const textLinks = document.querySelector("#text-links");
const rightBurger = document.querySelector(".right-burger");

const hideRightSidebar = () => {
  textLinks.classList.remove("right-sidebar");
};

const addRightSidebar = () => {
  textLinks.classList.add("right-sidebar");
};

rightBurger.addEventListener(
  "click",
  textLinks.classList.contains("text-links")
    ? addRightSidebar
    : hideRightSidebar
);

textLinks.addEventListener("click", hideRightSidebar);
document.querySelector(".content").addEventListener("click", hideRightSidebar);

//Sidebar show hide

const leftBurger = document.querySelector(".left-burger");
const sidebar = document.querySelector("#sidebar");

leftBurger.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
