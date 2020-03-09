const CaptionsDeck = [
    'This is dummy text here One',
    'This is dummy text here Two',
    'This is dummy text here Three',
    'This is dummy text here Four',
    'This is dummy text here Five'
];

function add(text){
    quoteCards.push(text);

}

module.exports ={
    list: quoteCards,
    add: add
};