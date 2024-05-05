const searchBtn = document.querySelector(".btn");
const searchBox = document.querySelector(".search");

searchBtn.addEventListener("click", () => {
    console.log(searchBox);
    searchBox.classList.toggle("active");
});