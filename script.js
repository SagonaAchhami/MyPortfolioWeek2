// Menu Toggle
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Scroll Progress Bar
const progress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / height) * 100;
    progress.style.width = scrolled + "%";
});

// Form Handling
const form = document.getElementById("contact-form-id");
const msg = document.getElementById("form-message");

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!name.value || !email.value || !message.value) {
        msg.textContent = "Please fill all fields.";
        msg.style.color = "red";
    } else {
   msg.textContent = "Message sent successfully!";
        msg.style.color = "lightgreen";
        form.reset();
    }
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();