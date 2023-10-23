const hamburger = document.querySelector(".menu");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navmenu.classList.toggle("active");
    hamburger.classList.toggle("TBG");
});

/* questions */
const itemLinks = document.querySelectorAll(".item1-link");
const answers = document.querySelectorAll(".answer");
const arrowup = document.querySelectorAll(".down-outline");

let activeIndex = null;

itemLinks.forEach((itemLink, index) => {
    itemLink.addEventListener("click", () => {
        if (activeIndex !== null) {
            answers[activeIndex].classList.remove("active");
            arrowup[activeIndex].classList.remove("rotated");
        }

        if (activeIndex !== index) {
            answers[index].classList.add("active");
            arrowup[index].classList.add("rotated");
            activeIndex = index;
        } else {
            activeIndex = null;
        }
    });
});



/* login page */

const texts = document.querySelectorAll(".LURE");
const login = document.querySelector(".login");
const close = document.querySelector (".close-icon")

texts.forEach(text => {
    text.addEventListener("click", () => {
        login.classList.remove("close"); // Remove "close" class before toggling "log" class
        login.classList.toggle("log");
    });
});

// Event listener for close button
close.addEventListener("click", () => {
    login.classList.toggle("close");
});


function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const cin = document.getElementById('cin').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    const nameRegex = /^[A-Za-z]{2,}$/;
    const cinRegex = /^[A-Za-z]{2}\d{6}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+212\d{9}$/;

    if (nameRegex.test(firstName) && nameRegex.test(lastName) && cinRegex.test(cin) &&
        emailRegex.test(email) && phoneRegex.test(phoneNumber)) {
        alert('Thank you for your Submit!');// Form is valid, you can submit the data.
        login.classList.toggle("close");
    } else {
        alert('Check your informations.'); // Form is not valid, display an error message.
    }
};




