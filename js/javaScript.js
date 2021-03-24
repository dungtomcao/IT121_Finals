$( "#accordion" ).accordion({
  active: 2
});
function checkForm() {
  // TODO: Perform input validation 
  let form = document.getElementById("userRegistration");
  let divObj = document.getElementById("formErrors");
  divObj.innerHTML = "";
  let formError= false;

  divObj.innerHTML += "<ul></ul>"
    
  if (form.fullName.value.length < 1) {
     divObj.innerHTML += "<li>Missing full name.</li>";
     document.getElementById("fullName").classList.add("err");
     formError= true;
     }
  else {
     document.getElementById("fullName").classList.remove("err");
        }
    
  if (form.email.value.length < 1 || !form.email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/)) {
     divObj.innerHTML += "<li>Invalid or missing email address.</li>";
     document.getElementById("email").classList.add("err");
     formError= true;
     }
  else {
     document.getElementById("email").classList.remove("err");
        }
  
  let comment = document.getElementById("comment");
  if (comment.value.length <= 0) {
      divObj.innerHTML += "<li>Please enter your comment.</li>";
      comment.classList.add("err");
      formError= true;
      }
  else {
      document.getElementById("comment").classList.remove("err");
      }

  if (formError) {
     divObj.style.display = "block";
  }
  else {
     divObj.style.display = none;
  }
}

document.getElementById("submit").addEventListener("click", function(event) {
  checkForm();

  // Prevent default form action. DO NOT REMOVE THIS LINE
  event.preventDefault();
});