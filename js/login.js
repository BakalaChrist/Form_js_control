function control(){


    if(document.form.mail.value == "") {
      document.form.mail.focus();
      document.getElementById("message_mail").innerText = "Erreur";
      document.getElementById("mail").setAttribute("class", "form-control forms warn");
     return false;
    }
  
    else{
       document.getElementById("message_mail").innerText = "";
       document.getElementById("mail").setAttribute("class", "form-control forms suc");
    }
  

    if(document.form.password.value == "") {
        document.form.password.focus();
        document.getElementById("message_password").innerText = "Erreur";
        document.getElementById("password").setAttribute("class", "form-control forms warn");
       return false;
      }
    
    else{
         document.getElementById("message_password").innerText = "";
         document.getElementById("password").setAttribute("class", "form-control forms suc");
      }

  
  }
  