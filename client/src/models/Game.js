const Players = [
    { Name: 'Bernie', Score: 0, isDealer: false }
];
const MyCards = [];

const PictureDeck = [
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg',
    'https://cdn.cnn.com/cnnnext/dam/assets/191024091949-02-foster-cat-large-169.jpg'
       
];

const CaptionsDeck = [
    'This is dummy text here One',
    'This is dummy text here Two',
    'This is dummy text here Three',
    'This is dummy text here Four',
    'This is dummy text here Five'
];

let CurrentPicture = "";

const CardsInPlay = [

];



export function Init(){
    MyCards.push(CaptionDeck[0])
    MyCards.push(CaptionDeck[1])


}



export { Players, MyCards, PictureDeck, CaptionsDeck, CurrentPicture, CardsInPlay};