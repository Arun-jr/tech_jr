function validateEmail (event) {
    event.preventDefault();

    var subscription_email = document.forms["footerForm"]["email"].value;
    const subscription_email_style = document.getElementsByClassName("subscription_email")[0];

    if (subscription_email.indexOf("@") == -1 || subscription_email.length < 6) {
        text = "Please Enter valid Email";
        subscription_email_style.style.border = "1px solid red";
        document.getElementById("subemail_error").innerHTML = text;
        return false;
      } else {
        subscription_email_style.style.border = "1px solid white";
        document.getElementById("subemail_error").innerHTML = "";
      }

      const data = {  subscription_email };
      console.log(data);
      return true;

}


var footerForm = document.getElementById("footerForm")

footerForm.addEventListener("submit", validateEmail);