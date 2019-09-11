function Shape(name, sides){
    this.name = name;
    this.sides = sides;
}

function Rectangle(height, width, name, sides){
    this.height = height;
    this.width = width;

    Shape.call(this, name, sides);
}

Rectangle.prototype = Object.create(Shape.prototype)

Rectangle.prototype.area = function(){
    console.log(this.height*2 + this.width*2);
}

function Square(height, name, sides){
    Rectangle.call(height, height, name, sides);
}

Square.prototype = Object.create(Rectangle.prototype)

var newShape = new Rectangle(10, 12, "rectangular", 4)

console.log(newShape)

