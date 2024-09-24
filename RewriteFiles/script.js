function login() {
    const loginText = document.querySelector('button');
    if(loginText.innerText === "Login") {
        loginText.innerText = "Logout";
    }
    else {
        loginText.innerText = "Login";
    }
}

function likeAlert() {
    alert("Ninja was liked");
}

function removeButton(button) {
    button.remove();
}