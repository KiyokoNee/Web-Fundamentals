let likes = [9, 12, 9];

function increaseLikes(element,index) {
    const likesText = element.previousElementSibling;

    likes[index]++;
    likesText.innerText = likes[index] + " like(s)";
}