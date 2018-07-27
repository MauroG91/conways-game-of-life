var play = function() {
  init();
  deleteItems();
  visibleItems();
}

var init = function() {
  Board.rows = document.getElementById('input').value;
  Board.columns = Board.rows;
  var valueSize = Board.rows * 36;
  Board.sizeBoard(valueSize);
  Game.init();
  Game.start();
}

var deleteItems = function() {
  var parent = document.getElementById('game');
  var child = document.getElementById('initForm');
  parent.removeChild(child);
}

var visibleItems = function() {
  document.getElementById('play').style.visibility = "visible";
  document.getElementById('next').style.visibility = "visible";
  document.getElementsByTagName('ul')[0].style.visibility = "visible";
}

var inputCheck = function() {
  if(document.getElementById('input').value === '') {
    document.getElementById('start').disabled = true;
  } else {
    if(document.getElementById('input').value <= 30) {
      document.getElementById('start').disabled = false;
    } else {
      alert('The number must be less than or equal to 30');
      document.getElementById('input').value = 30;
    }
  }
}

var eventListener = function() {
  document.addEventListener("input", inputCheck);
}

window.onload = function() {
  document.getElementById('start').disabled = true;
  var btnStart = document.getElementById('start');
  var btnLastSession = document.getElementById('lastSession');
  btnStart.onclick = play;
  btnLastSession.onclick = Storage.getStorage;
  eventListener();
}
