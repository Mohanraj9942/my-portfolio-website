const scrollContainer = document.getElementById('project1');

document.getElementById('scroll-left').addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
})
