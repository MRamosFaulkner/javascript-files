
function Person() {
    this.isAlive = true;
};
function Relative() {
    this.lastName = 'Johnson';
};
function Father() {
    this.isInCharge = false;
};

const per = new Person();
Relative.prototype = per;

const rel = new Relative();
Father.prototype = rel;

const fath = new Father();

console.log(fath.isInCharge, fath.lastName, fath.isAlive);