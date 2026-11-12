
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();

// WHATSAPP CONFIGURATION

// Replace with your actual WhatsApp number.
// Use country code followed by number, without + or spaces.

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const whatsappMessage =
  "Hello JDK Enterprises, I would like to enquire about your electronics manufacturing services.";

const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.href =
  "https://wa.me/" + WHATSAPP_NUMBER +
  "?text=" + encodeURIComponent(whatsappMessage);

// CONTACT FORM

// Replace with your actual business email address.

const BUSINESS_EMAIL = "YOUR_EMAIL@example.com";

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const formData = new FormData(contactForm);

  const name = formData.get("name");
  const company = formData.get("company");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const message = formData.get("message");

  const subject = "New Business Enquiry - JDK Enterprises";

  const body = `
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}

Service Required: ${service}

Project Requirements:
${message}
`;

  const mailtoLink =
    "mailto:" + BUSINESS_EMAIL +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  formStatus.textContent =
    "Opening your email application to send the enquiry...";

  window.location.href = mailtoLink;
});
