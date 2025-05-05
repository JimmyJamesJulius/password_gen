document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('pwdForm');
  const lengthSlider = document.getElementById('length');
  const lenValue = document.getElementById('lenValue');
  const pwdField = document.getElementById('password');
  const copyBtn = document.getElementById('copyBtn');

  // live update slider value
  lengthSlider.addEventListener('input', () => {
    lenValue.textContent = lengthSlider.value;
  });

  // handle form submit via fetch()
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const resp = await fetch('/generate', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ length: lengthSlider.value })
    });
    const data = await resp.json();
    pwdField.value = data.password;
  });

  // copy to clipboard
  copyBtn.addEventListener('click', () => {
    if (!pwdField.value) return;
    pwdField.select();
    document.execCommand('copy');
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = 'Copy', 1500);
  });
});

