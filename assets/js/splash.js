requestAnimationFrame(() => {
    document.getElementById("splash").classList.add("visible");
});

setTimeout(() => {
    document.getElementById("splash").remove();
    document.querySelector('main').classList.remove("blurred");
}, 1600);