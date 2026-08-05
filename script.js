function addHamburgerMenuEventListener() {

    window.addEventListener(
        "resize",
        resetNavigation
    );


    document
        .getElementById("hamburger-menu")
        .addEventListener(
            "click",
            toggleNavigation
        );

}



function toggleNavigation() {

    const mainNavigation =
        document.getElementById(
            "main-navigation"
        );


    const display =
        window
            .getComputedStyle(mainNavigation)
            .display;


    if (display === "none") {

        mainNavigation.style.display =
            "block";

    }

    else {

        mainNavigation.style.display =
            "none";

    }

}



function resetNavigation() {

    const minWidth = 1200;


    const mainNavigation =
        document.getElementById(
            "main-navigation"
        );


    if (window.innerWidth < minWidth) {

        mainNavigation.style.display =
            "none";

    }

    else {

        mainNavigation.style.display =
            "block";

    }

}



addHamburgerMenuEventListener();
