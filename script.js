const navToggle = document.querySelector('[aria-controls="primary-nav"]');

const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  console.log("clicked");
  const isNavOpen = navToggle.getAttribute("aria-expanded");
  // console.log(isNavOpen);
  if (isNavOpen === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }
  console.log(isNavOpen);
});
