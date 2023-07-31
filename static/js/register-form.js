function registerFormValidate(event) {
    event.preventDefault();
  
    var name = document.forms["registerForm"]["reg_name"].value;
    var phone = document.forms["registerForm"]["phone_number"].value;
    var email = document.forms["registerForm"]["reg_email"].value;
    var collage = document.forms["registerForm"]["collage"].value;
    var course = document.forms["registerForm"]["course"].value;
    var gender = document.forms["registerForm"]["gender"].value;
  
    const name_style = document.getElementsByClassName("regname")[0];
    const collage_style = document.getElementsByClassName("regcollage")[0];
    const number_style = document.getElementsByClassName("regnumber")[0];
    const email_style = document.getElementsByClassName("regemail")[0];
    const course_style = document.getElementsByClassName("regcourse")[0];
    const gender_style = document.getElementsByClassName("reggender")[0];
  
    var text;

    if (name.length < 5) {
      text = "Please Enter valid Name";
      name_style.style.border = "1px solid red";
      document.getElementById("reg_name_error").innerHTML = text;
      return false;
    } else {
      name_style.style.border = "1px solid white";
      document.getElementById("reg_name_error").innerHTML = "";
    }
  
    if (email.indexOf("@") == -1 || email.length < 6) {
      text = "Please Enter valid Email";
      email_style.style.border = "1px solid red";
      document.getElementById("reg_email_error").innerHTML = text;
      return false;
    } else {
      email_style.style.border = "1px solid white";
      document.getElementById("reg_email_error").innerHTML = "";
    }
    
    var rex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone);
  
    if (isNaN(phone) || !rex) {
      text = "Please Enter valid Phone Number";
      number_style.style.border = "1px solid red";
      document.getElementById("reg_number_error").innerHTML = text;
      return false;
    } else if (phone.length != 10) {
      text = "Phone Number must be 10 digits";
      number_style.style.border = "1px solid red";
      document.getElementById("reg_number_error").innerHTML = text;
      return false;
    } else {
      number_style.style.border = "1px solid white";
      document.getElementById("reg_number_error").innerHTML = "";
    }

    if (gender.length < 4) {
      text = "Please Enter your gender";
      gender_style.style.border = "1px solid red";
      document.getElementById("reg_gender_error").innerHTML = text;
      return false;
    } else {
      gender_style.style.border = "1px solid white";
      document.getElementById("reg_gender_error").innerHTML = "";
    }
  
    if (collage.length < 3) {
      text = "Please Enter your collage";
      collage_style.style.border = "1px solid red";
      document.getElementById("reg_collage_error").innerHTML = text;
      return false;
    } else {
      collage_style.style.border = "1px solid white";
      document.getElementById("reg_collage_error").innerHTML = "";
    }
  
    if (course.length < 10) {
      text = "Please Enter your course";
      course_style.style.border = "1px solid red";
      document.getElementById("reg_course_error").innerHTML = text;
      return false;
    } else {
      course_style.style.border = "1px solid white";
      document.getElementById("reg_course_error").innerHTML = "";
    }

   
  
    const data = { name, email, course, phone, collage , gender };
    console.log(data);
    this.reset()
    return true;
  }
  
  var form = document.getElementById("registerForm");
  
  form.addEventListener("submit", registerFormValidate);
  