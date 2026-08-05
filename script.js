function addHamburgerMenuEventListener() {

    window.addEventListener("resize", resetNavigation);

    document
        .getElementById("hamburger-menu")
        .addEventListener("click", toggleNavigation);
}


function toggleNavigation() {

    const navigation =
        document.getElementById("main-navigation");

    const display =
        window.getComputedStyle(navigation).display;


    if (display === "none") {

        navigation.style.display = "block";

    } else {

        navigation.style.display = "none";

    }
}


function resetNavigation() {

    const navigation =
        document.getElementById("main-navigation");


    if (window.innerWidth >= 1200) {

        navigation.style.display = "block";

    } else {

        navigation.style.display = "none";

    }
}


addHamburgerMenuEventListener();
