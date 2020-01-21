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
        document
            .querySelector(".hamburger-inner")
            .classList.add("onScroll-hamburger")
    } else {
        document.querySelector("nav").className = ""
        document
            .querySelector(".hamburger-inner")
            .classList.remove("onScroll-hamburger")
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

//For hamburger menu

var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t)
    else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
}

var hamburgers = document.querySelectorAll(".hamburger")
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener(
            "click",
            function() {
                this.classList.toggle("is-active")
            },
            false
        )
    })
}
