$(document).ready(function() {

    function Game() {
    //Create the board
    this.board = new Board();
 
    //Create a new instance of player 1
    this.player1 = new Player("x");
    
    //Do the same for a player 2
    this.player2 = new Player("o");
    // set up turn counter
    var turncount = this.turncount;
    this.turncount = 0;
 
    };
    
    Game.prototype.play = function(){

      var _this = this;
      var $gameMsgDiv = $('#game_msg');

      function getWinner(player) {
        rowWinner(player);
        colWinner(player);
        diagWinner(player);
      }

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
      // assign turn, add class, remove 'open' to prevent reclicking
      // if turncount is even play x
        if(_this.turncount % 2 === 0 && $(this).hasClass('open')) {
          // remove 'open'class to prevent player from clicking again
          $(this).html('<p>X</p>').addClass('xBox').removeClass('open');
          // evaluate win
          getWinner('xBox');

          // if turncount is an odd number play o
        } else if(_this.turncount % 2 !== 0 && $(this).hasClass('open')) {
            $(this).html('<p>O</p>').addClass('oBox').removeClass('open');
            getWinner('oBox');

        } else {
          console.log("error");
        }

        _this.turncount += 1;
        console.log(_this.turncount);

        // if turncount === 9 && !rowWinner || !colWinner || !diagWinner
        if(_this.turncount === 9) {
          $gameMsgDiv.html("It's a tie");
        }

                
      }); // end on click
      // reset game, remove classes and add open class, reset turncount to 0
     $('#reset').on('click', function() {
        $('.box').html("&nbsp;").removeClass('xBox oBox').addClass('open');
        _this.turncount = 0;
        $gameMsgDiv.html("");
        
      });          
    };
    
    // Player constructor
    function Player(team) {
        this.team = team;
        this.wins = 0;
    };
    
    // Board constructor
    function Board() {
        this.cells = $('#board-container .box');
        this.cells.addClass('open');
    };
       
    var game = new Game();
    
    game.play();
    
});  // end doc ready