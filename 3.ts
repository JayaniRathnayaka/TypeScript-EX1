//INTERFACE USAGE
interface Person {
    name: string;
    age: number;
}

function greet(person: Person): string {
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}

let person: Person = { name: "Alice", age: 25 };

console.log(greet(person)); // Output: Hello, Alice! You are 25 years old.


//UNION TYPES

function getLength(value: string | number) : number{
    if(typeof value == "string"){
        return value.length;
    }else{
        return value.toString().length;
    }
}
console.log(getLength("Hello"));
console.log(getLength(123456789));


//CONSTRUCTOR CLASS
class Rectangle{
    width : number;
    height : number;

    constructor(width: number , height: number){
        this.width = width;
        this.height = height;
    }

    getArea() : number{
        return this.width*this.height;
    }
}

let myRectangle = new Rectangle(2,5);

console.log(myRectangle.getArea());


//TUPLES
let product: [string, number] = ["laptop" , 999.9];

console.log(`Product: ${product[0]}`); // Output: Product: Laptop
console.log(`Price: $${product[1]}`);  // Output: Price: $999.99








