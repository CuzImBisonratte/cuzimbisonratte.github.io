// Check if an error code is present in the URL
if (location.href.indexOf("?e=") > -1) {

    // Get the error code
    var error = location.href.match(/\?e=([0-9]+)/)[1];

    // Check if an element with error_card_[code] exists
    if (document.getElementById("error_card_" + error)) {

        // Add the class error_card_active to the element with error_card_[code]
        document.getElementById("error_card_" + error).classList.add("error_card_active");

        // Smooth scroll to the element with error_card_[code]
        document.getElementById("error_card_" + error).scrollIntoView({
            behavior: "auto",
            block: "end"
        });

    } else {

        // Add the class error_card_active to the element with error_card_404
        document.getElementById("error_card_404").classList.add("error_card_active");

    }

} else {

    // Redirect to the start page
    window.location.href = "../index.html";

}