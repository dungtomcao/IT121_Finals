$("a").mouseover(function(){
   $(this).css("color", "white");
   $(this).css("background-color", "#28a4a4");
});

$("a").mouseout(function(){
   $(this).css("color", "#28a4a4");
   $(this).css("background-color", "white");
});

$( "#accordion" ).accordion({
  active: 2
});
function checkForm() {

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
};

let submit = document.getElementById("submit");
if (submit) {
submit.addEventListener("click", function(event) {
  checkForm();

  event.preventDefault();
});
};

let clicked = true;
$("#change").click(function() {
   if (clicked){
      $(this).addClass("bla");
      $("body").addClass("blaText");
      $("h3").addClass("blaText");
      clicked = false;
   }
   else {
      $(this).removeClass("bla");
      $("body").removeClass("blaText");
      $("h3").removeClass("blaText");
      clicked = true;
   }
});

