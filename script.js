document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");
    const popup = document.getElementById("success-popup");
    const closePopup = document.getElementById("close-popup");
  
    if (!form) return;
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      //run google reCAPTCHA v3
      grecaptcha.ready(() => {
        grecaptcha.execute("6LfQXVgsAAAAABCptEp_JfL1BajZmJ5iq3kPSHSf", { action: "submit" })
          .then(token => {
  
            document.getElementById("g-recaptcha-response").value = token;
            // submit form
            fetch(form.action, {
              method: "POST",
              body: new FormData(form)
            })
              .then(res => res.json())
              .then(data => {
                if (data.success) {
                  //show popup
                  popup.style.display = "flex";
                  //reset form
                  form.reset();
  
                  // Auto-close after 4 seconds
                  setTimeout(() => {
                    popup.style.display = "none";
                  }, 4000);
  
                } else {
                  alert("Something went wrong. Please try again.");
                }
              })
              .catch(() => {
                alert("Network error. Please try again.");
              });
  
          });
      });
    });
  
    // Manual close
    if (closePopup) {
      closePopup.addEventListener("click", () => {
        popup.style.display = "none";
      });
    }
  
  });
  