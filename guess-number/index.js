let textOne = "Hi! I'm your Computer."
let i=0;
let speed = 100

function type() {
    if (i < textOne.length) {
        document.querySelector ('h1').textContent += textOne.charAt (i);
        i++;
        setTimeout (type, speed);
    }
    
    if (i === textOne.length) {
        typeTwo()
    } 
}

type();

let textTwo = "Let's play with me! Try to guess the number I make..."
let a=0;
function typeTwo() {
    if (a < textTwo.length) {
        document.querySelector ('h3').textContent += textTwo.charAt (a);
        a++;
        setTimeout (typeTwo, speed);
    }
}

const input = document.querySelector (".text");
const btn = document.querySelector (".btn");
const compNumber = Math.floor(Math.random()*20)+1;


input.addEventListener ("keypress", function(e){
    if (e.keyCode===13)
        play();
})
btn.addEventListener ("click",play);

function play() {
    const userNumber = document.querySelector ('.text').value;
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter a number from 1 to 20!',
        confirmButtonColor: '#13407d'
        })
    }
    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number, not a letter!',
            confirmButtonColor: '#13407d'
            })
    }

    else {
        if (userNumber < compNumber) {
        Swal.fire({
            icon: 'question',
            title: 'Try to enter a greater number',
            confirmButtonColor: '#13407d'
        })
    }

    else if (userNumber > compNumber) {
    Swal.fire({
        icon: 'question',
        title: 'Try to enter a smaller number',
        confirmButtonColor: '#13407d'
        })
    }

    else {
        Swal.fire({
                    title: 'Winner!',
                    text: "You've guessed my number",
                    imageUrl: 'https://images.unsplash.com/photo-1632809674010-a8ac3426a09d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    imageWidth: 400,
                    imageHeight: 300,
                    imageAlt: 'Custom image',
                    confirmButtonColor: '#13407d'
                })
                }
            }
        }