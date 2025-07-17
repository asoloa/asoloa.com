requestAnimationFrame(() => {
    document.getElementById("splash").classList.add("visible");
});

// setTimeout(() => {
//     document.getElementById("splash").remove();
//     document.querySelector('main').classList.remove("blurred");
// }, 1600);

document.getElementById("splash").addEventListener('load', removeSplash());
function removeSplash() {
    setTimeout(() => {
        document.getElementById("splash").remove();
        document.querySelector('main').classList.remove("blurred");
    }, 1600);
}

// window.addEventListener('load', checkUnblur);

// function checkUnblur() {
//     setTimeout(() => {
//         document.getElementById("splash").remove();
//         document.querySelector('main').classList.remove("blurred");
//     }, 1600);
// }