$(document).ready(function() {
    $(".hamburger-btn").click(function() {
        $(".hamburger-menu").toggleClass("show")
        $("body").toggleClass("position-fixed")
    })

    $("a").click(function() {
        $(".hamburger-menu").toggleClass("show")
        $("body").removeClass("position-fixed")
        $(".hamburger").toggleClass("is-active")
    })

    // $(".hamburger").click(function() {
    //     this.toggleClass("is-active")
    // })

    //hamburger menu li slide
    $(".hamburger-btn").click(function() {
        $(".li_1").animate({ margin: "2rem 0 2rem 0" }, 150)
        $(".li_2")
            .delay(100)
            .animate({ margin: "2rem 0 2rem 0" }, 150)
        $(".li_3")
            .delay(200)
            .animate({ margin: "2rem 0 2rem 0" }, 150)
        $(".li_4")
            .delay(300)
            .animate({ margin: "2rem 0 2rem 0" }, 150)
    })
})
