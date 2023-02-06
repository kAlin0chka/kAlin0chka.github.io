const btnDay = document.querySelector ('#day');
const btnWeek = document.querySelector ('#week');
const btnMonth = document.querySelector ('#month');
const btnYear = document.querySelector ('#year');
const btnStartOver = document.querySelector ('#startOver');
const parDay = document.querySelector ('#parDay')
const parWeek = document.querySelector ('#parWeek')
const parMonth = document.querySelector ('#parMonth')
const parYear = document.querySelector ('#parYear')
const quotesDay = [
    'If you hear your favorite song on the radio, it will be luck',
    'Urgently buy a lottery - you expect to win',
    'In the zoo a giraffe will smile to you',
    'In an hour you will get hungry again',
    'Laughter prolongs life. With your joke!',
    'Just say “Yes!”',
    'You have to get out of the house',
    'Any decision you have to make tomorrow is a good decision',
    'Be careful or you could fall for some tricks today'
]
const quotesWeek = [
    'Hopes come true faster than you expect.',
    "Do not listen to anyone's advice, and good luck will be on your side.",
    'Take a look! You just go for the money!',
    'Down with anger and revenge, you will receive good news.',
    'Wait for the sunset, wait for the dawn, wait for a sweet greeting.',
    'By next Saturday, expect success in your work.',
    'A good time to finish up old tasks.',
    'Now is the time to try something new.',
    'All your hard work will soon pay off.'
]
const quotesMonth = [
    'You will have a fun trip.',
    'Ask for help - friends will help you.',
    'You will have an interesting adventure.',
    'The money will fall you straight from heaven.',
    'A golden egg of opportunity falls into your lap this month.',
    'A lifetime friend shall soon be made.',
    'A small donation is call for. It is the right thing to do.',
    'An important person will offer you support.',
    'Now is a good time to buy stock.'
]

const quotesYear = [
    'Do not resist the new, life will change for the better.',
    'The rusty lock will finally open, and you will do it!',
    'Your goals are quite achievable. Urgently develop a plan of action.',
    'A trip to the sea awaits you soon.',
    'A lifetime of happiness lies ahead of you.',
    'Your goal will be reached very soon.',
    'You will take a chance in something in near future.',
    'You will travel far and wide, both pleasure and business.'
]

btnDay.addEventListener ('click', futureDay);
function futureDay() {
let randomQuoteDay = quotesDay [Math.floor (Math.random()* quotesDay.length)]
parDay.style.display = 'block';
parDay.textContent = randomQuoteDay;
}

btnWeek.addEventListener ('click', futureWeek);
function futureWeek() {
let randomQuoteWeek = quotesWeek [Math.floor (Math.random()*quotesWeek.length)]
parWeek.style.display = 'block';
parWeek.textContent = randomQuoteWeek;
}

btnMonth.addEventListener ('click', futureMonth);
function futureMonth() {
let randomQuoteMonth = quotesMonth [Math.floor (Math.random()*quotesMonth.length)]
parMonth.style.display = 'block';
parMonth.textContent = randomQuoteMonth;
}

btnYear.addEventListener ('click', futureYear);
function futureYear() {
let randomQuoteYear = quotesYear [Math.floor (Math.random()* quotesYear.length)]
parYear.style.display = 'block';
parYear.textContent = randomQuoteYear;
}

btnStartOver.addEventListener ('click', startOver);
function startOver () {
    window.location.reload();  
}


let move = 60;
gsap.from ("#box", { duration: 2.5, delay: .5, stagger: .3, y: function (i) {
    if (i%2 === 1){
        return move}
        else return -move
}})

gsap.to ("#startOver", {opacity:1, duration: 2.5, delay:2})


