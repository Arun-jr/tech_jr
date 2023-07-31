function validate(event) {
  event.preventDefault();

  var name = document.forms["contactForm"]["name"].value;
  var subject = document.forms["contactForm"]["organization"].value;
  var phone = document.forms["contactForm"]["number"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["message"].value;

  const name_style = document.getElementsByClassName("name")[0];
  const subject_style = document.getElementsByClassName("organization")[0];
  const number_style = document.getElementsByClassName("number")[0];
  const email_style = document.getElementsByClassName("email")[0];
  const message_style = document.getElementsByClassName("message")[0];

  var text;
  if (name.length < 5) {
    text = "Please Enter valid Name";
    name_style.style.border = "1px solid red";
    document.getElementById("name_error").innerHTML = text;
    return false;
  } else {
    name_style.style.border = "1px solid white";
    document.getElementById("name_error").innerHTML = "";
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    email_style.style.border = "1px solid red";
    document.getElementById("email_error").innerHTML = text;
    return false;
  } else {
    email_style.style.border = "1px solid white";
    document.getElementById("email_error").innerHTML = "";
  }
  
  var rex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone);

  if (isNaN(phone) || !rex) {
    text = "Please Enter valid Phone Number";
    number_style.style.border = "1px solid red";
    document.getElementById("number_error").innerHTML = text;
    return false;
  } else if (phone.length != 10) {
    text = "Phone Number must be 10 digits";
    number_style.style.border = "1px solid red";
    document.getElementById("number_error").innerHTML = text;
    return false;
  } else {
    number_style.style.border = "1px solid white";
    document.getElementById("number_error").innerHTML = "";
  }

  if (subject.length < 3) {
    text = "Please Enter Correct organization";
    subject_style.style.border = "1px solid red";
    document.getElementById("organization_error").innerHTML = text;
    return false;
  } else {
    subject_style.style.border = "1px solid white";
    document.getElementById("organization_error").innerHTML = "";
  }

  if (message.length < 10) {
    text = "Please Enter your message";
    message_style.style.border = "1px solid red";
    document.getElementById("message_error").innerHTML = text;
    return false;
  } else {
    message_style.style.border = "1px solid white";
    document.getElementById("message_error").innerHTML = "";
  }

  const data = { name, email, subject, phone, message };
  console.log(data);

  // fetch("/submit_contact_form/", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     alert(data.message); // Display the response message from Django
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });


  this.reset();
  return true;
}

var form = document.getElementById("contactForm");

form.addEventListener("submit", validate);
