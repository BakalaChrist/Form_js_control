function control(){


    if(document.form.firstname.value == "" )  {
       document.form.firstname.focus();
      document.getElementById("message_firstname").innerText = "Erreur";
      document.getElementById("firstname").setAttribute("class", "form-control warn");
      return false;
     }
     else{
        document.getElementById("message_firstname").innerText = "";
        document.getElementById("firstname").setAttribute("class", "form-control suc");
     }
   
     if(document.form.lastname.value == "")  {
       document.form.lastname.focus();
      document.getElementById("message_lastname").innerText = "Erreur";
      document.getElementById("lastname").setAttribute("class", "form-control warn");
      return false;
     }
      else{
        document.getElementById("message_lastname").innerText = "";
        document.getElementById("lastname").setAttribute("class", "form-control suc");
     }
   
   
   
   if(document.form.mail.value == "") {
       document.form.mail.focus();
       document.getElementById("message_mail").innerText = "Erreur";
       document.getElementById("mail").setAttribute("class", "form-control warn");
      return false;
     }
   
     else{
        document.getElementById("message_mail").innerText = "";
        document.getElementById("mail").setAttribute("class", "form-control suc");
     }
   
     if(document.form.password.value == "") {
       document.form.password.focus();
       document.getElementById("message_password").innerText = "Erreur";
       document.getElementById("password").setAttribute("class", "form-control warn");
      return false;
     }
   
   else{
        document.getElementById("message_password").innerText = "";
        document.getElementById("password").setAttribute("class", "form-control suc");
     }
   
     if(document.form.confirm.value == "") {
       document.form.confirm.focus();
       document.getElementById("message_confirm").innerText = "Erreur";
       document.getElementById("confirm").setAttribute("class", "form-control warn");
      return false;
     }
   
   else{
        document.getElementById("message_confirm").innerText = "";
        document.getElementById("confirm").setAttribute("class", "form-control suc");
     }
   
   
     if(document.form.confirm.value != document.form.password.value) {
       document.form.confirm.focus();
       document.getElementById("message_confirm").innerText = "Erreur enter the same password";
      return false;
     }
   
   else{
        document.getElementById("message_confirm").innerText = "";
     }
   
   
    
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   