document.getElementById("splash").addEventListener('load', removeSplash());
function removeSplash() {
    setTimeout(() => {
        document.getElementById("splash").remove();
        document.querySelector('main').classList.remove("blurred");
    }, 1600);
}