
LEFT_ARROW_CODE  = 37
UP_ARROW_CODE    = 38
RIGHT_ARROW_CODE = 39
DOWN_ARROW_CODE  = 40

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

onkeyup = captureKey;
