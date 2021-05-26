class Scene3 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    create(){
        this.bg = this.add.tileSprite(-110, 0, 1800, 1180, 'gameBackground').setOrigin(0, 0);
        this.bg.setScale(0.5);
        this.platforms = this.physics.add.staticGroup();
        this.player = this.physics.add.sprite(100, 450, 'jackIdle');
        this.player.setScale(1.5);
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(500);
        this.platforms.create(200, 620, 'ground');
        this.platforms.create(580, 620, 'ground');
        this.platforms.create(400, 400, 'ground').setSize(0,90,0,0);
        this.platforms.create(50, 250, 'ground').setSize(0,90,0,0);
        this.platforms.create(750, 220, 'ground').setSize(0,90,0,0);
        this.player.body.setSize(20,35, 5, 0);
        this.physics.add.collider(this.player, this.platforms);
    }

    update(){
        this.cursors = this.input.keyboard.createCursorKeys();
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);
            this.player.anims.play('runleft', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(160);
            this.player.anims.play('run', true);
        }
        else
        {
            this.player.setVelocityX(0);
            this.player.anims.play('idle', true);
        }

        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-200);
            this.player.anims.play('jump', true);
        }
        else if (this.cursors.up.isDown && this.cursors.right.isDown)
        {
            this.player.setVelocityY(-200);
            this.player.anims.play('jump', true);
        }
        else if (this.cursors.up.isDown && this.cursors.left.isDown)
        {
            this.player.setVelocityY(-200);
            this.player.anims.play('jumpLeft', true);
        }
    }
}
