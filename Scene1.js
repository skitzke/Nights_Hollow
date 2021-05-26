class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload(){
        this.load.image("start", "assets/start.png");
        this.load.image("title", "assets/nighthollowfont.png");
        this.load.image("sky", "assets/Sky.jpg");
        this.load.image("tree", "assets/BackgroundTree.png");
        this.load.atlas("jackRun", "assets/CharacterAssets/Run/character1.png", "assets/CharacterAssets/Run/character1.json");
        this.load.atlas("jackRunLeft", "assets/CharacterAssets/RunLeft/runLeft.png", "assets/CharacterAssets/RunLeft/runLeft.json");
        this.load.atlas("jackJumpLeft", "assets/CharacterAssets/jumpLeft/jumpLeft.png", "assets/CharacterAssets/jumpLeft/jumpLeft.json");
        this.load.atlas("jackIdle", "assets/CharacterAssets/Idle/characterIdle.png", "assets/CharacterAssets/Idle/characterIdle.json");
        this.load.atlas("jackJump", "assets/CharacterAssets/Jump/characterJump.png", "assets/CharacterAssets/Jump/characterJump.json");
        this.load.atlas("jackDead", "assets/CharacterAssets/Dead/characterDead.png", "assets/CharacterAssets/Dead/characterDead.json");
        this.load.audio("menuMusic", ["assets/Audio/Born_Soldier.mp3"]);
        this.load.image("gameBackground", "assets/PlatformAssets/BG.png");
        this.load.image("ground", "assets/PlatformAssets/dirt.png");
        this.load.tilemapTiledJSON('level1', "assets/PlatformAssets/level1.json");
    }
    create() {
        this.scene.start("playGame");
        this.anims.create({
            key: 'run',
            frames: [{
                key: 'jackRun',
                frame: "adventurer-run-00.png"
            },{
                key: 'jackRun',
                frame: "adventurer-run-01.png"
            }, {
                key: 'jackRun',
                frame: "adventurer-run-02.png"
            },{
                key: 'jackRun',
                frame: "adventurer-run-03.png"
            },{
                key: 'jackRun',
                frame: "adventurer-run-04.png"
            },{
                key: 'jackRun',
                frame: "adventurer-run-05.png"
            },],
            frameRate: 11,
            repeat: -1
        });
        this.anims.create({
            key: 'runleft',
            frames: [{
                key: 'jackRunLeft',
                frame: "adventurer-runleft-00.png"
            },{
                key: 'jackRunLeft',
                frame: "adventurer-runleft-01.png"
            }, {
                key: 'jackRunLeft',
                frame: "adventurer-runleft-02.png"
            },{
                key: 'jackRunLeft',
                frame: "adventurer-runleft-03.png"
            },{
                key: 'jackRunLeft',
                frame: "adventurer-runleft-04.png"
            },{
                key: 'jackRunLeft',
                frame: "adventurer-runleft-05.png"
            },],
            frameRate: 11,
            repeat: -1
        });
        this.anims.create({
            key: 'idle',
            frames: [{
                key: 'jackIdle',
                frame: "adventurer-idle-00.png"
            },{
                key: 'jackIdle',
                frame: "adventurer-idle-01.png"
            }, {
                key: 'jackIdle',
                frame: "adventurer-idle-02.png"
            },{
                key: 'jackIdle',
                frame: "adventurer-idle-03.png"
            },],
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'jump',
            frames: [{
                key: 'jackJump',
                frame: "adventurer-jump-00.png"
            },{
                key: 'jackJump',
                frame: "adventurer-jump-01.png"
            }, {
                key: 'jackJump',
                frame: "adventurer-jump-02.png"
            },{
                key: 'jackJump',
                frame: "adventurer-jump-03.png"
            },],
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'jumpLeft',
            frames: [{
                key: 'jackJumpLeft',
                frame: "adventurer-jumpleft-00.png"
            },{
                key: 'jackJumpLeft',
                frame: "adventurer-jumpleft-01.png"
            }, {
                key: 'jackJumpLeft',
                frame: "adventurer-jumpleft-02.png"
            },{
                key: 'jackJumpLeft',
                frame: "adventurer-jumpleft-03.png"
            },],
            frameRate: 6,
            repeat: -1
        });
    }
}


