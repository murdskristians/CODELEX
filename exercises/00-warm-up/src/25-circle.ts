export {};

function Circle(radius:number) {
  this.radius = radius;

  this.area = function() {
    return (Math.PI * this.radius * this.radius).toFixed(2);
  };

  this.perimeter = function() {
    return (2*Math.PI*this.radius).toFixed(2);
  };
}

const c = new Circle(3);
console.log("Area =", c.area()); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85
