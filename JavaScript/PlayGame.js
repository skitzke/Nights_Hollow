class PlayGame extends Phaser.Scene {
    constructor() {
        super("playGame");
        this.life = 3;
    }

    create(){
        this.bg = this.add.tileSprite(-110, 0, 1800, 1180, 'gameBackground').setOrigin(0, 0);
        this.bg.setScale(0.5);
        this.platforms = this.physics.add.staticGroup();
        this.player = this.physics.add.sprite(100, 450, 'jackIdle');
        this.enemy = this.physics.add.sprite(400, 200, 'enemy');
        this.enemy.setScale(2);
        this.enemy1 = this.physics.add.sprite(400, 250, 'enemy');
        this.enemy2 = this.physics.add.sprite(400, 50, 'enemy');
        this.enemy3 = this.physics.add.sprite(300, 50, 'enemy');
        this.enemy3.setScale(1.5);
        this.player.setScale(1.5);
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(500);
        this.platforms.create(200, 635, 'ground');
        this.platforms.create(580, 635, 'ground');
        this.platforms.create(5, 250, 'ground').setSize(0,90,0,0);
        this.platforms.create(800, 220, 'ground').setSize(0,90,0,0);
        this.player.body.setSize(20,35, 5, 0);
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.enemy, this.platforms);
        this.physics.add.collider(this.enemy, this.enemy1);
        this.physics.add.collider(this.enemy, this.enemy2);
        this.physics.add.collider(this.enemy, this.enemy3);
        this.physics.add.collider(this.enemy1, this.enemy2);
        this.physics.add.collider(this.enemy1, this.enemy3);
        this.physics.add.collider(this.enemy2, this.enemy3);
        this.physics.add.collider(this.enemy1, this.platforms);
        this.physics.add.collider(this.enemy2, this.platforms);
        this.physics.add.collider(this.enemy3, this.platforms);
        this.lifeText = this.add.text(32, 32);
        this.physics.add.overlap(this.player, this.enemy, this.playerDie, null, this);
        this.physics.add.overlap(this.player, this.enemy1, this.playerDie, null, this);
        this.physics.add.overlap(this.player, this.enemy2, this.playerDie, null, this);
        this.physics.add.overlap(this.player, this.enemy3, this.playerDie, null, this);
        this.gameMusic = this.sound.add("gameMusic");
        var gameMusicConfig = {
            mute: false,
            volume: 0.5,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.gameMusic.play(gameMusicConfig);
    }

    playerDie(player, enemy)
    {
        enemy.disableBody(true, true);
        this.life -= 1;

        if (this.life === 0){
            this.scene.start('gameOver');
            this.life = 3;
            this.gameMusic.stop();
        }
    }

    update () {
        this.lifeText.setText('Lives: ' + this.life);
        this.physics.moveToObject(this.enemy, this.player, 100);
        this.physics.moveToObject(this.enemy1, this.player, 100);
        this.physics.moveToObject(this.enemy2, this.player, 100);
        this.physics.moveToObject(this.enemy3, this.player, 100);
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
