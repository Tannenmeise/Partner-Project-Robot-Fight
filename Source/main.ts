namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("'main.ts' started");

    export let dataForSave = {
        protagonistName: "",
        partnerChosen: "",
        louisPoints: 0,
        lilyPoints: 0,
        bullyPoints: 0
    };

    function credits(): void {
        ƒS.Text.print("");
    }

    export let items = {
        item1: {
            name: "Item-Name",
            description: "Item-Beschreibung",
            image: "Assets/Graphics/Items/item1.png",
            static: true
        }
    };

    // #region (MENU)
    // menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        inventory: "Inventory",
        credits: "Credits",
        close: "Close"
    };

    let gameMenu: ƒS.Menu;

    let menuIsOpen: boolean = true;

    async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await ƒS.Progress.save(); // always saves, so that you start at the beginning of the scene you saved in
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

    // menu shortcuts
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.I:
                console.log("Inventory");
                await ƒS.Inventory.open();
                break;
            case ƒ.KEYBOARD_CODE.C:
                console.log("Credits");
                credits();
                break;
            case ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                } else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    // #endregion (MENU)

    export let transitions = {
        binaryCode: {
            duration: 3,
            alpha: "Assets/Graphics/Transitions/binary_code.png",
            edge: 0.5
        }
    };

    export let sounds = {
        // music
        background: "PATH",
        robotFight: "Assets/Audio/Music/robot_fight.wav",
        // sounds
        automaticDoor: "Assets/Audio/Sounds/automatic_door.wav",
        bigCrowd: "Assets/Audio/Sounds/big_crowd.wav",
        bump: "Assets/Audio/Sounds/bump.wav",
        chairScreeching: "Assets/Audio/Sounds/chair_screeching.wav",
        cloth: "Assets/Audio/Sounds/cloth.wav", // TODO: delete if not used. it's very quiet compared to crowd
        damage: "Assets/Audio/Sounds/damage.wav",
        enterSchoolBuilding: "Assets/Audio/Sounds/enter_school_building.wav",
        footstepsTiles: "Assets/Audio/Sounds/footsteps_tiles.wav",
        smallCrowd: "Assets/Audio/Sounds/small_crowd.wav",
        sparrows: "Assets/Audio/Sounds/sparrows.wav", // TODO: make ambient sound instead (mix of sparrows, wind and students)
        schoolBell: "Assets/Audio/Sounds/school_bell.wav"
    };

    export let locations = {
        black: {
            name: "Black",
            background: "Assets/Graphics/Backgrounds/black.png"
        },
        white: {
            name: "White",
            background: "Assets/Graphics/Backgrounds/white.png"
        },
        schoolBuilding: {
            name: "School Building",
            background: "Assets/Graphics/Backgrounds/school_building.png"
        },
        pinboards1: {
            name: "Pinboards 1",
            background: "Assets/Graphics/Backgrounds/pinboards_1.png"
        },
        pinboards2: {
            name: "Pinboards 2",
            background: "Assets/Graphics/Backgrounds/pinboards_2.png"
        },
        classroomHistory: {
            name: "Classroom History",
            background: "Assets/Graphics/Backgrounds/classroom_history.png"
        },
        classroomRobotics: {
            name: "Classroom Robotics",
            background: "Assets/Graphics/Backgrounds/classroom_robotics.png"
        },
        classroomFest: {
            name: "Classroom Fest",
            background: "Assets/Graphics/Backgrounds/classroom_fest.png"
        },
        schoolBuildingFest: {
            name: "Classroom Fest",
            background: "Assets/Graphics/Backgrounds/school_building_fest.png"
        },
        storageRoom: {
            name: "Storage Room",
            background: "Assets/Graphics/Backgrounds/storage_room.png"
        },
        storageRoomDark: {
            name: "Storage Room Dark",
            background: "Assets/Graphics/Backgrounds/storage_room_dark.png"
        }
    };

    export let characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: "Du"
        },
        student: {
            name: "Student",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                lily: "Assets/Graphics/Characters/Lily/lily_silhouette.png",
                louis: "Assets/Graphics/Characters/Louis/louis_silhouette.png"
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
        luisa: {
            name: "Luisa"
        },
        historyTeacher: {
            name: "Geschichtslehrer"
        },
        roboticsTeacher: {
            name: "Robotiklehrerin",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Assets/Graphics/Characters/Teacher/teacher.png"
            }
        },
        tankBot: {
            name: "Panzer-bot",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Assets/Graphics/Characters/TankBot/tank_bot.png",
                enemy: "Assets/Graphics/Characters/TankBot/tank_bot_enemy.png"
            }
        },
        carBot: {
            name: "Auto-bot",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Assets/Graphics/Characters/CarBot/car_bot.png",
                enemy: "Assets/Graphics/Characters/CarBot/car_bot_enemy.png"
            }
        }
    };

    // TODO: Idee: jumpy (excited) animation for character

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


    window.addEventListener("load", start);

    function start(_event: Event): void {
        // menu
        gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");

        let scenes: ƒS.Scenes = [
            /*
            { scene: scene_0_intro, name: "Scene 0: Intro" },
            { scene: scene_1_pinboards, name: "Scene 1: Pinboards" },
            { scene: scene_2_history_lesson, name: "Scene 2: History Lesson" },
            { scene: scene_3_robotics_lesson, name: "Scene 3: Robotics Lesson" },
            { scene: scene_4_storage_room, name: "Scene 4: Storage Room" },
            { scene: scene_5a_date_louis, name: "Scene 5a: Date Louis" },
            { scene: scene_5b_date_lily, name: "Scene 5b: Date Lily" },
            { scene: scene_5c_date_none, name: "Scene 5c: Date None" },
            */
            { scene: scene_6_robot_fight, name: "Scene 6: Robot Fight" },
            { scene: scene_7a_ending_louis, name: "Scene 7a: Ending Louis" },
            { scene: scene_7b_ending_lily, name: "Scene 7b: Ending Lily" },
            { scene: scene_8_end, name: "Scene 8: End" }
        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        ƒS.Progress.go(scenes);
    }
}