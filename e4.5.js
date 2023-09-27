class Device {
    constructor(power, connected){
      this.power = power;
      this.connected = true
    }
    getConnected(){
      if (this.connected){
        return 'Подключено,Бро!'
      } else {
        return 'Нет амперов, бро!'
    }
    }
  }
      
  
  class Mouse extends Device {
    constructor(name, color, size, light, power, connected){
        super(power, connected);
        this.name = name;
        this.color = color;
        this.size = size;
    }
  }
    
    
  
  class Computers extends Device {
    constructor(name, color, model, power, connected){
        super(power, connected);
        this.name = name;
        this.color = color;
        this.model = model;
    }
  }  
    
  
  const mouseD303B = new Mouse ('D303B', 'black', 'medium', 'white')
  
  
  console.log(mouseD303B.getConnected())