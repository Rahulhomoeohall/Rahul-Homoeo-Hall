// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
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

console.log("Welcome to Rahul Homoeo Hall Website");

// Appointment Form Logic
const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
  appointmentForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const mobileInput = document.getElementById("mobile");
    const mobileValue = mobileInput ? mobileInput.value.trim() : "";

    if (mobileValue.length !== 10 || isNaN(mobileValue)) {
      alert("Enter Valid 10 Digit Mobile Number");
      return;
    }

    const submitBtn = appointmentForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Booking...";
    }

    // ⚠️ यहाँ "" के बीच अपना ऊपर कॉपी किया हुआ नया Web App URL पेस्ट करें
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxx057ZmXcJOwcUgqDUNJgXn3OSEaivziMTREb5riDZYcBuXkKNeGryYWuFymYZ4qHV1A/exec"; 

    const formDataInstance = new FormData(appointmentForm);
    const params = new URLSearchParams(formDataInstance);

    fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    })
    .then(() => {
      alert("Appointment Booked Successfully");
      window.location.href = "success.html";
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Booking Failed: Server Error");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit";
      }
    });

  });
}
