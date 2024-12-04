const state = {
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById('score_points'),
    },
    cardSprites: {
        avatar: document.getElementById('card-image'),
        name: document.getElementById('card-name'),
        type: document.getElementById('card-type'),
    },
    fieldCards: {
        player: document.getElementById('player-field-card'),
        computer: document.getElementById('computer-field-card'),
    },
    button: document.getElementById('next-duel'),
};

const playersSides = {
    player1 : "player-field-card",
    computer : "computer-field-card"
};

const pathImages = "../assets/icons/"

const cardData = [
    {
        id:0,
        name:"Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        winOF:[1],
        loseOf:[2],
    },
    {
        id: 1,
        name:"Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        winOF:[2],
        loseOf:[0],
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        winOF:[0],
        loseOf:[1],
    },
];

async function createCardImage(randomIdCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "../assets/icons/card-back.png");
    cardImage.setAttribute("data-id", randomIdCard);
    cardImage.classList.add("card");

    if(fieldSide === playersSides.player1){
        addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    }

    cardImage.addEventListener("mouseover", () => {
        drawSelectCard(IdCard);
        return cardImage;
    });
}

async function getRandomCardId() {
    const randomIndex = (Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function drawCards(cardNumbers, fieldSide) {
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
        
    }
}


function init() {
    drawCards(5, playersSides.player1);
    drawCards(5, playersSides.computer);
}

init();
