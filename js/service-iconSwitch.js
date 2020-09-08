function serviceSwitch () {
   let tool = document.querySelector('.service__icon-tool')
   let roller = document.querySelector('.service__icon-roller')
   let gamepad = document.querySelector('.service__icon-gamepad')
   let power = document.querySelector('.service__icon-power')
   let bodyTool = document.querySelector('.service__body-tool')
   let bodyRoller = document.querySelector('.service__body-roller')
   let bodyGamepad = document.querySelector('.service__body-gamepad')
   let bodyPower = document.querySelector('.service__body-power')
   
   
   tool.onclick = function(){
        let off1 = roller.classList.remove('service__icon-active');
        let off2 = gamepad.classList.remove('service__icon-active');
        let off3 = power.classList.remove('service__icon-active');
        let off4 = bodyRoller.classList.remove('service__body-active')
        let off5 = bodyGamepad.classList.remove('service__body-active')
        let off6 = bodyPower.classList.remove('service__body-active')
      if(this.classList.contains('service__icon-active')) {
         off1; off2; off3; off4; off5; off6;
      }else{
      this.classList.add('service__icon-active');
          off1; off2; off3; off4; off5; off6;
          bodyTool.classList.add('service__body-active');
      }
   }
   
   roller.onclick = function(){
      let off1 = tool.classList.remove('service__icon-active');
      let off2 = gamepad.classList.remove('service__icon-active');
      let off3 = power.classList.remove('service__icon-active');
      let off4 = bodyTool.classList.remove('service__body-active')
      let off5 = bodyGamepad.classList.remove('service__body-active')
      let off6 = bodyPower.classList.remove('service__body-active')
    if(this.classList.contains('service__icon-active')) {
       off1; off2; off3; off4; off5; off6;
    }else{
    this.classList.add('service__icon-active');
        off1; off2; off3; off4; off5; off6;
       bodyRoller.classList.add('service__body-active');
    }
   }
   
   gamepad.onclick = function(){
      let off1 = roller.classList.remove('service__icon-active');
      let off2 = tool.classList.remove('service__icon-active');
      let off3 = power.classList.remove('service__icon-active');
      let off4 = bodyRoller.classList.remove('service__body-active')
      let off5 = bodyTool.classList.remove('service__body-active')
      let off6 = bodyPower.classList.remove('service__body-active')
    if(this.classList.contains('service__icon-active')) {
       off1; off2; off3; off4; off5; off6;
    }else{
    this.classList.add('service__icon-active');
        off1; off2; off3; off4; off5; off6;
       bodyGamepad.classList.add('service__body-active');
    }
   }
   
   power.onclick = function(){
      let off1 = roller.classList.remove('service__icon-active');
      let off2 = gamepad.classList.remove('service__icon-active');
      let off3 = tool.classList.remove('service__icon-active');
      let off4 = bodyRoller.classList.remove('service__body-active')
      let off5 = bodyGamepad.classList.remove('service__body-active')
      let off6 = bodyTool.classList.remove('service__body-active')
    if(this.classList.contains('service__icon-active')) {
       off1; off2; off3; off4; off5; off6;
    }else{
    this.classList.add('service__icon-active');
        off1; off2; off3; off4; off5; off6;
       bodyPower.classList.add('service__body-active');
    }
   }
}
serviceSwitch ()

