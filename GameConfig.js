    var config = {
        width: 780,
        height: 600,
        backgroundColor: 0x000000,
        scene: [GameMain, GameMenu, PlayGame],
        physics: {
            default: 'arcade',
            arcade: {
                debug: true,
            }
        },
    }

    var game = new Phaser.Game(config);
