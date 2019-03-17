const openMenu = () => {
    $("nav").fadeIn(1000);
}

const closeMenu = () => {
    $("nav").fadeOut(1000);
}

$("a.open-menu").click(function(e) {
    e.preventDefault();
    openMenu();
})

$("a.close-menu").click(function(e) {
    e.preventDefault();
    closeMenu();
})

$(".nav-home").click(function () {
    closeMenu();
})

$(".nav-about").click(function () {
    closeMenu();
})

$(".nav-work").click(function () {
    closeMenu();
})

$(".nav-contact").click(function(){
    closeMenu();
})

$(".skill-container").hover(function(){
    console.log("A HOVER!")
    $(this).children(".icon-description").toggleClass("icon-display");
})