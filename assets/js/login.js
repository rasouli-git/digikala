// login page
const form = document.querySelector(".form");
const input = document.querySelector("#input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const inputValue = input.value.trim();

  if (inputValue === "") {
    setError(input, "لطفا این قسمت را خالی نگذارید");
  } else if ( !isEmail(inputValue)) {
    setError(input, "شماره موبایل یا ایمیل نادرست است");
  } else {
    setSuccess(input);
  }
}

function setError(input, message) {
  const form = input.parentElement.parentElement;
  const signAlarm = form.querySelector(".sign__alarm");
  signAlarm.innerText = message;
}

function setSuccess(input) {
  const form = input.parentElement.parentElement;
  const signAlarm = form.querySelector(".sign__alarm");
  signAlarm.innerText = "";
}

const pattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmail(input) {
  return pattern.test(input);
}

// End login page
