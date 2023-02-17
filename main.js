class Pet {
    constructor(nickname, age) {
        console.log('IN PET CONSTRUCTOR');
        this.nickname = nickname;
        this.age = age;
    }
    eat() {
        return `${this.nickname} is eating`;
    }
}

class Cat extends Pet {
    constructor(nickname, age, livesLeft = 9) {
        console.log('IN CAT CONSTRUCTOR');
        super(nickname, age)
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEEOOWW';
    }
}

class Dog extends Pet {
    bark() {
        return 'WOOFFF';
    }
    eat() {
        return `${this.nickname} scarfs his food!`
    }
}