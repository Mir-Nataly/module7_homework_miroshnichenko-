/* Задание 5 Модуль 7 */

/* function OperationOfDevices (name) {
    this.device = 'electrical appliance',
    this.name = name,
    this.deviceOn = false
}
OperationOfDevices.prototype.getPower = function (power) {
    if (power > 0)
    {console.log (`${this.name} included`)}
    this.deviceOn = true,
    this.power = power
}


const lamp = new OperationOfDevices ('lamp');
const notebook = new OperationOfDevices ('notebook');
const phone = new OperationOfDevices ('phone');

lamp.getPower (60)
notebook.getPower (0)
phone.getPower (100)

const totalСapacity = lamp.power + notebook.power + phone.power;
console.log (`Total capacity - ${totalСapacity} watt`) */


class OperationOfDevices {
    constructor (ownName) {
        this.device = 'electrical appliance';
        this.ownName = ownName;
        this.deviceOn = false;
    }
}

class UsedDevicec extends OperationOfDevices {
    constructor (power, ownName) {
        super (ownName);
        this.power = power;}
        getConnect (){
            if (power > 0)
            {console.log (`${this.ownName} included`)}
            this.deviceOn = true
        }
    
}

const lamp = new UsedDevicec (60, 'lamp');
const notebook = new UsedDevicec (0, 'notebook');
const phone = new UsedDevicec(100, 'phone');

console.log (lamp)
console.log (notebook)
console.log (phone)


const totalСapacity = lamp.power + notebook.power + phone.power;
console.log (`Total capacity - ${totalСapacity} watt`)