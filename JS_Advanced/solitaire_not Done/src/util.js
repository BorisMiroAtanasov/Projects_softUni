import { Card, Deck, Foundation, Pile, Stock, Waste, suits, colors, faces } from "./card.js";

export function createDeck(){

    const deck = new Deck();

    for (const suit of Object.values(suits)) {
        for (const face of Object.values(faces)) {
            deck.cards.push( new Card(suit,face))
            
        }
        
    }
    return deck
}
/**
 * 
 * @param {Deck} deck 
 */

 export function shufelDdeck(deck){
    const stok = [];

    while (deck.size > 0) {
        const card = deck.cards.splice(Math.random() * deck.size | 0, 1)[0];
        stok.push(card)
        
    }
    deck.cards.push(...stok);
}

/**
 * 
 * @param {Deck} deck 
 * @returns {GameState}
 */
export function dealDeck(deck){


    const state = {
        stock: new Stock(),
        waste: new Waste(),
        foundations: {
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

}
// export function dealDeck(deck){
    
        
    // }
    // for (let i= 0 ; i < 7; i++){
    //     const pile = state.piles[i];
    //     for (let j = 0 ; j <= i ; j++){
    //        // pile.cards.push(deck.cards.pop())
    //        pile.cards.push(deck.cards.pop())
    //     }

    //     pile.top.faceUp = true
    // }
    // state.stock.cards.push(...deck.cards);
    // return state;

// }

/**
 * @typedef {Object} GameState
 * @property {Stock} stock
 * @property {Waste} waste
 * @property {Object} foundation
 * @property {Foundation} foundation.clubs
 * @property {Foundation} foundation.diamonds
 * @property {Foundation} foundation.hearts
 * @property {Foundation} foundation.spades
 * @property {[Pile,Pile,Pile,Pile,Pile,Pile,Pile]} piles
 */