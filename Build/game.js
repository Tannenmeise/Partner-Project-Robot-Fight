"use strict";
var Game;
(function (Game) {
    Game.ƒ = FudgeCore;
    Game.ƒS = FudgeStory;
    console.log("'main.ts' started");
    // TODO: UPDATE THE LOVE-POINT-BAR FOR THE PARTNERS AT THE BEGINNING OF EVERY SCENE (IN-CASE OF LOADING A SAVE)
    Game.dataForSave = {
        protagonistName: "Protagonist",
        partnerChosen: "",
        louisPoints: 50,
        lilyPoints: 50,
        paidAttentionInClass: false,
        sleptInClass: false,
        tormentedSomeoneInClass: false
    };
    function credits() {
        Game.ƒS.Text.print("");
    }
    function showLovebar() {
        document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
        document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
        document.getElementById("loveBars").setAttribute("style", "visibility: visible");
    }
    function hideLovebar() {
        document.getElementById("loveBars").setAttribute("style", "visibility: hidden");
    }
    // #region (MENU)
    // menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        inventory: "Inventory",
        credits: "Credits",
        close: "Close"
    };
    let gameMenu;
    let menuIsOpen = false;
    let lovebarIsVisible = false;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Game.ƒS.Progress.save(); // always saves, so that you start at the beginning of the scene you saved in
                break;
            case inGameMenuButtons.load:
                await Game.ƒS.Progress.load();
                break;
            case inGameMenuButtons.inventory:
                await Game.ƒS.Inventory.open();
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
    async function handleKeyPress(_event) {
        switch (_event.code) {
            case Game.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Game.ƒS.Progress.save();
                break;
            case Game.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Game.ƒS.Progress.load();
                break;
            case Game.ƒ.KEYBOARD_CODE.I:
                console.log("Inventory");
                await Game.ƒS.Inventory.open();
                break;
            case Game.ƒ.KEYBOARD_CODE.C:
                console.log("Credits");
                credits();
                break;
            case Game.ƒ.KEYBOARD_CODE.L:
                if (lovebarIsVisible) {
                    console.log("Hide Lovebar");
                    hideLovebar();
                    lovebarIsVisible = false;
                }
                else {
                    console.log("Show Lovebar");
                    showLovebar();
                    lovebarIsVisible = true;
                }
                break;
            case Game.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    // #endregion (MENU)
    Game.items = {
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
    Game.transitions = {
        binaryCode: {
            duration: 3,
            alpha: "Assets/Graphics/Transitions/binary_code.png",
            edge: 0.5
        }
    };
    Game.sounds = {
        // music
        endTheme: "Assets/Audio/Music/end_theme.wav",
        robotFight: "Assets/Audio/Music/robot_fight.wav",
        // sounds
        automaticDoor: "Assets/Audio/Sounds/automatic_door.wav",
        bigCrowd: "Assets/Audio/Sounds/big_crowd.wav",
        bump: "Assets/Audio/Sounds/bump.wav",
        chairScreeching: "Assets/Audio/Sounds/chair_screeching.wav",
        charge: "Assets/Audio/Sounds/charge.wav",
        cloth: "Assets/Audio/Sounds/cloth.wav",
        damage: "Assets/Audio/Sounds/damage.wav",
        enterSchoolBuilding: "Assets/Audio/Sounds/enter_school_building.wav",
        failure: "Assets/Audio/Sounds/failure.wav",
        footstepsTiles: "Assets/Audio/Sounds/footsteps_tiles.wav",
        schoolBell: "Assets/Audio/Sounds/school_bell.wav",
        smallCrowd: "Assets/Audio/Sounds/small_crowd.wav",
        sparrows: "Assets/Audio/Sounds/sparrows.wav",
        success: "Assets/Audio/Sounds/success.wav"
    };
    Game.locations = {
        black: {
            name: "Black",
            background: "Assets/Graphics/Backgrounds/black.png"
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
    Game.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: "Du"
        },
        student: {
            name: "Student",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                lily: "Assets/Graphics/Characters/Lily/lily_silhouette.png",
                louis: "Assets/Graphics/Characters/Louis/louis_silhouette.png"
            }
        },
        louis: {
            name: "Louis",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
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
            name: "Geschichtslehrer"
        },
        roboticsTeacher: {
            name: "Robotiklehrerin",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Assets/Graphics/Characters/Teacher/teacher.png"
            }
        },
        tankBot: {
            name: "Panzer-bot",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                sketch: "Assets/Graphics/Characters/TankBot/tank_bot_sketch.png",
                neutral: "Assets/Graphics/Characters/TankBot/tank_bot.png",
                enemy: "Assets/Graphics/Characters/TankBot/tank_bot_enemy.png"
            }
        },
        carBot: {
            name: "Auto-bot",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                sketch: "Assets/Graphics/Characters/CarBot/car_bot_sketch.png",
                neutral: "Assets/Graphics/Characters/CarBot/car_bot.png",
                enemy: "Assets/Graphics/Characters/CarBot/car_bot_enemy.png"
            }
        }
    };
    // TODO: Idee: jumpy (excited) animation for character
    function slideFromLeftToMiddleAnimation() {
        return {
            start: { translation: Game.ƒS.positionPercent(20, 100) },
            end: { translation: Game.ƒS.positionPercent(50, 100) },
            duration: 1,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Game.slideFromLeftToMiddleAnimation = slideFromLeftToMiddleAnimation;
    function slideFromRightToMiddleAnimation() {
        return {
            start: { translation: Game.ƒS.positionPercent(80, 100) },
            end: { translation: Game.ƒS.positionPercent(50, 100) },
            duration: 1,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Game.slideFromRightToMiddleAnimation = slideFromRightToMiddleAnimation;
    function slideFromMiddleToLeftAnimation() {
        return {
            start: { translation: Game.ƒS.positionPercent(50, 100) },
            end: { translation: Game.ƒS.positionPercent(20, 100) },
            duration: 1,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Game.slideFromMiddleToLeftAnimation = slideFromMiddleToLeftAnimation;
    function slideFromMiddleToRightAnimation() {
        return {
            start: { translation: Game.ƒS.positionPercent(50, 100) },
            end: { translation: Game.ƒS.positionPercent(80, 100) },
            duration: 1,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Game.slideFromMiddleToRightAnimation = slideFromMiddleToRightAnimation;
    function robotAttack() {
        return {
            start: { translation: Game.ƒS.positionPercent(29, 70) },
            end: { translation: Game.ƒS.positionPercent(55, 70) },
            duration: 1,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Game.robotAttack = robotAttack;
    function robotCharge() {
        return {
            start: { color: Game.ƒ.Color.CSS("", 1) },
            end: { color: Game.ƒ.Color.CSS("red", 1) },
            duration: 1,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Game.robotCharge = robotCharge;
    function robotDodge() {
        return {
            start: { translation: Game.ƒS.positionPercent(29, 70) },
            end: { translation: Game.ƒS.positionPercent(18, 70) },
            duration: 1,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Game.robotDodge = robotDodge;
    function robotEnemyAttack() {
        return {
            start: { translation: Game.ƒS.positionPercent(78, 70) },
            end: { translation: Game.ƒS.positionPercent(52, 70) },
            duration: 1,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Game.robotEnemyAttack = robotEnemyAttack;
    function robotEnemyDodge() {
        return {
            start: { translation: Game.ƒS.positionPercent(78, 70) },
            end: { translation: Game.ƒS.positionPercent(89, 70) },
            duration: 1,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Game.robotEnemyDodge = robotEnemyDodge;
    window.addEventListener("load", start);
    function start(_event) {
        // menu
        gameMenu = Game.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        let scenes = [
            { scene: Game.scene_0_intro, name: "Scene 0: Intro" },
            { scene: Game.scene_1_pinboards, name: "Scene 1: Pinboards" },
            { scene: Game.scene_2_history_lesson, name: "Scene 2: History Lesson" },
            { scene: Game.scene_3_robotics_lesson, name: "Scene 3: Robotics Lesson" },
            { scene: Game.scene_4a_storage_room_louis, name: "Scene 4a: Storage Room Louis", id: "eventLouis" },
            { scene: Game.scene_4b_storage_room_lily, name: "Scene 4b: Storage Room Lily", id: "eventLily" },
            { scene: Game.scene_5a_date_louis, name: "Scene 5a: Date Louis", id: "dateLouis" },
            { scene: Game.scene_5b_date_lily, name: "Scene 5b: Date Lily", id: "dateLily" },
            { scene: Game.scene_5c_date_none, name: "Scene 5c: Date None", id: "dateNone" },
            { scene: Game.scene_6_robot_fight, name: "Scene 6: Robot Fight" },
            { scene: Game.scene_7a_ending_louis, name: "Scene 7a: Ending Louis", id: "endLouis" },
            { scene: Game.scene_7b_ending_lily, name: "Scene 7b: Ending Lily", id: "endLily" },
            { scene: Game.scene_7c_ending_robot, name: "Scene 7c: Ending Robot", id: "endRobot" },
            { scene: Game.scene_7d_ending_flee, name: "Scene 7d: Ending Flee", id: "endFlee" },
            { scene: Game.scene_8_end, name: "Scene 8: End", id: "end" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Game.dataForSave = Game.ƒS.Progress.setData(Game.dataForSave, uiElement);
        Game.ƒS.Progress.go(scenes);
    }
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_0_intro() {
        console.log("scene_0_intro started");
        // #region (Text) 
        let text = {
            narrator: {
                YourName: "Wie heißt du?",
                T00_00_000: "Ein neuer Tag an der Robert Robotik Hochschule.",
                T00_00_001: "Nach 4 Semestern hat sich das Gefühl von Gewohnheit endgültig eingenistet. Nun bist du bereits Nahe des Endes des 5. Semesters angelangt.",
                T00_00_002: "Das Laufen zur Hochschule gleicht immer mehr einer gedankenlosen Trance. Es ist immer der gleiche gewohnte Ablauf. Beruhigend, aber auch etwas langweilig.",
                T00_00_003: "Das Zwitschern der Singvögel füllt die Luft. Der Wind bläst sanft durch Gestrüpp und Bäume. Flora und Fauna in der Vormittagssonne erwachend.",
                T00_00_004: "An guten Tagen schiebt der Wind einen auch mal vorwärts statt rückwärts. Als wäre es manchmal nicht schwer genug seine Beine zum Unterricht zu bringen.",
                T00_00_005: "Aber heute ist ein guter Tag. Der Wind ist dir wohl gesonnen.",
                T00_00_006: "Du trittst in das Eingangsgebäude ein."
            }
        };
        // #endregion (Text)
        // #region (Play)
        // TODO: DELETE
        /*
        ƒS.Inventory.add(items.keychainEvo);
        ƒS.Inventory.add(items.keychainLancebot);
        ƒS.Inventory.add(items.pinBlue);
        ƒS.Inventory.add(items.pinOrange);
        ƒS.Inventory.add(items.medal);
        await ƒS.Inventory.open();
        */
        // show controls
        await Game.ƒS.Text.print("<h2>Steuerung</h2>" +
            "<table>" +
            "<tr>" +
            "<td>f8</td>" +
            "<td>= Speichern</td>" +
            "</tr>" +
            "<tr>" +
            "<td>f9</td>" +
            "<td>= Laden</td>" +
            "</tr>" +
            "<tr>" +
            "<td>i</td>" +
            "<td>= Inventar</td>" +
            "</tr>" +
            "<tr>" +
            "<td>c</td>" +
            "<td>= Credits</td>" +
            "</tr>" +
            "<tr>" +
            "<td>l</td>" +
            "<td>= Love bar</td>" +
            "</tr>" +
            "<tr>" +
            "<td>m</td>" +
            "<td>= Menü</td>" +
            "</tr>" +
            "</table>");
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.YourName);
        Game.dataForSave.protagonistName = await Game.ƒS.Speech.getInput();
        // transition
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.schoolBuilding);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        await Game.ƒS.update();
        // sound
        Game.ƒS.Sound.play(Game.sounds.sparrows, 1, true);
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_006);
        // sound
        Game.ƒS.Sound.play(Game.sounds.enterSchoolBuilding, 1, false);
        // #endregion (Play)
    }
    Game.scene_0_intro = scene_0_intro;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_1_pinboards() {
        console.log("scene_1_pinboards started");
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Kühle erfrischende Luft umhüllt dich.",
                T00_00_001: "Es drängt sich eine junge Frau an dir vorbei.",
                T00_00_002: "Schnellen Schrittes geht sie auf die Pinnwände zu.",
                T00_00_003: "Nun fällt dir die ungewöhnlich große Menschenmenge auf, die sich um die Pinnwände versammelt hat.",
                T00_00_004: "Neugierig bahnst du dir deinen Weg durch den Trubel, um einen besseren Blick erhaschen zu können.",
                T00_00_005: "Das größte und auffälligste Poster verkündet feierlich: 'Das diesjährige Robotik-Fest der Robert Robotik Hochschule findet am Freitag, den 22.07. statt.'",
                T00_00_006: "Deine Augen überfliegen das Poster nach weiteren wichtigen Informationen",
                T00_00_007: "'Von 10:00 bis 18:00 Uhr', steht geschrieben.",
                T00_00_008: "Gequetscht von links und rechts, versuchst du so schnell wie möglich hier fertig zu werden.",
                T00_00_009: "'Teilnehmer bestimmter Kurse haben am Schulfest teilzunehmen. Die betroffenen Kurse sind ersichtbar an allen großen Pinnwänden samt Matrikelnumern der Teilnehmer. Für mehr Informationen oder bei Problemen wenden Sie Sich an Ihre Dozenten.', steht es schwarz auf weiß.",
                T00_00_010: "Du kannst dich noch daran erinnern, wie du letztes Jahr mit Glück diesem Schicksal entkommen bist.",
                T00_00_011: "Es soll schonmal Studierende gegeben haben, die es ganz schlimm erwischt hat: Sie sollten zwei Projekte innerhalb von zwei Wochen fertigstellen.",
                T00_00_012: "Viel Kopfschmerzen und Burnout waren die Folge.",
                T00_00_013: "Diese wiederum gefolgt von einer Besauf-Party der Superlative. Aber das sei mal so dahingestellt.",
                T00_00_014: "Nach genügend Beschwerden über seelisches und körperliches Leid, wurde diese Art der Folterung zum Glück verboten.",
                T00_00_015: "Jetzt darf nur noch ein Projekt als Qual genügen.",
                T00_00_016: "Letztendlich gleitet dein Blick über den letzten Absatz des Posters.",
                T00_00_017: "'Betroffene Veranstaltungen: Installation von Licht und Sound, Fortgeschrittene Sprachsimulation und Fernbedienbare Robotik.'",
                T00_00_018: "Und da war es. Ein Kurs, den du besuchst.",
                T00_00_019: "Da erklingt ein verärgerte Murmeln eines jungen Mannes.",
                T00_00_020: "Das darauffolgende stoßartige Ausatmen von ihm klang als müsste er erstmal durch das Ärgernis Dampf ablassen, das du in ihm erzeugt hast.",
                T00_00_021: "Du lenkst deine Aufmerksamkeit auf die an dem Kurs angeheftete Teilnehmerliste.",
                T00_00_022: "Jap, da steht auch deine Matrikelnummer. Es steht fest. Nun gibt es kein Entkommen.",
                T00_00_023: "Aber vorerst geht es zu deiner ersten Vorlesung für den Tag: 'Geschichte der Robotik'. Die perfekte Vorlesung, um die Gedanken schweifen zu lassen oder etwas Schlaf nachzuholen."
            },
            protagonist: {
                T00_00_000: "Huch!",
                T01_00_000: "Hey! Pass doch auf!",
                T02_00_000: "Nichts passiert.",
                T03_00_000: "...",
                T00_00_001: "Oh. Ich hatte völlig vergessen, dass es das gibt.",
                T00_00_002: "Fernbedienbare Robotik? Da bin ich ja drin. So ein Pech...",
                T04_00_000: "Ah, vielen Dank, Mister Besserwisser. Wie konnte ich nur so dumm sein!",
                T05_00_000: "Sorry...",
                T06_00_000: "..."
            },
            student: {
                T0000: "Sorry!",
                T0001: "Dieser Kurs steht doch jedes Mal auf dem Plan. Kein Grund sich zu wundern."
            }
        };
        // #endregion (Text)
        // #region (Decision)
        let bumpIntoStudent;
        let bumpIntoStudentAnswer = {
            complain: "Beschweren",
            soothe: "Besänftigen",
            ignore: "Ignorieren"
        };
        let studentRemark;
        let studentRemarkAnswer = {
            argue: "Gereizt reagieren",
            apologize: "Entschuldigen",
            ignore: "Ignorieren"
        };
        // #endregion (Decision)
        // #region (Play)
        // transition
        Game.ƒS.Speech.clear();
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.pinboards1);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        // sound
        await Game.ƒS.Sound.fade(Game.sounds.sparrows, 0, 1, true);
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        // sound
        Game.ƒS.Sound.play(Game.sounds.bump, 1, false);
        // #region (screen shake)
        let graph = Game.ƒS.Base.getGraph();
        graph.addComponent(new Game.ƒ.ComponentTransform());
        let t = 0;
        function jitter() {
            let posX = 0;
            posX = (Number(6 * Math.sin(0.15 * t + 1.6)));
            t++;
            if (t <= 64) {
                graph.mtxLocal.translateX(posX);
                Game.ƒS.update();
            }
        }
        // start jitter
        Game.ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, jitter);
        await Game.ƒS.Progress.delay(2);
        // stop jitter
        Game.ƒ.Loop.removeEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, jitter);
        // reset graph to original location
        graph.mtxLocal.translateX(-1 * (graph.mtxLocal.translation.x));
        await Game.ƒS.update();
        // #endregion (screen shake)
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        // show character
        await Game.ƒS.Character.show(Game.characters.student, Game.characters.student.pose.lily, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        // text
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.student, text.student.T0000);
        // decision
        bumpIntoStudent = await Game.ƒS.Menu.getInput(bumpIntoStudentAnswer, "decisionClass");
        switch (bumpIntoStudent) {
            case bumpIntoStudentAnswer.complain:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T01_00_000);
                Game.dataForSave.lilyPoints -= 10;
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                break;
            case bumpIntoStudentAnswer.soothe:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T02_00_000);
                Game.dataForSave.lilyPoints += 10;
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                // positive
                break;
            case bumpIntoStudentAnswer.ignore:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T03_00_000);
                // neutral
                break;
        }
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        // hide character
        await Game.ƒS.Character.hide(Game.characters.student);
        await Game.ƒS.update();
        // sound
        await Game.ƒS.Sound.fade(Game.sounds.bigCrowd, 1, 1, true);
        // show crowd
        await Game.ƒS.Location.show(Game.locations.pinboards2);
        await Game.ƒS.update(2);
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        // text
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_001);
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_006);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_007);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_008);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_009);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_010);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_011);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_012);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_013);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_014);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_015);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_016);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_017);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_018);
        // text
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_002);
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_019);
        // show character
        await Game.ƒS.Character.show(Game.characters.student, Game.characters.student.pose.louis, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        // text
        await Game.ƒS.Speech.tell(Game.characters.student, text.student.T0001);
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_020);
        // decision
        studentRemark = await Game.ƒS.Menu.getInput(studentRemarkAnswer, "decisionClass");
        switch (studentRemark) {
            case studentRemarkAnswer.argue:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T04_00_000);
                Game.dataForSave.louisPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                break;
            case studentRemarkAnswer.apologize:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T05_00_000);
                break;
            case studentRemarkAnswer.ignore:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T06_00_000);
                break;
        }
        // hide character
        await Game.ƒS.Character.hide(Game.characters.student);
        await Game.ƒS.update();
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_021);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_022);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_023);
        // sound fade
        await Game.ƒS.Sound.fade(Game.sounds.bigCrowd, 0, 1, true);
        // #endregion (Play)
    }
    Game.scene_1_pinboards = scene_1_pinboards;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_2_history_lesson() {
        console.log("scene_2_history_lesson started");
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Du bist im Vorlesungsraum für die Geschichtsstunde angekommen.",
                T00_00_001: "Zielgerichtet gehst du auf deinen Platz zu.",
                T00_00_002: "Ein Platz in der vorletzten Reihe und direkt neben dem Fenster.",
                T00_00_003: "Du setzt dich auf deinen Stuhl.",
                T00_00_004: "Pünktlich zum Gong, betritt der Geschichtsprofessor den Raum.",
                T00_00_005: "Die Studierenden setzen sich.",
                T00_00_006: "Die Aufregung durch das baldige Schulfest senkt sich hingegen nicht so schnell.",
                T00_00_007: "Es kehrt Ruhe ein.",
                T00_00_008: "Die Vorlesung beginnt.",
                T01_00_000: "Das typische Läuten kündigt das Ende der Stunde ein.",
                T01_00_001: "Zufrieden streckst du dich etwas, während andere ihre Sachen schnellstmöglich in ihre Rucksäcke packen als würden ihre Leben davon abhängen.",
                T01_00_002: "Der Geschichtslehrer seufzt kapitulierend.",
                T01_00_003: "Du packst deine Sachen und verlässt den Raum.",
                T02_00_000: "Du ergibst dich deiner Morgenmüdigkeit.",
                T02_00_001: "Deine Augenlieder werden schwer.",
                T02_00_002: "Das monotone Vortragen von längst vergangenen Geschehnissen wiegt dich rekordverdächtig schnell in den Schlaf.",
                T02_00_003: "Ein Läuten reist dich erbarmungslos aus dem Schlaf.",
                T02_00_004: "Du öffnest deine Augen.",
                T02_00_005: "Vereinzelt packen Studierende ihre Sachen bereits in ihre Rucksäcke.",
                T02_00_006: "Der Geschichtslehrer seufzt kapitulierend.",
                T02_00_007: "Noch etwas schlaftrunken packst du deine Sachen und verlässt den Raum.",
                T03_00_000: "Du schaust zu der Person, die vor dir sitzt.",
                T03_00_001: "Du zerknüllst ein Stückchen Papier, zielst auf den Kopf der nichtsahnenden Person und wirfst.",
                T03_00_002: "Die Person zuckt leicht zusammen.",
                T03_00_003: "Ein zweites Kügelchen und... Wurf!",
                T03_00_004: "Die Person dreht sich nach dir um.",
                T03_00_005: "Ein giftiger Blick trifft dich.",
                T03_00_006: "Sie dreht sich wieder der Vorlesung zu.",
                T03_00_007: "Das typische Läuten kündigt das Ende der Stunde ein.",
                T03_00_008: "Vereinzelt packen Studierende ihre Sachen bereits in ihre Rucksäcke.",
                T03_00_009: "Du fängst auch an zu packen.",
                T03_00_010: "Der Geschichtslehrer seufzt kapitulierend.",
                T03_00_011: "So ist das also. Warum für etwas bleiben, das nicht einmal klausurrelevant ist?",
                T03_00_012: "Du stehst auf und verlässt den Raum."
            },
            protagonist: {
                T03_00_000: "He he he."
            },
            historyTeacher: {
                T00_00_000: "Setzen… bitte.",
                T00_00_001: "...",
                T00_00_002: "Ich bitte Sie. Sparen Sie Sich Ihre Gespräche für nach der Vorlesung.",
                T01_00_000: "Nun, wie Sie wissen, werden wir uns heute mit den letzten Seiten des neunten Kapitels beschäftigen. Ich hoffe Sie haben…",
                T01_00_001: "Nun haben Sie noch etwas Geduld bitte.",
                T01_00_002: "Wir werden uns nächste Stunde mit dem letzten Kapitel, und zwar dem Kapitels 10 beschäftigen. Der Stoff hierzu wird zwar nicht in der Klausur drankommen, jedoch ist er trotzdem sehr wichtig. Lesen Sie gerne hierfür bis zur nächsten Stunde die Seiten 99-101.",
                T02_00_000: "Nun haben Sie noch etwas Geduld bitte.",
                T02_00_001: "Wir werden uns nächste Stunde mit dem letzten Kapitel, und zwar dem Kapitels 10 beschäftigen. Der Stoff hierzu wird zwar nicht in der Klausur drankommen, jedoch ist er trotzdem sehr wichtig. Lesen Sie gerne hierfür bis zur nächsten Stunde die Seiten 99-101.",
                T03_00_000: "Nun haben Sie noch etwas Geduld bitte.",
                T03_00_001: "Wir werden uns nächste Stunde mit dem letzten Kapitel, und zwar dem Kapitels 10 beschäftigen. Der Stoff hierzu wird zwar nicht in der Klausur drankommen-"
            }
        };
        // #endregion (Text)
        // #region (Decision)
        let lectureStart;
        let lectureStartAnswer = {
            payAttention: "Im Unterricht aufpassen",
            sleep: "Schlafen",
            torment: "Einen zufälligen Studierenden belästigen"
        };
        // #endregion (Decision)
        // #region (Play)
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomHistory);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Sound.fade(Game.sounds.smallCrowd, 1, 2, true);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        Game.ƒS.Sound.play(Game.sounds.chairScreeching, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        Game.ƒS.Sound.play(Game.sounds.schoolBell, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_006);
        await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_007);
        await Game.ƒS.Sound.fade(Game.sounds.smallCrowd, 0, 1, true);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_008);
        lectureStart = await Game.ƒS.Menu.getInput(lectureStartAnswer, "decisionClass");
        switch (lectureStart) {
            case lectureStartAnswer.payAttention:
                Game.dataForSave.paidAttentionInClass = true;
                Game.dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T01_00_000);
                Game.ƒS.Speech.hide();
                await Game.ƒS.Location.show(Game.locations.black);
                await Game.ƒS.update(1);
                await Game.ƒS.Location.show(Game.locations.classroomHistory);
                await Game.ƒS.update(1);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_001);
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T01_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_002);
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T01_00_002);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_003);
                break;
            case lectureStartAnswer.sleep:
                Game.dataForSave.sleptInClass = true;
                Game.dataForSave.louisPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_002);
                Game.ƒS.Speech.hide();
                await Game.ƒS.Location.show(Game.locations.black);
                await Game.ƒS.update(1);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_003);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_004);
                await Game.ƒS.Location.show(Game.locations.classroomHistory);
                await Game.ƒS.update(1);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_005);
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_006);
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T02_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_007);
                break;
            case lectureStartAnswer.torment:
                Game.dataForSave.tormentedSomeoneInClass = true;
                Game.dataForSave.louisPoints -= 10;
                Game.dataForSave.lilyPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_002);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_003);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_004);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_005);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_006);
                Game.ƒS.Speech.hide();
                await Game.ƒS.Location.show(Game.locations.black);
                await Game.ƒS.update(1);
                await Game.ƒS.Location.show(Game.locations.classroomHistory);
                await Game.ƒS.update(1);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_007);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_008);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_009);
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T03_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_010);
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T03_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_011);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_012);
                break;
        }
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        // #endregion (Play)
    }
    Game.scene_2_history_lesson = scene_2_history_lesson;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_3_robotics_lesson() {
        console.log("scene_3_robotics_lesson started");
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Als nächstes ist die Remote Robotics Stunde.",
                T00_00_001: "In dieser Stunde sollte das Projekt besprochen werden und die Partnerzuteilung stattfinden.",
                T00_00_002: "Du betrittst den Raum und setzt dich auf deinen gewohnten Platz.",
                T00_00_003: "Ein Studierender, der offensichtlich mit seiner Motivation kämpfen muss, lässt ein niedergeschlagenes Stöhnen verlauten.",
                T00_00_004: "Wildes Gemurmel und Geflüster macht sich breit.",
                T00_00_005: "Angespannt schaust du durch das Zimmer.",
                T00_00_006: "Studierende fangen an bereits Paare zu bilden.",
                T00_00_007: "Du scheinst richtig Pech heute zu haben.",
                T00_00_008: "Innerhalb weniger Sekunden scheint schon jeder einen Partner gefunden zu haben, außer dir.",
                T00_00_009: "Nur noch zwei Studierende scheinen offensichtlich allein dazustehen.",
                T00_00_010: "Du hast zwar noch nie bewusst mit ihnen geredet, kennst sie aber in etwa.",
                T00_00_011: "Wer von den beiden würde einen guten Partner abgeben?",
                T00_00_012: "Nicht Lebenspartner. Dafür ist es gerade etwas zu früh. Projektpartner! Projektpartner erstmal.",
                T00_00_013: "Wen willst du dir zuerst anschauen?",
                T00_00_014: "Wen willst du als Partner?",
                T00_00_015: "Du verabschiedest dich von deinem Projektpartner, verlässt den Raum und gehst nach Hause.",
                T01_00_000: "Ah ja, der Nerd der Klasse. Nicht der einzige. Robotik zieht so einige Leute an, die man Nerds oder Geeks nennen würde. Dieser hier hat jedoch auch einer der besten Noten und ist sehr ehrgeizig.",
                T01_00_001: "Ihn kann man gut als Einzelgänger bezeichnen. Ob er ein guter Partner abgeben würde? Nun ja, ein Gewinn müsste bei ihm ja eigentlich schon in der Tasche sein, oder nicht? Da müsste man sich schon großartig dumm anstellen, um das ihm zu vermasseln.",
                T01_00_002: "Aber ist Arbeit mit überhaupt aushaltbar? Sein Respekt gewinnt man meistens durch gute Manieren und Wissensschatz. Ähm… wie war sein Name nochmal überhaupt?",
                T02_00_000: "Tja, der Tollpatsch der Klasse. Kein Witz. Jeden Tag schafft sie es durch den etwas kleineren oder größeren Unfall Aufmerksamkeit zu erregen.",
                T02_00_001: "Mit ihr zusammen das Projekt zu machen, könnte eine Herausforderung werden. Aber vielleicht ist sie ja trotzdem sehr schlau? Tatsächlich weißt du nicht was für Noten sie schreibt.",
                T02_00_002: "Sie wirkt trotz ihrer auffälligen Haarfarbe wie ein fast unsichtbares Mauerblümchen. Menschen mit gutem Herz und Unterstützungsgeist, schätzt sie sehr."
            },
            roboticsTeacher: {
                T00_00_000: "Schön. Es scheint, Sie haben alle erfolgreich hierhergefunden. Das erspart mir, dass ich einen oder mehreren von Ihnen hinterherlaufen muss, denn das Projekt ist Pflicht und nicht freiwillig.",
                T00_00_001: "Nun reißen Sie sich bitte zusammen. Ich werde Ihre Ergebnisse jeweils benoten. Wenn Sie möchten, wäre diese Note dann auch schon die Endnote für diesen Kurs. Ob Sie die angedachte Klausur dann schreiben wollen, ist Ihnen überlassen. Sie wird freiwillig sein. Die Klausur würde dann 50% mit der Projektarbeit zählen. Ist alles soweit klar?",
                T00_00_002: "Ach ja, genau. Das hatte ich vergessen. Manchmal muss ich es gar nicht mehr erwähnen, da es schon jeder wusste.",
                T00_00_003: "Sie werden mithilfe des Wissens und den Materialien von diesem Semester, einen Roboter bauen, der in einem Ring einen anderen Roboter bewegungsunfähig machen soll. Alle Infos hierzu, habe ich online hochgeladen.",
                T00_00_004: "Dann bitte ich Sie, Sich bitte einen Partner auszusuchen mit dem Sie die Projektarbeit bestreiten möchten.",
                T00_00_005: "Wer bereits einen Partner hat, kann gehen."
            },
            student: {
                T00_00_000: "Was ist das Projekt denn eigentlich?"
            },
            protagonist: {
                T00_00_000: "Hey, ähm... Willst du mit mir das Projekt machen?",
                T00_01_000: "Ja, ich habe voll Lust darauf!",
                T00_02_000: "Ne, eigentlich habe ich gar keine Lust auf den Scheiß.",
                T00_03_000: "Hm... ich weiß nicht. Mal sehen wie es wird.",
                T01_00_000: "Ja.",
                T01_01_000: "Äh...",
                T02_00_000: Game.dataForSave.protagonistName + "."
            },
            louis: {
                T00_00_000: Game.dataForSave.protagonistName + " ist dein Name, oder?",
                T00_00_001: "Mein Name ist Louis.",
                T00_00_002: "Freust du dich auf die Projektarbeit? Nächste Woche werden wir damit anfangen.",
                T01_00_000: "Gut. Jedenfalls jemand, der im Unterricht aufpasst. Von mir aus können wir zusammen arbeiten.",
                T02_00_000: "Schläfst du üblicherweise im Unterricht?",
                T03_00_000: "... Ok.",
                T04_00_000: "Das ist gut. Ich werde sicherstellen, dass unser Projekt ein Erfolg wird.",
                T05_00_000: "Hm. ... Ich werde mich darum kümmern, dass unser Projekt trotzdem ein Erfolg wird.",
                T06_00_000: "Das ist ok. Ich werde sicherstellen, dass unser Projekt ein Erfolg wird."
            },
            lily: {
                T00_00_000: "Ja! Gerne! ... Wie heißt du nochmal?",
                T00_00_001: "Hi " + Game.dataForSave.protagonistName + ". Wir hatten noch nichts miteinander zu tun. Darum fiel es mir schwer mich zu erinnern. Sorry.",
                T00_00_002: "Ich heiße Lily übrigens.",
                T00_00_003: "Nächste Woche werden wir mit der Projektarbeit anfangen. Freust du dich darauf?",
                T01_00_000: "Cool! Ich bin auch schon echt aufgeregt! Das könnte echt spaßig werden.",
                T02_00_000: "Das ist schade. Ich habe trotzdem vor mein Bestes zu geben.",
                T03_00_000: "Mhm. ... Ich freue mich schon etwas auf die Projektarbeit."
            }
        };
        // #endregion (Text)
        // #region (Decision)
        let partnerSearch;
        let partnerSearchAnswer = {
            louis: "Der Student links",
            lily: "Die Studentin rechts"
        };
        let partnerChoice;
        let partnerChoiceAnswer = {
            louis: "Der Student links",
            lily: "Die Studentin rechts"
        };
        let expressEnthusiasm;
        let expressEnthusiasmAnswer = {
            yes: "Ja",
            no: "Nein",
            indifferent: "Gleichgültig"
        };
        // #endregion (Decision)
        // #region (Play)
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomRobotics);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        await Game.ƒS.Character.show(Game.characters.roboticsTeacher, Game.characters.roboticsTeacher.pose.neutral, Game.ƒS.positionPercent(50, 100));
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.student, text.student.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_003);
        await Game.ƒS.Character.hide(Game.characters.roboticsTeacher);
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_006);
        await Game.ƒS.Character.show(Game.characters.roboticsTeacher, Game.characters.roboticsTeacher.pose.neutral, Game.ƒS.positionPercent(50, 100));
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_004);
        await Game.ƒS.Character.hide(Game.characters.roboticsTeacher);
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_007);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_008);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_009);
        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral2, Game.ƒS.positionPercent(20, 100));
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(80, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_010);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_011);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_012);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_013);
        partnerSearch = await Game.ƒS.Menu.getInput(partnerSearchAnswer, "decisionClass");
        switch (partnerSearch) {
            case partnerSearchAnswer.louis:
                await Game.ƒS.Character.hide(Game.characters.lily);
                await Game.ƒS.update(0.5);
                await Game.ƒS.Character.animate(Game.characters.louis, Game.characters.louis.pose.neutral2, Game.slideFromLeftToMiddleAnimation());
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_002);
                await Game.ƒS.Character.hide(Game.characters.louis);
                await Game.ƒS.update(0.5);
                await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update(0.5);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_002);
                await Game.ƒS.Character.animate(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.slideFromMiddleToRightAnimation());
                await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral2, Game.ƒS.positionPercent(20, 100));
                await Game.ƒS.update(0.5);
                break;
            case partnerSearchAnswer.lily:
                await Game.ƒS.Character.hide(Game.characters.louis);
                await Game.ƒS.update(0.5);
                await Game.ƒS.Character.animate(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.slideFromRightToMiddleAnimation());
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_002);
                await Game.ƒS.Character.hide(Game.characters.lily);
                await Game.ƒS.update(0.5);
                await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral2, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update(0.5);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_002);
                await Game.ƒS.Character.animate(Game.characters.louis, Game.characters.louis.pose.neutral2, Game.slideFromMiddleToLeftAnimation());
                await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(80, 100));
                await Game.ƒS.update(0.5);
                break;
        }
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_014);
        partnerChoice = await Game.ƒS.Menu.getInput(partnerChoiceAnswer, "decisionClass");
        switch (partnerChoice) {
            case partnerChoiceAnswer.louis:
                Game.dataForSave.partnerChosen = "Louis";
                await Game.ƒS.Character.hide(Game.characters.lily);
                await Game.ƒS.update(0.5);
                await Game.ƒS.Character.animate(Game.characters.louis, Game.characters.louis.pose.neutral2, Game.slideFromLeftToMiddleAnimation());
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_000);
                await Game.ƒS.Character.hide(Game.characters.louis);
                await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral1, Game.ƒS.positionPercent(50, 100));
                Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_000);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T01_00_000);
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_001);
                if (Game.dataForSave.paidAttentionInClass) {
                    await Game.ƒS.Character.hide(Game.characters.louis);
                    await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.happy2, Game.ƒS.positionPercent(50, 100));
                    Game.ƒS.update();
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T01_00_000);
                }
                else if (Game.dataForSave.sleptInClass) {
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T02_00_000);
                    await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T01_01_000);
                }
                else if (Game.dataForSave.tormentedSomeoneInClass) {
                    await Game.ƒS.Character.hide(Game.characters.louis);
                    await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.sad2, Game.ƒS.positionPercent(50, 100));
                    Game.ƒS.update();
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T03_00_000);
                }
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_002);
                expressEnthusiasm = await Game.ƒS.Menu.getInput(expressEnthusiasmAnswer, "decisionClass");
                switch (expressEnthusiasm) {
                    case expressEnthusiasmAnswer.yes:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_01_000);
                        await Game.ƒS.Character.hide(Game.characters.louis);
                        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.happy1, Game.ƒS.positionPercent(50, 100));
                        Game.ƒS.update();
                        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T04_00_000);
                        break;
                    case expressEnthusiasmAnswer.no:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_02_000);
                        await Game.ƒS.Character.hide(Game.characters.louis);
                        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.sad1, Game.ƒS.positionPercent(50, 100));
                        Game.ƒS.update();
                        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T05_00_000);
                        break;
                    case expressEnthusiasmAnswer.indifferent:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_03_000);
                        await Game.ƒS.Character.hide(Game.characters.louis);
                        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral1, Game.ƒS.positionPercent(50, 100));
                        Game.ƒS.update();
                        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T06_00_000);
                        break;
                }
                // teacher talking
                await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_005);
                // going home
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_015);
                await Game.ƒS.Character.hide(Game.characters.louis);
                Game.ƒS.update();
                break;
            case partnerChoiceAnswer.lily:
                Game.dataForSave.partnerChosen = "Lily";
                await Game.ƒS.Character.hide(Game.characters.louis);
                await Game.ƒS.update(0.5);
                await Game.ƒS.Character.animate(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.slideFromRightToMiddleAnimation());
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_000);
                await Game.ƒS.Character.hide(Game.characters.lily);
                await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.happy1, Game.ƒS.positionPercent(50, 100));
                Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_000);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_001);
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_002);
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_003);
                expressEnthusiasm = await Game.ƒS.Menu.getInput(expressEnthusiasmAnswer, "decisionClass");
                switch (expressEnthusiasm) {
                    case expressEnthusiasmAnswer.yes:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_01_000);
                        await Game.ƒS.Character.hide(Game.characters.lily);
                        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.excited1, Game.ƒS.positionPercent(50, 100));
                        Game.ƒS.update();
                        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T01_00_000);
                        break;
                    case expressEnthusiasmAnswer.no:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_02_000);
                        await Game.ƒS.Character.hide(Game.characters.lily);
                        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.sad1, Game.ƒS.positionPercent(50, 100));
                        Game.ƒS.update();
                        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T02_00_000);
                        break;
                    case expressEnthusiasmAnswer.indifferent:
                        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_03_000);
                        await Game.ƒS.Character.hide(Game.characters.lily);
                        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(50, 100));
                        Game.ƒS.update();
                        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T03_00_000);
                        break;
                }
                // teacher talking
                await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_005);
                // going home
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_015);
                await Game.ƒS.Character.hide(Game.characters.lily);
                Game.ƒS.update();
                break;
        }
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        switch (Game.dataForSave.partnerChosen) {
            case "Louis":
                return "eventLouis";
            case "Lily":
                return "eventLily";
        }
        // #endregion (Play)
    }
    Game.scene_3_robotics_lesson = scene_3_robotics_lesson;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_4a_storage_room_louis() {
        console.log("scene_4a_storage_room_louis started");
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Freitag, der nächsten Woche, gehst du wieder zur Hochschule. Wie besproche geht es an die Partnerarbeit.",
                T00_00_001: "Du betritts den Robotik-Vorlesungsraum, der beinahe komplett leer ist. Nur eine Person scheint vor dir angekommen zu sein.",
                T00_00_002: "Kaum war er fertig mit reden, hörst du die Tür sich öffnen.",
                T00_00_003: "Ihr folgt der Professorin in den Lagerraum."
            },
            protagonist: {
                T00_00_000: "Wir sind die Einzigen hier. Bin ich zu früh gekommen?",
                T01_00_000: "Ach, so ist das. Alles klar. Danke für die Info.",
                T02_00_000: "Ja, gut. Dann warten wir halt.",
                T03_00_000: "Ugh, dabei hatte ich gehofft, dass ich als erstes heute nicht deine Visage sehen muss. Die werde ich ja noch oft genug sehen müssen wegen dieser Partnerarbeit."
            },
            louis: {
                T00_00_000: "Guten Morgen, " + Game.dataForSave.protagonistName + ". Bist du bereit, um an unseren Roboter zu arbeiten?",
                T00_00_001: "Nein, du bist recht pünktlich. Es waren schon zwei andere Studenten hier, die sind jedoch schon mit der Professorin in den Lagerraum für Robotikteile gegangen.",
                T00_00_002: "Ich denke, es sollte nicht lange dauern bis sie wieder zurück sind. Danach wird sie uns die Materialien zeigen, die wir benutzen dürfen.",
                T01_00_000: "Gerne doch.",
                T02_00_000: "Ja.",
                T03_00_000: "...",
                T03_00_001: "Bitte mach solche Scherze nicht, falls es denn einer gewesen sein soll. Mir fällt es schwer zu erkennen, ob du das ernst meinst."
            },
            roboticsTeacher: {
                T00_00_000: "Ach, gut, dass sich das nächste Team hier bereits eingefunden hat. Kommen Sie kurz mit mir mit? Ich will Ihnen die Bauteile und Materialien zeigen, die Sie für Ihr Projekt benutzen dürfen.",
                T00_00_001: "So... Sie können alles was in den unteren fünf Fächern des Regals, das rechts von Ihnen steht, benutzen. Falls Ihnen an Bauteilen fehlen sollte, kommen Sie bitte zuerst zu mir bevor Sie selbstständig etwas einkaufen, OK?"
            }
        };
        // #endregion (Text)
        // #region (Decision)
        let explanation;
        let explanationAnswer = {
            thank: "Für die Info danken",
            indifferent: "Gleichgültig antworten",
            joke: "Ihm gegenüber einen feindseligen Scherz machen"
        };
        // #endregion (Decision)
        // #region (Play)
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomRobotics);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        // talking with louis
        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_000);
        await Game.ƒS.Character.hide(Game.characters.louis);
        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.happy2, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_001);
        await Game.ƒS.Character.hide(Game.characters.louis);
        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_002);
        explanation = await Game.ƒS.Menu.getInput(explanationAnswer, "decisionClass");
        switch (explanation) {
            case explanationAnswer.thank:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T01_00_000);
                Game.dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                await Game.ƒS.Character.hide(Game.characters.louis);
                await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.happy1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T01_00_000);
                break;
            case explanationAnswer.indifferent:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T02_00_000);
                break;
            case explanationAnswer.joke:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T03_00_000);
                Game.dataForSave.louisPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                await Game.ƒS.Character.hide(Game.characters.louis);
                await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.sad2, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T03_00_000);
                await Game.ƒS.Character.hide(Game.characters.louis);
                await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.sad1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T03_00_001);
                break;
        }
        await Game.ƒS.Character.hide(Game.characters.louis);
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        Game.ƒS.Sound.play(Game.sounds.automaticDoor, 1, false);
        // teacher shows up
        await Game.ƒS.Character.show(Game.characters.roboticsTeacher, Game.characters.roboticsTeacher.pose.neutral, Game.ƒS.positionPercent(50, 100));
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_000);
        await Game.ƒS.Character.hide(Game.characters.roboticsTeacher);
        Game.ƒS.update();
        // going to the storage room, TODO: DELETE  THIS, IT'S UNNECESSARY, REWRITE EVERYTHING SO IT'S SHORTER AND IT COMES TO THE STORAGE SCENE !UICKLY
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.storageRoom);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        await Game.ƒS.Character.show(Game.characters.roboticsTeacher, Game.characters.roboticsTeacher.pose.neutral, Game.ƒS.positionPercent(50, 100));
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_001);
        // #endregion (Play)
    }
    Game.scene_4a_storage_room_louis = scene_4a_storage_room_louis;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_4b_storage_room_lily() {
        console.log("scene_4b_storage_room_lily started");
        // #region (Text) 
        let text = {
            narrator: {}
        };
        // #endregion (Text)
        // #region (Decision)
        // #endregion (Decision)
        // #region (Play)
        // #endregion (Play)
    }
    Game.scene_4b_storage_room_lily = scene_4b_storage_room_lily;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_5a_date_louis() {
        console.log("scene_5a_date_louis started");
        // #region (Text) 
        let text = {
            narrator: {}
        };
        // #endregion (Text)
        // #region (Decision)
        // #endregion (Decision)
        // #region (Play)
        // #endregion (Play)
    }
    Game.scene_5a_date_louis = scene_5a_date_louis;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_5b_date_lily() {
        console.log("scene_5b_date_lily started");
        // #region (Text) 
        let text = {
            narrator: {}
        };
        // #endregion (Text)
        // #region (Decision)
        // #endregion (Decision)
        // #region (Play)
        // #endregion (Play)
    }
    Game.scene_5b_date_lily = scene_5b_date_lily;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_5c_date_none() {
        console.log("scene_5c_date_none started");
        // #region (Text) 
        let text = {
            narrator: {}
        };
        // #endregion (Text)
        // #region (Decision)
        // #endregion (Decision)
        // #region (Play)
        // #endregion (Play)
    }
    Game.scene_5c_date_none = scene_5c_date_none;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_6_robot_fight() {
        console.log("scene_6_robot_fight started");
        // #region (Text) 
        let text = {
            narrator: {
                ChooseYourAction: "Wähle eine Aktion aus.",
                TankAttack0: "Panzer-bot setzt Stoßen ein.",
                TankAttack1: "Panzer-bot setzt Umstoßen ein.",
                TankAttack2: "Panzer-bot setzt Aufladen ein.",
                TankAttack3: "Panzer-bot setzt Ausweichen ein.",
                CarAttack0: "Auto-bot setzt Stoßen ein.",
                CarAttackl: "Auto-bot setzt Umstoßen ein.",
                CarAttack2: "Auto-bot setzt Aufladen ein.",
                CarAttack3: "Auto-bot setzt Ausweichen ein.",
                AttackFailed: "Attacke ist fehlgeschlagen.",
                AreYouSure: "Bist du dir sicher?",
                YouWin: "Du hast gewonnen!",
                YouLose: "Du hast verloren."
            },
            roboticsTeacher: {
                T00_00_000: "Auf die Plätze... fertig... los!",
                T00_00_001: "Das war es mit dem Roboter-Kampf. Danke an alle Studierenden, die teilgenommen haben."
            }
        };
        // #endregion (Text)
        // #region (Decision)
        let chooseAction;
        let chooseActionAnswer = {
            fight: "Kampf",
            items: "Items",
            robot: "Roboter",
            flee: "Flucht"
        };
        let chooseAttack;
        let chooseAttackAnswer = {
            bump: "Stoßen",
            knockOver: "Umstoßen",
            charge: "Aufladen",
            dodge: "Ausweichen"
        };
        let confirmation;
        let confirmationAnswer = {
            yes: "Ja",
            no: "Nein"
        };
        // #endregion (Decision)
        // #region (Play)
        // text
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomFest);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        Game.ƒS.Sound.play(Game.sounds.robotFight, 1, true);
        let health = 100;
        let enemyHealth = 100;
        let damageFactor = 1;
        let enemyDamageFactor = 1;
        let chosenAttack;
        let enemyChosenAttack;
        document.getElementById("fightBars").setAttribute("style", "visibility: visible");
        switch (Game.dataForSave.partnerChosen) {
            case "Louis":
                await Game.ƒS.Character.show(Game.characters.tankBot, Game.characters.tankBot.pose.neutral, Game.ƒS.positionPercent(29, 70));
                await Game.ƒS.Character.show(Game.characters.carBot, Game.characters.carBot.pose.enemy, Game.ƒS.positionPercent(78, 70));
                await Game.ƒS.update();
                break;
            case "Lily":
                await Game.ƒS.Character.show(Game.characters.carBot, Game.characters.carBot.pose.neutral, Game.ƒS.positionPercent(29, 70));
                await Game.ƒS.Character.show(Game.characters.tankBot, Game.characters.tankBot.pose.enemy, Game.ƒS.positionPercent(78, 70));
                await Game.ƒS.update();
                break;
        }
        // decision
        while (health > 0 && enemyHealth > 0) {
            // user's turn
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.ChooseYourAction);
            chooseAction = await Game.ƒS.Menu.getInput(chooseActionAnswer, "decisionRobotFight");
            switch (chooseAction) {
                case chooseActionAnswer.fight:
                    chooseAttack = await Game.ƒS.Menu.getInput(chooseAttackAnswer, "decisionClass");
                    switch (chooseAttack) {
                        case chooseAttackAnswer.bump:
                            chosenAttack = 0;
                            break;
                        case chooseAttackAnswer.knockOver:
                            chosenAttack = 1;
                            break;
                        case chooseAttackAnswer.charge:
                            chosenAttack = 2;
                            break;
                        case chooseAttackAnswer.dodge:
                            chosenAttack = 3;
                            break;
                    }
                    break;
                case chooseActionAnswer.robot:
                    await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.AreYouSure);
                    confirmation = await Game.ƒS.Menu.getInput(confirmationAnswer, "decisionClass");
                    switch (confirmation) {
                        case confirmationAnswer.yes:
                            return "endRobot";
                        case confirmationAnswer.no:
                            break;
                    }
                    break;
                case chooseActionAnswer.items:
                    if (Game.dataForSave.partnerChosen == "Louis") {
                        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral1, Game.ƒS.positionPercent(50, 100));
                        // TODO: insert louis giving a hint here
                        await Game.ƒS.Character.hide(Game.characters.louis);
                    }
                    else {
                        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(50, 100));
                        // TODO: insert lily giving a hint here
                        await Game.ƒS.Character.hide(Game.characters.lily);
                    }
                    break;
                case chooseActionAnswer.flee:
                    await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.AreYouSure);
                    confirmation = await Game.ƒS.Menu.getInput(confirmationAnswer, "decisionClass");
                    switch (confirmation) {
                        case confirmationAnswer.yes:
                            return "endFlee";
                        case confirmationAnswer.no:
                            break;
                    }
                    break;
            }
            // enemy's turn
            let roll = Math.random();
            switch (true) {
                // enemy uses "Stoßen"
                case (roll < 0.25):
                    enemyChosenAttack = 0;
                    break;
                // enemy uses "Umstoßen"
                case (roll < 0.5):
                    enemyChosenAttack = 1;
                    break;
                // enemy uses "Aufladen"
                case (roll < 0.75):
                    enemyChosenAttack = 2;
                    break;
                // enemy uses "Ausweichen"
                case (roll <= 1):
                    enemyChosenAttack = 3;
                    break;
            }
            // user's turn evaluation
            switch (chosenAttack) {
                case 0:
                    if (Game.dataForSave.partnerChosen == "Louis") {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.TankAttack0);
                        await Game.ƒS.Character.animate(Game.characters.tankBot, Game.characters.tankBot.pose.neutral, Game.robotAttack());
                        await Game.ƒS.Character.show(Game.characters.tankBot, Game.characters.tankBot.pose.neutral, Game.ƒS.positionPercent(29, 70));
                    }
                    else {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.CarAttack0);
                        await Game.ƒS.Character.animate(Game.characters.carBot, Game.characters.carBot.pose.neutral, Game.robotAttack());
                        await Game.ƒS.Character.show(Game.characters.carBot, Game.characters.carBot.pose.neutral, Game.ƒS.positionPercent(29, 70));
                    }
                    if (enemyChosenAttack != 3) {
                        enemyHealth -= 10 * damageFactor;
                        Game.ƒS.Sound.play(Game.sounds.damage, 1, false);
                        document.getElementById("enemyHealthBar").setAttribute("value", String(enemyHealth));
                    }
                    break;
                case 1:
                    if (Game.dataForSave.partnerChosen == "Louis") {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.TankAttack1);
                        await Game.ƒS.Character.animate(Game.characters.tankBot, Game.characters.tankBot.pose.neutral, Game.robotAttack());
                        await Game.ƒS.Character.show(Game.characters.tankBot, Game.characters.tankBot.pose.neutral, Game.ƒS.positionPercent(29, 70));
                    }
                    else {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.CarAttackl);
                        await Game.ƒS.Character.animate(Game.characters.carBot, Game.characters.carBot.pose.neutral, Game.robotAttack());
                        await Game.ƒS.Character.show(Game.characters.carBot, Game.characters.carBot.pose.neutral, Game.ƒS.positionPercent(29, 70));
                    }
                    if (Math.random() > 0.67 && enemyChosenAttack != 3) { // (> 0.67) = 33% chance
                        enemyHealth -= 50 * damageFactor;
                        Game.ƒS.Sound.play(Game.sounds.damage, 1, false);
                        document.getElementById("enemyHealthBar").setAttribute("value", String(enemyHealth));
                    }
                    else {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.AttackFailed);
                    }
                    break;
                case 2:
                    if (Game.dataForSave.partnerChosen == "Louis") {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.TankAttack2);
                        Game.ƒS.Sound.play(Game.sounds.charge, 1, false);
                        await Game.ƒS.Character.animate(Game.characters.tankBot, Game.characters.tankBot.pose.neutral, Game.robotCharge());
                    }
                    else {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.CarAttack2);
                        Game.ƒS.Sound.play(Game.sounds.charge, 1, false);
                        await Game.ƒS.Character.animate(Game.characters.carBot, Game.characters.carBot.pose.neutral, Game.robotCharge());
                    }
                    damageFactor = 2;
                    break;
                case 3:
                    if (Game.dataForSave.partnerChosen == "Louis") {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.TankAttack3);
                        await Game.ƒS.Character.animate(Game.characters.tankBot, Game.characters.tankBot.pose.neutral, Game.robotDodge());
                        await Game.ƒS.Character.show(Game.characters.tankBot, Game.characters.tankBot.pose.neutral, Game.ƒS.positionPercent(29, 70));
                    }
                    else {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.CarAttack3);
                        await Game.ƒS.Character.animate(Game.characters.carBot, Game.characters.carBot.pose.neutral, Game.robotDodge());
                        await Game.ƒS.Character.show(Game.characters.carBot, Game.characters.carBot.pose.neutral, Game.ƒS.positionPercent(29, 70));
                    }
                    break;
            }
            if (enemyHealth <= 0)
                break;
            // enemy's turn evaluation
            switch (enemyChosenAttack) {
                case (0):
                    if (Game.dataForSave.partnerChosen == "Louis") {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.CarAttack0);
                        await Game.ƒS.Character.animate(Game.characters.carBot, Game.characters.carBot.pose.enemy, Game.robotEnemyAttack());
                        await Game.ƒS.Character.show(Game.characters.carBot, Game.characters.carBot.pose.enemy, Game.ƒS.positionPercent(78, 70));
                    }
                    else {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.TankAttack0);
                        await Game.ƒS.Character.animate(Game.characters.tankBot, Game.characters.tankBot.pose.enemy, Game.robotEnemyAttack());
                        await Game.ƒS.Character.show(Game.characters.tankBot, Game.characters.tankBot.pose.enemy, Game.ƒS.positionPercent(78, 70));
                    }
                    if (chosenAttack != 3) {
                        health -= 10 * enemyDamageFactor;
                        Game.ƒS.Sound.play(Game.sounds.damage, 1, false);
                        document.getElementById("healthBar").setAttribute("value", String(health));
                    }
                    break;
                case (1):
                    if (Game.dataForSave.partnerChosen == "Louis") {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.CarAttackl);
                        await Game.ƒS.Character.animate(Game.characters.carBot, Game.characters.carBot.pose.enemy, Game.robotEnemyAttack());
                        await Game.ƒS.Character.show(Game.characters.carBot, Game.characters.carBot.pose.enemy, Game.ƒS.positionPercent(78, 70));
                    }
                    else {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.TankAttack1);
                        await Game.ƒS.Character.animate(Game.characters.tankBot, Game.characters.tankBot.pose.enemy, Game.robotEnemyAttack());
                        await Game.ƒS.Character.show(Game.characters.tankBot, Game.characters.tankBot.pose.enemy, Game.ƒS.positionPercent(78, 70));
                    }
                    if (Math.random() > 0.67 && chosenAttack != 3) { // (> 0.67) = 33% chance
                        health -= 50 * enemyDamageFactor;
                        Game.ƒS.Sound.play(Game.sounds.damage, 1, false);
                        document.getElementById("healthBar").setAttribute("value", String(health));
                    }
                    else {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.AttackFailed);
                    }
                    break;
                case (2):
                    if (Game.dataForSave.partnerChosen == "Louis") {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.CarAttack2);
                        Game.ƒS.Sound.play(Game.sounds.charge, 1, false);
                        await Game.ƒS.Character.animate(Game.characters.carBot, Game.characters.carBot.pose.enemy, Game.robotCharge());
                    }
                    else {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.TankAttack2);
                        Game.ƒS.Sound.play(Game.sounds.charge, 1, false);
                        await Game.ƒS.Character.animate(Game.characters.tankBot, Game.characters.tankBot.pose.enemy, Game.robotCharge());
                    }
                    enemyDamageFactor = 2;
                    break;
                case (3):
                    if (Game.dataForSave.partnerChosen == "Louis") {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.CarAttack3);
                        await Game.ƒS.Character.animate(Game.characters.carBot, Game.characters.carBot.pose.enemy, Game.robotEnemyDodge());
                        await Game.ƒS.Character.show(Game.characters.carBot, Game.characters.carBot.pose.enemy, Game.ƒS.positionPercent(78, 70));
                    }
                    else {
                        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.TankAttack3);
                        await Game.ƒS.Character.animate(Game.characters.tankBot, Game.characters.tankBot.pose.enemy, Game.robotEnemyDodge());
                        await Game.ƒS.Character.show(Game.characters.tankBot, Game.characters.tankBot.pose.enemy, Game.ƒS.positionPercent(78, 70));
                    }
                    break;
            }
        }
        await Game.ƒS.Sound.fade(Game.sounds.robotFight, 0, 1, true);
        if (health <= 0) {
            Game.ƒS.Sound.play(Game.sounds.failure, 1, false);
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.YouLose);
            document.getElementById("fightBars").setAttribute("style", "visibility: hidden");
        }
        else {
            Game.ƒS.Sound.play(Game.sounds.success, 1, false);
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.YouWin);
            document.getElementById("fightBars").setAttribute("style", "visibility: hidden");
        }
        switch (Game.dataForSave.partnerChosen) {
            case "Louis":
                return "endLouis";
            case "Lily":
                return "endLily";
        }
        // #endregion (Play)
    }
    Game.scene_6_robot_fight = scene_6_robot_fight;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_7a_ending_louis() {
        console.log("scene_7a_ending_louis started");
        // #region (Text) 
        let text = {
            narrator: {}
        };
        // #endregion (Text)
        // #region (Decision)
        // #endregion (Decision)
        // #region (Play)
        //TODO: delete
        Game.dataForSave.partnerChosen = "Louis";
        Game.ƒS.Text.addClass("louisLetter");
        await Game.ƒS.Text.print("<h2>Hallo " + Game.dataForSave.protagonistName + ",</h2>" +
            "<p>Bla bla bla...</p>" +
            "<h2>Liebe Grüße</h2>" +
            "<h2>Louis</h2>");
        return "end";
        // #endregion (Play)
    }
    Game.scene_7a_ending_louis = scene_7a_ending_louis;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_7b_ending_lily() {
        console.log("scene_7b_ending_lily started");
        // #region (Text) 
        let text = {
            narrator: {}
        };
        // #endregion (Text)
        // #region (Decision)
        // #endregion (Decision)
        // #region (Play)
        //TODO: delete
        Game.dataForSave.partnerChosen = "Lily";
        Game.ƒS.Text.addClass("lilyLetter");
        await Game.ƒS.Text.print("<h2>Hallo " + Game.dataForSave.protagonistName + ",</h2>" +
            "<p>Bla bla bla...</p>" +
            "<h2>Liebe Grüße</h2>" +
            "<h2>Lily</h2>");
        return "end";
        // #endregion (Play)
    }
    Game.scene_7b_ending_lily = scene_7b_ending_lily;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_7c_ending_robot() {
        console.log("scene_7c_ending_robot");
        // #region (Text) 
        let text = {
            narrator: {}
        };
        // #endregion (Text)
        // #region (Decision)
        // #endregion (Decision)
        // #region (Play)
        return "end";
        // #endregion (Play)
    }
    Game.scene_7c_ending_robot = scene_7c_ending_robot;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_7d_ending_flee() {
        console.log("scene_7d_ending_flee started");
        // #region (Text) 
        let text = {
            narrator: {}
        };
        // #endregion (Text)
        // #region (Decision)
        // #endregion (Decision)
        // #region (Play)
        return "end";
        // #endregion (Play)
    }
    Game.scene_7d_ending_flee = scene_7d_ending_flee;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_8_end() {
        console.log("scene_8_end started");
        console.log("End of Visual Novel");
    }
    Game.scene_8_end = scene_8_end;
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map