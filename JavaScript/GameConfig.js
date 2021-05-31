    var config = {
        width: 780,
        height: 600,
        backgroundColor: 0x000000,
        scene: [GameMain, GameMenu, PlayGame, GameOver],
        physics: {
            default: 'arcade',
            arcade: {
                debug: false,
            }
        },
        scale: {
            parent: 'mygame',
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 800,
            height: 600
        }
    }

    var game = new Phaser.Game(config);
