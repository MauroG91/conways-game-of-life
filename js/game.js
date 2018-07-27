var Game = {
  next: null,
  board: null,
  cells: null,
  play : null,
  load: null,
  interval: null,
  init: function() {
    Board.createCells();
    Game.board = Board.getBoard();
    Game.cells = Board.getCells();
    Game.next = document.getElementById('next');
    Game.play = document.getElementById('play');
  },
  load: function() {
    Game.cells = Board.getCells();
    Game.next = document.getElementById('next');
    Game.play = document.getElementById('play');
  },
  start: function() {
    for (var i = 0; i < Game.cells.length; i++) {
      Game.cells[i].onclick = Cell.toggle;
    };
    Game.next.onclick = Board.nextStep;
    Game.play.onclick = Game.update;
  },
  update: function() {
    if(Game.play.id === 'play'){
      interval = setInterval(Board.nextStep, 1000);
    }else{
      Game.die()
    }
    Board.changeNameButton();
  },
  die: function() {
    clearInterval(interval);
  }
};
