class Card {
  suit = null;
  face = null;
  faceUp = false;

  constructor(suit, face, faceUp = false) {
    this.suit = suit;
    this.face = face;
    this.faceUp = faceUp;
  }
}

class Deck {
  /**@type {Card[]}*/

  cards = [];
  /**
   * @param {Card[]?} cards */

  constructor(cards = []) {
    this.cards = cards;
  }
  get top() {
    return this.cards[topIndex];
  }
  get topIndex(){
    return this.size - 1

  }
  get size(){
    return this.cards.length 

  }

  canFlip() {
    return this.size > 0 && this.top.faceUp == false;
  }
  canTake(index) {
    throw new TypeError(`Cannon  invoke abstract method`);
  }
  /**
   *
   * @param {Card | Card[]} cards
   */

  canPlace(cards) {
    throw new TypeError(`Cannon  invoke abstract method`);
  }

  flip() {
    if (this.canFlip() == false) {
      throw new Error("Cannot flip card");
    }

    this.top.faceUp = true;
  }
  take(index) {
    throw new TypeError(`Cannon  invoke abstract method`);
  }
  place(cards) {
    throw new TypeError(`Cannon  invoke abstract method`);
  }
}

class Stock extends Deck{
    canTake(index) {
      return false
      }
      /**
       *
       * @param {Card | Card[]} cards
       */
    
      canPlace(cards) {
        return false
      }


      take(index) {
        throw new Error(`Cannon  take from stock`);
      }
      place(cards) {
        throw new Error(`Cannon place on stock`);
      }

}

class Waste extends Deck{
    canTake(index) {
      return this.size > 0 && index == this.topIndex;
      }
      /**
       *
       * @param {Card | Card[]} cards
       */
    
      canPlace(cards) {
        return false
      }


      take(index) {
        if (this.index == false) {
            throw new Error("Cannot take card");
          }
        this.cards.splice(index, this.size - index)
      }
      place(cards) {
        throw new Error(`Cannon place on waste`);
      }

}

class Foundation extends Deck{
    canTake(index) {
      return this.size > 0 && index == this.topIndex;
      }
      /**
       *
       * @param {Card | Card[]} cards
       */
    
      canPlace(cards) {
        return false
      }


      take(index) {
        if (this.index == false) {
            throw new Error("Cannot take card");
          }
        this.cards.splice(index, this.size - index)
      }
      place(cards) {
        throw new Error(`Cannon place on waste`);
      }

}
