const form = document.querySelector("#form");
let firstname = document.getElementById("firstname-input");
let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("password-input");
let repeatPasswordInput  = document.getElementById("repeat-password-input");
let errorMessage = document.getElementById("error-message");

form.addEventListener("submit",(event)=>{ 
     let errors =[];
    if(firstname){
        errors = getSignupFormErrors(firstname,emailInput,passwordInput,repeatPasswordInput);
    }else{
         errors = getLoginFormErrors(emailInput.value,passwordInput.value);
    }

    if(errors.length>0){
        event.preventDefault();
        errorMessage.innerText = errors.join(". ");
        errorMessage.classList.add("show")
    }
    
})

function getSignupFormErrors(firstname,emailInput,passwordInput,repeatPasswordInput){
   let errors =[];
   
    if(firstname.value===''  || firstname.value===null){
        errors.push("the firstname is required!");
        firstname.parentElement.classList.add("incorrect");       
      
    }

     if(emailInput.value===''  || emailInput.value===null){
        errors.push("the email is required!");
        emailInput.parentElement.classList.add("incorrect");       
      
    }

     if(passwordInput.value===''  || passwordInput.value===null){
        errors.push("the password is required!");
        passwordInput.parentElement.classList.add("incorrect");       
      
    }

   return errors;
   
}

const allInputs = [firstname,emailInput,passwordInput,repeatPasswordInput];
allInputs.forEach(inputs=>{
    inputs.addEventListener("input",(event)=>{
        if(event.target.parentElement.classList.contains("incorrect")){
            event.target.parentElement.classList.remove("incorrect")
        }
        
    })
})
 
