namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    export let dataForSave = {
        protagonistName: "Protagonist",
        partnerChosen: "",
        louisPoints: 50,
        lilyPoints: 50,
        paidAttentionInClass: false,
        sleptInClass: false,
        tormentedSomeoneInClass: false
    };

    function credits(): void {
        window.open("./credits.md", "_blank");
    }

    // #region LOVEBAR
    function showLovebar(): void {
        document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
        document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
        document.getElementById("loveBars").setAttribute("style", "visibility: visible");
    }

    function hideLovebar(): void {
        document.getElementById("loveBars").setAttribute("style", "visibility: hidden");
    }

    let lovebarIsVisible: boolean = false;
    // #endregion LOVEBAR

    // #region MENU
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        inventory: "Inventory",
        credits: "Credits",
        close: "Close"
    };

    let gameMenu: ƒS.Menu;
    let menuIsOpen: boolean = false;

    async function buttonFunctionalities(_option: string): Promise<void> {
        switch (_option) {
            case inGameMenuButtons.save:
                await ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await ƒS.Progress.load();
                break;
            case inGameMenuButtons.inventory:
                await ƒS.Inventory.open();
                break;
            case inGameMenuButtons.credits:
                credits();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }
    // #endregion MENU

    // #region MENU SHORTCUTS
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.F8:
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.F9:
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.I:
                await ƒS.Inventory.open();
                break;
            case ƒ.KEYBOARD_CODE.C:
                credits();
                break;
            case ƒ.KEYBOARD_CODE.L:
                if (lovebarIsVisible) {
                    hideLovebar();
                    lovebarIsVisible = false;
                } else {
                    showLovebar();
                    lovebarIsVisible = true;
                }
                break;
            case ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    gameMenu.close();
                    menuIsOpen = false;
                } else {
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    // #endregion MENU SHORTCUTS

    // #region ITEMS
    export let items = {
        keychainEvo: {
            name: "EVO 01 Anhänger",
            description: "Evolution Einheit 01 vom Anime Evolution",
            image: "Assets/Graphics/Items/keychain_evo01.png",
            static: true
        },
        keychainLancebot: {
            name: "Lancebot Anhänger",
            description: "Lancebot vom Anime Code Gas",
            image: "Assets/Graphics/Items/keychain_lancebot.png",
            static: true
        },
        medal: {
            name: "Platz 1 Medaille",
            description: "Medaille zum 1. Platz im Roboterkampf",
            image: "Assets/Graphics/Items/medal.png",
            static: true
        },
        pinBlue: {
            name: "Blauer Schmetterling Pin",
            description: "Pin mit einem blauen Schmetterling",
            image: "Assets/Graphics/Items/pin_blue.png",
            static: true
        },
        pinOrange: {
            name: "Oranger Schmetterling Pin",
            description: "Pin mit einem orangenen Schmetterling",
            image: "Assets/Graphics/Items/pin_orange.png",
            static: true
        }
    };
    // #endregion ITEMS

    // #region TRANSITIONS
    export let transitions = {
        binaryCode: {
            duration: 3,
            alpha: "Assets/Graphics/Transitions/binary_code.png",
            edge: 0.5
        }
    };
    // #endregion TRANSITIONS

    // #region AUDIO
    export let sounds = {
        // music
        alternativeEnd: "Assets/Audio/Music/alternative_end.wav",
        endTheme: "Assets/Audio/Music/end_theme.wav",
        robotFight: "Assets/Audio/Music/robot_fight.wav",
        // sounds
        automaticDoor: "Assets/Audio/Sounds/automatic_door.wav",
        bigCrowd: "Assets/Audio/Sounds/big_crowd.wav",
        bump: "Assets/Audio/Sounds/bump.wav",
        chairScreeching: "Assets/Audio/Sounds/chair_screeching.wav",
        charge: "Assets/Audio/Sounds/charge.wav",
        cheer: "Assets/Audio/Sounds/cheer.wav",
        damage: "Assets/Audio/Sounds/damage.wav",
        enterSchoolBuilding: "Assets/Audio/Sounds/enter_school_building.wav",
        failure: "Assets/Audio/Sounds/failure.wav",
        footstepsTiles: "Assets/Audio/Sounds/footsteps_tiles.wav",
        paper: "Assets/Audio/Sounds/paper.wav",
        schoolBell: "Assets/Audio/Sounds/school_bell.wav",
        smallCrowd: "Assets/Audio/Sounds/small_crowd.wav",
        sparrows: "Assets/Audio/Sounds/sparrows.wav",
        success: "Assets/Audio/Sounds/success.wav",
        switch: "Assets/Audio/Sounds/switch.wav",
        zipper: "Assets/Audio/Sounds/zipper.wav"
    };
    // #endregion AUDIO

    // #region BACKGROUNDS
    export let locations = {
        black: {
            name: "Black",
            background: "Assets/Graphics/Backgrounds/black.png"
        },
        butterflyHouse: {
            name: "Butterfly House",
            background: "Assets/Graphics/Backgrounds/butterfly_house.png"
        },
        classroomFest: {
            name: "Classroom Fest",
            background: "Assets/Graphics/Backgrounds/classroom_fest.png"
        },
        classroomHistory: {
            name: "Classroom History",
            background: "Assets/Graphics/Backgrounds/classroom_history.png"
        },
        classroomRobotics: {
            name: "Classroom Robotics",
            background: "Assets/Graphics/Backgrounds/classroom_robotics.png"
        },
        endSceneLily: {
            name: "End Scene Lily",
            background: "Assets/Graphics/Backgrounds/end_scene_lily.png"
        },
        endSceneLouis: {
            name: "End Scene Louis",
            background: "Assets/Graphics/Backgrounds/end_scene_louis.png"
        },
        mechaCon: {
            name: "Mecha Con",
            background: "Assets/Graphics/Backgrounds/mecha_con.png"
        },
        pinboards1: {
            name: "Pinboards 1",
            background: "Assets/Graphics/Backgrounds/pinboards_1.png"
        },
        pinboards2: {
            name: "Pinboards 2",
            background: "Assets/Graphics/Backgrounds/pinboards_2.png"
        },
        schoolBuildingFest: {
            name: "Classroom Fest",
            background: "Assets/Graphics/Backgrounds/school_building_fest.png"
        },
        schoolBuilding: {
            name: "School Building",
            background: "Assets/Graphics/Backgrounds/school_building.png"
        },
        storageRoomDark: {
            name: "Storage Room Dark",
            background: "Assets/Graphics/Backgrounds/storage_room_dark.png"
        },
        storageRoom: {
            name: "Storage Room",
            background: "Assets/Graphics/Backgrounds/storage_room.png"
        }
    };
    // #endregion BACKGROUNDS

    // #region CHARACTERS
    export let characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: "Du"
        },
        student: {
            name: "Student*in",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                lily: "Assets/Graphics/Characters/Lily/lily_silhouette.png",
                louis: "Assets/Graphics/Characters/Louis/louis_silhouette.png"
            }
        },
        louis: {
            name: "Louis",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry1: "Assets/Graphics/Characters/Louis/louis_angry_1.png",
                angry2: "Assets/Graphics/Characters/Louis/louis_angry_2.png",
                happy1: "Assets/Graphics/Characters/Louis/louis_happy_1.png",
                happy2: "Assets/Graphics/Characters/Louis/louis_happy_2.png",
                joyful1: "Assets/Graphics/Characters/Louis/louis_joyful_1.png",
                joyful2: "Assets/Graphics/Characters/Louis/louis_joyful_2.png",
                neutral1: "Assets/Graphics/Characters/Louis/louis_neutral_1.png",
                neutral2: "Assets/Graphics/Characters/Louis/louis_neutral_2.png",
                sad1: "Assets/Graphics/Characters/Louis/louis_sad_1.png",
                sad2: "Assets/Graphics/Characters/Louis/louis_sad_2.png"
            }
        },
        lily: {
            name: "Lily",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                excited1: "Assets/Graphics/Characters/Lily/lily_excited_1.png",
                excited2: "Assets/Graphics/Characters/Lily/lily_excited_2.png",
                happy1: "Assets/Graphics/Characters/Lily/lily_happy_1.png",
                happy2: "Assets/Graphics/Characters/Lily/lily_happy_2.png",
                joyful1: "Assets/Graphics/Characters/Lily/lily_joyful_1.png",
                joyful2: "Assets/Graphics/Characters/Lily/lily_joyful_2.png",
                neutral1: "Assets/Graphics/Characters/Lily/lily_neutral_1.png",
                neutral2: "Assets/Graphics/Characters/Lily/lily_neutral_2.png",
                sad1: "Assets/Graphics/Characters/Lily/lily_sad_1.png",
                sad2: "Assets/Graphics/Characters/Lily/lily_sad_2.png"
            }
        },
        historyTeacher: {
            name: "Geschichtsprofessor"
        },
        roboticsTeacher: {
            name: "Robotik Professorin",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Assets/Graphics/Characters/Teacher/teacher.png"
            }
        },
        tankBot: {
            name: "Panzer-bot",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                sketch: "Assets/Graphics/Characters/TankBot/tank_bot_sketch.png",
                neutral: "Assets/Graphics/Characters/TankBot/tank_bot.png",
                enemy: "Assets/Graphics/Characters/TankBot/tank_bot_enemy.png"
            }
        },
        carBot: {
            name: "Auto-bot",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                sketch: "Assets/Graphics/Characters/CarBot/car_bot_sketch.png",
                neutral: "Assets/Graphics/Characters/CarBot/car_bot.png",
                enemy: "Assets/Graphics/Characters/CarBot/car_bot_enemy.png"
            }
        }
    };
    // #endregion CHARACTERS

    // #region ANIMATIONS
    export function slideFromLeftToMiddleAnimation(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positionPercent(20, 100) },
            end: { translation: ƒS.positionPercent(50, 100) },
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }

    export function slideFromRightToMiddleAnimation(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positionPercent(80, 100) },
            end: { translation: ƒS.positionPercent(50, 100) },
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }

    export function slideFromMiddleToLeftAnimation(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positionPercent(50, 100) },
            end: { translation: ƒS.positionPercent(20, 100) },
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }

    export function slideFromMiddleToRightAnimation(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positionPercent(50, 100) },
            end: { translation: ƒS.positionPercent(80, 100) },
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }

    export function robotAttack(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positionPercent(29, 70) },
            end: { translation: ƒS.positionPercent(55, 70) },
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE

        };
    }

    export function robotCharge(): ƒS.AnimationDefinition {
        return {
            start: { color: ƒ.Color.CSS("", 1) },
            end: { color: ƒ.Color.CSS("red", 1) },
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE

        };
    }

    export function robotDodge(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positionPercent(29, 70) },
            end: { translation: ƒS.positionPercent(18, 70) },
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE

        };
    }

    export function robotEnemyAttack(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positionPercent(78, 70) },
            end: { translation: ƒS.positionPercent(52, 70) },
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE

        };
    }

    export function robotEnemyDodge(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positionPercent(78, 70) },
            end: { translation: ƒS.positionPercent(89, 70) },
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE

        };
    }
    // #endregion ANIMATIONS

    window.addEventListener("load", start);

    function start(_event: Event): void {
        // menu buttons
        gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");

        // scenes
        let scenes: ƒS.Scenes = [
            { scene: scene_0_intro, name: "Scene 0: Intro" },
            { scene: scene_1_pinboards, name: "Scene 1: Pinboards" },
            { scene: scene_2_history_lesson, name: "Scene 2: History Lesson" },
            { scene: scene_3_robotics_lesson, name: "Scene 3: Robotics Lesson" },
            { scene: scene_4a_storage_room_louis, name: "Scene 4a: Storage Room Louis", id: "eventLouis" },
            { scene: scene_4b_storage_room_lily, name: "Scene 4b: Storage Room Lily", id: "eventLily" },
            { scene: scene_5a_date_louis, name: "Scene 5a: Date Louis", id: "dateLouis" },
            { scene: scene_5b_date_lily, name: "Scene 5b: Date Lily", id: "dateLily" },
            { scene: scene_5c_date_none, name: "Scene 5c: Date None", id: "dateNone" },
            { scene: scene_6_robot_fight, name: "Scene 6: Robot Fight", id: "robotFight" },
            { scene: scene_7a_ending_louis, name: "Scene 7a: Ending Louis", id: "endLouis" },
            { scene: scene_7b_ending_lily, name: "Scene 7b: Ending Lily", id: "endLily" },
            { scene: scene_7c_ending_robot, name: "Scene 7c: Ending Robot", id: "endRobot" },
            { scene: scene_7d_ending_flee, name: "Scene 7d: Ending Flee", id: "endFlee" },
            { scene: scene_8_end, name: "Scene 8: End", id: "end" }
        ];

        // ui
        let uiElement: HTMLElement = document.querySelector("[type=interface]");

        // data for save
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        ƒS.Progress.go(scenes);
    }
}