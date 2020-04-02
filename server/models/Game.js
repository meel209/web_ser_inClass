	
const user = require("./Users");
const CaptionsDeck = requires ('../')

const DEAL_AMOUNT = 3;

const Players = [
    { Name: 'Bernie', Score: 0, isDealer: false }
];

const MyCards = [];

const PictureDeck = [
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-147-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-146-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-131-750x280.jpg'
];

let CurrentPicture = "";

const CardsInPlay = [];

function SubmitCaption(caption, playerId){
    CardsInPlay.push({
        Text: caption,
        PlayerId: playerId,
        IsChosen: false
    })
}

function Join(userId){
    const user = users.get(usersId);
    // This only made sense at the client.
    // TODO: Rethink how this works at the server
    Players.push( { Name: CurrentUser.Name, Score: 0, isDealer: true })

    const myCards = CaptionsDeck.slice(iCurrentCaption, DEAL_AMOUNT);
    iCurrentCaption += DEAL_AMOUNT;

   return { playerID: Players.length -1, myCards }; //give each users it's initialized cards
}

module.exports = {
    Players, PictureDeck, CurrentPicture,
    CardsInPlay: CardsInPlay,
    SubmitCaption, Init
} 