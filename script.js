const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.innerHTML = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link =>
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            menuButton.innerHTML = "☰";
            menuButton.setAttribute("aria-expanded", false);
        }
    })
);

const scrollBar = document.getElementById("scroll-progress");
window.addEventListener("scroll", () => {
    scrollBar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 + "%";
});

const contactForm = document.getElementById("contact-form-id");
const messageDiv = document.getElementById("form-message");

if (contactForm && messageDiv) {
    const [nameInput, emailInput, messageInput, phoneInput] = contactForm.querySelectorAll("input");
    [nameInput, emailInput, messageInput, phoneInput].forEach((input, i) => input.id = ["name","email","message","phone"][i]);
  contactForm.addEventListener("submit", e => {
        e.preventDefault();
        if (![nameInput, emailInput, messageInput, phoneInput].every(input => input.value.trim())) {
            messageDiv.textContent = "Please fill out all fields.";
            messageDiv.style.color = "red";
            return;
        }
        messageDiv.textContent = "Thank you for your message! I will get back to you soon.";
        messageDiv.style.color = "green";
        contactForm.reset();
   });
}