const Action = {
  powerOn()  { console.log("Accelerating..."); },
  powerOff() { console.log("Decelerating..."); },
  brakeOn()  { console.log("Break activated"); },
  brakeOff() { console.log("Break released");  },
  exit()     { console.log("Nice drive!");     },
};

const keyAction = {
  w: { keydown: Action.powerOn,  keyup: Action.powerOff },
  s: { keydown: Action.brakeOn,  keyup: Action.brakeOff },
  Escape: { keydown: Action.exit }
};

const keyHandler = (ev) => {
  if (ev.repeat) return;                             
  if (!(ev.key in keyAction) || !(ev.type in keyAction[ev.key])) return;
  keyAction[ev.key][ev.type]();
};

['keydown', 'keyup'].forEach((evType) => {
  document.body.addEventListener(evType, keyHandler);
});