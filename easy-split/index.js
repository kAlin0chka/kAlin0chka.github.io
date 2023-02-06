const calculateBtn = document.querySelector ("#calculate");
calculateBtn.addEventListener ('click', calculate);

function calculate () {
const numberInFamilyOne = document.querySelector (".familyOneInput").value;
const numberInFamilyTwo = document.querySelector (".familyTwoInput").value;
const numberRoommates = document.querySelector (".roommatesInput").value;
const rent = document.querySelector (".rentInput"). value;
const utility = document.querySelector (".utilityInput").value;
const food = document.querySelector (".foodInput").value;

if (numberInFamilyOne < 1 && numberInFamilyTwo < 1 && numberRoommates < 1) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "You've missed the number of roommates or family members!",
        confirmButtonColor: '#E6B325'
    })
    }

let rentPerPerson = rent/numberRoommates
let utilityPerPerson = utility/numberRoommates;
let foodPerPerson = food/numberRoommates;
let totalPerPerson = rentPerPerson + utilityPerPerson + foodPerPerson;
let numberinBothFamilies = +numberInFamilyOne + +numberInFamilyTwo; 
// Почему без этих дополнительных плюсов джава скрипт распознает это как string а не число?
let rentPerFamilyOne = (rent/numberinBothFamilies)*numberInFamilyOne;
let rentPerFamilyTwo = (rent/numberinBothFamilies)*numberInFamilyTwo;
let utilityPerFamilyOne = (utility/numberinBothFamilies)*numberInFamilyOne;
let utilityPerFamilyTwo = (utility/numberinBothFamilies)*numberInFamilyTwo;
let foodPerFamilyOne = (food/numberinBothFamilies)*numberInFamilyOne;
let foodPerFamilyTwo = (food/numberinBothFamilies)*numberInFamilyTwo;
let totalPerFamilyOne = rentPerFamilyOne + utilityPerFamilyOne + foodPerFamilyOne;
let totalPerFamilyTwo = rentPerFamilyTwo + utilityPerFamilyTwo + foodPerFamilyTwo;
rentPerFamilyOne = rentPerFamilyOne.toFixed(2);
rentPerFamilyTwo = rentPerFamilyTwo.toFixed(2);
utilityPerFamilyOne = utilityPerFamilyOne.toFixed(2);
utilityPerFamilyTwo = utilityPerFamilyTwo.toFixed(2);
foodPerFamilyOne = foodPerFamilyOne.toFixed(2);
foodPerFamilyTwo = foodPerFamilyTwo.toFixed(2);
totalPerFamilyOne = totalPerFamilyOne.toFixed(2);
totalPerFamilyTwo = totalPerFamilyTwo.toFixed(2);
rentPerPerson = rentPerPerson.toFixed(2);
foodPerPerson = foodPerPerson.toFixed(2);
utilityPerPerson = utilityPerPerson.toFixed(2);
totalPerPerson = totalPerPerson.toFixed(2);

const displayRentPerPerson = document.querySelector (".rentPerPerson").textContent = rentPerPerson;
const displayUtilityPerPerson = document.querySelector (".utilitiesPerPerson").textContent = utilityPerPerson;
const displayFoodPerPerson = document.querySelector (".foodPerPerson").textContent = foodPerPerson;
const displayTotalPerPerson = document.querySelector (".totalPerPerson").textContent = totalPerPerson;
const displayRentPerFamilyOne = document.querySelector (".rentPerFirstFamily").textContent = rentPerFamilyOne
const displayRentPerFamilyTwo = document.querySelector (".rentPerSecondFamily").textContent = rentPerFamilyTwo
const displayUtilityPerFamilyOne = document.querySelector (".utilitiesPerFirstFamily").textContent = utilityPerFamilyOne
const displayUtilityPerFamilyTwo = document.querySelector (".utilitiesPerSecondFamily").textContent = utilityPerFamilyTwo
const displayFoodPerFamilyOne = document.querySelector (".foodPerFirstFamily").textContent = foodPerFamilyOne
const displayFoodPerFamilyTwo = document.querySelector (".foodPerSecondFamily").textContent = foodPerFamilyTwo
const displayTotalPerFamilyOne = document.querySelector (".totalPerFirstFamily").textContent = totalPerFamilyOne
const displayTotalFamilyTwo = document.querySelector (".totalPerSecondFamily").textContent = totalPerFamilyTwo
}  


const btnFamily = document.querySelector (".btnFamily");
const familySelected = document.querySelector (".familySelected")
const  familyBlocks = document.querySelector (".blocksFamily");
btnFamily.addEventListener ("click", family);



function family () {
    
    if (familySelected.style.display !== "none" ||
        familyBlocks.style.display !== "none") {
        familySelected.style.display = "none" 
        familyBlocks.style.display = "none";
        
    }
    else {
        familySelected.style.display = "block"
        familyBlocks.style.display = "inline-flex"
    }
    
}

// function family () {
//     const familySelected = document.querySelector (".familySelected")
//     familySelected.style.display = "block"; 
//     const  familyBlocks = document.querySelector (".blocksFamily");
//     familyBlocks.style.display = "inline-flex";
// }


const btnFriends = document.querySelector (".btnFriends");
const friendsSelected = document.querySelector (".friendsSelected")
const friendsBlock = document.querySelector (".blocksFriends");
btnFriends.addEventListener ("click", friends);

function friends () {
    if (friendsSelected.style.display !== "none" ||
        friendsBlock.style.display !== "none") {
        friendsSelected.style.display = "none" 
        friendsBlock.style.display = "none";
        
    }
    else {
        friendsSelected.style.display = "block"
        friendsBlock.style.display = "inline-flex"
    }
}