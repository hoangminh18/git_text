function validateFormsignin() {
  let usernameSignin = document.getElementById("usernameSignin").value;
  let passwordSignin = document.getElementById("passwordSignin").value;

  if (usernameSignin == "") {
    alert("Please enter your username");
    return false;
  }

  if (passwordSignin == "") {
    alert("Please enter your password");
    return false;
  }
}
