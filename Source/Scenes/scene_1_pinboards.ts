namespace Game {
    export async function scene_1_pinboards(): ƒS.SceneReturn {
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
        }
        // #endregion (Decision)
        

        // #region (Play)
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.placeholder);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);
        await ƒS.update();


        // TODO: transition to entry building
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        // TODO: screen shake
        await ƒS.Character.show(characters.student, characters.student.pose.lily, ƒS.positionPercent(50, 100));
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

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);

        await ƒS.Character.hide(characters.student);
        await ƒS.update();

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);

        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0007);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0008);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0009);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0010);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0011);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0012);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0013);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0014);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0015);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0016);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0017);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0018);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0019);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0020);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0021);

        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0022);

        await ƒS.Character.show(characters.student, characters.student.pose.louis, ƒS.positionPercent(50, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.student, text.student.T0001);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0023);

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

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0024);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0025);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0026);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0027);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0028);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0029);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0030);
        // #endregion (Play)
    }
}