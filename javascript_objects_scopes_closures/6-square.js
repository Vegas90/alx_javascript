class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0) {
        // If w or h is 0 or not a positive integer, create an empty object
     return "Rectangle {}";
      }
        this.width = w;
        this.height = h;
    
    }
    //Create an instance method called print() that prints the rectangle using the character X
    print() {
        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }

}
//Create an instance method called rotate() that exchanges the width and the height of the rectangle
//we use const temp is temporarily store the value of either the width or height
rotate(){
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
}
//Create an instance method called double() that multiples the width and the height of the rectangle by 2
double(){
    this.width *= 2;
    this.height *= 2;

}
  }

class Square extends Rectangle 
{
constructor(size){
    super(size,size);
}
}

class Square extends require('./5-square') {
  constructor(size){
    super(size);
  }

  charPrint(c) {
      c = 'X'; // Default to 'X' if c is undefined
   

    for (let i = 0; i < this.size; i++) {
      console.log(c.repeat(this.size));
    }
  }
}

module.exports = Rectangle;
module.exports = Square;
module.exports = Square; 
