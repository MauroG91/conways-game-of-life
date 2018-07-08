var play = function() {
  var liAlives = Board.getCells();
  Board.updateCells(liAlives);
}
var init = function() {
  Board.rows = document.getElementById('input').value;
  Board.columns = Board.rows;
  var valueSize = Board.rows * 36;
  Board.sizeBoard(valueSize);
  Game.init();
  Game.start();
}

deleteItems = function(){
  init();
  visibleItems();
  var parent = document.getElementById('game');
  var child = document.getElementById('initForm');
  parent.removeChild(child);
}

visibleItems = function(){
  document.getElementById('play').style.visibility = "visible";
  document.getElementById('next').style.visibility = "visible";
  document.getElementsByTagName('ul')[0].style.visibility = "visible";
}

window.onload = function(){
  var btnStart = document.getElementById('start');
  btnStart.onclick = deleteItems;
}
