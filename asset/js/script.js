var a = 0;

// mouseover function
function mouseOver() {
  // getting the input value from html page
  const email = document.forms["loginform"]["email"].value;
  const password = document.forms["loginform"]["password"].value;

  // creating a variable for checking the email value
  const emailCheck =
    /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

  // condtion to check input value is empty or not
  if ((!email.match(emailCheck) || password == "") && a == 0) {
    buttonMoveLeft();
    a = 1;
  } else if ((!email.match(emailCheck) || password == "") && a == 1) {
    buttonMoveRight();
    a = 2;
  } else if ((!email.match(emailCheck) || password == "") && a == 2) {
    buttonMoveLeft();
    a = 1;
  }
}

// function for left move
function buttonMoveLeft() {
  const button = document.getElementById("submit-btn");
  button.style.transform = "translateX(-180%)";
}

// function for right move
function buttonMoveRight() {
  const button = document.getElementById("submit-btn");
  button.style.transform = "translateX(0%)";
}

// function for rest
function resetBtn() {
  const button = document.getElementById("submit-btn");
  button.style.transform = "translateX(0%)";
}
