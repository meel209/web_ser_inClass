	
const users = require("./Users");
const CaptionsDeck = require('../models/quoteCards');

const DEAL_AMOUNT = 3;

let iCurrentCaption = 0;

const Players = [
];

const MyCards = [];

const PictureDeck = [
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-147-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-146-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-131-750x280.jpg'
];

let CurrentPicture = "";
let iCurrentPicture = 0;

function FlipPicture(){
    console.log(CurrentPicture)
    return module.exports.CurrentPicture = PictureDeck[iCurrentPicture++]
}

const CardsInPlay = [];

function SubmitCaption(caption, playerId){
    const player = Players[playerId];
    if(player.isDealer){
        throw Error('Dealer is not allowed to sumbit a caption')
    } 
    CardsInPlay.push({
        Text: caption,
        PlayerId: playerId,
        IsChosen: false
    })
}

function Join(userId){
    if(Players.some(x=> x.userId == userId)){
        // The player already joined the game in another browser or computer
        throw Error("You already joined this game in another browser or computer");
    }

    const user = users.Get(userId);
    Players.push( { Name: user.Name, Picture: user.Picture, Score: 0, isDealer: false, userId })
    console.log(Players)

    const myCards = CaptionsDeck.list.slice(iCurrentCaption, iCurrentCaption + DEAL_AMOUNT);
    iCurrentCaption += DEAL_AMOUNT;

    return { playerId: Players.length -1, myCards }
}

function GetPlayerId(userId){
    return Players.findIndex(x=> x.userId == userId);
}

module.exports = {
    Players, PictureDeck, CurrentPicture,
    CardsInPlay: CardsInPlay,
    SubmitCaption, Join, FlipPicture, GetPlayerId
}