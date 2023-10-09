const openBio = document.getElementById("openBio");
const bio = document.getElementById("bio");
const closeBio = document.getElementById("closeBio");


openBio.addEventListener('click', () => {
    bio.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
});

closeBio.addEventListener('click', () => {
    bio.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});