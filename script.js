// ---------- Profile Card Time ----------
const timeElement = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
  if (timeElement) timeElement.textContent = String(Date.now());
}
updateTime();
setInterval(updateTime, 1000);

// ---------- Contact Form Validation ----------
const form = document.getElementById('contactForm');
if (form) {
  const successMessage = document.querySelector('[data-testid="test-contact-success"]');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get fields
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Error elements
    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorSubject = document.getElementById('error-subject');
    const errorMessage = document.getElementById('error-message');

    // Reset errors
    [errorName, errorEmail, errorSubject, errorMessage].forEach(e => e.textContent = '');

    let valid = true;

    // Validation rules
    if (!name) { errorName.textContent = 'Full name is required.'; valid = false; }
    if (!email) { errorEmail.textContent = 'Email is required.'; valid = false; }
    else if (!/^\S+@\S+\.\S+$/.test(email)) { errorEmail.textContent = 'Invalid email format.'; valid = false; }
    if (!subject) { errorSubject.textContent = 'Subject is required.'; valid = false; }
    if (!message) { errorMessage.textContent = 'Message is required.'; valid = false; }
    else if (message.length < 10) { errorMessage.textContent = 'Message must be at least 10 characters.'; valid = false; }

    if (valid) {
      successMessage.style.display = 'block';
      form.reset();
      setTimeout(() => { successMessage.style.display = 'none'; }, 4000);
    }
  });
}
