function checkAvailability(n) {
    // This function will display the specified tab of the form ...
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "block";
    document.getElementById("show-avail").style.display = "block";
}

// function checkAvailability() {
//     const date = document.getElementById("date").value;
//     const time = document.getElementById("time").value;
//     const party = document.getElementById("party").value;

//     const form = document.getElementById("reservation-form");
//     form.replaceWith(document.createElement("p"));
// }