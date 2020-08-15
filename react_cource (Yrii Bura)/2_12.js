const animal = {
    say: function() {
        console.log(`${this.name} ${this.voice}`)
    }
};

const dog = {
    name: 'Chappi',
    voice: 'goof'
};

Object.setPrototypeOf(dog, animal); // bad practices
dog.say();

//
function createAnimal(name, voice) {
    const res = Object.create(animal);
    res.name = name;
    res.voice = voice;

    return res;
}

const dogByFunction = createAnimal('Popi', 'gav');
dogByFunction.say();

//
function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = animal.say;

const dogByConsctructor = new Animal('Barsik', 'hey');
dogByConsctructor.say();

//
const emptyObj = Object.create(null);
