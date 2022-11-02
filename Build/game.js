"use strict";
var Game;
(function (Game) {
    Game.ƒ = FudgeCore;
    Game.ƒS = FudgeStory;
    console.log("'main.ts' started");
    Game.dataForSave = { nameProtagonist: "" };
    Game.transitions = {
        binaryCode: {
            duration: 3,
            alpha: "Assets/Graphics/Transitions/binary_code.png",
            edge: 1
        }
    };
    Game.sound = {
        // music
        background: "PATH",
        // sounds
        sparrows: "Assets/Audio/Sounds/sparrows.wav",
        enterSchoolBuilding: "Assets/Audio/Sounds/enter_school_building.wav",
        // TODO: bumping sound
        bigCrowd: "Assets/Audio/Sounds/big_crowd.wav",
        smallCrowd: "Assets/Audio/Sounds/small_crowd.wav",
        footstepsTiles: "Assets/Audio/Sounds/footsteps_tiles.wav"
        // TODO: chair squeaking sound when you sit down on your seat
    };
    Game.locations = {
        schoolBuilding: {
            name: "School Building",
            background: "Assets/Graphics/Backgrounds/school_building.png"
        },
        pinboards: {
            name: "Pinboards",
            background: "Assets/Graphics/Backgrounds/pinboards.png"
        },
        classroom: {
            name: "Classroom",
            background: "Assets/Graphics/Backgrounds/classroom.png"
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
            name: "Studierende",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                lily: "Assets/Graphics/Characters/Lily/lily_silhouette.png",
                louis: "Assets/Graphics/Characters/Louis/louis_silhouette.png",
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
                sad2: "Assets/Graphics/Characters/Louis/louis_sad_2.png",
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
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Game.scene_0_intro, name: "Scene 0: Intro" },
            { scene: Game.scene_1_pinboards, name: "Scene 1: Pinboards" },
            { scene: Game.scene_2_history_lesson, name: "Scene 2: History Lesson" }
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
                T0014: "Du trittst in das Eingangsgebäude ein.",
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
        Game.ƒS.Sound.play(Game.sound.sparrows, 1, true);
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
        Game.ƒS.Sound.play(Game.sound.enterSchoolBuilding, 1, false);
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
                T0002: "Schnellen Schrittes geht Sie auf die Pinnwände zu.",
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
        await Game.ƒS.Location.show(Game.locations.pinboards);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        await Game.ƒS.update();
        // TODO: transition to entry building
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0000);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0001);
        // TODO: screen shake
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
        await Game.ƒS.Sound.fade(Game.sound.bigCrowd, 1, 5, true);
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
        await Game.ƒS.Sound.fade(Game.sound.bigCrowd, 0, 1, true);
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
                T0000: "..."
            },
            protagonist: {
                T0000: "..."
            }
        };
        // #endregion (Text)
        // #region (Decision)
        // #endregion (Decision)
        // #region (Play)
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.classroom);
        await Game.ƒS.update(Game.transitions.binaryCode.duration, Game.transitions.binaryCode.alpha, Game.transitions.binaryCode.edge);
        await Game.ƒS.update();
        Game.ƒS.Sound.play(Game.sound.footstepsTiles, 1, false);
        await Game.ƒS.Sound.fade(Game.sound.smallCrowd, 1, 5, true);
        await Game.ƒS.Speech.tell(Game.characters.narrator, text.narrator.T0000);
        // #endregion (Play)
    }
    Game.scene_2_history_lesson = scene_2_history_lesson;
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map