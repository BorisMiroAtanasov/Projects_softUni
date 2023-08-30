import { Deck, Foundation, Pile, Stock, Waste, suits } from "./card.js";
import { createDeck, shufelDdeck } from "./util.js";

start();


function start(){
    const state = {
        stock: new Stock(),
        waste: new Waste(),
        foundation: {
            [suits.Clubs] : new Foundation([],suits.Clubs),
            [suits.Diamonds] : new Foundation([],suits.Diamonds),
            [suits.Heards] : new Foundation([],suits.Heards),
            [suits.Spades] : new Foundation([],suits.Spades),
        },
        piles: [
            new Pile(),
            new Pile(),
            new Pile(),
            new Pile(),
            new Pile(),
            new Pile(),
            new Pile(),
        ]
    };
    
    console.log(state);
    const deck = createDeck();
    shufelDdeck(deck);
    shufelDdeck(deck);
    shufelDdeck(deck);
    shufelDdeck(deck);
    shufelDdeck(deck);
    shufelDdeck(deck);
    shufelDdeck(deck);

    console.log(deck);

    // const state = dealDeck(deck);
    
   
}


