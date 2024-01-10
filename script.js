function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const result = document.getElementById("result");

  const isCorrectUsername = usernameInput.value === "admin";
  const isCorrectPassword = passwordInput.value === "password";

  if(isCorrectUsername && isCorrectPassword) {
    result.innerHTML = "Welcome Admin!";
  } else if (isCorrectUsername){
    result.innerHTML = "Wrong password.";
  } else {
    result.innerHTML = "Invalid password/username. Please try again.";
  }
}