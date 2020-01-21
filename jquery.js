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
})
