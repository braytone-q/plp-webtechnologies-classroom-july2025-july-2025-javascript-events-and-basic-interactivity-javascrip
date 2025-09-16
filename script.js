// ===== Dark mode toggle with smooth transition =====
const toggleBtn = document.getElementById('modeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ===== Counter logic with keyboard support =====
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const countDisplay = document.getElementById('count');
let count = 0;

function updateCount(value) {
  count += value;
  countDisplay.textContent = count;
}

incBtn.addEventListener('click', () => updateCount(1));
decBtn.addEventListener('click', () => updateCount(-1));

// Arrow-key control: ArrowUp increments, ArrowDown decrements
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') updateCount(1);
  if (e.key === 'ArrowDown') updateCount(-1);
});

// ===== Collapsible FAQ =====
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});

// ===== Form validation =====
const form = document.getElementById('contactForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passField = document.getElementById('password');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', e => {
  e.preventDefault(); // Stop default submission
  let errors = [];

  // Name: at least 2 chars
  if (nameField.value.trim().length < 2) {
    errors.push('Name must be at least 2 characters.');
  }

  // Email: simple regex check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField.value)) {
    errors.push('Enter a valid email address.');
  }

  // Password: 6+ chars, at least one number
  const passRegex = /^(?=.*\d).{6,}$/;
  if (!passRegex.test(passField.value)) {
    errors.push('Password must be 6+ chars and contain a number.');
  }

  if (errors.length > 0) {
    msg.textContent = errors.join(' ');
    msg.className = 'error';
  } else {
    msg.textContent = 'Form submitted successfully!';
    msg.className = 'success';
    form.reset();
  }
});
