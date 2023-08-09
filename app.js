// TOGGLE - changing the color of the website from black to white

const toggleBall = document.querySelector(".toggleBall");
const container = document.querySelector(".container");
const movieListTitles = document.querySelectorAll(".movieListTitle");
const navbarContainer = document.querySelector(".navbarContainer");
const sidebar = document.querySelector(".sidebar");
const leftMenuIcons = document.querySelectorAll(".leftMenuIcon");
const toggle = document.querySelector(".toggle");
const menuListItems = document.querySelectorAll(".menuListItem");

toggleBall.addEventListener("click", () => {
    toggleBall.classList.toggle("active");
    container.classList.toggle("active");
    navbarContainer.classList.toggle("active");
    sidebar.classList.toggle("active");
    toggle.classList.toggle("active");
    leftMenuIcons.forEach(leftMenuIcon => {
        leftMenuIcon.classList.toggle("active");
    })
    menuListItems.forEach(menuListItem => {
        menuListItem.classList.toggle("active");
    })
    movieListTitles.forEach(movieListTitle => {
        movieListTitle.classList.toggle("active");
    })

})

// SLIDER

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movieList");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});