// Function to remove preload after load
let loader = document.querySelector(".loader-container");

window.addEventListener("load", () => {
  loader.classList.add("disappear");
});
window.addEventListener("load", () => {
  setTimeout(function () {
    $(".no-scroll-preload").css("overflow", "visible");
  }, 1000);
  $(".loader-container").fadeOut(2500);
})