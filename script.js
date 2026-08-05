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
const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

  appointmentForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const mobile = document.getElementById("mobile").value.trim();

    if (mobile.length !== 10 || isNaN(mobile)) {
      alert("Enter Valid 10 Digit Mobile Number");
      return;
    }

    const data = {
      name: document.getElementById("name").value,
      mobile: mobile,
      age: document.getElementById("age").value,
      gender: document.getElementById("gender").value,
      doctor: document.getElementById("doctor").value,
      problem: document.getElementById("problem").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value
    };

    try {

      const response = await fetch("https://script.google.com/macros/s/AKfycbxw3ROB6GYNcy8pxoCJHJ6jPFysciUyxMF7FQ8eNIfyv0lODs7CfRir67C61XxJKC1i8g/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      alert("Appointment Booked Successfully");

      window.location.href = "success.html";
