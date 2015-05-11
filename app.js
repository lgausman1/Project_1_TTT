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
 
    };
    
    Game.prototype.play = function(){

      var _this = this;
      var $gameMsgDiv = $('#game_msg');

      function rowWinner(player) {
        if($('#a-1').hasClass(player) && $('#a-2').hasClass(player) && $('#a-3').hasClass(player)) {
          $gameMsgDiv.html(player + " wins!");
        } else if($('#b-1').hasClass(player) && $('#b-2').hasClass(player) && $('#b-3').hasClass(player)) {
          $gameMsgDiv.html(player + " wins!");
        } else if($('#c-1').hasClass(player) && $('#c-2').hasClass(player) && $('#c-3').hasClass(player)) {
          $gameMsgDiv.html(player + " wins!!!");
        } else {
          return false;
        }
      }

      function colWinner(player) {

        if($('#a-1').hasClass(player) && $('#b-1').hasClass(player) && $('#c-1').hasClass(player)) {
          $gameMsgDiv.html(player + " wins!");
        } else if($('#a-2').hasClass(player) && $('#b-2').hasClass(player) && $('#c-2').hasClass(player)) {
          $gameMsgDiv.html(player + " wins!");
        } else if($('#a-3').hasClass(player) && $('#b-3').hasClass(player) && $('#c-3').hasClass(player)) {
          $gameMsgDiv.html(player + " wins!!!");
        } else {
          return false;
        }

      }

      function diagWinner(player) {

        if($('#a-1').hasClass(player) && $('#b-2').hasClass(player) && $('#c-3').hasClass(player)) {
          $gameMsgDiv.html(player + " wins!");
        } else if($('#a-3').hasClass(player) && $('#b-2').hasClass(player) && $('#c-1').hasClass(player)) {
          $gameMsgDiv.html(player + " wins!");
        } else {
          return false;
        }

      }

      this.board.cells.on('click', function() {
      // assign turn add class, remove 'open' to prevent reclicking
        if(_this.turncount % 2 === 0 && $(this).hasClass('open')) {
          $(this).html('X').addClass('xBox').removeClass('open');
          // evaluate win
          rowWinner('xBox');
          colWinner('xBox');
          diagWinner('xBox');
          
        } else if(_this.turncount % 2 !== 0 && $(this).hasClass('open')) {
          $(this).html('O').addClass('oBox').removeClass('open');

          rowWinner('oBox');
          colWinner('oBox');
          diagWinner('oBox');

        } else {
          console.log("error");
        }

        _this.turncount += 1;
        console.log(_this.turncount);

        // if turncount === 9 && !rowWinner || !colWinner || !diagWinner
        // console.log("It's a tie")
        if(_this.turncount === 9) {
          $gameMsgDiv.html("It's a tie");
        }

                
      }); // end on click
      
     $('#reset').on('click', function() {
        $('.box').html("&nbsp;").removeClass('xBox oBox').addClass('open');
        _this.turncount = 0;
        
      });          
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