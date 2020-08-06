var car = new Object();
car.name = 'audi';
car.price = 20000000;
car.maxSpeed = 500;
function getMaxSpeed(speed){
    return car.maxSpeed=speed;
};
module.exports = getMaxSpeed;
console.log("Maximum speed "+getMaxSpeed(200));