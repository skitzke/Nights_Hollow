class Scene2 extends Phaser.Scene {
    constructor() {
        super("gameMenu");
    }
    create(){
        this.bg = this.add.tileSprite(0, 0, 1400, 600, 'sky').setOrigin(0, 0);
        this.bg.setScale(0.8);
        this.tree = this.add.tileSprite(0, -480, 1316, 1080, 'tree').setOrigin(0, 0);
        this.start = this.add.image(config.width/2 - 18, config.height/2, "start");
        this.start.setScale(0.5);
        this.title = this.add.image(config.width/2 - 10, config.height/4, "title");
        this.menuMusic = this.sound.add("menuMusic");
        var musicConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.add.text(50, 550, "Created By\nCaner Celik");
        this.jack = this.add.sprite(380, 500, "jackRun");
        var frameNames = this.textures.get('jackRun').getFrameNames();
        console.log(frameNames);
        this.jack.setScale(1.5);
        this.jack.play("run");
        this.menuMusic.play(musicConfig);
        this.start.setInteractive({
            useHandCursor:true
        });
        this.start.on("pointerup", ()=>{
            this.scene.start("playGame");
            this.menuMusic.stop();
        })
    }
    update(){
        this.bg.tilePositionX -= -0.5;
        this.tree.tilePositionX -= -1;
    }
}
