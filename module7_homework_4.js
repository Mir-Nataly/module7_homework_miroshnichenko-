/* Задание 4 Модуль 7 */

function OperationOfDevices (name) {
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
console.log (`Total capacity - ${totalСapacity} watt`)



/* Процесс написания этой функции решила не удалять, чтобы в случае неверного решения можно было савнить
 с предыдущими версиями. */









/* function OperationOfDevices (name, power) {
    this.name = name,
    this.power = power,
    this.deviceOn = false
} */

/* OperationOfDevices.prototype.getPowerConsumption = function (power) {
    let included = on;
    if (on == 1) {
        included = 'прибор включен'
    }
    else {
        included = 'прибор выключен'
    }
    console.log (getPowerConsumption)
} */

/* OperationOfDevices.prototype.included = function () {
    console.log (`${this.name} включен`);
      this.deviceOn = true;
}

OperationOfDevices.prototype.turnedOff = function () {
    console.log (`${this.name} выключен`);
      this.deviceOn = false;
} */

/* console.log (lamp.power.included + notebook.power.included + phone.power.included) */

/* OperationOfDevices.prototype.included = function () {
    let powerConsumption = 0;
    if (
        this.deviceOn = true;
        powerConsumption += this.power {
            console.log (`${this.name} включен`)
        }
    )
    else (
        this.deviceOn = false {
            console.log (`${this.name} выключен`)
        }
    )
}

function getSumPower () {
    console.log (`Общая мощность - ${powerConsumption}`)
}

const lamp = new OperationOfDevices ('lamp', 60);
const notebook = new OperationOfDevices ('notebook', 50);
const phone = new OperationOfDevices ('phone', 100);

getSumPower() */

/* console.log (lamp.power.included + notebook.power.included + phone.power.included) */

/* function getPowerConsumption () {
    if (power >= 1) {
        console.log (`${this.name} включен`);
    }
    else {
        console.log (`${this.name} выключен`);
    }
} */


/* function OperationOfDevices (name, power) {
    this.name = name,
    this.power = power,
    this.getPowerConsumption = function () {
        if (
            this.power == 0 {
                console.log (`${this.name} выключен`);
            }
        )
        else {
            console.log (`${this.name} включен`);
        }
    }
}
lamp.getPowerConsumption();
notebook.getPowerConsumption();
phone.getPowerConsumption();

const lamp = new OperationOfDevices ('lamp', 60);
const notebook = new OperationOfDevices ('notebook', 50);
const phone = new OperationOfDevices ('phone', 100);
 */


/* function OperationOfDevices (name, power) {
    this.name = name,
    this.power = power,
    this.getPowerConsumption = function () {
        
        if (
            this.power == 0 {
                getPowerConsumption = false;
            }
        )
        else {
            getPowerConsumption = true;
        }

    }
}
lamp.getPowerConsumption();
notebook.getPowerConsumption();
phone.getPowerConsumption();

const lamp = new OperationOfDevices ('lamp', 60);
const notebook = new OperationOfDevices ('notebook', 50);
const phone = new OperationOfDevices ('phone', 100); */


/* function OperationOfDevices (name) {
    this.device = 'electrical appliance',
    this.name = name
}
OperationOfDevices.prototype.getPower = function (power) {
    console.log (`Power ${this.name} ${power} watt`)
}

const lamp = new OperationOfDevices ('lamp');
const notebook = new OperationOfDevices ('notebook');
const phone = new OperationOfDevices ('phone');

lamp.getPower (60)
notebook.getPower (50)
phone.getPower (100) */ /* работает!!! */


/* function OperationOfDevices (name) {
    this.device = 'electrical appliance',
    this.name = name
}
OperationOfDevices.prototype.getPower = function (power) {
    if (power > 0)
    {console.log (`${this.name} included`)}
    else {console.log (`${this.name} unincluded`)}
}

const lamp = new OperationOfDevices ('lamp');
const notebook = new OperationOfDevices ('notebook');
const phone = new OperationOfDevices ('phone');

lamp.getPower (60)
notebook.getPower (50)
phone.getPower (100) */ /* работает!!! */

/* function OperationOfDevices (name) {
    this.device = 'electrical appliance',
    this.name = name,
    this.deviceOn = false
}
OperationOfDevices.prototype.getPower = function (power) {
    if (power > 0)
    {console.log (`${this.name} included`)}
    this.deviceOn = true
}


const lamp = new OperationOfDevices ('lamp');
const notebook = new OperationOfDevices ('notebook');
const phone = new OperationOfDevices ('phone');

lamp.getPower (60)
notebook.getPower (50)
phone.getPower (100) */ /* работает!!! */

/* const totalСapacity = lamp.getPower() + notebook.getPower() + phone.getPower();
console.log (`Total capacity - ${totalСapacity} watt`) */

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