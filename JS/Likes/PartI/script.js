let likes = 34;

function increaseLikes() {
    const likesText = document.querySelector(".numLikes");

    likes++;
    likesText.innerText = likes + " like(s)";
}