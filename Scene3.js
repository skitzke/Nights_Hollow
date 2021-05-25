class Scene3 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    create(){
        var platforms = this.physics.add.staticGroup();
        var player = this.physics.add.sprite(100, 450, 'jackIdle');
        player.setScale(1.5);
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('run', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'idle', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('run', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        platforms.create(200, 568, 'ground').setScale(1).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');

        this.physics.add.collider(player, platforms);
        player.body.setGravityY(300);
    }

    update(){
        var player = this.physics.add.sprite(100, 450, 'jackIdle');
        var cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('run', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('run', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('idle');
        }

        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }
    }
    // create(){
    //     let bg = this.add.tileSprite(-110, 0, 1800, 1180, 'gameBackground').setOrigin(0, 0);
    //     bg.setScale(0.5);
    //
    //     // create the Tilemap
    //     const map = this.make.tilemap({ key: 'level1' });
    //
    //     // add the tileset image we are using
    //     const tileset = map.addTilesetImage('dirt', 'tiles' , 32, 32, 0, 0);
    //
    //     // "Ground" layer will be on top of "Background" layer
    //     var walls = map.createStaticLayer('layer', tileset);
    //     walls.setCollisionBetween(1,50);
    //     var jack = this.add.sprite(380, 500, 'jackIdle').play('idle').setOrigin(4.5,-0.5);
    //     this.physics.add.collider(jack, walls);
    //     jack.setScale(1.5);
    //     this.input.keyboard.createCursorKeys();
    // }
    // update(){
    //     var cursors = this.input.keyboard.createCursorKeys();
    //     if (cursors.left.isDown)
    //     {
    //         this.jack.setVelocityX(-160);
    //         this.jack.anims.play('jackRun', true);
    //     }
    //     else if (cursors.right.isDown)
    //     {
    //         this.jack.setVelocityX(160);
    //         this.jack.anims.play('jackRun', true);
    //     }
    //
    //
    //     if (cursors.up.isDown && this.jack.body.touching.down)
    //     {
    //         this.jack.setVelocityY(-330);
    //     }
    // }
}
