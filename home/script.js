const loginForm = document.getElementById("username");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check for .icare.in in the username
  if (username.endsWith(".icare.in")) {
    // Redirect to the specific location for .icare.in users
    window.location.href = "../Doctor/index.html";
  } else {
    // Redirect to the other location for non-.icare.in users
    window.location.href = "../PATIENT/index.html"; 
  }
});
