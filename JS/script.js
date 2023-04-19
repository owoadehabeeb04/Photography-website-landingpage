"strict mode";

const button = document.querySelector(".arrow");
const mail = document.getElementById("email").value;

const backoverlay = document.querySelector(".overlay");
const faliure = document.querySelector(".failure");
const success = document.querySelector(".success");
const closesuccess = document.querySelector(".close-success");
const closefaliure = document.querySelector(".close-failure");

const clikckk = button.addEventListener("click", function validate() {
  const mail = document.getElementById("email").value;
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  if (validateEmail(mail)) {
    success.style.display = "inline-flex";
    backoverlay.style.display = "inline-flex";
    closesuccess.addEventListener("click", function () {
      success.style.display = "none";
      backoverlay.style.display = "none";
    });
    backoverlay.addEventListener("click", function () {
      success.style.display = "none";
      backoverlay.style.display = "none";
    });
  } else {
    backoverlay.style.display = "inline-flex";
    faliure.style.display = "inline-flex";
    closefaliure.addEventListener("click", function () {
      faliure.style.display = "none";
      backoverlay.style.display = "none";
    });
    backoverlay.addEventListener("click", function () {
      faliure.style.display = "none";
      backoverlay.style.display = "none";
    });
  }
});
// console.log(validateEmail(mail));


// the toup button

const ToUP = document.querySelector('.toUp');
console.log(ToUP);
window.addEventListener("scroll", () => {
if(window.pageYOffset >= 150) {
  ToUP.style.display = 'inline-flex';
}
else {
  ToUP.style.display = 'none';
}
})
