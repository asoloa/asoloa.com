requestAnimationFrame(() => {
    document.getElementById("splash").classList.add("visible");
});

// original splash has 50 frames for 2 seconds (40ms per frame)
// splash was updated to 40 frames which adds up to 1.6 seconds
setTimeout(() => {
    document.getElementById("splash").remove();
    document.querySelector('main').classList.remove("blurred");
}, 1600);

// const splash = document.getElementById("splash");
// const splashImg = document.getElementById("splashImg");

// splashImg.addEventListener("complete", () => {
//   splash.remove();
//   document.querySelector("main").classList.remove("blurred");
// });