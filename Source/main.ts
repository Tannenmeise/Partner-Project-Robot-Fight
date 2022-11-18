namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("'main.ts' started");

    export let dataForSave = { nameProtagonist: "" };

    // #region (MENU)
    // menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
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
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                break;
            // inventory can be added this way too!!!
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
            case ƒ.KEYBOARD_CODE.C:
                console.log("Credits");
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
        // sounds
        sparrows: "Assets/Audio/Sounds/sparrows.wav", // TODO: make ambient sound instead (mix of sparrows, wind and students)
        enterSchoolBuilding: "Assets/Audio/Sounds/enter_school_building.wav",
        bump: "Assets/Audio/Sounds/bump.wav",
        bigCrowd: "Assets/Audio/Sounds/big_crowd.wav",
        smallCrowd: "Assets/Audio/Sounds/small_crowd.wav",
        footstepsTiles: "Assets/Audio/Sounds/footsteps_tiles.wav",
        automaticDoor: "Assets/Audio/Sounds/automatic_door.wav",
        cloth: "Assets/Audio/Sounds/cloth.wav", // TODO: delete if not used. it's very quiet compared to crowd
        chairScreeching: "Assets/Audio/Sounds/chair_screeching.wav"
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
        classroom: {
            name: "Classroom",
            background: "Assets/Graphics/Backgrounds/classroom.png"
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
            name: "Studierende",
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
        }
    };

    window.addEventListener("load", start);

    function start(_event: Event): void {
        // menu
        gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");

        let scenes: ƒS.Scenes = [
            //{ scene: scene_0_intro, name: "Scene 0: Intro" },
            //{ scene: scene_1_pinboards, name: "Scene 1: Pinboards" },
            { scene: scene_2_history_lesson, name: "Scene 2: History Lesson" },
            { scene: scene_3_robotics_lesson, name: "Scene 3: Robotics Lesson" }
        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        ƒS.Progress.go(scenes);
    }
}