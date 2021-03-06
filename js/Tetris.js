var tetris = {};
var Tetris = {
    game: null
};

/**
 * Tetris Main
 *
 * @returns
 */
Tetris = function(){
    this.map;
    this.player;
    this.timer;
    
    this.tileXStartPosition = 7;
    this.tileYStartPosition = 0;
    
    this.init = function(){
        this.map = new Tetris.Map(16, 16);
        this.map.init();
        this.player = new Tetris.Player(this, this.map);
        this.player.init();
        this.timer = new Tetris.Timer(this, 1000, function(game){
            game.player.input = Tetris.command.DOWN
        });
    }
    
    this.update= function(){
        this.timer.update();
        this.player.update();
    }
    
    this.draw = function(){
        this.map.draw();
        this.player.draw();
    }

   /**
   * Create a new block
   *
   * @returns {Tetris.Block}
   */
    this.createBlock = function(){
        var blockFactory = new Tetris.Block.Factory();
        return blockFactory.create(Tetris.Block.Elements, this.tileXStartPosition, this.tileYStartPosition);
    }
    
    this.init();
}
//test



