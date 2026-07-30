// Example 1:
// Purpose: create an object with properties and a method.
// The method uses `this` to access values from the same object.
var obj1 = {
  x: 43,
  q: 7,
  y: "Hello world!",
  z: function () {
    return this.x + this.q;
  },
};

console.log("Example 1 object:", obj1);
console.log("Example 1 method result:", obj1.z());

// Example 2:
// Purpose: store student data and calculate total marks.
var student = {
  name: "Ben",
  math: 80,
  science: 75,
  total: function () {
    return this.math + this.science;
  },
};

console.log("Example 2 object:", student);
console.log("Example 2 method result:", student.total());

// Example 3:
// Purpose: store product details and calculate final price.
var product = {
  name: "Laptop",
  price: 50000,
  discount: 5000,
  finalPrice: function () {
    return this.price - this.discount;
  },
};

console.log("Example 3 object:", product);
console.log("Example 3 method result:", product.finalPrice());
