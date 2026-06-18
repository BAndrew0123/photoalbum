// Progress Bar Scroll Effect
window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progressHeight = (scrollTop / docHeight) * 100;
    
    document.querySelector(".progressBar").style.height = progressHeight + "%";
});
