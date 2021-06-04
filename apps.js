let cardImg = [
    ['AC.png','AD.png', 'AH.png', 'AS.png'],
    ['2C.png','2D.png', '2H.png', '2S.png'],
    ['3C.png','3D.png', '3H.png', '3S.png'],
    ['4C.png','4D.png', '4H.png', '4S.png'],
    ['5C.png','5D.png', '5H.png', '5S.png'],
    ['6C.png','6D.png', '6H.png', '6S.png'],
    ['7C.png','7D.png', '7H.png', '7S.png'],
    ['8C.png','8D.png', '8H.png', '8S.png'],
    ['9C.png','9D.png', '9H.png', '9S.png'],
    ['10C.png','10D.png', '10H.png', '10S.png'],
    ['10C.png','10D.png', '10H.png', '10S.png'],
    ['10C.png','10D.png', '10H.png', '10S.png'],
    ['10C.png','10D.png', '10H.png', '10S.png'],
    ['10C.png','10D.png', '10H.png', '10S.png'],
]

let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let displayCards = false


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10){
        return 10
    }else{
        return randomNumber
    }
}
  
function startGame(){
    isAlive = true;
    displayCards = true;
    cleanCards()
    let firstCard  = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard  
    renderGame();
}

function renderGame(){
    if (cards.length  > 2) {
      getImage(cards[cards.length -1])
    }else {
      for (let i= 0; i <= 1; i++){
      console.log(cards[i])
      getImage(cards[i])
      }
    }

    sumEl.textContent = "Sum: " + sum
    if (sum < 21){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "Whohoo! You've got Blackjack"
        hasBlackJack = true
        
    }else {
        message  = "You're out of the game!"
        isAlive = false
        
    }
    messageEl.textContent = message
}

function newCard(){

    if (isAlive && !hasBlackJack){
        let card = getRandomCard();
        sum += card
        cards.push(card)
    
        renderGame()
    }

}

function getImage(num){
  let number = num;       
  let imageSrc = randomImage(number)
  let imageContainer = document.getElementById("card-container");
  let image = document.createElement('img');
  image.setAttribute('src', imageSrc )
  image.setAttribute('width', '15%')
  imageContainer.appendChild(image);
}


function randomImage(num){
  let randomItem = cardImg[num - 1][Math.floor(Math.random()* 4 )];
  
  return randomItem
}


function cleanCards(){
   let imageContainer = document.getElementById("card-container");

  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
    }
}
