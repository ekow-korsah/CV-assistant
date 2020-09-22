const form = document.getElementById("work");

function onSubmit(event){

   event.preventDefault(); 
   const first = form.elements["fname"].value;
   const middle = form.elements["middle_name"].value
   const last = form.elements["lastname"].value;
   const address = form.elements["address_"].value;
   const email = form.elements["email_"].value;
   const second_email = form.elements["email-1"].value;
   const number = form.elements["number"].value;
   const second_number = form.elements["number-1"].value;
   const gender = form.elements["brow"].value;   

   
    if(address === ""){
        // alert("err")
        document.getElementById("address-e").innerHTML = "Failed to fill this section"

    }

    if(gender == ""){
        document.getElementById("gender-e").innerHTML = "Failed to fill this section"
    }

    function validateEmail(emailID, loc) {
        // let emailID = form.elements["email_"].value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
        
        if (atpos < 1 || dotpos<atpos+2 || dotpos+2>=a.length){ 
           document.getElementById(loc).innerHTML = "Incorrect email Syntax"

        //    emailID.focus() ;
           return false;
        }
        return( true );
    }

    validateEmail(email, "emai-e")

    if(second_email !== ""){
        validateEmail(second_email, "email-1-e")
    }

    

     function validateNames(e, loc){
        if(!isNaN(e)){
                document.getElementById(loc).innerHTML = "Invalid input for this section"
        }  
    }
    

     validateNames(first,"first-e" );
     validateNames(middle,"middle-e" );
     validateNames(last,"last-e" );



     function validateNumbers(){
        let phoneno = /^\d{10}$/;
        let phoneno2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        let phoneno3 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        let phoneno4 = /^\+?([0-9]{12})$/
        const number = form.elements["number"].value;
        const second_number = form.elements["number-1"].value;   

        if(number.match(phoneno) || number.match(phoneno2) || number.match(phoneno3) || number.match(phoneno4)){
            return true;
        }else{
            document.getElementById("numb-e").innerHTML = "Invalid input for this section"
        }

        if(second_number !== ""){
            if(second_number.match(phoneno) || second_number.match(phoneno2) || second_number.match(phoneno3) || second_number.match(phoneno4)){
                return true;
            }else{
                document.getElementById("number-1-e").innerHTML = "Invalid input for this section"
            }
        }
        
        
     }
    
     validateNumbers();


    window.localStorage.setItem("firstname",first);
    window.localStorage.setItem("middle",middle);
    window.localStorage.setItem("last",last);
    window.localStorage.setItem("address",address);
    window.localStorage.setItem("email",email);
    window.localStorage.setItem("number",number);
    window.localStorage.setItem("second_number",second_number);
    window.localStorage.setItem("second_email",second_email);
    
    //  if(document.getElementById("address-e") && document.getElementById("gender-e") &&document.getElementById("emai-e") && document.getElementById("email-1-e")
    //   && document.getElementById("first-e" ) && document.getElementById("middle-e") && document.getElementById("last-e") && document.getElementById("numb-e") && document.getElementById("number-1-e") === ""){
    //     //   window.location.href="./cv.html"
    //   } 

}

form.addEventListener("submit",onSubmit);



