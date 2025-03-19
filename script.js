const dropDownMenuLinks = document.querySelector(".dropDownMenuLinks");
// const toggleMenu = document.getElementById("toggleMenu");

function dropMenu() {
  dropDownMenuLinks.classList.toggle("open");
}

function sendMail() {
  let parameters = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_oixfpyk", "template_mjrk7pw", parameters)
    .then(alert("Email Sent👍"));
}
