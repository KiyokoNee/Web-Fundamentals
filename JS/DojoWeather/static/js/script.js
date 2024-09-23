/* displays alert when clicking on a city */
function clickCity() {
    alert("Loading weather report...")
}

/* removes the fixed footer when hitting the accept button */
function acceptCookies() {
    const cookieMsg = document.getElementById('footer');

    cookieMsg.remove();
}

/* determines which temp system is being toggled to, then calls the correct conversion formula for the temperatures */
function toggleTemps(){
    const tempSystem = document.getElementById('degrees').value;

    const highTemps = document.getElementsByClassName('high-temp');
    const lowTemps = document.getElementsByClassName('low-temp');

    if(tempSystem === 'f') {
        changeFarenheit(highTemps);
        changeFarenheit(lowTemps);
    } else {
        changeCelcius(highTemps);
        changeCelcius(lowTemps);
    }
}


/* temperature change formulas given a nodelist of elements tied to the temperature classes */
function changeFarenheit(elements) {
    for(let i = 0; i < elements.length; i++) {
        let tempVal = Number(elements[i].innerText.slice(0,-1));
        tempVal = (9 /5) * tempVal + 32;
        tempVal = Math.round((tempVal + Number.EPSILON) * 100) / 100;
        elements[i].innerText = tempVal + '\u00B0';
    }
}

function changeCelcius(elements) {
    for(let i = 0; i < elements.length; i++) {
        let tempVal = Number(elements[i].innerText.slice(0,-1));
        tempVal = (tempVal - 32) * (5 / 9);
        tempVal = Math.round((tempVal + Number.EPSILON) * 100) / 100;
        elements[i].innerText = tempVal + '\u00B0';
    }
}