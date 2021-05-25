class Scene3 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create(){
        this.bg = this.add.tileSprite(-110, 0, 1800, 1180, 'gameBackground').setOrigin(0, 0);
        this.bg.setScale(0.5);

        // create the Tilemap
        const map = this.make.tilemap({ key: 'level1' });

        // add the tileset image we are using
        const tileset = map.addTilesetImage('dirt', 'tiles' , 30, 30, 0, 0);

        // "Ground" layer will be on top of "Background" layer
        map.createStaticLayer('layer', tileset);

    }
}
