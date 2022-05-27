// menu opening and closing
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


// When the user scrolls more than 50px from the top of the document, hide #themeButton by turning opacity to 0
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("themeButton").style.opacity = "0";
    } else {
        document.getElementById("themeButton").style.opacity = "1";
    }
}

// Check if screen is less than 500px wide
if (window.matchMedia("(max-width: 500px)").matches) {

    // Get all h1 elements
    var h1 = document.getElementsByTagName("h1");

    // Loop through all h1 elements
    for (var i = 0; i < h1.length; i++) {

        // Change the font size of h1 elements
        h1[i].style.fontSize = "calc(100vw/20)";
    }
}