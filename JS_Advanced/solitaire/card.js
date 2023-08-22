class Card{
    suit = null;
    face = null;
    faceUp = false

    constructor(suit,face,   faceUp = false){
        this.suit = suit;
        this.face = face;
        this.faceUp = faceUp
    }
    
}

class Deck{
    /**@type {Card[]}*/


    cards = [];
    /**
     * @param {Card[]?} cards */

    constructor(cards = []){
        this.cards= cards

    }

    canFlip(){
        throw new TypeError(`Cannon  invoke abstract method`);

    }
    canTake(index){
        throw new TypeError(`Cannon  invoke abstract method`);

        
    }
    /**
     * 
     * @param {Card | Card[]} cards 
     */

    canPlace(cards){
        throw new TypeError(`Cannon  invoke abstract method`);

        
    }

    flip(){
        throw new TypeError(`Cannon  invoke abstract method`);


    }
    take(index){
        throw new TypeError(`Cannon  invoke abstract method`);

        
    }
    place(cards){
        throw new TypeError(`Cannon  invoke abstract method`);

        
    }

}