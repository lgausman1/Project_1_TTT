$(document).ready(function() {

    function Game() {
    //Create the board
    //var self = this;
    this.board = new Board();
 
    //Create a new instance of player 1
    this.player1 = new Player("x");
    
    //Do the same for a player 2
    this.player2 = new Player("o");

    var turncount = this.turncount;
    this.turncount = 0;


    console.log(this.turncount); //0
 
    };
    
    Game.prototype.play = function(){

      var _this = this;

        // on click
            // this.turncount += 1
            // if (this.turncount % 2 === 0)
                // this.move(player)
                // evaluate if player has a winning combo
                // this.player1.wins += 1;


      this.board.cells.on('click', function() {
        //alert('clicked');
        
        if(_this.turncount % 2 === 0 && $(this).hasClass('open')) {
          $(this).html('X').addClass('xBox').removeClass('open');
          console.log($(this).attr('id'));
          // evalue win

        } else if(_this.turncount % 2 !== 0 && $(this).hasClass('open')) {
          $(this).html('O').addClass('oBox').removeClass('open');
          //console.log("O marks the spot");
          // evaluate win

        } else {
          console.log("error");
        }

        _this.turncount += 1;
        //console.log(_this.turncount); 
                
      }); // end on click
      
        
    };
    
    // A starter Player constructor.
    function Player(team) {
        this.team = team;
        this.wins = 0;
    };
    
    // A starter Board constructor.
    function Board() {
        this.cells = $('#board-container .box');
        this.cells.addClass('open');
    };
    
    
    var game = new Game();
    
    game.play();
    
});  // end doc ready