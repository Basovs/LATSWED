window.onscroll = function() {
    changeOnScroll()
}

function changeOnScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector("nav").className = "onScroll"
    } else {
        document.querySelector("nav").className = ""
    }
}

window.addEventListener("scroll", function() {
    const target = document.querySelector(".parallax")
    let scrolled = window.pageYOffset
    let positiveRate = scrolled * 0.3

    target.style.transform = `translate3d(0px, ${positiveRate}px, 0px)`
})
