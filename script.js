// menu opening and closing
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


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