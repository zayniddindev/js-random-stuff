class Dog {
    beat() {
        console.log('I beat');
    }
}

class Snake {
    ssh() {
        console.log('I ssh');
    }
}

const dog = new Dog();
const snake = new Snake();

dog.__proto__ = snake;


console.log(dog.__proto__.__proto_);
console.log(snake);

// dog.ssh()

// console.log(Object.getPrototypeOf(dog));