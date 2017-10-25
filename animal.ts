class Animal{
    private _name : string;
    
    constructor( name: string){
        this._name = name;

    }

    MakeSound( sound : string){
        console.log(`The animal is ${this._name} who sounds like ${sound} `);
    }
};

class Omnivores extends Animal{
    constructor(name : string){
        super(name);
    }
    MakeSound(sound = "ROAR"){
        super.MakeSound(sound);
    }
}

class herbivores extends Animal{
    constructor(name : string){
        super(name);
    }
    MakeSound( sound = "TRUMPHET"){
        super.MakeSound(sound);
    }

}

let result = new Omnivores(" TIGER ");
result.MakeSound();

let result1 = new herbivores(" ELEPHANT ");
result1.MakeSound();