document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contactForm");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const result = await response.json();

      if (response.ok) {
        alert("Your message was sent successfully.");
        form.reset();
      } else {
        alert(`Error: ${result.error}`);
      }
    });
  }
});
// This script handles the form submission for the contact page
// It sends the form data to the backend API and handles the response
// It uses the Fetch API to send a POST request with the form data
// It alerts the user on success or failure of the submission
