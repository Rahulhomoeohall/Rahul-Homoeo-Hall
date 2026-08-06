// Smooth Scroll (पेज को आराम से स्क्रॉल करने के लिए)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Sticky Header Shadow (स्क्रॉल करने पर हेडर में शैडो लाने के लिए)
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

// Appointment Form Logic (अपॉइंटमेंट फॉर्म का काम यहाँ से शुरू है)
const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
  appointmentForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // फॉर्म से मोबाइल नंबर निकालना
    const mobileValue = document.getElementById("mobile").value.trim();

    // मोबाइल नंबर चेक करना कि वह 10 अंक का है या नहीं
    if (mobileValue.length !== 10 || isNaN(mobileValue)) {
      alert("Enter Valid 10 Digit Mobile Number");
      return;
    }

    // सबमिट बटन को थोड़ी देर के लिए बंद करना
    const submitBtn = appointmentForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Booking...";
    }

    // आपका नया Google Script URL (यहाँ पहले से जुड़ चुका है)
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbztSIamhBzOpEiQ6fALf3mYWJO_PDU3CLC3zZX1GUnHLX_4XxZFFMX6o6LUc1yhf7FozQ/exec"; 

    // डेटा को सुरक्षित फॉर्म फॉर्मेट में तैयार करना (CORS ब्लॉकिंग रोकने के लिए)
    const params = new URLSearchParams();
    params.append("mobile", mobileValue);

    // Google Script को डेटा भेजना
    fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors", 
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    })
    .then(() => {
      // डेटा शीट में पहुँचने के बाद यूजर को सक्सेस दिखाना
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
