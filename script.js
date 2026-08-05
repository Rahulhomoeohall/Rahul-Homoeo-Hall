// ==========================
// Smooth Scroll
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ==========================
// Sticky Header Shadow
// ==========================
window.addEventListener('scroll', () => {

  const header = document.querySelector('header');

  if (header) {
    if (window.scrollY > 30) {
      header.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";
    } else {
      header.style.boxShadow = "none";
    }
  }

});

// ==========================
// Welcome Message
// ==========================
console.log("Welcome to Rahul Homoeo Hall Website");

// ==========================
// Appointment Form
// ==========================
appointmentForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const mobile = document.getElementById("mobile").value.trim();

    if (mobile.length !== 10 || isNaN(mobile)) {
      alert("Enter Valid 10 Digit Mobile Number");
      return;
    }

alert("Appointment Booked Successfully");
window.location.href = "success.html";
