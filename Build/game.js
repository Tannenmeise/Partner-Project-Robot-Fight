"use strict";
var Game;
(function (Game) {
    Game.ƒ = FudgeCore;
    Game.ƒS = FudgeStory;
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
    // #region LOVEBAR
    function showLovebar() {
        document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
        document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
        document.getElementById("loveBars").setAttribute("style", "visibility: visible");
    }
    function hideLovebar() {
        document.getElementById("loveBars").setAttribute("style", "visibility: hidden");
    }
    let lovebarIsVisible = false;
    // #endregion LOVEBAR
    // #region MENU
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        inventory: "Inventory",
        credits: "Credits",
        close: "Close"
    };
    let gameMenu;
    let menuIsOpen = false;
    async function buttonFunctionalities(_option) {
        switch (_option) {
            case inGameMenuButtons.save:
                await Game.ƒS.Progress.save();
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
    // #endregion MENU
    // #region MENU SHORTCUTS
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(_event) {
        switch (_event.code) {
            case Game.ƒ.KEYBOARD_CODE.F8:
                await Game.ƒS.Progress.save();
                break;
            case Game.ƒ.KEYBOARD_CODE.F9:
                await Game.ƒS.Progress.load();
                break;
            case Game.ƒ.KEYBOARD_CODE.I:
                await Game.ƒS.Inventory.open();
                break;
            case Game.ƒ.KEYBOARD_CODE.C:
                credits();
                break;
            case Game.ƒ.KEYBOARD_CODE.L:
                if (lovebarIsVisible) {
                    hideLovebar();
                    lovebarIsVisible = false;
                }
                else {
                    showLovebar();
                    lovebarIsVisible = true;
                }
                break;
            case Game.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    // #endregion MENU SHORTCUTS
    // #region ITEMS
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
    // #endregion ITEMS
    // #region TRANSITIONS
    Game.transitions = {
        binaryCode: {
            duration: 3,
            alpha: "Assets/Graphics/Transitions/binary_code.png",
            edge: 0.5
        }
    };
    // #endregion TRANSITIONS
    // #region AUDIO
    Game.sounds = {
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
    Game.locations = {
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
    Game.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: "Du"
        },
        student: {
            name: "Student*in",
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
            name: "Geschichtsprofessor"
        },
        roboticsTeacher: {
            name: "Robotik Professorin",
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
    // #endregion CHARACTERS
    // #region ANIMATIONS
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
    // #endregion ANIMATIONS
    window.addEventListener("load", start);
    function start(_event) {
        // menu buttons
        gameMenu = Game.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        // scenes
        let scenes = [
            /*
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
            */
            { scene: Game.scene_7b_ending_lily, name: "Scene 7b: Ending Lily", id: "endLily" },
            { scene: Game.scene_7c_ending_robot, name: "Scene 7c: Ending Robot", id: "endRobot" },
            { scene: Game.scene_7d_ending_flee, name: "Scene 7d: Ending Flee", id: "endFlee" },
            { scene: Game.scene_8_end, name: "Scene 8: End", id: "end" }
        ];
        // ui
        let uiElement = document.querySelector("[type=interface]");
        // data for save
        Game.dataForSave = Game.ƒS.Progress.setData(Game.dataForSave, uiElement);
        Game.ƒS.Progress.go(scenes);
    }
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_0_intro() {
        // #region (Text) 
        let text = {
            narrator: {
                YourName: "Wie heißt du? ",
                T00_00_000: "Ein neuer Tag an der Robert Robotik Hochschule.",
                T00_00_001: "Nach 4 Semestern hat sich das Gefühl von Gewohnheit endgültig eingenistet. Inzwischen ist auch schon das Ende des 5. Semesters in Sicht.",
                T00_00_002: "Das Laufen zur Hochschule gleicht immer mehr einer gedankenlosen Trance. Es ist immer der gleiche gewohnte Ablauf. Beruhigend, aber auch etwas langweilig.",
                T00_00_003: "Das Zwitschern der Singvögel füllt die Luft. Der Wind bläst sanft durch Gestrüpp und Bäume. Flora und Fauna in der Vormittagssonne erwachend.",
                T00_00_004: "An guten Tagen schiebt der Wind dich auch mal vorwärts statt rückwärts. Als wäre es manchmal nicht schwer genug seine Beine zu den Vorlesungen zu bringen.",
                T00_00_005: "Aber heute ist ein guter Tag. Der Wind ist dir wohl gesonnen.",
                T00_00_006: "Du trittst in das Hochschulgebäude ein."
            }
        };
        // #endregion (Text)
        // #region (Play)
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
        // protagonist name input
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.YourName);
        Game.dataForSave.protagonistName = await Game.ƒS.Speech.getInput();
        // transition
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.schoolBuilding);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        await Game.ƒS.update();
        Game.ƒS.Sound.play(Game.sounds.sparrows, 1, true);
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_006);
        Game.ƒS.Sound.play(Game.sounds.enterSchoolBuilding, 1, false);
        // #endregion (Play)
    }
    Game.scene_0_intro = scene_0_intro;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_1_pinboards() {
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Kühle Luft empfängt dich bei deinem Eintritt in das Gebäude.",
                T00_00_001: "Da drängt sich jemand mit Eile an dir vorbei.",
                T00_00_002: "Schnellen Schrittes geht die Person auf die Pinnwände zu.",
                T00_00_003: "Nun fällt dir die ungewöhnlich große Menschenmenge auf, die sich um die Pinnwände versammelt hat.",
                T00_00_004: "Neugierig bahnst du dir deinen Weg durch den Trubel, um einen besseren Blick erhaschen zu können.",
                T00_00_005: "Das größte und auffälligste Poster verkündet feierlich: 'Das diesjährige Robotik-Fest der Robert Robotik Hochschule findet am Freitag, den 22.07. statt.'",
                T00_00_006: "Deine Augen überfliegen das Poster nach weiteren wichtigen Informationen.",
                T00_00_007: "'Von 10:00 bis 18:00 Uhr.', steht geschrieben.",
                T00_00_008: "Gequetscht von links und rechts, versuchst du so schnell wie möglich hier fertig zu werden.",
                T00_00_009: "'Teilnehmer bestimmter Kurse haben am Schulfest teilzunehmen. Die betroffenen Kurse sind an allen großen Pinnwänden ersichtlich samt Matrikelnummern der Teilnehmer. Für mehr Informationen wenden Sie Sich an Ihre Dozent*innen.', steht es schwarz auf weiß.",
                T00_00_010: "Du kannst dich noch daran erinnern, wie du letztes Jahr mit Glück diesem Schicksal entkommen bist.",
                T00_00_011: "Es soll schonmal Student*innen gegeben haben, die es ganz schlimm erwischt hat: Sie sollten zwei Projekte innerhalb von zwei Wochen fertigstellen.",
                T00_00_012: "Viel Kopfschmerzen und Burnout waren die Folge.",
                T00_00_013: "Diese wiederum gefolgt von einer Besauf-Party der Superlative. Aber das sei mal so dahingestellt.",
                T00_00_014: "Nach genügend Beschwerden über seelisches und körperliches Leid, wurde diese Art von Tortur zum Glück verboten.",
                T00_00_015: "Jetzt darf nur noch ein Projekt als Qual genügen.",
                T00_00_016: "Letztendlich gleitet dein Blick über den letzten Absatz des Posters.",
                T00_00_017: "'Betroffene Veranstaltungen: Installation von Licht und Sound, Fortgeschrittene Sprachsimulation und Fernbedienbare Robotik.'",
                T00_00_018: "Und da war es. Ein Kurs, den du besuchst.",
                T00_00_019: "Da erklingt ein verärgertes Murmeln hinter dir.",
                T00_00_020: "Das darauffolgende stoßartige Ausatmen klang als müsste der*die Student*in erstmal dem Ärgernis Dampf ablassen, den du in ihm*ihr erzeugt hast.",
                T00_00_021: "Du lenkst deine Aufmerksamkeit auf die an dem Kurs angeheftete Teilnehmerliste.",
                T00_00_022: "Ja, da steht auch deine Matrikelnummer. Es steht fest. Nun gibt es kein Entkommen.",
                T00_00_023: "Aber vorerst geht es zu deiner ersten Vorlesung für den Tag: 'Geschichte der Robotik'. Die perfekte Vorlesung, um die Gedanken schweifen zu lassen oder etwas Schlaf nachzuholen."
            },
            protagonist: {
                T00_00_000: "Huch!",
                T00_00_001: "Oh. Ich hatte völlig vergessen, dass es das gibt.",
                T00_00_002: "Fernbedienbare Robotik? Da bin ich ja drin. So ein Pech...",
                T01_00_000: "Hey! Pass doch auf!",
                T02_00_000: "Nichts passiert.",
                T03_00_000: "...",
                T04_00_000: "Ah, vielen Dank, sehr geehrter Besserwisser. Wie konnte ich nur so dumm sein!",
                T05_00_000: "Sorry...",
                T06_00_000: "..."
            },
            student: {
                T0000: "'Tschuldigung!",
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
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.pinboards1);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        await Game.ƒS.Sound.fade(Game.sounds.sparrows, 0, 1, true);
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        Game.ƒS.Sound.play(Game.sounds.bump, 1, false);
        // bump into student
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
        Game.ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, jitter);
        await Game.ƒS.Progress.delay(2);
        Game.ƒ.Loop.removeEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, jitter);
        graph.mtxLocal.translateX(-1 * (graph.mtxLocal.translation.x));
        await Game.ƒS.update();
        await Game.ƒS.Character.show(Game.characters.student, Game.characters.student.pose.lily, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.student, text.student.T0000);
        // decide how to respond
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
                break;
            case bumpIntoStudentAnswer.ignore:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T03_00_000);
                break;
        }
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        await Game.ƒS.Character.hide(Game.characters.student);
        await Game.ƒS.update(1);
        await Game.ƒS.Sound.fade(Game.sounds.bigCrowd, 1, 1, true);
        await Game.ƒS.Location.show(Game.locations.pinboards2);
        await Game.ƒS.update(2);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_001);
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
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_002);
        // student remark
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_019);
        await Game.ƒS.Character.show(Game.characters.student, Game.characters.student.pose.louis, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.student, text.student.T0001);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_020);
        // decide how to respond
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
        await Game.ƒS.Character.hide(Game.characters.student);
        await Game.ƒS.update();
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_021);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_022);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_023);
        await Game.ƒS.Sound.fade(Game.sounds.bigCrowd, 0, 1, true);
        // #endregion (Play)
    }
    Game.scene_1_pinboards = scene_1_pinboards;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_2_history_lesson() {
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Du bist im Vorlesungsraum für die Geschichtsstunde angekommen.",
                T00_00_001: "Zielgerichtet gehst du auf deinen Platz zu.",
                T00_00_002: "Ein Platz in der vorletzten Reihe und direkt neben dem Fenster.",
                T00_00_003: "Du setzt dich auf deinen Stuhl.",
                T00_00_004: "Pünktlich zum Gong, betritt der Geschichtsprofessor den Raum.",
                T00_00_005: "Die Student*innen setzen sich.",
                T00_00_006: "Die Aufregung durch das baldige Schulfest senkt sich hingegen nicht so schnell.",
                T00_00_007: "Es kehrt Ruhe ein.",
                T00_00_008: "Die Vorlesung beginnt.",
                T01_00_000: "Das typische Läuten kündigt das Ende der Stunde ein.",
                T01_00_001: "Zufrieden streckst du dich etwas, während andere ihre Sachen schnellstmöglich in ihre Rucksäcke packen als würden ihre Leben davon abhängen.",
                T01_00_002: "Der Geschichtsprofessor seufzt kapitulierend.",
                T01_00_003: "Du packst deine Sachen und verlässt den Raum.",
                T02_00_000: "Du ergibst dich deiner Morgenmüdigkeit.",
                T02_00_001: "Deine Augenlieder werden schwer.",
                T02_00_002: "Das monotone Vortragen von längst vergangenen Geschehnissen wiegt dich rekordverdächtig schnell in den Schlaf.",
                T02_00_003: "Ein Läuten reist dich erbarmungslos aus dem Schlaf.",
                T02_00_004: "Du öffnest deine Augen.",
                T02_00_005: "Vereinzelt packen Student*innen ihre Sachen bereits in ihre Rucksäcke.",
                T02_00_006: "Der Geschichtsprofessor seufzt kapitulierend.",
                T02_00_007: "Noch etwas schlaftrunken packst du deine Sachen und verlässt den Raum.",
                T03_00_000: "Du schaust zu der Person, die vor dir sitzt.",
                T03_00_001: "Du zerknüllst ein Stückchen Papier, zielst auf den Kopf der nichtsahnenden Person und wirfst.",
                T03_00_002: "Die Person zuckt leicht zusammen.",
                T03_00_003: "Ein zweites Kügelchen und... Wurf!",
                T03_00_004: "Die Person dreht sich nach dir um.",
                T03_00_005: "Ein giftiger Blick trifft dich.",
                T03_00_006: "Sie dreht sich wieder der Vorlesung zu.",
                T03_00_007: "Das typische Läuten kündigt das Ende der Stunde ein.",
                T03_00_008: "Vereinzelt packen Student*innen ihre Sachen bereits in ihre Rucksäcke.",
                T03_00_009: "Du fängst auch an zu packen.",
                T03_00_010: "Der Geschichtsprofessor seufzt kapitulierend.",
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
                T01_00_001: "Nun haben Sie noch etwas Geduld, bitte.",
                T01_00_002: "Wir werden uns nächste Stunde mit dem letzten Kapitel, und zwar dem Kapitels 10 beschäftigen. Der Stoff hierzu wird zwar nicht in der Klausur drankommen, jedoch ist er trotzdem sehr wichtig. Lesen Sie gerne hierfür bis zur nächsten Stunde die Seiten 99-101.",
                T02_00_000: "Nun haben Sie noch etwas Geduld, bitte.",
                T02_00_001: "Wir werden uns nächste Stunde mit dem letzten Kapitel, und zwar dem Kapitels 10 beschäftigen. Der Stoff hierzu wird zwar nicht in der Klausur drankommen, jedoch ist er trotzdem sehr wichtig. Lesen Sie gerne hierfür bis zur nächsten Stunde die Seiten 99-101.",
                T03_00_000: "Nun haben Sie noch etwas Geduld, bitte.",
                T03_00_001: "Wir werden uns nächste Stunde mit dem letzten Kapitel, und zwar dem Kapitels 10 beschäftigen. Der Stoff hierzu wird zwar nicht in der Klausur drankommen-"
            }
        };
        // #endregion (Text)
        // #region (Decision)
        let lectureStart;
        let lectureStartAnswer = {
            payAttention: "Im Unterricht aufpassen",
            sleep: "Schlafen",
            torment: "Eine*n zufällige*n Student*in belästigen"
        };
        // #endregion (Decision)
        // #region (Play)
        // transition
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomHistory);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Sound.fade(Game.sounds.smallCrowd, 1, 2, true);
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        Game.ƒS.Sound.play(Game.sounds.chairScreeching, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        // professor enters the room
        Game.ƒS.Sound.play(Game.sounds.schoolBell, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_006);
        await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T00_00_002);
        await Game.ƒS.Sound.fade(Game.sounds.smallCrowd, 0, 1, true);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_007);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_008);
        // decide what to do during lecture
        lectureStart = await Game.ƒS.Menu.getInput(lectureStartAnswer, "decisionClass");
        switch (lectureStart) {
            case lectureStartAnswer.payAttention:
                Game.dataForSave.paidAttentionInClass = true;
                Game.dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                // narration
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T01_00_000);
                Game.ƒS.Speech.hide();
                await Game.ƒS.Location.show(Game.locations.black);
                await Game.ƒS.update(1);
                await Game.ƒS.Location.show(Game.locations.classroomHistory);
                await Game.ƒS.update(1);
                // end of lecture
                Game.ƒS.Sound.play(Game.sounds.schoolBell, 1, false);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_000);
                await Game.ƒS.Sound.fade(Game.sounds.smallCrowd, 1, 2, true);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_001);
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T01_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_002);
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T01_00_002);
                Game.ƒS.Sound.play(Game.sounds.zipper, 1, false);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_003);
                break;
            case lectureStartAnswer.sleep:
                Game.dataForSave.sleptInClass = true;
                Game.dataForSave.louisPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                // narration
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_002);
                Game.ƒS.Speech.hide();
                await Game.ƒS.Location.show(Game.locations.black);
                await Game.ƒS.update(1);
                // end of lecture
                Game.ƒS.Sound.play(Game.sounds.schoolBell, 1, false);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_003);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_004);
                await Game.ƒS.Location.show(Game.locations.classroomHistory);
                await Game.ƒS.update(1);
                await Game.ƒS.Sound.fade(Game.sounds.smallCrowd, 1, 2, true);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_005);
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_006);
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T02_00_001);
                Game.ƒS.Sound.play(Game.sounds.zipper, 1, false);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_007);
                break;
            case lectureStartAnswer.torment:
                Game.dataForSave.tormentedSomeoneInClass = true;
                Game.dataForSave.louisPoints -= 10;
                Game.dataForSave.lilyPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                // narration
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_000);
                Game.ƒS.Sound.play(Game.sounds.paper, 1, false);
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
                // end of lecture
                Game.ƒS.Sound.play(Game.sounds.schoolBell, 1, false);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_007);
                await Game.ƒS.Sound.fade(Game.sounds.smallCrowd, 1, 2, true);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_008);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_009);
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T03_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_010);
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T03_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_011);
                Game.ƒS.Sound.play(Game.sounds.zipper, 1, false);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_012);
                break;
        }
        // leaving the room
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Sound.fade(Game.sounds.smallCrowd, 0, 1, true);
        // #endregion (Play)
    }
    Game.scene_2_history_lesson = scene_2_history_lesson;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_3_robotics_lesson() {
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Als nächstes ist die Vorlesung 'Fernbedienbare Robotik' dran.",
                T00_00_001: "In dieser Stunde sollte das Projekt besprochen werden und die Partnerzuteilung stattfinden.",
                T00_00_002: "Du betrittst den Raum und setzt dich auf deinen gewohnten Platz.",
                T00_00_003: "Ein Student, der offensichtlich mit seiner Motivation kämpfen muss, lässt ein niedergeschlagenes Stöhnen verlauten.",
                T00_00_004: "Wirres Gemurmel und Geflüster macht sich breit.",
                T00_00_005: "Angespannt schaust du durch das Zimmer.",
                T00_00_006: "Student*innen fangen an bereits Paare zu bilden.",
                T00_00_007: "Du scheinst richtig Pech heute zu haben.",
                T00_00_008: "Innerhalb weniger Sekunden scheint schon jeder eine*n Partner*in gefunden zu haben, außer dir.",
                T00_00_009: "Nur noch ein Student und eine Studentin scheinen offensichtlich allein dazustehen.",
                T00_00_010: "Du hast zwar noch nie bewusst mit ihnen geredet, kennst sie aber in etwa.",
                T00_00_011: "Wer von den beiden würde eine*n gute*n Partner*in abgeben?",
                T00_00_012: "Nur für das Projekt... So schlimm kann es ja nicht werden.",
                T00_00_013: "Wen willst du dir zuerst anschauen?",
                T00_00_014: "Wen willst du als Partner*in?",
                T00_00_015: "Du verabschiedest dich, verlässt den Raum und gehst nach Hause.",
                T01_00_000: "Ah ja, der Nerd der Klasse. Nicht der einzige. Robotik zieht so einige Leute an, die man als Nerds oder Geeks bezeichnen würde. Dieser hier ist jedoch auch als Klassenbester bekannt und sehr ehrgeizig.",
                T01_00_001: "Ihn kann man gut als Einzelgänger bezeichnen. Ob er ein guter Partner abgeben würde? Nun ja, eine gute Gruppennote müsste bei ihm ja eigentlich schon in der Tasche sein, oder nicht? Da müsste man sich schon großartig dumm anstellen, um das ihm zu vermasseln.",
                T01_00_002: "Aber ist das Arbeiten mit ihm überhaupt aushaltbar? Seinen Respekt gewinnt man am besten durch gute Manieren und Wissensschatz. Ähm… wie war sein Name nochmal überhaupt?",
                T02_00_000: "Tja, der Tollpatsch der Klasse. Kein Witz. Jeden Tag schafft sie es durch den etwas kleineren oder größeren Unfall Aufmerksamkeit zu erregen.",
                T02_00_001: "Mit ihr zusammen das Projekt zu machen, könnte eine Herausforderung werden. Aber vielleicht ist sie ja trotzdem sehr schlau? Tatsächlich weißt du nicht was für Noten sie schreibt.",
                T02_00_002: "Sie wirkt trotz ihrer auffälligen Haarfarbe wie ein fast unsichtbares Mauerblümchen. Menschen mit gutem Herz und Unterstützungsgeist, schätzt sie sehr."
            },
            roboticsTeacher: {
                T00_00_000: "Schön. Es scheint, Sie haben alle erfolgreich hierhergefunden. Das erspart mir, dass ich einen oder mehreren von Ihnen hinterherlaufen muss, denn das Projekt ist Pflicht und nicht freiwillig.",
                T00_00_001: "Nun reißen Sie sich bitte zusammen. Ich werde Ihre Ergebnisse jeweils benoten. Wenn Sie möchten, wäre diese Note dann auch schon die Endnote für diesen Kurs. Ob Sie die angedachte Klausur dann schreiben wollen, ist Ihnen überlassen. Sie wird freiwillig sein. Die Klausur würde dann 50% mit der Projektarbeit zählen. Ist alles soweit klar?",
                T00_00_002: "Ach ja, genau. Das hatte ich vergessen. Manchmal muss ich es gar nicht mehr erwähnen, da es schon jeder wusste.",
                T00_00_003: "Sie werden mithilfe des Wissens und den Materialien von diesem Semester, einen Roboter bauen, der in einem Ring einen anderen Roboter bewegungsunfähig machen soll. Alle Infos hierzu, habe ich online hochgeladen.",
                T00_00_004: "Dann bitte ich Sie, Sich bitte einen Partner oder eine Partnerin auszusuchen mit dem oder der Sie die Projektarbeit bestreiten möchten.",
                T00_00_005: "Wer bereits einen Partner oder eine Partnerin hat, kann gerne gehen. Bitte trefft euch am Freitag hier wieder für die Projektarbeit."
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
        // transition
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomRobotics);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Sound.fade(Game.sounds.smallCrowd, 1, 2, true);
        // getting to your desk
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        Game.ƒS.Sound.play(Game.sounds.chairScreeching, 1, false);
        // teacher talking
        await Game.ƒS.Character.show(Game.characters.roboticsTeacher, Game.characters.roboticsTeacher.pose.neutral, Game.ƒS.positionPercent(50, 100));
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_000);
        await Game.ƒS.Sound.fade(Game.sounds.smallCrowd, 0, 1, true);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.student, text.student.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_003);
        await Game.ƒS.Character.hide(Game.characters.roboticsTeacher);
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        await Game.ƒS.Sound.fade(Game.sounds.smallCrowd, 1, 2, true);
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
        await Game.ƒS.Sound.fade(Game.sounds.smallCrowd, 0, 1, true);
        // looking for a partner
        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral2, Game.ƒS.positionPercent(20, 100));
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(80, 100));
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_010);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_011);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_012);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_013);
        // deciding who to look at first
        partnerSearch = await Game.ƒS.Menu.getInput(partnerSearchAnswer, "decisionClass");
        switch (partnerSearch) {
            case partnerSearchAnswer.louis:
                // looking at louis
                await Game.ƒS.Character.hide(Game.characters.lily);
                await Game.ƒS.update(0.5);
                await Game.ƒS.Character.animate(Game.characters.louis, Game.characters.louis.pose.neutral2, Game.slideFromLeftToMiddleAnimation());
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_002);
                await Game.ƒS.Character.hide(Game.characters.louis);
                await Game.ƒS.update(0.5);
                // looking at lily
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
                // looking at lily
                await Game.ƒS.Character.hide(Game.characters.louis);
                await Game.ƒS.update(0.5);
                await Game.ƒS.Character.animate(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.slideFromRightToMiddleAnimation());
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_002);
                await Game.ƒS.Character.hide(Game.characters.lily);
                await Game.ƒS.update(0.5);
                // looking at louis
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
        // choosing a partner
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_014);
        partnerChoice = await Game.ƒS.Menu.getInput(partnerChoiceAnswer, "decisionClass");
        switch (partnerChoice) {
            case partnerChoiceAnswer.louis:
                Game.dataForSave.partnerChosen = "Louis";
                // talking to louis
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
                // louis' reaction to your behavior in the class before
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
                // respond to louis' question
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
                // going home
                await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_005);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_015);
                await Game.ƒS.Character.hide(Game.characters.louis);
                Game.ƒS.update();
                break;
            case partnerChoiceAnswer.lily:
                Game.dataForSave.partnerChosen = "Lily";
                // talking to lily
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
                // respond to lilys question
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
                // going home
                await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_005);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_015);
                await Game.ƒS.Character.hide(Game.characters.lily);
                Game.ƒS.update();
                break;
        }
        // going home
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        // choosing next scene
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
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Freitag, der nächsten Woche, gehst du wieder zur Hochschule. Wie besproche geht es an die Partnerarbeit.",
                T00_00_001: "Du betritts den Robotik-Vorlesungsraum, der beinahe komplett leer ist. Nur eine Person scheint vor dir angekommen zu sein.",
                T00_00_002: "Kaum war er fertig mit reden, hörst du die Tür sich öffnen.",
                T00_00_003: "Ihr folgt der Professorin in den Lagerraum.",
                T00_00_004: "Du gehst mit Louis wieder zurück in das Klassenzimmer.",
                T00_00_005: "Urplötzlich ist es stockfinster. Wer hat das Licht ausgemacht? Oder ist die Sicherung rausgeflogen?",
                T00_00_006: "Langsam näherst du dich der Tür und dem Lichtschalter. Jedenfalls dort, wo du denkst, dass sie sind.",
                T00_00_007: "Doch da siehst du jemanden oder etwas stehen.",
                T00_00_008: "Du bist mit Louis wieder im Klassenzimmer angekommen.",
                T00_00_009: "Der Gong hat geläutet. Es ist Zeit für den Feierabend",
                T09_00_000: "Du stürzt dich auf den Studenten und reißt ihn zu Boden. Da erkennst du, wer dieser wirklich ist.",
                T10_00_000: "Du schaust Louis mit erwartungsvollen Blick an."
            },
            protagonist: {
                T00_00_000: "Wir sind die Einzigen hier. Bin ich zu früh gekommen?",
                T00_00_001: "...",
                T00_00_002: "Du hast dir ja schon einige Gedanken darüber gemacht.",
                T00_00_003: "Klar. Überlass das mir.",
                T00_00_004: "So... Wo haben wir denn die Hüllen... Ah ha-",
                T00_00_005: "Ha?!",
                T00_00_006: "Verdammt... Ähm... Und was jetzt?",
                T00_00_007: "Oh. Das war es also.",
                T00_00_008: "Puh... Gute Arbeit!",
                T00_00_009: "Bis dann!",
                T01_00_000: "Ach, so ist das. Alles klar. Danke für die Info.",
                T02_00_000: "Ja, gut. Dann warten wir halt.",
                T03_00_000: "Ugh, dabei hatte ich gehofft, dass ich als erstes heute nicht deine Visage sehen muss. Die werde ich ja noch oft genug sehen müssen wegen dieser Partnerarbeit.",
                T04_00_000: "Das sieht echt gut aus! Danke, dass du das schon gemacht hast.",
                T05_00_000: "Ok.",
                T06_00_000: "Uh... Ist die Zeichnung von einem Kindergartenkind oder so? Sieht schon echt schäbig aus. Naja, besser als nichts.",
                T06_00_001: "Nein...",
                T07_00_000: "Hallo? Wer ist da?",
                T07_00_001: "Ja, ich bins.",
                T08_00_000: "...",
                T08_00_001: "J-Ja!",
                T09_00_000: "Stillgestanden! Ich werde dir lehren, was passiert, wenn man sich über " + Game.dataForSave.protagonistName + " lustig macht!",
                T09_00_001: "Oops. Du bists, Louis. Tut mir Leid.",
                T10_01_000: "Ja, gerne!",
                T10_02_000: "Nein, danke."
            },
            louis: {
                T00_00_000: "Guten Morgen, " + Game.dataForSave.protagonistName + ". Bist du bereit, um an unseren Roboter zu arbeiten?",
                T00_00_001: "Nein, du bist recht pünktlich. Es waren schon zwei andere Studenten hier, die sind jedoch schon mit der Professorin in den Lagerraum für Robotikteile gegangen.",
                T00_00_002: "Ich denke, es sollte nicht lange dauern bis sie wieder zurück sind. Danach wird sie uns die Materialien zeigen, die wir benutzen dürfen.",
                T00_00_003: "Ich habe mir bereits Gedanken über unseren Roboter gemacht. Hier ist eine Skizze, die ich angefertigt habe.",
                T00_00_004: "Der Roboter soll offensichtlich an einen Panzer erinnern. Dadurch soll es dem Gegner fast unmöglich sein unseren Roboter umzustoßen. Das wäre unsere Defensive.",
                T00_00_005: "Zur Offensive habe ich mir überlegt eine Schaufel vorne zu installieren. Damit sollte es einfach möglich sein, den Gegner in eine Seiten- oder Rückenlage zu versetzen und somit außer Gefecht zu setzen.",
                T00_00_006: "Klar. Was ist eine Skizze ohne eine gute Erklärung? Ich will den Roboterkampf schließlich gewinnen. Du hoffentlich auch.",
                T00_00_007: "Ich möchte die Professorin nach einem Akku fragen, den ich vorher nicht im Lagerraum gesehen habe. Könntest du währenddessen ein paar Bauteile besorgen, die wir für den Bau der Hülle brauchen könnten?",
                T00_00_008: "Die Professorin hat gesagt, es gab einen Kurzschluss bei einer der Gruppen. Deswegen muss die Sicherung in der gesamten Etage rausgefolgen sein.",
                T00_00_009: "Lass uns an unserem Roboter weiterarbeiten.",
                T00_00_010: "Der Roboter ist fertig!",
                T00_00_011: "Wir werden uns spätestens wieder zum Roboterkampf sehen. Bis dahin!",
                T01_00_000: "Gerne doch.",
                T02_00_000: "Ja.",
                T03_00_000: "...",
                T03_00_001: "Bitte mach solche Scherze nicht, falls es denn einer gewesen sein soll. Mir fällt es schwer zu erkennen, ob du das ernst meinst.",
                T04_00_000: "Gerne. Gut, dass sie dir gefällt.",
                T05_00_000: "...",
                T06_00_000: "... Hast du denn eine bessere Skizze?",
                T06_00_001: "Dann muss dir das wohl reichen.",
                T07_00_000: "Louis. Bist du das, " + Game.dataForSave.protagonistName + "?",
                T07_00_001: "Ok, gut. Nimm meine Hand. Ich führe dich raus.",
                T08_00_000: Game.dataForSave.protagonistName + "... Bist du hier?",
                T08_00_001: "Ok, gut. Nimm meine Hand. Ich führe dich raus.",
                T09_00_000: "Wow, Moment mal-",
                T09_01_000: "Haha, ich will garnicht wissen, was du gesagt hättest, wenn ich die Professorin gewesen wäre.",
                T09_01_001: "Mann, das hat mich jetzt echt überrascht...",
                T09_01_002: "Komm. Lass uns zurück zum Klassenzimmer gehen.",
                T09_02_000: "Was soll das denn?",
                T09_02_001: "Kannst du bitte von mir runter, damit wir zurück ins Klassenzimmer gehen können?",
                T09_03_000: "Pass doch auf!",
                T09_03_001: "Ugh... Kannst du dich denn nicht einfach angemessen verhalten?",
                T09_03_002: "Das ist ja die Hölle... Geh endlich von mir runter!",
                T10_00_000: "Hey, bevor du gehst möchte ich dich noch gerne etwas fragen.",
                T10_00_001: "Würdest du mit mir auf die Mecha-Con dieses Wochenende gehen wollen?",
                T10_01_000: "Cool! Danke, dass du mich begleitest. Ich schreibe dir wann und wo wir uns treffen werden.",
                T10_02_000: "Ok. Das verstehe ich."
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
        let sketch;
        let sketchAnswer = {
            compliment: "Kompliment machen",
            indifferent: "Gleichgültig antworten",
            criticize: "Kritisieren"
        };
        let shadow;
        let shadowAnswer = {
            speakTo: "Ansprechen",
            freeze: "Stehen bleiben",
            tackle: "Tackeln"
        };
        let date;
        let dateAnswer = {
            yes: "Ja",
            no: "Nein"
        };
        // #endregion (Decision)
        // #region (Play)
        // transition
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomRobotics);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        // talking with louis
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
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
        // responding to louis' explanation
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
        // teacher shows up
        await Game.ƒS.Character.hide(Game.characters.louis);
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Character.show(Game.characters.roboticsTeacher, Game.characters.roboticsTeacher.pose.neutral, Game.ƒS.positionPercent(50, 100));
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_000);
        await Game.ƒS.Character.hide(Game.characters.roboticsTeacher);
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        // going to the storage room
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.storageRoom);
        await Game.ƒS.update(1);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        // storage room
        await Game.ƒS.Character.show(Game.characters.roboticsTeacher, Game.characters.roboticsTeacher.pose.neutral, Game.ƒS.positionPercent(50, 100));
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_001);
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        // going to robotics classroom
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomRobotics);
        await Game.ƒS.update(1);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        // talking with louis, presenting the robot idea
        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral2, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_003);
        Game.ƒS.Character.hideAll();
        Game.ƒS.Sound.play(Game.sounds.paper, 1, false);
        await Game.ƒS.Character.show(Game.characters.tankBot, Game.characters.tankBot.pose.sketch, Game.ƒS.positionPercent(50, 70));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_001);
        // responding to louis' sketch
        sketch = await Game.ƒS.Menu.getInput(sketchAnswer, "decisionClass");
        Game.ƒS.Character.hideAll();
        switch (sketch) {
            case sketchAnswer.compliment:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T04_00_000);
                Game.dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.happy1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T04_00_000);
                break;
            case sketchAnswer.indifferent:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T05_00_000);
                Game.dataForSave.louisPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T05_00_000);
                break;
            case sketchAnswer.criticize:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T06_00_000);
                Game.dataForSave.louisPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.angry1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T06_00_000);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T06_00_001);
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T06_00_001);
                break;
        }
        // talking with louis
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_004);
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_006);
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_007);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_003);
        Game.ƒS.Character.hideAll();
        // go to storage room
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.storageRoom);
        await Game.ƒS.update(1);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        // looking for parts
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_004);
        Game.ƒS.Sound.play(Game.sounds.switch, 1, false);
        await Game.ƒS.Location.show(Game.locations.storageRoomDark);
        await Game.ƒS.update(0);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_006);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_006);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_007);
        await Game.ƒS.Character.show(Game.characters.student, Game.characters.student.pose.louis, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update(0);
        // responding to shadow
        shadow = await Game.ƒS.Menu.getInput(shadowAnswer, "decisionClass");
        switch (shadow) {
            case shadowAnswer.speakTo:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T07_00_000);
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T07_00_000);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T07_00_001);
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T07_00_001);
                break;
            case shadowAnswer.freeze:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T08_00_000);
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T08_00_000);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T08_00_001);
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T08_00_001);
                break;
            case shadowAnswer.tackle:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T09_00_000);
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T09_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T09_00_000);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T09_00_001);
                // louis' reaction based on affection points
                if (Game.dataForSave.louisPoints >= 80) {
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T09_01_000);
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T09_01_001);
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T09_01_002);
                }
                else if (Game.dataForSave.louisPoints >= 40) {
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T09_02_000);
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T09_02_001);
                }
                else {
                    Game.dataForSave.louisPoints -= 10;
                    document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T09_03_000);
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T09_03_001);
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T09_03_002);
                }
                break;
        }
        // go back to classroom
        Game.ƒS.Character.hideAll();
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomRobotics);
        await Game.ƒS.update(1);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_008);
        // talking with louis
        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_008);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_007);
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_009);
        // project work is over
        Game.ƒS.Character.hideAll();
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomRobotics);
        await Game.ƒS.update(1);
        Game.ƒS.Sound.play(Game.sounds.schoolBell, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_009);
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.happy1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_010);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_008);
        // louis asks you on a date or not
        if (Game.dataForSave.louisPoints >= 70) {
            Game.ƒS.Character.hideAll();
            await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.happy2, Game.ƒS.positionPercent(50, 100));
            await Game.ƒS.update();
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T10_00_000);
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T10_00_000);
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T10_00_001);
            // decide to go on date or not
            date = await Game.ƒS.Menu.getInput(dateAnswer, "decisionClass");
            switch (date) {
                case dateAnswer.yes:
                    await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T10_01_000);
                    Game.ƒS.Character.hideAll();
                    await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.happy1, Game.ƒS.positionPercent(50, 100));
                    await Game.ƒS.update();
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T10_01_000);
                    return "dateLouis";
                case dateAnswer.no:
                    await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T10_02_000);
                    Game.ƒS.Character.hideAll();
                    await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.sad1, Game.ƒS.positionPercent(50, 100));
                    await Game.ƒS.update();
                    await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T10_02_000);
                    break;
            }
        }
        // go home
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_011);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_009);
        return "dateNone";
        // #endregion (Play)
    }
    Game.scene_4a_storage_room_louis = scene_4a_storage_room_louis;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_4b_storage_room_lily() {
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Freitag, der nächsten Woche, gehst du wieder zur Hochschule. Wie besproche geht es an die Partnerarbeit.",
                T00_00_001: "Du betritts den Robotik-Vorlesungsraum, der beinahe komplett leer ist. Nur eine Person scheint vor dir angekommen zu sein.",
                T00_00_002: "Kaum war er fertig mit reden, hörst du die Tür sich öffnen.",
                T00_00_003: "Ihr folgt der Professorin in den Lagerraum.",
                T00_00_004: "Du gehst mit Lily wieder zurück in das Klassenzimmer.",
                T00_00_005: "Urplötzlich ist es stockfinster. Wer hat das Licht ausgemacht? Oder ist die Sicherung rausgeflogen?",
                T00_00_006: "Langsam näherst du dich der Tür und dem Lichtschalter. Jedenfalls dort, wo du denkst, dass sie sind.",
                T00_00_007: "Doch da siehst du jemanden oder etwas stehen.",
                T00_00_008: "Du bist mit Lily wieder im Klassenzimmer angekommen.",
                T00_00_009: "Der Gong hat geläutet. Es ist Zeit für den Feierabend",
                T09_00_000: "Du stürzt dich auf den Studenten und reißt ihn zu Boden. Da erkennst du, wer dieser wirklich ist.",
                T10_00_000: "Du schaust Lily mit erwartungsvollen Blick an."
            },
            protagonist: {
                T00_00_000: "Wir sind die Einzigen hier. Bin ich zu früh gekommen?",
                T00_00_001: "...",
                T00_00_002: "Du hast dir ja schon einige Gedanken darüber gemacht.",
                T00_00_003: "Klar. Überlass das mir.",
                T00_00_004: "So... Wo haben wir denn die Hüllen... Ah ha-",
                T00_00_005: "Ha?!",
                T00_00_006: "Verdammt... Ähm... Und was jetzt?",
                T00_00_007: "Oh. Das war es also.",
                T00_00_008: "Puh... Gute Arbeit!",
                T00_00_009: "Bis dann!",
                T01_00_000: "Ach, so ist das. Alles klar. Danke für die Info.",
                T02_00_000: "Ja, gut. Dann warten wir halt.",
                T03_00_000: "Ugh, dabei hatte ich gehofft, dass ich als erstes heute nicht deine Visage sehen muss. Die werde ich ja noch oft genug sehen müssen wegen dieser Partnerarbeit.",
                T04_00_000: "Das sieht echt gut aus! Danke, dass du das schon gemacht hast.",
                T05_00_000: "Ok.",
                T06_00_000: "Uh... Ist die Zeichnung von einem Kindergartenkind oder so? Sieht schon echt schäbig aus. Naja, besser als nichts.",
                T06_00_001: "Was solls... Besser als nichts.",
                T07_00_000: "Hallo? Wer ist da?",
                T07_00_001: "Ja, ich bins.",
                T08_00_000: "...",
                T08_00_001: "J-Ja!",
                T09_00_000: "Stillgestanden! Ich werde dir lehren, was passiert, wenn man sich über " + Game.dataForSave.protagonistName + " lustig macht!",
                T09_00_001: "Oops. Du bists, Lily. Tut mir Leid.",
                T10_01_000: "Ja, gerne!",
                T10_02_000: "Nein, danke."
            },
            lily: {
                T00_00_000: "Guten Morgen, " + Game.dataForSave.protagonistName + "! Bist du bereit, um an unseren Roboter zu arbeiten?",
                T00_00_001: "Wir sollten eigentlich pünktlich sein. Es waren schon andere hier vor mir. Die Professorin zeigt ihnen gerade den Lagerraum für die Robotikteile.",
                T00_00_002: "Es sollte nicht lange dauern bis sie wieder zurück sind, denke ich. Danach sind wahrscheinlich wir dran.",
                T00_00_003: "Ich habe mir bereits ein paar Gedanken über unseren Roboter gemacht. Hier, das habe ich dazu gezeichnet.",
                T00_00_004: "Der Roboter ist praktisch ein Auto mit Boxhandschuhen. Ich dachte, es sei eine nette Idee.",
                T00_00_005: "Die Räder macht unser Roboter schnell und agil. Mit den Armen kann er dann andere Roboter auch umstoßen.",
                T00_00_006: "J-Ja. Ich hatte echt Spaß dabei. Ich hoffe, dir gefällt er auch so sehr wie mir.",
                T00_00_007: "Ich möchte die Professorin fragen wie wir die Boxhandschuhe am besten umsetzen. Kannst du währenddessen vielleicht im Lagerraum nach passenden Teilen suchen?",
                T00_00_008: "Die Professorin hat gesagt, es gab einen Kurzschluss. Die Sicherung in der gesamten Etage muss rausgefolgen sein.",
                T00_00_009: "Lass uns an unserem Roboter weiterarbeiten.",
                T00_00_010: "Der Roboter ist fertig! Yay!",
                T00_00_011: "Wir sehen uns dann zum Roboterkampf wieder. Ich wünsche dir ein schönes Wochenende!",
                T01_00_000: "Kein Problem!",
                T02_00_000: "Mhm...",
                T03_00_000: "...",
                T03_00_001: "Ah... Tut mir leid...",
                T04_00_000: "Danke für das Kompliment! Ich bin echt erleichtert, dass dass sie dir gefällt.",
                T05_00_000: "Mhm...",
                T06_00_000: "E-Entschuldigung. Ich weiß, ich bin nicht gut im Zeichnen...",
                T07_00_000: "Ich bins. Lily. Bist du das, " + Game.dataForSave.protagonistName + "?",
                T07_00_001: "Ok. Nimm meine Hand. Ich führe dich raus. Ok?",
                T08_00_000: Game.dataForSave.protagonistName + "... Bist du hier?",
                T08_00_001: "Ok. Nimm meine Hand. Ich führe dich raus. Ok?",
                T09_00_000: "W-Warte!",
                T09_01_000: "Hahaha... Wusstest du heimlich, dass ich es bin?",
                T09_01_001: "Du hast mir echt Angst gemacht. Aber alles ist ok. Ich hoffe, du hast dir nicht wehgetan.",
                T09_01_002: "L-Lass uns zurück ins Klassenzimmer gehen. Ja?",
                T09_02_000: "H-Hey. Was machst du?",
                T09_02_001: "Was wenn die Professorin stattdessen hier gestanden hätte? Zum Glück war es nur ich.",
                T09_03_000: "H-Hey!",
                T09_03_001: "Bitte geh von mir runter, bitte...",
                T09_03_002: "Ich würde gern wieder ins Klassenzimmer gehen.",
                T10_00_000: "Hey... Bevor du gehst möchte ich dich noch etwas fragen.",
                T10_00_001: "Willst du mit mir das Schmetterlingshaus dieses Wochenende besuchen?",
                T10_01_000: "Yay! Danke, dass du mich begleitest. Ich schreibe dir dann wann und wo wir uns treffen werden. Ich hoffe mich schon voll drauf!",
                T10_02_000: "Kein Problem, das verstehe ich!"
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
            joke: "Ihr gegenüber einen feindseligen Scherz machen"
        };
        let sketch;
        let sketchAnswer = {
            compliment: "Kompliment machen",
            indifferent: "Gleichgültig antworten",
            criticize: "Kritisieren"
        };
        let shadow;
        let shadowAnswer = {
            speakTo: "Ansprechen",
            freeze: "Stehen bleiben",
            tackle: "Tackeln"
        };
        let date;
        let dateAnswer = {
            yes: "Ja",
            no: "Nein"
        };
        // #endregion (Decision)
        // #region (Play)
        // transition
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomRobotics);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        // talking with lily
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_000);
        await Game.ƒS.Character.hide(Game.characters.lily);
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.happy2, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_001);
        await Game.ƒS.Character.hide(Game.characters.lily);
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_002);
        // responding to lilys explanation
        explanation = await Game.ƒS.Menu.getInput(explanationAnswer, "decisionClass");
        switch (explanation) {
            case explanationAnswer.thank:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T01_00_000);
                Game.dataForSave.lilyPoints += 10;
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                await Game.ƒS.Character.hide(Game.characters.lily);
                await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.happy1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T01_00_000);
                break;
            case explanationAnswer.indifferent:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T02_00_000);
                break;
            case explanationAnswer.joke:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T03_00_000);
                Game.dataForSave.lilyPoints -= 10;
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                await Game.ƒS.Character.hide(Game.characters.lily);
                await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.sad2, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T03_00_000);
                await Game.ƒS.Character.hide(Game.characters.lily);
                await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.sad1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T03_00_001);
                break;
        }
        // teacher shows up
        await Game.ƒS.Character.hide(Game.characters.lily);
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Character.show(Game.characters.roboticsTeacher, Game.characters.roboticsTeacher.pose.neutral, Game.ƒS.positionPercent(50, 100));
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_000);
        await Game.ƒS.Character.hide(Game.characters.roboticsTeacher);
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        // going to the storage room
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.storageRoom);
        await Game.ƒS.update(1);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        // storage room
        await Game.ƒS.Character.show(Game.characters.roboticsTeacher, Game.characters.roboticsTeacher.pose.neutral, Game.ƒS.positionPercent(50, 100));
        Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_001);
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        // going to robotics classroom
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomRobotics);
        await Game.ƒS.update(1);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        // talking with lily, presenting the robot idea
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral2, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_003);
        Game.ƒS.Character.hideAll();
        Game.ƒS.Sound.play(Game.sounds.paper, 1, false);
        await Game.ƒS.Character.show(Game.characters.carBot, Game.characters.carBot.pose.sketch, Game.ƒS.positionPercent(50, 70));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_001);
        // responding to lilys sketch
        sketch = await Game.ƒS.Menu.getInput(sketchAnswer, "decisionClass");
        Game.ƒS.Character.hideAll();
        switch (sketch) {
            case sketchAnswer.compliment:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T04_00_000);
                Game.dataForSave.lilyPoints += 10;
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.happy1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T04_00_000);
                break;
            case sketchAnswer.indifferent:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T05_00_000);
                Game.dataForSave.lilyPoints -= 10;
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T05_00_000);
                break;
            case sketchAnswer.criticize:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T06_00_000);
                Game.dataForSave.lilyPoints -= 10;
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.sad2, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T06_00_000);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T06_00_001);
                break;
        }
        // talking with lily
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_004);
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_006);
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_007);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_003);
        Game.ƒS.Character.hideAll();
        // go to storage room
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.storageRoom);
        await Game.ƒS.update(1);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        // looking for parts
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_004);
        Game.ƒS.Sound.play(Game.sounds.switch, 1, false);
        await Game.ƒS.Location.show(Game.locations.storageRoomDark);
        await Game.ƒS.update(0);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_006);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_006);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_007);
        await Game.ƒS.Character.show(Game.characters.student, Game.characters.student.pose.lily, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update(0);
        // responding to shadow
        shadow = await Game.ƒS.Menu.getInput(shadowAnswer, "decisionClass");
        switch (shadow) {
            case shadowAnswer.speakTo:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T07_00_000);
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T07_00_000);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T07_00_001);
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T07_00_001);
                break;
            case shadowAnswer.freeze:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T08_00_000);
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T08_00_000);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T08_00_001);
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T08_00_001);
                break;
            case shadowAnswer.tackle:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T09_00_000);
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T09_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T09_00_000);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T09_00_001);
                // lilys reaction based on affection points
                if (Game.dataForSave.lilyPoints >= 80) {
                    await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T09_01_000);
                    await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T09_01_001);
                    await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T09_01_002);
                }
                else if (Game.dataForSave.lilyPoints >= 40) {
                    await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T09_02_000);
                    await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T09_02_001);
                }
                else {
                    Game.dataForSave.lilyPoints -= 10;
                    document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                    await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T09_03_000);
                    await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T09_03_001);
                    await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T09_03_002);
                }
                break;
        }
        // go back to classroom
        Game.ƒS.Character.hideAll();
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomRobotics);
        await Game.ƒS.update(1);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_008);
        // talking with lily
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_008);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_007);
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_009);
        // project work is over
        Game.ƒS.Character.hideAll();
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomRobotics);
        await Game.ƒS.update(1);
        Game.ƒS.Sound.play(Game.sounds.schoolBell, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_009);
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.happy1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_010);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_008);
        // lily asks you on a date or not
        if (Game.dataForSave.lilyPoints >= 70) {
            Game.ƒS.Character.hideAll();
            await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.happy2, Game.ƒS.positionPercent(50, 100));
            await Game.ƒS.update();
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T10_00_000);
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T10_00_000);
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T10_00_001);
            // decide to go on date or not
            date = await Game.ƒS.Menu.getInput(dateAnswer, "decisionClass");
            switch (date) {
                case dateAnswer.yes:
                    await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T10_01_000);
                    Game.ƒS.Character.hideAll();
                    await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.happy1, Game.ƒS.positionPercent(50, 100));
                    await Game.ƒS.update();
                    await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T10_01_000);
                    return "dateLily";
                case dateAnswer.no:
                    await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T10_02_000);
                    Game.ƒS.Character.hideAll();
                    await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.sad1, Game.ƒS.positionPercent(50, 100));
                    await Game.ƒS.update();
                    await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T10_02_000);
                    break;
            }
        }
        // go home
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_011);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_009);
        return "dateNone";
        // #endregion (Play)
    }
    Game.scene_4b_storage_room_lily = scene_4b_storage_room_lily;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_5a_date_louis() {
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Am nächsten Tag triffst du dich wie abgemacht mit Louis in der Mecha-Convention.",
                T00_00_001: "Du schaust nach links und dort ist Louis, der mit einem Lächeln auf dich zugeht.",
                T00_00_002: "Du verbringst eine schöne Zeit gemeinsam mit Louis auf der Con.",
                T00_00_003: "Ihr redet über Mechas und Anime während ihr euch die Ausstellungen und Stände anschschaut. Louis scheint ein richtiger Fan zu sein.",
                T00_00_004: "Jetzt wäre die Gelegenheit ihm ebenso ein Geschenk zu kaufen.",
                T00_00_005: "Ein Anhänger wurde in dein Inventar hinzugefügt.",
                T04_00_000: "Du gehst an einen Stand der Merchandise für den neuen Anime 'Evolution: The End Of Evolution' verkauft.",
                T04_00_001: "Du erinnerst dich, dass Louis sehr enthusiastisch darüber war und entscheidest dich dafür einen kleinen Anhänger für ihn zu kaufen.",
                T04_00_002: "Sobald du fertig bist, gehst du wieder zurück an euren Treffpunkt."
            },
            louis: {
                T00_00_000: Game.dataForSave.protagonistName + ". Ich bin hier!",
                T00_00_001: "Hallo. Schön, dass du da bist.",
                T00_00_002: "Ich kann es kaum abwarten 'Evolution: The End Of Evolution' zu sehen!",
                T00_00_003: "Oh... Ist das alles überhaupt interessant für dich?",
                T00_00_004: "Ich habe es erledigt. Hier, nimm das bitte. Ich hoffe es gefällt dir.",
                T00_00_005: "Es ist ein Anhänger von dem Mecha 'Lancebot' aus dem Anime 'Code Gas'. Wenn du ihn nicht willst, kannst du ihn auch gerne verschenken.",
                T00_00_006: "Ich denke, es ist Zeit zu gehen. Vielen Dank, dass du mich begleitet hast. Es war schön jemanden da zu haben.",
                T00_00_007: "Ciao.",
                T01_00_000: "Das freut mich! Es ist schon seit langem ein Hobby von mir.",
                T01_00_001: "Ich würde dir gerne ein Andenken mitgeben. Wartest du kurz hier auf mich?",
                T02_00_000: "Das ist nett von dir, dass du das sagst. Und danke, dass du ehrlich bist.",
                T02_00_001: "Nun... Ich würde dir trotzdem gerne ein Andenken mitgeben. Ich hoffe, das ist OK. Wartest du kurz hier auf mich?",
                T03_00_000: "D-Das tut mir leid. Ich hätte früher bemerken sollen, dass du dich langweilst.",
                T03_00_001: "Ich würde dir gerne eine kleine Entschädigung schenken, wenn das OK ist. Wartest du kurz hier auf mich?",
                T04_00_000: "Das hast du für mich getan? ... Das habe ich nicht erwartet. Danke! Der ist ja sogar vom neuen 'Evolution' Anime! Dankeschön."
            },
            protagonist: {
                T00_00_000: "Hi, Louis!",
                T00_00_001: "Dankeschön. Das ist lieb von dir.",
                T00_00_002: "Kein Problem. Wir sehen uns dann an der Uni wieder.",
                T00_00_003: "Ciao.",
                T01_00_000: "Ja! Ich wusste garnicht, dass es eine Mecha-Con hier in der Nähe gibt. Das ist alles echt interessant.",
                T01_00_001: "Klar!",
                T02_00_000: "Hm... Nicht allzu sehr, aber ich finde es toll wie viel Leidenschaft du dafür hast. Das ist doch alles was zählt.",
                T02_00_001: "Klar.",
                T03_00_000: "Nein. Das ist alles ziemlich langweilig für mich. Können wir bald gehen?",
                T03_00_001: "OK.",
                T04_00_000: "Schau, ich habe dir auch einen Anhänger gekauft, solange du weg warst.",
                T04_00_001: "Gerne doch. Freut mich, dass er dir gefällt und du ihn noch nicht hattest. Sonst hättest du jetzt zwei, haha."
            }
        };
        // #endregion (Text)
        // #region (Decision)
        let interest;
        let interestAnswer = {
            yes: "Ja",
            noPolite: "Höfliches Nein",
            noImpolite: "Unhöfliches Nein"
        };
        let gift;
        let giftAnswer = {
            buy: "Geschenk kaufen",
            dontBuy: "Kein Geschenk kaufen"
        };
        // #endregion (Decision)
        // #region (Play)
        // transition
        Game.ƒS.Speech.hide();
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.mechaCon);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Sound.fade(Game.sounds.bigCrowd, 1, 2, true);
        // talking with louis
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.happy1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_002);
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.sad1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_003);
        // tell louis if you find the con interesting
        interest = await Game.ƒS.Menu.getInput(interestAnswer, "decisionClass");
        switch (interest) {
            case interestAnswer.yes:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T01_00_000);
                Game.dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                Game.ƒS.Character.hideAll();
                await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.joyful1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T01_00_000);
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T01_00_001);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T01_00_001);
                break;
            case interestAnswer.noPolite:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T02_00_000);
                Game.dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                Game.ƒS.Character.hideAll();
                await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.happy1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T02_00_001);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T02_00_001);
                break;
            case interestAnswer.noImpolite:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T03_00_000);
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T03_00_000);
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T03_00_001);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T03_00_001);
                break;
        }
        // decide to buy a gift for louis or not
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        Game.ƒS.Character.hideAll();
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        gift = await Game.ƒS.Menu.getInput(giftAnswer, "decisionClass");
        switch (gift) {
            case giftAnswer.buy:
                Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T04_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T04_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T04_00_002);
                break;
            case giftAnswer.dontBuy:
                break;
        }
        // get your gift from louis
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.neutral1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_004);
        Game.ƒS.Inventory.add(Game.items.keychainLancebot);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_001);
        // give louis the gift if you bought one
        switch (gift) {
            case giftAnswer.buy:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T04_00_000);
                Game.dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(Game.dataForSave.louisPoints));
                Game.ƒS.Character.hideAll();
                await Game.ƒS.Character.show(Game.characters.louis, Game.characters.louis.pose.joyful1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T04_00_000);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T04_00_001);
                break;
            case giftAnswer.dontBuy:
                break;
        }
        // saying goodbye
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_006);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_007);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_003);
        await Game.ƒS.Sound.fade(Game.sounds.bigCrowd, 0, 1, true);
        return "robotFight";
        // #endregion (Play)
    }
    Game.scene_5a_date_louis = scene_5a_date_louis;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_5b_date_lily() {
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Am nächsten Tag triffst du dich wie abgemacht mit Lily im Schmetterlingshaus.",
                T00_00_001: "Du schaust nach links und dort ist Lily, die mit einem Lächeln auf dich zugeht.",
                T00_00_002: "Du verbringst eine schöne Zeit gemeinsam mit Lily im Schmetterlingshaus.",
                T00_00_003: "Ihr redet über all die bunten Schmetterlinge während ihr sie gespannt betrachtet. Lily scheint ein richtiger Fan zu sein.",
                T00_00_004: "Jetzt wäre die Gelegenheit ihr ebenso ein Geschenk zu kaufen.",
                T00_00_005: "Ein Pin wurde in dein Inventar hinzugefügt.",
                T04_00_000: "Du gehst an einen Stand der Pins mit bunten Schmetterlingen verkauft.",
                T04_00_001: "Du erinnerst dich, dass Lily besonders von orangen Schmetterlingen angetan war und entscheidest dich dafür einen Pin für sie zu kaufen.",
                T04_00_002: "Sobald du fertig bist, gehst du wieder zurück an euren Treffpunkt."
            },
            lily: {
                T00_00_000: Game.dataForSave.protagonistName + ". Ich bin hier!",
                T00_00_001: "Hi! Schön dich zu sehen.",
                T00_00_002: "Ich liebe besonders orangene Schmetterlinge! Orange ist meine Lieblingsfarbe. Vielleicht sieht man es mir an. Haha.",
                T00_00_003: "Oh... Ist das alles überhaupt interessant für dich?",
                T00_00_004: "Da bin ich wieder. Hier, bitte, das ist für dich. Ich hoffe es gefällt dir...",
                T00_00_005: "Es ist ein Pin, der etwas an einen blauen Morphofalter erinnert. Wenn du ihn nicht willst, kannst du ihn auch verschenken...",
                T00_00_006: "Oh- Es ist Zeit zu gehen. Danke, dass du mit mir hier warst.",
                T00_00_007: "Bis dann!",
                T01_00_000: "Das ist eine Erleichterung! Ich habe Schmetterlinge schon als Kind geliebt.",
                T01_00_001: "Ich würde dir gerne ein kleines Andenken geben. Wartest du ganz kurz hier?",
                T02_00_000: "Tut mir leid, dass es dir nicht so gefällt.",
                T02_00_001: "I-Ich würde dir trotzdem gerne ein kleines Andenken schenken. Ich hoffe, das ist OK. Wartest du kurz hier?",
                T03_00_000: "D-Das tut mir leid. Ich hätte früher bemerken sollen, dass du dich langweilst.",
                T03_00_001: "Ich würde dir gerne eine kleine Entschädigung schenken. Wartest du ganz kurz hier?",
                T04_00_000: "W-Wirklich? Dankeschön! Ooh! Der sieht aus wie ein Monarchfalter. Danke!"
            },
            protagonist: {
                T00_00_000: "Hi, Lily!",
                T00_00_001: "Dankeschön. Das ist lieb von dir.",
                T00_00_002: "Kein Problem. Wir sehen uns dann an der Uni wieder.",
                T00_00_003: "Tschüss!",
                T01_00_000: "Ja. Ich wusste garnicht, dass das Schmetterlingshaus schon geöffnet hat. Sie sind alle so schön.",
                T01_00_001: "Natürlich.",
                T02_00_000: "Hm... Nicht allzu sehr, aber ich finde es toll wie viel Leidenschaft du dafür hast. Das ist doch alles was zählt.",
                T02_00_001: "Natürlich.",
                T03_00_000: "Nein. Das ist alles ziemlich langweilig für mich. Können wir bald gehen?",
                T03_00_001: "OK.",
                T04_00_000: "Schau, ich habe dir auch einen Pin gekauft, solange du weg warst.",
                T04_00_001: "Gerne doch. Freut mich, dass er dir gefällt und du ihn noch nicht hattest. Sonst hättest du jetzt zwei, haha."
            }
        };
        // #endregion (Text)
        // #region (Decision)
        let interest;
        let interestAnswer = {
            yes: "Ja",
            noPolite: "Höfliches Nein",
            noImpolite: "Unhöfliches Nein"
        };
        let gift;
        let giftAnswer = {
            buy: "Geschenk kaufen",
            dontBuy: "Kein Geschenk kaufen"
        };
        // #endregion (Decision)
        // #region (Play)
        // transition
        Game.ƒS.Speech.hide();
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.butterflyHouse);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        Game.ƒS.Sound.play(Game.sounds.sparrows, 1, true);
        // talking with lily
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.happy1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_002);
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.sad1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_003);
        // tell lily if you find the butterfly house interesting
        interest = await Game.ƒS.Menu.getInput(interestAnswer, "decisionClass");
        switch (interest) {
            case interestAnswer.yes:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T01_00_000);
                Game.dataForSave.lilyPoints += 10;
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                Game.ƒS.Character.hideAll();
                await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.joyful1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T01_00_000);
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T01_00_001);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T01_00_001);
                break;
            case interestAnswer.noPolite:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T02_00_000);
                Game.dataForSave.lilyPoints += 10;
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                Game.ƒS.Character.hideAll();
                await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.happy1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T02_00_001);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T02_00_001);
                break;
            case interestAnswer.noImpolite:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T03_00_000);
                Game.dataForSave.lilyPoints -= 10;
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T03_00_000);
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T03_00_001);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T03_00_001);
                break;
        }
        // decide to buy a gift for lily or not
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        Game.ƒS.Character.hideAll();
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        gift = await Game.ƒS.Menu.getInput(giftAnswer, "decisionClass");
        switch (gift) {
            case giftAnswer.buy:
                Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T04_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T04_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T04_00_002);
                break;
            case giftAnswer.dontBuy:
                break;
        }
        // get your gift from lily
        Game.ƒS.Sound.play(Game.sounds.footstepsTiles, 1, false);
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_004);
        Game.ƒS.Inventory.add(Game.items.pinBlue);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_001);
        // give lily the gift if you bought one
        switch (gift) {
            case giftAnswer.buy:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T04_00_000);
                Game.dataForSave.lilyPoints += 10;
                document.getElementById("lilyBar").setAttribute("value", String(Game.dataForSave.lilyPoints));
                Game.ƒS.Character.hideAll();
                await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.joyful1, Game.ƒS.positionPercent(50, 100));
                await Game.ƒS.update();
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T04_00_000);
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T04_00_001);
                break;
            case giftAnswer.dontBuy:
                break;
        }
        // saying goodbye
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Character.show(Game.characters.lily, Game.characters.lily.pose.neutral1, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_006);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_007);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_003);
        await Game.ƒS.Sound.fade(Game.sounds.sparrows, 0, 1, true);
        return "robotFight";
        // #endregion (Play)
    }
    Game.scene_5b_date_lily = scene_5b_date_lily;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_5c_date_none() {
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Du verbringst das Wochenende allein und gehst zum Roboterkampf wieder zur Uni."
            }
        };
        // #endregion (Text)
        // #region (Play)
        // transition
        Game.ƒS.Speech.hide();
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        // narration
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        return "robotFight";
        // #endregion (Play)
    }
    Game.scene_5c_date_none = scene_5c_date_none;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_6_robot_fight() {
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Heute ist endlich der Tag. Der Tag des Roboterkampfs.",
                T00_00_001: "Wie wirst du dich im Kammpf mit einem gegnerischen Roboter schlagen? Es wird Zeit es herauszufinden.",
                T00_00_002: "Gespannt begibst du dich zum Klassenzimmer, wo der Kampf auch schon augenblicklich anfangen wird...",
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
                ItemUsed: "Du erhältst Tipps von deinem Projektpartner.",
                NoSecondBot: "Du hast keinen zweiten Roboter.",
                AreYouSure: "Bist du dir sicher?",
                YouWin: "Du hast gewonnen! Eine Medaille wurde in dein Inventar hinzugefügt.",
                YouLose: "Du hast verloren."
            },
            roboticsTeacher: {
                T00_00_000: "Auf die Plätze... fertig... los!",
                T00_00_001: "Das war es mit dem Roboterkampf. Danke an alle Studenten, die teilgenommen haben.",
                T00_00_002: "Da alle Gruppen so eine tolle Leistung vollbracht haben, habe ich entschieden, dass es doch keine Klausur geben wird. Ihr habt euch schließlich alle schon sehr gute Noten erkämpft."
            },
            protagonist: {
                T00_00_000: "Nice!"
            },
            louis: {
                T00_00_000: "Stoßen fügt dem Gegner 10 Punkte Schaden zu.",
                T00_00_001: "Umstoßen fügt dem Gegner 50 Punkte Schaden zu. Die Wahrscheinlichkeit, dass das aber wirklich funktioniert beträgt ungefähr 33%.",
                T00_00_002: "Aufladen verdoppelt den Schaden, de du dem Gegner hinzufügst.",
                T00_00_003: "Ausweichen weicht jeder gegnerischen Attacke aus.",
                T00_00_004: "Viel Glück!",
                T00_00_005: "Gute Arbeit, " + Game.dataForSave.protagonistName + "."
            },
            lily: {
                T00_00_000: "Stoßen fügt dem Gegner 10 Punkte Schaden zu.",
                T00_00_001: "Umstoßen fügt dem Gegner 50 Punkte Schaden zu. Die Wahrscheinlichkeit, dass das aber wirklich funktioniert beträgt ungefähr 33%.",
                T00_00_002: "Aufladen verdoppelt den Schaden, dem du den Gegner hinzufügst.",
                T00_00_003: "Ausweichen weicht jeder gegnerischen Attacke aus.",
                T00_00_004: "Viel Glück!",
                T00_00_005: "Gute Arbeit, " + Game.dataForSave.protagonistName + "!"
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
        // transition
        Game.ƒS.Speech.hide();
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.schoolBuildingFest);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        // front of campus
        Game.ƒS.Sound.play(Game.sounds.sparrows, 1, true);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        Game.ƒS.Sound.play(Game.sounds.enterSchoolBuilding, 1, false);
        await Game.ƒS.Sound.fade(Game.sounds.sparrows, 0, 1, true);
        // transition
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomFest);
        await Game.ƒS.update(1);
        // robot fight start
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
                    await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.NoSecondBot);
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
                        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_000);
                        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_001);
                        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_002);
                        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_003);
                        await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_004);
                    }
                    else {
                        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_001);
                        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_002);
                        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_003);
                        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_004);
                        await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_005);
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
            Game.ƒS.Inventory.add(Game.items.medal);
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.YouWin);
            document.getElementById("fightBars").setAttribute("style", "visibility: hidden");
        }
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_002);
        Game.ƒS.Sound.play(Game.sounds.cheer, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_000);
        switch (Game.dataForSave.partnerChosen) {
            case "Louis":
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_005);
                return "endLouis";
            case "Lily":
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_005);
                return "endLily";
        }
        // #endregion (Play)
    }
    Game.scene_6_robot_fight = scene_6_robot_fight;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_7a_ending_louis() {
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Der Roboterkampf ist zu Ende und das Schulfest neigt sich dem Ende zu.",
                T01_00_000: "Louis hat dich mit einer ihm unüblichen Röte im Gesicht dazu eingeladen sich am Hügel hinter dem Hochschulgebäude zu treffen.",
                T01_00_001: "Lächelnd hast du dem Treffen zugesagt.",
                T02_00_000: "Louis hat dich dazu eingeladen sich am Hügel hinter dem Hochschulgebäude zu treffen.",
                T03_00_000: "Louis hat dich allein gelassen. Er scheint besseres zu tun zu haben als noch etwas Zeit mit dir zu verbringen.",
                T03_00_001: "Als du über das Hochschulgelände läufst, beobachtest du das bunte Treiben und energetische Unterhaltungen.",
                T03_00_002: "Nach einer Weile entscheidest du dich dazu nach Hause zu gehen."
            },
            louis: {
                T01_00_000: "Hi " + Game.dataForSave.protagonistName + ". Schön, dass wir uns noch treffen können.",
                T01_00_001: "Ich wollte dir noch etwas wichtiges sagen...",
                T01_00_002: "Ich schätze die Zeit, die ich mit dir verbringen durfte. Es war schön mit dir die Projektarbeit zu machen. Du gibst mir das Gefühl, dass ich mich auf dich verlassen kann.",
                T01_00_003: "Das bedeutet mir sehr viel. Es gibt wenige Menschen, denen ich so vertrauen könnte.",
                T01_00_004: "Du warst immerzu nett zu mir... Danke.",
                T01_00_005: "Mich würde es freuen, wenn wir Freunde sein könnten und naja... In Zukunft weiterhin Sachen unternehmen könnten.",
                T01_00_006: "Das wars von mir erstmal... Komm gut nach Hause, OK?",
                T02_00_000: "Hi " + Game.dataForSave.protagonistName + ". Schön, dass wir uns noch treffen können.",
                T02_00_001: "Es war angenehm mit dir die Projektarbeit zu verbringen. Du warst ein guter Projektpartner.",
                T02_00_002: "Ich denke, ich wollte einfach nur 'Danke' sagen. Also... Danke.",
                T02_00_003: "Es wäre schön, wenn wir Freunde sein könnten.",
                T02_00_004: "Das wars eigentlich schon. Wir sehen uns dann mal wieder, wenn du willst. Auf Wiedersehen."
            }
        };
        // #endregion (Text)
        // #region (Play)
        // transition
        Game.ƒS.Speech.hide();
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.schoolBuildingFest);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        // end of school fest
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        // get 1 out of 3 ends (decided by affection points)
        if (Game.dataForSave.louisPoints >= 100) {
            // narration
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_000);
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_001);
            Game.ƒS.Speech.hide();
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(1);
            await Game.ƒS.Location.show(Game.locations.endSceneLouis);
            await Game.ƒS.update(1);
            await Game.ƒS.Sound.fade(Game.sounds.endTheme, 1, 1, true);
            // talking with louis
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T01_00_000);
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T01_00_001);
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T01_00_002);
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T01_00_003);
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T01_00_004);
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T01_00_005);
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T01_00_006);
            // letter from louis
            Game.ƒS.Speech.hide();
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(1);
            Game.ƒS.Sound.play(Game.sounds.paper, 1, false);
            Game.ƒS.Text.addClass("louisLetter");
            await Game.ƒS.Text.print("<h2>Liebe/r " + Game.dataForSave.protagonistName + ",</h2>" +
                "<p>ich wollte dir nochmal schreiben über das, was ich auf dem Hügel gesagt habe.</p>" +
                "<p>Es ist etwas persönlich, jedoch möchte ich, dass du mich richtig verstehst.</p>" +
                "<p>Nicht viele Menschen sind so wie du, " + Game.dataForSave.protagonistName + ".</p>" +
                "<p>Viele Menschen gehen entweder gehässig oder ignorant durch das Leben.</p>" +
                "<p>Ich kenne das gut genug von meiner eigenen Familie.</p>" +
                "<p>Ich weiß, ich selbst bin nicht der wärmste Mensch.</p>" +
                "<p>Jedoch kann ich es mir nun besser vorstellen mich endlich anderen Menschen mehr zu öffnen.</p>" +
                "<p>Menschen mit einem guten Herz wie du.</p>" +
                "<p>Bleib so wie du bist, " + Game.dataForSave.protagonistName + ".</p>" +
                "<h2>Liebe Grüße</h2>" +
                "<h2>Louis</h2>");
            // end
            await Game.ƒS.Sound.fade(Game.sounds.endTheme, 0, 1, true);
            document.getElementsByClassName("louisLetter").item(0).removeAttribute("class");
            Game.ƒS.Text.addClass("endScreen");
            await Game.ƒS.Text.print("<h2>Ende 1/8:</h2>" +
                "<p>Ende mit Louis: Zuneigung</p>");
        }
        else if (Game.dataForSave.louisPoints >= 50) {
            // narration
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_000);
            Game.ƒS.Speech.hide();
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(1);
            await Game.ƒS.Location.show(Game.locations.endSceneLouis);
            await Game.ƒS.update(1);
            await Game.ƒS.Sound.fade(Game.sounds.endTheme, 1, 1, true);
            // talking with louis
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T02_00_000);
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T02_00_001);
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T02_00_002);
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T02_00_003);
            await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T02_00_004);
            // end
            await Game.ƒS.Sound.fade(Game.sounds.endTheme, 0, 1, true);
            Game.ƒS.Speech.hide();
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(1);
            Game.ƒS.Text.addClass("endScreen");
            await Game.ƒS.Text.print("<h2>Ende 2/8:</h2>" +
                "<p>Ende mit Louis: Freunschaft</p>");
        }
        else {
            // narration
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_000);
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_001);
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_002);
            // end
            Game.ƒS.Speech.hide();
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(1);
            Game.ƒS.Text.addClass("endScreen");
            await Game.ƒS.Text.print("<h2>Ende 3/8:</h2>" +
                "<p>Ende mit Louis: Unstimmigkeit</p>");
        }
        return "end";
        // #endregion (Play)
    }
    Game.scene_7a_ending_louis = scene_7a_ending_louis;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_7b_ending_lily() {
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Der Roboterkampf ist zu Ende und das Schulfest neigt sich dem Ende zu.",
                T01_00_000: "Lily hat dich mit ganz roten Wangen dazu eingeladen sich am Hügel hinter dem Hochschulgebäude zu treffen.",
                T01_00_001: "Lächelnd hast du dem Treffen zugesagt.",
                T02_00_000: "Lily hat dich dazu eingeladen sich am Hügel hinter dem Hochschulgebäude zu treffen.",
                T03_00_000: "Lily hat dich allein gelassen. Sie scheint besseres zu tun zu haben als noch etwas Zeit mit dir zu verbringen.",
                T03_00_001: "Als du über das Hochschulgelände läufst, beobachtest du das bunte Treiben und energetische Unterhaltungen.",
                T03_00_002: "Nach einer Weile entscheidest du dich dazu nach Hause zu gehen."
            },
            lily: {
                T01_00_000: "Hi " + Game.dataForSave.protagonistName + "! Danke, dass du gekommen bist.",
                T01_00_001: "Ich fand die Zeit, die wir miteinander verbacht haben echt schön.",
                T01_00_002: "Es hat mir echt Spaß gemacht, das Projekt, das Schmetterlingshaus, der Roboterkampf...",
                T01_00_003: "Und du warst immer nur nett zu mir... Danke.",
                T01_00_004: "Ich hatte echt Sorgen, dass ich das Projekt hätte alleine machen müssen. Du warst mein Retter in Not, haha!",
                T01_00_005: "Mich würde es freuen, wenn wir... in Zukunft weiterhin Sachen unternehmen könnten.",
                T01_00_006: "Das war alles, was ich loswerden wollte. Danke fürs Zuhören. Komm gut nach Hause, ja?",
                T02_00_000: "Hi " + Game.dataForSave.protagonistName + "! Danke, dass du gekommen bist.",
                T02_00_001: "Du Projektarbeit mit dir hat Spaß gemacht. Wir sind gut miteinander ausgekommen.",
                T02_00_002: "Ich denke, ich wollte einfach nur 'Danke' für alles sagen. Also, ja... Danke.",
                T02_00_003: "Es wäre schön, wenn wir Freunde bleiben könnten...",
                T02_00_004: "Das wars eigentlich schon von mir, haha. Hab noch einen schönen Tag! Tschüss."
            }
        };
        // #endregion (Text)
        // #region (Play)
        // transition
        Game.ƒS.Speech.hide();
        Game.ƒS.Character.hideAll();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.schoolBuildingFest);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        // end of school fest
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        // get 1 out of 3 ends (decided by affection points)
        if (Game.dataForSave.lilyPoints >= 100) {
            // narration
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_000);
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T01_00_001);
            Game.ƒS.Speech.hide();
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(1);
            await Game.ƒS.Location.show(Game.locations.endSceneLily);
            await Game.ƒS.update(1);
            await Game.ƒS.Sound.fade(Game.sounds.endTheme, 1, 1, true);
            // talking with lily
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T01_00_000);
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T01_00_001);
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T01_00_002);
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T01_00_003);
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T01_00_004);
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T01_00_005);
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T01_00_006);
            // letter from lily
            Game.ƒS.Speech.hide();
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(1);
            Game.ƒS.Sound.play(Game.sounds.paper, 1, false);
            Game.ƒS.Text.addClass("lilyLetter");
            await Game.ƒS.Text.print("<h2>Liebe/r " + Game.dataForSave.protagonistName + ",</h2>" +
                "<p>ich wollte dir nochmal schreiben, weil ich noch gerne etwas erwähnen möchte.</p>" +
                "<p>Es ist etwas persönlich, aber ich möchte gerne, dass du es weißt.</p>" +
                "<p>Nicht viele Leute sind so offen und freundlich zu mir wie du es bist.</p>" +
                "<p>Viele Leute ignorieren oder belächeln mich, weil ich nicht wie die anderen Robotik Student*innen bin.</p>" +
                "<p>In der Schule war das auch schon so.</p>" +
                "<p>Darum schätze ich es umso mehr, dass du immer so nett zu mir warst und mich nicht ignoriert hast.</p>" +
                "<p>Du hast ein gutes Herz, " + Game.dataForSave.protagonistName + ".</p>" +
                "<p>Das war jetzt schon ungeheuer persönlich. Tut mir leid.</p>" +
                "<p>Danke nochmal für alles, " + Game.dataForSave.protagonistName + "!</p>" +
                "<h2>Liebe Grüße</h2>" +
                "<h2>Lily</h2>");
            // end
            await Game.ƒS.Sound.fade(Game.sounds.endTheme, 0, 1, true);
            document.getElementsByClassName("lilyLetter").item(0).removeAttribute("class");
            Game.ƒS.Text.addClass("endScreen");
            await Game.ƒS.Text.print("<h2>Ende 4/8:</h2>" +
                "<p>Ende mit Lily: Zuneigung</p>");
        }
        else if (Game.dataForSave.lilyPoints >= 50) {
            // narration
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_000);
            Game.ƒS.Speech.hide();
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(1);
            await Game.ƒS.Location.show(Game.locations.endSceneLily);
            await Game.ƒS.update(1);
            // talking with lily
            await Game.ƒS.Sound.fade(Game.sounds.endTheme, 1, 1, true);
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T02_00_000);
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T02_00_001);
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T02_00_002);
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T02_00_003);
            await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T02_00_004);
            // end
            await Game.ƒS.Sound.fade(Game.sounds.endTheme, 0, 1, true);
            Game.ƒS.Speech.hide();
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(1);
            Game.ƒS.Text.addClass("endScreen");
            await Game.ƒS.Text.print("<h2>Ende 5/8:</h2>" +
                "<p>Ende mit Lily: Freunschaft</p>");
        }
        else {
            // narration
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_000);
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_001);
            await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_002);
            // end
            Game.ƒS.Speech.hide();
            await Game.ƒS.Location.show(Game.locations.black);
            await Game.ƒS.update(1);
            Game.ƒS.Text.addClass("endScreen");
            await Game.ƒS.Text.print("<h2>Ende 6/8:</h2>" +
                "<p>Ende mit Lily: Unstimmigkeit</p>");
        }
        return "end";
        // #endregion (Play)
    }
    Game.scene_7b_ending_lily = scene_7b_ending_lily;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_7c_ending_robot() {
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Voller Adrenalin rufst du...",
                T00_00_001: "Entschlossen packst du den Roboter von der Gruppe hinter dir.",
                T00_00_002: "Der Auswechsel-Bot attackiert und... trifft!",
                T00_00_003: "Der gegnerische Roboter wurde umgestoßen. Du hast gewonnen!",
                T00_00_004: "Völlig außer Fassung schaut dich die Robotik Professorin an.",
                T00_00_005: "Die Robotik Professorin entschließt sich dich und deinen Partner bestehen zu lassen. Dein Projektpartner schaut nur dumm aus der Wäsche.",
                T00_00_006: "Stolz über deine strategische Meisterleistung, verlässt du selbstzufrieden den Raum."
            },
            protagonist: {
                T00_00_000: "Auswechsel-Bot, ich wähle dich!",
                T00_00_001: "Auswechsel-Bot, setze 'Umstoßen' ein!",
                T00_00_002: "Yeah! Juhuu!"
            },
            student: {
                T00_00_000: "H-Hey, warte! Das ist meiner."
            },
            roboticsTeacher: {
                T00_00_000: "Also... ähm... ich meine... nun gut..."
            },
            louis: {
                T00_00_000: "W-Was zur Hölle? So war das aber nicht abgemacht!"
            },
            lily: {
                T00_00_000: "Äh... äh... ähm..."
            }
        };
        // #endregion (Text)
        // #region (Play)
        document.getElementById("fightBars").setAttribute("style", "visibility: hidden");
        Game.ƒS.Character.hideAll();
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.student, text.student.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        await Game.ƒS.Sound.fade(Game.sounds.robotFight, 0, 0.5, true);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_002);
        await Game.ƒS.Sound.fade(Game.sounds.alternativeEnd, 1, 0, true);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        switch (Game.dataForSave.partnerChosen) {
            case "Louis":
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_000);
                break;
            case "Lily":
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_000);
                break;
        }
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_006);
        Game.ƒS.Speech.hide();
        Game.ƒS.Text.addClass("endScreen");
        await Game.ƒS.Text.print("<h2>Ende 7/8:</h2>" +
            "<p>Roboter Austausch</p>");
        await Game.ƒS.Sound.fade(Game.sounds.alternativeEnd, 0, 0, true);
        return "end";
        // #endregion (Play)
    }
    Game.scene_7c_ending_robot = scene_7c_ending_robot;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_7d_ending_flee() {
        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Du fühlst wie Perlen aus Schweiß dir über das Gesicht laufen.",
                T00_00_001: "Der Stress ist dir zu viel. Du überlässt deinem Projektpartner die Fernbedienung. Dann stürmst du aus dem Raum und pflügst dabei zwei Studenten um.",
                T00_00_002: "Die Robotik Professorin bringt kein Wort heraus. Dein Projektpartner ruft dir hinterher."
            },
            protagonist: {
                T00_00_000: "..."
            },
            student: {
                T00_00_000: "Hey!"
            },
            louis: {
                T00_00_000: Game.dataForSave.protagonistName + "! Was zur Hölle machst du?!"
            },
            lily: {
                T00_00_000: Game.dataForSave.protagonistName + "! Geh nicht!"
            }
        };
        // #endregion (Text)
        // #region (Play)
        document.getElementById("fightBars").setAttribute("style", "visibility: hidden");
        Game.ƒS.Character.hideAll();
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.black);
        await Game.ƒS.update(1);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        Game.ƒS.Sound.play(Game.sounds.bump, 1, false);
        await Game.ƒS.Speech.tell(Game.characters.student, text.student.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        switch (Game.dataForSave.partnerChosen) {
            case "Louis":
                await Game.ƒS.Speech.tell(Game.characters.louis, text.louis.T00_00_000);
                break;
            case "Lily":
                await Game.ƒS.Speech.tell(Game.characters.lily, text.lily.T00_00_000);
                break;
        }
        Game.ƒS.Speech.hide();
        Game.ƒS.Text.addClass("endScreen");
        await Game.ƒS.Text.print("<h2>Ende 8/8:</h2>" +
            "<p>Flucht</p>");
        await Game.ƒS.Sound.fade(Game.sounds.robotFight, 0, 0, true);
        return "end";
        // #endregion (Play)
    }
    Game.scene_7d_ending_flee = scene_7d_ending_flee;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_8_end() {
        console.log("The End. Thanks for playing!");
        Game.ƒS.Speech.hide();
        Game.ƒS.Text.addClass("endScreen");
        await Game.ƒS.Text.print("<h2>Danke fürs Spielen!</h2>");
    }
    Game.scene_8_end = scene_8_end;
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map