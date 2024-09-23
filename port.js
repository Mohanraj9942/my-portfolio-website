
// scroll project js

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



// -------------text animation------
var typed= new Typed (".auto-type1",{
    strings : ["Front-End Developer","Creative Designer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true,
  });


  