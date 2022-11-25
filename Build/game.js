"use strict";
var Game;
(function (Game) {
    Game.ƒ = FudgeCore;
    Game.ƒS = FudgeStory;
    console.log("'main.ts' started");
    Game.dataForSave = { nameProtagonist: "" };
    // #region (MENU)
    // menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    };
    let gameMenu;
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Game.ƒS.Progress.save(); // always saves, so that you start at the beginning of the scene you saved in
                break;
            case inGameMenuButtons.load:
                await Game.ƒS.Progress.load();
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
            case Game.ƒ.KEYBOARD_CODE.C:
                console.log("Credits");
                break;
        }
    }
    // #endregion (MENU)
    Game.transitions = {
        binaryCode: {
            duration: 3,
            alpha: "Assets/Graphics/Transitions/binary_code.png",
            edge: 0.5
        }
    };
    Game.sounds = {
        // music
        background: "PATH",
        // sounds
        sparrows: "Assets/Audio/Sounds/sparrows.wav",
        enterSchoolBuilding: "Assets/Audio/Sounds/enter_school_building.wav",
        bump: "Assets/Audio/Sounds/bump.wav",
        bigCrowd: "Assets/Audio/Sounds/big_crowd.wav",
        smallCrowd: "Assets/Audio/Sounds/small_crowd.wav",
        footstepsTiles: "Assets/Audio/Sounds/footsteps_tiles.wav",
        automaticDoor: "Assets/Audio/Sounds/automatic_door.wav",
        cloth: "Assets/Audio/Sounds/cloth.wav",
        chairScreeching: "Assets/Audio/Sounds/chair_screeching.wav",
        schoolBell: "Assets/Audio/Sounds/school_bell.wav"
    };
    Game.locations = {
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
        luisa: {
            name: "Luisa"
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
    window.addEventListener("load", start);
    function start(_event) {
        // menu
        gameMenu = Game.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        let scenes = [
            //{ scene: scene_0_intro, name: "Scene 0: Intro" },
            { scene: Game.scene_1_pinboards, name: "Scene 1: Pinboards" },
            { scene: Game.scene_2_history_lesson, name: "Scene 2: History Lesson" },
            { scene: Game.scene_3_robotics_lesson, name: "Scene 3: Robotics Lesson" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Game.dataForSave = Game.ƒS.Progress.setData(Game.dataForSave, uiElement);
        Game.ƒS.Progress.go(scenes);
    }
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_0_intro() {
        console.log("'scene_0_intro' started");
        // #region (Text) 
        let text = {
            narrator: {
                T0000: "Ein neuer Tag an der Robert Robotik Hochschule.",
                T0001: "Nach 4 Semestern hat sich das Gefühl von Gewohnheit endgültig eingenistet.",
                T0002: "Nun bist du bereits Nahe des Endes des 5. Semesters angelangt.",
                T0003: "Das Laufen zur Hochschule gleicht immer mehr einer gedankenlosen Trance.",
                T0004: "Es ist immer der gleiche gewohnte Ablauf.",
                T0005: "Beruhigend, aber auch etwas langweilig.",
                T0006: "Die Stimmen der anderen Studierenden füllt die Luft.",
                T0007: "Im Hintergund tönt das Zwitschern der Singvögel.",
                T0008: "Der Wind bläst sanft durch Gestrüpp und Bäume.",
                T0009: "Flora und Fauna in der Vormittagssonne erwachend.",
                T0010: "An guten Tagen schiebt der Wind einen auch mal vorwärts statt rückwärts.",
                T0011: "Als wäre es manchmal nicht schwer genug seine Beine zum Unterricht zu bringen.",
                T0012: "Aber heute ist ein guter Tag.",
                T0013: "Der Wind ist dir wohl gesonnen.",
                T0014: "Du trittst in das Eingangsgebäude ein."
            },
            protagonist: {
                T0000: "Huch!",
                T0001: "Hey! Pass doch auf!",
                T0002: "Nichts passiert.",
                T0003: "...",
                T0004: "Oh. Ich hatte völlig vergessen, dass es das gibt.",
                T0005: "Fernbedienbare Robotik? Da bin ich ja drin. So ein Pech...",
                T0006: "Ah, vielen Dank, Mister Besserwisser. Wie konnte ich nur so dumm sein!",
                T0007: "Sorry...",
                T0008: "..."
            },
            student: {
                T0000: "Sorry!",
                T0001: "Dieser Kurs steht doch jedes Mal auf dem Plan. Kein Grund sich zu wundern."
            }
        };
        // #endregion (Text)
        // #region (Play)
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.schoolBuilding);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        await Game.ƒS.update();
        Game.ƒS.Sound.play(Game.sounds.sparrows, 1, true); // TODO: cut or use different audio. this one has mic bump sounds in it
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0001);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0002);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0003);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0004);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0005);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0006);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0007);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0008);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0009);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0010);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0011);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0012);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0013);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0014);
        Game.ƒS.Sound.play(Game.sounds.enterSchoolBuilding, 1, false);
        // #endregion (Play)
    }
    Game.scene_0_intro = scene_0_intro;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_1_pinboards() {
        console.log("'scene_1_pinboards' started");
        // #region (Text) 
        let text = {
            narrator: {
                T0000: "Kühle erfrischende Luft umhüllt dich.",
                T0001: "Es drängt sich eine junge Frau an dir vorbei.",
                T0002: "Schnellen Schrittes geht sie auf die Pinnwände zu.",
                T0003: "Nun fällt dir die ungewöhnlich große Menschenmenge auf, die sich um die Pinnwände versammelt hat.",
                T0004: "Neugierig bahnst du dir deinen Weg durch den Trubel, um einen besseren Blick erhaschen zu können.",
                T0005: "Das größte und auffälligste Poster verkündet feierlich: 'Das diesjährige Robotik-Fest der Robert Robotik Hochschule findet am Freitag, den 22.07. statt.'",
                T0006: "Deine Augen überfliegen das Poster nach weiteren wichtigen Informationen",
                T0007: "'Von 10:00 bis 18:00 Uhr', steht geschrieben.",
                T0008: "Gequetscht von links und rechts, versuchst du so schnell wie möglich hier fertig zu werden.",
                T0009: "'Teilnehmer bestimmter Kurse haben am Schulfest teilzunehmen. Die betroffenen Kurse sind ersichtbar an allen großen Pinnwänden samt Matrikelnumern der Teilnehmer. Für mehr Informationen oder bei Problemen wenden Sie Sich an Ihre Dozenten.', steht es schwarz auf weiß.",
                T0010: "Du kannst dich noch daran erinnern, wie du letztes Jahr mit Glück diesem Schicksal entkommen bist.",
                T0011: "Es soll schonmal Studierende gegeben haben, die es ganz schlimm erwischt hat: Sie sollten zwei Projekte innerhalb von zwei Wochen fertigstellen.",
                T0012: "Viel Kopfschmerzen und Burnout waren die Folge.",
                T0013: "Diese wiederum gefolgt von einer Besauf-Party der Superlative. Aber das sei mal so dahingestellt.",
                T0014: "Nach genügend Beschwerden über seelisches und körperliches Leid, wurde diese Art der Folterung zum Glück verboten.",
                T0015: "Jetzt darf nur noch ein Projekt als Qual genügen.",
                T0016: "Letztendlich gleitet dein Blick über den letzten Absatz des Posters.",
                T0017: "'Betroffene Veranstaltungen:'",
                T0018: "'- Installation von Licht und Sound'",
                T0019: "'- Fortgeschrittene Sprachsimulation'",
                T0020: "'- Fernbedienbare Robotik'",
                T0021: "Und da war es. Ein Kurs, den du besuchst.",
                T0022: "Da erklingt ein verärgerte Murmeln eines jungen Mannes.",
                T0023: "Das darauffolgende stoßartige Ausatmen von ihm klang als müsste er erstmal durch das Ärgernis Dampf ablassen, das du in ihm erzeugt hast.",
                T0024: "Du lenkst deine Aufmerksamkeit auf die an dem Kurs angeheftete Teilnehmerliste.",
                T0025: "Jap, da steht auch deine Matrikelnummer.",
                T0026: "Es steht fest.",
                T0027: "Nun gibt es kein Entkommen.",
                T0028: "Aber vorerst geht es zu deiner ersten Vorlesung für den Tag.",
                T0029: "'Geschichte der Robotik'",
                T0030: "Die perfekte Vorlesung, um die Gedanken schweifen zu lassen oder etwas Schlaf nachzuholen."
            },
            protagonist: {
                T0000: "Huch!",
                T0001: "Hey! Pass doch auf!",
                T0002: "Nichts passiert.",
                T0003: "...",
                T0004: "Oh. Ich hatte völlig vergessen, dass es das gibt.",
                T0005: "Fernbedienbare Robotik? Da bin ich ja drin. So ein Pech...",
                T0006: "Ah, vielen Dank, Mister Besserwisser. Wie konnte ich nur so dumm sein!",
                T0007: "Sorry...",
                T0008: "..."
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
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.white);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.pinboards1);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        await Game.ƒS.Sound.fade(Game.sounds.sparrows, 0, 1, true);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0000);
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
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0001);
        await Game.ƒS.Character.show(Game.characters.student, Game.characters.student.pose.lily, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0000);
        await Game.ƒS.Speech.tell(Game.characters.student, text.student.T0000);
        bumpIntoStudent = await Game.ƒS.Menu.getInput(bumpIntoStudentAnswer, "decisionClass");
        switch (bumpIntoStudent) {
            case bumpIntoStudentAnswer.complain:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0001);
                break;
            case bumpIntoStudentAnswer.soothe:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0002);
                break;
            case bumpIntoStudentAnswer.ignore:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0003);
                break;
        }
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0002);
        await Game.ƒS.Character.hide(Game.characters.student);
        await Game.ƒS.update();
        await Game.ƒS.Sound.fade(Game.sounds.bigCrowd, 1, 1, true);
        await Game.ƒS.Location.show(Game.locations.pinboards2);
        await Game.ƒS.update(2);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0003);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0004);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0005);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0004);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0006);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0007);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0008);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0009);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0010);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0011);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0012);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0013);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0014);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0015);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0016);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0017);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0018);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0019);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0020);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0021);
        await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0005);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0022);
        await Game.ƒS.Character.show(Game.characters.student, Game.characters.student.pose.louis, Game.ƒS.positionPercent(50, 100));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.student, text.student.T0001);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0023);
        studentRemark = await Game.ƒS.Menu.getInput(studentRemarkAnswer, "decisionClass");
        switch (studentRemark) {
            case studentRemarkAnswer.argue:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0006);
                break;
            case studentRemarkAnswer.apologize:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0007);
                break;
            case studentRemarkAnswer.ignore:
                await Game.ƒS.Speech.tell(Game.characters.protagonist, text.protagonist.T0008);
                break;
        }
        await Game.ƒS.Character.hide(Game.characters.student);
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0024);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0025);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0026);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0027);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0028);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0029);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0030);
        await Game.ƒS.Sound.fade(Game.sounds.bigCrowd, 0, 1, true);
        // #endregion (Play)
    }
    Game.scene_1_pinboards = scene_1_pinboards;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene_2_history_lesson() {
        console.log("'scene_2_history_lesson' started");
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
        await Game.ƒS.Location.show(Game.locations.white);
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
                await Game.ƒS.Speech.tell(Game.characters.historyTeacher, text.historyTeacher.T01_00_000);
                Game.ƒS.Speech.hide();
                await Game.ƒS.Location.show(Game.locations.white);
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
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T02_00_002);
                Game.ƒS.Speech.hide();
                await Game.ƒS.Location.show(Game.locations.white);
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
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_000);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_001);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_002);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_003);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_004);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_005);
                await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T03_00_006);
                Game.ƒS.Speech.hide();
                await Game.ƒS.Location.show(Game.locations.white);
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
        console.log("'scene_3_robotics_lesson' started");
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
                T01_00_000: "Ah ja, der Nerd der Klasse. Nicht der einzige. Robotik zieht so einige Leute an, die man Nerds oder Geeks nennen würde. Dieser hier hat jedoch auch einer der besten Noten und ist sehr ehrgeizig.",
                T01_00_001: "Ihn kann man gut als Einzelgänger bezeichnen. Ob er ein guter Partner abgeben würde? Nun ja, ein Gewinn müsste bei ihm ja eigentlich schon in der Tasche sein, oder nicht? Da müsste man sich schon großartig dumm anstellen, um das ihm zu vermasseln.",
                T01_00_002: "Aber ist Arbeit mit überhaupt aushaltbar? Sein Respekt gewinnt man meistens durch gute Manieren und Wissensschatz. Ähm… wie war sein Name nochmal überhaupt?",
                T02_00_000: "Tja, der Tollpatsch der Klasse. Kein Witz. Jeden Tag schafft sie es durch den etwas kleineren oder größeren Unfall Aufmerksamkeit zu erregen.",
                T02_00_001: "Mit ihr zusammen das Projekt zu machen, könnte eine Herausforderung werden. Aber vielleicht ist sie ja trotzdem sehr schlau? Tatsächlich weißt du nicht was für Noten sie schreibt.",
                T02_00_002: "Sie wirkt trotz ihrer auffälligen Haarfarbe wie ein fast unsichtbares Mauerblümchen. Menschen mit gutem Herz und Unterstützungsgeist, schätzt sie sehr."
            },
            roboticsTeacher: {
                T00_00_000: "Schön. Es scheint, Sie haben alle erfolgreich hierhergefunden. Das erspart mir, dass ich einen oder mehreren von Ihnen hinterherlaufen muss, denn das Projekt ist Pflicht – nicht freiwillig.",
                T00_00_001: "Nun reißen Sie sich bitte zusammen. Ich werde Ihre Ergebnisse jeweils benoten. Wenn Sie möchten, wäre diese Note dann auch schon die Endnote für diesen Kurs. Ob Sie die angedachte Klausur dann schreiben wollen, ist Ihnen überlassen. Sie wird freiwillig sein. Die Klausur würde dann 50% mit der Projektarbeit zählen. Ist alles soweit klar?",
                T00_00_002: "Ach ja, genau. Das hatte ich vergessen. Manchmal muss ich es gar nicht mehr erwähnen, da es schon jeder wusste.",
                T00_00_003: "Sie werden mithilfe des Wissens und den Materialien von diesem Semester, einen Roboter bauen, der in einem Ring einen anderen Roboter bewegungsunfähig machen soll. Alle Infos hierzu, habe ich online hochgeladen.",
                T00_00_004: "Dann bitte ich Sie, Sich bitte einen Partner auszusuchen mit dem Sie die Projektarbeit bestreiten möchten."
            },
            student: {
                T00_00_000: "Was ist das Projekt denn eigentlich?"
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
        // #endregion (Decision)
        // #region (Play)
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.white);
        await Game.ƒS.update(1);
        await Game.ƒS.Location.show(Game.locations.classroomRobotics);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_003);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_001);
        await Game.ƒS.Speech.tell(Game.characters.student, text.student.T00_00_000);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_002);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_003);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_004);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_005);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T00_00_006);
        await Game.ƒS.Speech.tell(Game.characters.roboticsTeacher, text.roboticsTeacher.T00_00_004);
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
                break;
            case partnerChoiceAnswer.lily:
                break;
        }
        // #endregion (Play)
    }
    Game.scene_3_robotics_lesson = scene_3_robotics_lesson;
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map