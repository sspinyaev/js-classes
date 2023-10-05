
function Device(name, power, active) {
  this.name = name;
  this.power = power;
  this.active = false;
}
  
Device.prototype.getSwitchOn = function(active){
  if(active===false){this.active=true; console.log('Connected!');}
}
Device.prototype.getSwitchOff = function(active){
  if(active===true){this.active=false; console.log('Disconnected!');}
}
Device.prototype.countPower = function(){
  return console.log('Ваша мощность', this.power)
}

function Lamps(name, color, colorTemp, power){
  this.name = name;
  this.color = color;
  this.colorTemp = colorTemp;
  this.power = power;
}
Lamps.prototype = new Device()

function Comps(name, color, volume, power){
  this.name = name;
  this.color = color;
  this.volume = volume;
  this.power = power;
}
Comps.prototype = new Device()

const lamp = new Lamps('lamp', 'blue', 3000, 25);
const comp = new Comps('comp','white', 2.5, 2100)

lamp.getSwitchOn(false)
console.log(lamp)

lamp.countPower()