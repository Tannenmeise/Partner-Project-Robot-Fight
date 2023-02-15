namespace Game {
    export async function scene_1_pinboards(): ƒS.SceneReturn {

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
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.pinboards1);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);
        await ƒS.Sound.fade(sounds.sparrows, 0, 1, true);

        // narration
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_001);
        ƒS.Sound.play(sounds.bump, 1, false);

        // bump into student
        let graph: ƒ.Node = ƒS.Base.getGraph();
        graph.addComponent(new ƒ.ComponentTransform());
        let t: number = 0;
        function jitter(): void {
            let posX: number = 0;
            posX = (Number(6 * Math.sin(0.15 * t + 1.6)));
            t++;
            if (t <= 64) {
                graph.mtxLocal.translateX(posX);
                ƒS.update();
            }
        }
        ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, jitter);
        await ƒS.Progress.delay(2);
        ƒ.Loop.removeEventListener(ƒ.EVENT.LOOP_FRAME, jitter);
        graph.mtxLocal.translateX(-1 * (graph.mtxLocal.translation.x));
        await ƒS.update();
        await ƒS.Character.show(characters.student, characters.student.pose.lily, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_000);
        await ƒS.Speech.tell(characters.student, text.student.T0000);

        // decide how to respond
        bumpIntoStudent = await ƒS.Menu.getInput(bumpIntoStudentAnswer, "decisionClass");
        switch (bumpIntoStudent) {
            case bumpIntoStudentAnswer.complain:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T01_00_000);
                dataForSave.lilyPoints -= 10;
                document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                break;
            case bumpIntoStudentAnswer.soothe:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T02_00_000);
                dataForSave.lilyPoints += 10;
                document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                break;
            case bumpIntoStudentAnswer.ignore:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T03_00_000);
                break;
        }

        // narration
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_002);
        await ƒS.Character.hide(characters.student);
        await ƒS.update(1);
        await ƒS.Sound.fade(sounds.bigCrowd, 1, 1, true);
        await ƒS.Location.show(locations.pinboards2);
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_003);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_004);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_005);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_006);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_007);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_008);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_009);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_010);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_011);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_012);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_013);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_014);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_015);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_016);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_017);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_018);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_002);

        // student remark
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_019);
        await ƒS.Character.show(characters.student, characters.student.pose.louis, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.student, text.student.T0001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_020);

        // decide how to respond
        studentRemark = await ƒS.Menu.getInput(studentRemarkAnswer, "decisionClass");
        switch (studentRemark) {
            case studentRemarkAnswer.argue:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T04_00_000);
                dataForSave.louisPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
                break;
            case studentRemarkAnswer.apologize:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T05_00_000);
                break;
            case studentRemarkAnswer.ignore:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T06_00_000);
                break;
        }
        await ƒS.Character.hide(characters.student);
        await ƒS.update();

        // narration
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_021);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_022);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_023);
        await ƒS.Sound.fade(sounds.bigCrowd, 0, 1, true);
        // #endregion (Play)
    }
}