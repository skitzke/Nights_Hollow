    var config = {
        width: 780,
        height: 600,
        backgroundColor: 0x000000,
        scene: [Scene1, Scene2, Scene3],
        physics: {
            default: 'arcade',
            arcade: {
                debug: true,
            }
        },
    }

    var game = new Phaser.Game(config);
