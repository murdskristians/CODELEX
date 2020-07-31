/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
  private items:any ;

  constructor() { 
    this.items = []; 
  } 

  add(n: number) {     
    this.items.push(n); 
  } 
  

  remove() {
      // removing element from the queue returns underflow when called on empty queue 
      if( !this.items ) return "Underflow"; 
      else {
        return this.items.shift(); 
      }
  
  }
}

export { Queue };
