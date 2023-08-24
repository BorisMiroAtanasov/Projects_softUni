import { Deck, Foundation, Pile, Stock, Waste, suits } from "./card.js";
import { createDeck, dealDeck, shufelDdeck } from "./util.js";

start();


function start(){
    
    
    const deck = createDeck();
    shufelDdeck(deck);
    shufelDdeck(deck);
    shufelDdeck(deck);
    shufelDdeck(deck);
    shufelDdeck(deck);
    shufelDdeck(deck);
    shufelDdeck(deck);
    console.log(deck);

    const state = dealDeck(deck);
    
    console.log(state);
}

