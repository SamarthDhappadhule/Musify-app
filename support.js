document.getElementById('problemForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const problem = document.getElementById('problem').value;

  // Simulate form submission (you can replace this with an actual API call)
  setTimeout(() => {
    alert(` Thank you, ${name}! Your problem has been submitted. We will contact you at ${email} shortly.`);
   document.getElementById('problemForm').reset(); // Clear the form
  }, 1000);
});

// document.getElementById('formMessage').innerText =` Thank you, ${name}! Your problem has been submitted. We will contact you at ${email} shortly.`;
    