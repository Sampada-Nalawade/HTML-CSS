/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


/* ===============================
   BOOKING FORM
================================ */

const checkin = document.getElementById("checkin");

const checkout = document.getElementById("checkout");

const today = new Date()
    .toISOString()
    .split("T")[0];

checkin.min = today;

checkout.min = today;


checkin.addEventListener("change", function() {

    checkout.min = checkin.value;

});


const bookingForm =
    document.getElementById("bookingForm");

const formMessage =
    document.getElementById("formMessage");


bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (checkout.value <= checkin.value) {

        formMessage.textContent =
            "Please select a valid check-out date.";

        return;

    }

    formMessage.textContent =
        "Thank you! Your booking enquiry has been received. We will contact you shortly.";

});