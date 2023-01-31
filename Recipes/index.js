const find = document.querySelector ('.find');
const divs = document.querySelectorAll ('.picture');

find.addEventListener ('keyup', function(event){
    const word = event.target.value.toLowerCase();
    divs.forEach (item =>{
        item.querySelector ('h3').textContent.toLowerCase().includes(word)
        || item.querySelector ('p').textContent.toLowerCase().includes(word) 
        ? (item.style.display = 'block'):(item.style.display = 'none')
    })
})

gsap.to ("h1", {
    text: "Don't be stressed - cook and eat desserts!",
    duration: 3,
    repeat: 1,
    repeatDelay: 1,
    ease: "power1.in",
    // yoyo: true,
    delay: 2
})
