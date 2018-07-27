var Storage = {
  setStorage: null,
  getStorage:null,
  setStorage : function() {
    var board = document.getElementsByClassName('game')[0].innerHTML;
    localStorage.setItem('board', board);
    localStorage.setItem('size', Board.rows);
  },
  getStorage : function() {
    document.getElementsByClassName('game')[0].innerHTML = localStorage.getItem('board');
    Board.rows = localStorage.getItem('size');
    Board.columns = Board.rows
    Game.load();
    Game.start();
  }
}
