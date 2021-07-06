class PlayGame extends Phaser.Scene {
    constructor() {
        super("playGame");
        this.life = 3;
        this.initialTime = 0;
        this.text;
        this.timedEvent;
        this.highscore = 0;
        this.newHighScore = 0;
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
        this.add.text(32, 96, 'High score: ' + this.newHighScore);
        this.timerText = this.add.text(32, 64, 'Timer: ' + formatTime(this.initialTime));

        // Each 1000 ms call onEvent
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

        function formatTime(seconds){
            // Minutes
            var minutes = Math.floor(seconds/60);
            // Seconds
            var partInSeconds = seconds%60;
            // Adds left zeros to seconds
            partInSeconds = partInSeconds.toString().padStart(2,'0');
            // Returns formated time
            return `${minutes}:${partInSeconds}`;
        }

        function onEvent ()
        {
            this.initialTime += 1; // One second
            this.timerText.setText('Timer: ' + formatTime(this.initialTime));
        }

        //A function i tried to make a group of enemies for
        // function spawnEnemies()
        // {
        //     this.enemies1 = this.add.group();
        //
        //     for (let i = 0; i < 5; i++)
        //     {
        //         let x = Phaser.Math.Between(0, 400);
        //         let y = Phaser.Math.Between(0, 600);
        //
        //         this.enemy1 = this.add.image(x, y, 'enemy');
        //         this.enemies1.add(this.enemy1);
        //     }
        // }
    }

    //Tried to make enemies spawn per time.
    // spawnEnemies(enemy)
    // {
    //     enemy = this.add.group();
    //
    //     for (let i = 0; i < 5; i++)
    //     {
    //         let x = Phaser.Math.Between(0, 400);
    //         let y = Phaser.Math.Between(0, 600);
    //
    //         this.enemy1 = this.add.image(x, y, 'enemy');
    //         enemy.add(this.enemy1);
    //     }
    // }

    playerDie(player, enemy)
    {
        enemy.disableBody(true, true);
        this.life -= 1;

        if (this.life === 0)
        {
            this.scene.start('gameOver');
            this.highscore = this.initialTime;
            this.initialTime = 0;
            this.life = 3;
            this.gameMusic.stop();
        }
    }

    update () {
        // Checking if the high score is not null.
        if (this.highscore != null)
        {
            //Checking if the high score is higher than the new high score and if it is than replace it.
            if (this.highscore >= this.newHighScore)
            {
                this.newHighScore = this.highscore;
            }
        }
        else
        {
            //If it's null to add the high score as 0 until it isn't null anymore
            this.add.text(32, 96, 'High score:  0');
        }
        // Adding a full wave of enemies towards the player at 30 seconds
        if (this.initialTime === 30)
        {

            this.enemy1 = this.physics.add.sprite(400, 250, 'enemy');
            this.physics.moveToObject(this.enemy1, this.player, 100);
            this.physics.add.collider(this.enemy1, this.platforms);
            this.physics.add.overlap(this.player, this.enemy1, this.playerDie, null, this);
        }
        // Adding a bigger wave of enemies towards the player at 60 seconds
        else if (this.initialTime === 60)
        {
            this.enemy = this.physics.add.sprite(400, 200, 'enemy');
            this.enemy.setScale(2);
            this.physics.moveToObject(this.enemy, this.player, 100);
            this.physics.add.collider(this.enemy, this.platforms);
            this.physics.add.overlap(this.player, this.enemy, this.playerDie, null, this);
        }
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
