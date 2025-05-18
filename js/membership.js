const form = document.getElementById('membershipForm');

// Helpers
function showError(input, message) {
  const error = input.closest('.form-group')?.querySelector('.error') 
             || input.closest('fieldset')?.querySelector('.error');
  error.textContent = message;
  error.classList.add('visible');
}
function clearError(input) {
  const error = input.closest('.form-group')?.querySelector('.error') 
             || input.closest('fieldset')?.querySelector('.error');
  error.textContent = '';
  error.classList.remove('visible');
}

// Validators
function validateName() {
  const name = form.name;
  if (name.value.trim().length < 2) {
    showError(name, 'Enter at least 2 characters.');
    return false;
  }
  clearError(name);
  return true;
}

function validateEmail() {
  const email = form.email;
  // simple regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email.value.trim())) {
    showError(email, 'Enter a valid email.');
    return false;
  }
  clearError(email);
  return true;
}

function validatePassword() {
  const pw = form.password;
  if (pw.value.length < 6) {
    showError(pw, 'Password must be 6+ characters.');
    return false;
  }
  clearError(pw);
  return true;
}

function validatePhone() {
  const phone = form.phone;
  if (!phone.checkValidity()) {
    showError(phone, 'Enter a 10-digit number.');
    return false;
  }
  clearError(phone);
  return true;
}

function validateMembership() {
  const radios = Array.from(form.membership);
  if (!radios.some(r => r.checked)) {
    showError(radios[0], 'Choose a membership type.');
    return false;
  }
  clearError(radios[0]);
  return true;
}

function validateGoals() {
  const checks = Array.from(form.goals);
  if (!checks.some(c => c.checked)) {
    showError(checks[0], 'Select at least one goal.');
    return false;
  }
  clearError(checks[0]);
  return true;
}

// Form submit
form.addEventListener('submit', e => {
  e.preventDefault();
  const valid = [
    validateName(),
    validateEmail(),
    validatePassword(),
    validatePhone(),
    validateMembership(),
    validateGoals()
  ].every(v => v);

  if (valid) {
    // form.submit();  // or show a success message
    alert('Form submitted successfully!');
  }
});

// Real-time validation
[form.name, form.email, form.password, form.phone].forEach(input => {
  input.addEventListener('input', () => {
    switch (input.name) {
      case 'name': validateName(); break;
      case 'email': validateEmail(); break;
      case 'password': validatePassword(); break;
      case 'phone': validatePhone(); break;
    }
  });
});