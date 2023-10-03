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

rotate(){
    this.width=this.height;
    this.height=this.width;
}
double(){
    this.width *= 2;
    this.height *= 2;

}
  }
  
module.exports = Rectangle;  