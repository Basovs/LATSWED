$(document).ready(function() {
    $(".hamburger-btn").click(function() {
        $(".hamburger-menu").toggleClass("show")
        $("body").toggleClass("overflow-hidden")
    })

    $(".hamburger-a").click(function() {
        $(".hamburger-menu").toggleClass("show")
        $("body").removeClass("overflow-hidden")
        $(".hamburger").toggleClass("is-active")
    })

    // $(".hamburger").click(function() {
    //     this.toggleClass("is-active")
    // })

    //hamburger menu li slide
    $(".hamburger-btn").click(function() {
        $(".li_1").animate({ left: "280px" }, 160)
        $(".li_2")
            .delay(100)
            .animate({ left: "280px" }, 160)
        $(".li_3")
            .delay(200)
            .animate({ left: "280px" }, 160)
        $(".li_4")
            .delay(300)
            .animate({ left: "280px" }, 160)
        $(".li_5")
            .delay(400)
            .animate({ left: "280px" }, 160)
    })

    // jQuery(".professions__professions-container article").each(function(i) {
    //     setTimeout(() => {
    //         this.addClass("animated fadeInUp")
    //     }, 250 * i)
    // })
})
