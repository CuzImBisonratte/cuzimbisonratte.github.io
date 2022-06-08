// Get all children of the class flex
var flex = document.getElementsByClassName("flex");
// Loop through all flex elements
for (var i = 0; i < flex.length; i++) {
    // Loop through all flex children
    for (var j = 0; j < flex[i].children.length; j++) {
        // Add a random number to the flex children (order)
        flex[i].children[j].style.order = Math.floor(Math.random() * 10);
    }
}

// When the user scrolls more than 50px from the top of the document, hide #themeButton by turning opacity to 0
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("themeButton").style.opacity = "0";
    } else {
        document.getElementById("themeButton").style.opacity = "1";
    }
}