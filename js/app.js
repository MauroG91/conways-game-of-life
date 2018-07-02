var play = function() {
  var liAlives = Board.getCells();
  Board.updateCells(liAlives);
}
var init = function() {
    Game.init();
    Game.start();
}
window.onload = init;
