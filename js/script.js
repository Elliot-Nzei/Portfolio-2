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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("testimonialForm");
  const testimonialList = document.getElementById("testimonial-list");

  // Load and render testimonials on page load
  const testimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
  renderTestimonials(testimonials);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const message = form.message.value.trim();
    const rating = form.rating.value;

    if (!name || !message || !rating) return;

    // Check for secret delete command
    if (parseInt(rating) === 1 && message.toLowerCase() === "delete") {
      const indexToDelete = testimonials.findIndex(t => t.name.toLowerCase() === name.toLowerCase());
      if (indexToDelete !== -1) {
        testimonials.splice(indexToDelete, 1);
        localStorage.setItem("testimonials", JSON.stringify(testimonials));
        renderTestimonials(testimonials);
        alert(`Testimonial by "${name}" has been deleted.`);
      } else {
        alert(`No testimonial found by "${name}" to delete.`);
      }
      form.reset();
      return;
    }

    // Add new testimonial
    const newTestimonial = { name, message, rating: parseInt(rating) };
    testimonials.push(newTestimonial);
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
    renderTestimonials(testimonials);

    form.reset();
  });

  function renderTestimonials(list) {
    testimonialList.innerHTML = "";
    list.forEach(t => {
      const div = document.createElement("div");
      div.className = "testimonial";
      div.innerHTML = `
        <h4>${t.name}</h4>
        <p>${t.message}</p>
        <div class="stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
      `;
      testimonialList.appendChild(div);
    });
  }
});
// This script handles the testimonial submission and rendering
// It allows users to submit testimonials and view existing ones
// It also includes a secret command to delete testimonials by name

async function showPopup(type) {
  const overlay = document.getElementById('popup-overlay');
  const container = document.getElementById('popup-container');
  const content = document.getElementById('popup-data');
  try {
    const res = await fetch('./data/profile.json');
    const data = await res.json();
    if (type === 'experience') {
      content.innerHTML = '<h2>Experience</h2><ul>' +
        data.experience.map(exp =>
          `<li><strong>${exp.role}</strong> at ${exp.company} (${exp.years})</li>`
        ).join('') + '</ul>';
    } else if (type === 'certificates') {
      content.innerHTML = '<h2>Certificates</h2><ul>' +
        data.certificates.map(cert => `<li>${cert}</li>`).join('') + '</ul>';
    }
    overlay.style.display = 'block';
    container.style.display = 'block';
  } catch (error) {
    content.innerHTML = '<p>Error loading data.</p>';
    console.error(error);
  }
}
function closePopup() {
  document.getElementById('popup-overlay').style.display = 'none';
  document.getElementById('popup-container').style.display = 'none';
}
// This script handles the popup functionality for displaying experience and certificates