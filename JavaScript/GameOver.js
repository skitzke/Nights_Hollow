class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }
    create(){
        this.gameover = this.add.image(config.width/2 - 10, config.height/2, "gameover");
        this.gameover.setScale(0.1);
        this.gameover.setInteractive({
            useHandCursor:true
        });
        this.gameover.on("pointerup", ()=>{
            this.scene.start("playGame");
        });
        this.add.text(250, 350, "Click Game Over to Restart");
    }
}
