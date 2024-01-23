

const lightButton = document.querySelector('darkmode-background');

const themeLightPicture = localStorage.getItem('theme');

lightButton.addEventListener('click', () => {
    document.body.classList.toggle('picture-background-dark');
    if (document.body.classList.contains('picture-background-dark')) {
        localStorage.setItem('theme', 'lightmode');
    } else {
        localStorage.removeItem('theme');
    }
});