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

// Appointment Form
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
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Booking...";
    }

    // ⚠️ यहाँ उद्धरण चिह्नों "" के बीच अपना कॉपी किया हुआ नया Web App URL डालें
    const WEB_APP_URL = "https://google.com"; 

    // डेटा को सुरक्षित फॉर्म फॉर्मेट में तैयार करना (CORS बाईपास करने के लिए)
    const params = new URLSearchParams();
    params.append("mobile", mobileValue);

    fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors", // ब्राउज़र की ब्लॉकिंग को रोकने के लिए
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    })
    .then(() => {
      // no-cors मोड में रिस्पॉन्स डायरेक्ट सक्सेस माना जाता है और डेटा शीट में चला जाता है
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
