// alert(
//     "Latswed Konsult AB website is under construction but feel free to use it!."
// )

window.onscroll = function() {
    changeOnScroll()
}

function changeOnScroll() {
    if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
    ) {
        document.querySelector("nav").className = "onScroll"
    } else {
        document.querySelector("nav").className = ""
    }
}

window.addEventListener("scroll", function() {
    let scrolled = window.pageYOffset
    let positiveRate = scrolled * 0.28
    const targets = document.querySelectorAll(".parallax")
    for (let i = 0; i < targets.length; i++) {
        targets[i].style.transform = `translate3d(0px, ${positiveRate}px, 0px)`
    }
})
