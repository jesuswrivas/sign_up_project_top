// Password validation


const passwordInput = document.querySelector("input[name='user_password']");
const passwordInputConfirm = document.querySelector("input[name='confirm_password']");
const passwordMessage = document.querySelector(".password_message")


passwordInputConfirm.addEventListener("input", (e)=>{
    if (passwordInput.value !== passwordInputConfirm.value){
        passwordInput.setCustomValidity("Invalid input");
        passwordInputConfirm.setCustomValidity("Invalid input");
        passwordMessage.style.display = "block"

    } else {
        passwordInput.setCustomValidity("");
        passwordInputConfirm.setCustomValidity("");
        passwordMessage.style.display = "none"
    }
})



