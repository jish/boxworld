
LEFT_ARROW_CODE  = 37
UP_ARROW_CODE    = 38
RIGHT_ARROW_CODE = 39
DOWN_ARROW_CODE  = 40

$ = function() { return document.getElementById(arguments[0]); }

function Gridable() {
  this.div = document.createElement('div');
  $('board').appendChild(this.div);

  this.draw = function() {
    this.div.style.backgroundColor = 'yellow';
    this.div.style.width = '50px';
    this.div.style.height = '50px';
  }
}

function downArrowPressed() {
  alert('down');
}

function captureKey(event) {
  switch(event.keyCode) {
    case DOWN_ARROW_CODE:
      downArrowPressed();
      break;
  }
}

function init() {
  var gridable = new Gridable();
  gridable.draw();
}

onkeyup = captureKey;
onload  = init;
