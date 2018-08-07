var play = function() {
  init();
  document.getElementById('initForm').style.display= "none";
  visibleItemsBoard();
}

var init = function() {
  Board.rows = document.getElementById('input').value;
  Board.columns = Board.rows;
  var valueSize = Board.rows * 36;
  Board.sizeBoard(valueSize);
  Game.init();
  Game.start();
}

var visibleItemsBoard = function() {
  document.getElementById('play').style.display = "flex";
  document.getElementById('next').style.display = "flex";
  document.getElementsByTagName('ul')[0].style.display = "flex";
  document.getElementById('play').style.visibility= "visible";
  document.getElementById('next').style.visibility= "visible";
  document.getElementsByTagName('ul')[0].style.visibility= "visible";
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
  document.getElementById('accept').addEventListener("click", restoreSession);
  document.getElementById('cancel').addEventListener("click", newSession);
}

var restoreSession = function() {
  document.getElementById('restoreSession').style.display = "flex";
  Storage.getStorage();
}

var newSession = function() {
  document.getElementById('restoreSession').style.display = "none";
  document.getElementById('initForm').style.display = "flex";
  document.getElementById('start').disabled = true;
  var btnStart = document.getElementById('start');
  btnStart.onclick = play;
  Storage.clearStorage();
}

window.onload = function() {
  document.getElementById('restoreSession').style.display = "none";
  document.getElementById('initForm').style.display = "none";
  document.getElementById('play').style.display = "none";
  document.getElementById('next').style.display = "none";
  document.getElementsByTagName('ul')[0].style.display = "none";
  eventListener();
  if (localStorage.getItem('board') == null) {
    newSession();
  } else {
    document.getElementById('restoreSession').style.display = "flex";
  }
}
