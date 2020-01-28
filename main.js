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

//Slide up Fade in TRY

const faders = document.querySelectorAll(".fade-in")
const sliders = document.querySelectorAll(".slide-in")

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
}

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("appear")
            appearOnScroll.unobserve(entry.target)
        }
    })
},
appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

// JSON handler
const btn = document.querySelector("#loadBtn")
const renderDiv = document.querySelector("#renderDiv")
// const url = "https://api.netlify.com/api/v1/sites/www.latswed.se"

btn.addEventListener("click", function() {
    const url =
        "https://api.netlify.com/api/v1/sites/0a85b933-d0ea-4ec7-b217-1648cf413bcd/forms"
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            // console.log(data)

            data.forEach(element => {
                console.log(element)
            })
        })
    // load(url, cb)
})

// function cb(xhr) {
//     const json = JSON.parse(xhr.responseText)
//     console.log(json)
// const arr = json.names
// const name = arr[0]
//     renderDiv.innerHTML = json
// }
