let cardImg = [
    ['img/AC.png','img/AD.png', 'img/AH.png', 'img/AS.png'],
    ['img/2C.png','img/2D.png', 'img/2H.png', 'img/2S.png'],
    ['img/3C.png','img/3D.png', 'img/3H.png', 'img/3S.png'],
    ['img/4C.png','img/4D.png', 'img/4H.png', 'img/4S.png'],
    ['img/5C.png','img/5D.png', 'img/5H.png', 'img/5S.png'],
    ['img/6C.png','img/6D.png', 'img/6H.png', 'img/6S.png'],
    ['img/7C.png','img/7D.png', 'img/7H.png', 'img/7S.png'],
    ['img/8C.png','img/8D.png', 'img/8H.png', 'img/8S.png'],
    ['img/9C.png','img/9D.png', 'img/9H.png', 'img/9S.png'],
    ['img/10C.png','img/10D.png', 'img/10H.png', 'img/10S.png'],
    ['img/10C.png','img/10D.png', 'img/10H.png', 'img/10S.png'],
    ['img/10C.png','img/10D.png', 'img/10H.png', 'img/10S.png'],
    ['img/10C.png','img/10D.png', 'img/10H.png', 'img/10S.png'],
    ['img/10C.png','img/10D.png', 'img/10H.png', 'img/10S.png'],
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
  image.setAttribute('width', '20%')
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
