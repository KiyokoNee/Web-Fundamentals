let nameArray = ["Adrian Stuart", "Ainchase Ishmael", "Mari Oceanbreeze", "Kai Wilstrom", "Jane Mallon", "Tom Budapest", "Roger Dodger", "Allie Chrissen", "Molly Walsmith"];

function changeName(element) {
    const nameText = element.parentElement.parentElement.firstChild.nextElementSibling;
    
    nameText.innerText = nameArray[Math.floor(Math.random() * nameArray.length)]
}

function removePersonFromList(element, result) {
    const requestText = document.getElementById('total');
    requestText.innerText = Number(requestText.innerText) - 1;

    if(result){
        const connectionText = document.getElementById('running-total');
        connectionText.innerText = Number(connectionText.innerText) + 1;
    }
    
    element.parentElement.parentElement.remove();
}