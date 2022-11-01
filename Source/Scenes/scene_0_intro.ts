namespace Game {
    export async function scene_0_intro(): ƒS.SceneReturn {
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
                T0015: "Kühle erfrischende Luft umhüllt dich.",
                T0016: "Es drängt sich eine junge Frau an dir vorbei.",
                T0017: "Schnellen Schrittes geht Sie auf die Pinnwände zu.",
                T0018: "Nun fällt dir die ungewöhnlich große Menschenmenge auf, die sich um die Pinnwände versammelt hat.",
                T0019: "Neugierig bahnst du dir deinen Weg durch den Trubel, um einen besseren Blick erhaschen zu können.",
                T0020: "Das größte und auffälligste Poster verkündet feierlich: 'Das diesjährige Robotik-Fest der Robert Robotik Hochschule findet am Freitag, den 22.07. statt.'",
                T0021: "Deine Augen überfliegen das Poster nach weiteren wichtigen Informationen",
                T0022: "'Von 10:00 bis 18:00 Uhr', steht geschrieben.",
                T0023: "Gequetscht von links und rechts, versuchst du so schnell wie möglich hier fertig zu werden.",
                T0024: "'Teilnehmer bestimmter Kurse haben am Schulfest teilzunehmen. Die betroffenen Kurse sind ersichtbar an allen großen Pinnwänden samt Matrikelnumern der Teilnehmer. Für mehr Informationen oder bei Problemen wenden Sie Sich an Ihre Dozenten.', steht es schwarz auf weiß.",
                T0025: "Du kannst dich noch daran erinnern, wie du letztes Jahr mit Glück diesem Schicksal entkommen bist.",
                T0026: "Es soll schonmal Studierende gegeben haben, die es ganz schlimm erwischt hat: Sie sollten zwei Projekte innerhalb von zwei Wochen fertigstellen.",
                T0027: "Viel Kopfschmerzen und Burnout waren die Folge.",
                T0028: "Diese wiederum gefolgt von einer Besauf-Party der Superlative. Aber das sei mal so dahingestellt.",
                T0029: "Nach genügend Beschwerden über seelisches und körperliches Leid, wurde diese Art der Folterung zum Glück verboten.",
                T0030: "Jetzt darf nur noch ein Projekt als Qual genügen.",
                T0031: "Letztendlich gleitet dein Blick über den letzten Absatz des Posters.",
                T0032: "'Betroffene Veranstaltungen:'",
                T0033: "'- Installation von Licht und Sound'",
                T0034: "'- Fortgeschrittene Sprachsimulation'",
                T0035: "'- Fernbedienbare Robotik'",
                T0036: "Und da war es. Ein Kurs, den du besuchst.",
                T0037: "Da erklingt ein verärgerte Murmeln eines jungen Mannes.",
                T0038: "Das darauffolgende stoßartige Ausatmen von ihm klang als müsste er erstmal durch das Ärgernis Dampf ablassen, das du in ihm erzeugt hast."
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
        }
        // #endregion (Decision)

        // #region (Play)
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.placeholder);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);
        await ƒS.update();

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0007);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0008);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0009);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0010);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0011);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0012);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0013);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0014);

        // TODO: transition to entry building
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0015);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0016);
        // TODO: screen shake
        await ƒS.Character.show(characters.student, characters.student.pose.lily, ƒS.positionPercent(70, 110));
        await ƒS.update();

        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0000);

        await ƒS.Speech.tell(characters.student, text.student.T0000);

        bumpIntoStudent = await ƒS.Menu.getInput(bumpIntoStudentAnswer, "decisionClass");

        switch (bumpIntoStudent) {
            case bumpIntoStudentAnswer.complain:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
                break;
            case bumpIntoStudentAnswer.soothe:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002);
                break;
            case bumpIntoStudentAnswer.ignore:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003);
                break;
        }

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0017);

        await ƒS.Character.hide(characters.student);
        await ƒS.update();

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0018);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0019);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0020);

        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0020);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0021);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0022);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0023);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0024);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0025);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0026);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0027);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0028);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0029);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0030);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0031);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0032);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0033);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0034);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0035);

        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);

        await ƒS.Character.show(characters.student, characters.student.pose.louis, ƒS.positionPercent(70, 110));
        await ƒS.update();

        await ƒS.Speech.tell(characters.student, text.student.T0001);

        studentRemark = await ƒS.Menu.getInput(studentRemarkAnswer, "decisionClass");

        switch (studentRemark) {
            case studentRemarkAnswer.argue:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0006);
                break;
            case studentRemarkAnswer.apologize:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0007);
                break;
            case studentRemarkAnswer.ignore:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0008);
                break;
        }

        await ƒS.Character.hide(characters.student);
        await ƒS.update();

        // #endregion (Play)
    }
}