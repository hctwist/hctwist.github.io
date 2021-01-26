
var showing = false;

function onClickHamburger() {

    if(showing) {

        hideMenu();
    }
    else {

        showMenu();
    }

    showing = !showing;
}

function hideMenu() {

    // $("#main-navigation").css({"visibility": "hidden", "opacity": "0"});
    // $("#hamburger-menu-cover").css({"visibility": "hidden", "opacity": "0"});

    $("#main-navigation").removeClass("menu-show");
    $("#hamburger-menu-cover").removeClass("menu-show");
}

function showMenu() {

    // $("#main-navigation").css({"visibility": "visible", "opacity": "1"});
    // $("#hamburger-menu-cover").css({"visibility": "visible", "opacity": "1"});

    $("#main-navigation").addClass("menu-show");
    $("#hamburger-menu-cover").addClass("menu-show");
}
