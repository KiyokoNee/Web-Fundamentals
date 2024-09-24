/* switches the text of the login button. uses querySelector as the login button is the first one on the page */
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