/*function Punto(x, y) {
  this.x = x;
  this.y = y;
}

Punto.prototype.suma = function(punto) {
  var x = this.x + punto.x;
  var y = this.y + punto.y;
  return new Punto(x, y);
};

Punto.prototype.toString = function() {
  return '(' + this.x + ',' + this.y + ')';
};

var p1 = new Punto(1, 2);
var p2 = new Punto(2, 3);
console.log(p1.suma(p2).toString()); // Output: (3,5)*/
const Punto = (x, y) => ({
    x,
    y,
    suma(punto) {
      return Punto(this.x + punto.x, this.y + punto.y);
    },
    toString() {
      return `(${this.x},${this.y})`;
    },
  });
  
  const p1 = Punto(1, 2);
  const p2 = Punto(2, 3);
  console.log(p1.suma(p2).toString()); // Output: (3,5)
  
