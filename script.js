// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Sticky Header Shadow
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

// Welcome Message
console.log("Welcome to Rahul Homoeo Hall Website");

// ==========================
// Appointment Form
// ==========================
const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

  appointmentForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const mobileValue = document.getElementById("mobile").value.trim();

    if (mobileValue.length !== 10 || isNaN(mobileValue)) {
      alert("Enter Valid 10 Digit Mobile Number");
      return;
    }

    const submitBtn = appointmentForm.querySelector('button[type="submit"]');
    if(submitBtn) submitBtn.disabled = true;

    // Fixed Web App URL Added
    const WEB_APP_URL = "https://google.com"; 

    const formData = {
      mobile: mobileValue
    };

    fetch(WEB_APP_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      alert("Appointment Booked Successfully");
      window.location.href = "success.html";
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Booking Failed: Server Connection Error");
      if(submitBtn) submitBtn.disabled = false;
    });

  });

}
