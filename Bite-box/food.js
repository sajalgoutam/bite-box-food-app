function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let error=document.getElementById("error").value;


    if(email=="admin@1234" && password==="123456"){
        localStorage.setItem("IsLoggedIn","true");
         localStorage.setItem("user",email);

         window.location.href="index.html";

    }else{
        
    }
    
}

function togglePassword() {
    let passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}