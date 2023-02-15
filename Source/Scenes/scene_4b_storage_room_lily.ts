namespace Game {
    export async function scene_4b_storage_room_lily(): ƒS.SceneReturn {

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

                T09_00_000: "Stillgestanden! Ich werde dir lehren, was passiert, wenn man sich über " + dataForSave.protagonistName + " lustig macht!",
                T09_00_001: "Oops. Du bists, Lily. Tut mir Leid.",

                T10_01_000: "Ja, gerne!",

                T10_02_000: "Nein, danke."
            },
            lily: {
                T00_00_000: "Guten Morgen, " + dataForSave.protagonistName + "! Bist du bereit, um an unseren Roboter zu arbeiten?",
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

                T07_00_000: "Ich bins. Lily. Bist du das, " + dataForSave.protagonistName + "?",
                T07_00_001: "Ok. Nimm meine Hand. Ich führe dich raus. Ok?",

                T08_00_000: dataForSave.protagonistName + "... Bist du hier?",
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
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.classroomRobotics);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);
        ƒS.Sound.play(sounds.footstepsTiles, 1, false);

        // talking with lily
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_001);
        await ƒS.Character.show(characters.lily, characters.lily.pose.neutral1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_000);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_000);
        await ƒS.Character.hide(characters.lily);
        await ƒS.Character.show(characters.lily, characters.lily.pose.happy2, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_001);
        await ƒS.Character.hide(characters.lily);
        await ƒS.Character.show(characters.lily, characters.lily.pose.neutral1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_002);

        // responding to lilys explanation
        explanation = await ƒS.Menu.getInput(explanationAnswer, "decisionClass");
        switch (explanation) {
            case explanationAnswer.thank:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T01_00_000);
                dataForSave.lilyPoints += 10;
                document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                await ƒS.Character.hide(characters.lily);
                await ƒS.Character.show(characters.lily, characters.lily.pose.happy1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.lily, text.lily.T01_00_000);
                break;
            case explanationAnswer.indifferent:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T02_00_000);
                await ƒS.Speech.tell(characters.lily, text.lily.T02_00_000);
                break;
            case explanationAnswer.joke:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T03_00_000);
                dataForSave.lilyPoints -= 10;
                document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                await ƒS.Character.hide(characters.lily);
                await ƒS.Character.show(characters.lily, characters.lily.pose.sad2, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.lily, text.lily.T03_00_000);
                await ƒS.Character.hide(characters.lily);
                await ƒS.Character.show(characters.lily, characters.lily.pose.sad1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.lily, text.lily.T03_00_001);
                break;
        }

        // teacher shows up
        await ƒS.Character.hide(characters.lily);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_002);
        ƒS.Sound.play(sounds.footstepsTiles, 1, false);
        await ƒS.Character.show(characters.roboticsTeacher, characters.roboticsTeacher.pose.neutral, ƒS.positionPercent(50, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_000);
        await ƒS.Character.hide(characters.roboticsTeacher);
        ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_003);

        // going to the storage room
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.storageRoom);
        await ƒS.update(1);
        ƒS.Sound.play(sounds.footstepsTiles, 1, false);

        // storage room
        await ƒS.Character.show(characters.roboticsTeacher, characters.roboticsTeacher.pose.neutral, ƒS.positionPercent(50, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_001);
        ƒS.Character.hideAll();
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_004);

        // going to robotics classroom
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.classroomRobotics);
        await ƒS.update(1);
        ƒS.Sound.play(sounds.footstepsTiles, 1, false);

        // talking with lily, presenting the robot idea
        await ƒS.Character.show(characters.lily, characters.lily.pose.neutral2, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_003);
        ƒS.Character.hideAll();
        ƒS.Sound.play(sounds.paper, 1, false);
        await ƒS.Character.show(characters.carBot, characters.carBot.pose.sketch, ƒS.positionPercent(50, 70));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_001);

        // responding to lilys sketch
        sketch = await ƒS.Menu.getInput(sketchAnswer, "decisionClass");
        ƒS.Character.hideAll();
        switch (sketch) {
            case sketchAnswer.compliment:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T04_00_000);
                dataForSave.lilyPoints += 10;
                document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                await ƒS.Character.show(characters.lily, characters.lily.pose.happy1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.lily, text.lily.T04_00_000);
                break;
            case sketchAnswer.indifferent:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T05_00_000);
                dataForSave.lilyPoints -= 10;
                document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                await ƒS.Character.show(characters.lily, characters.lily.pose.neutral1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.lily, text.lily.T05_00_000);
                break;
            case sketchAnswer.criticize:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T06_00_000);
                dataForSave.lilyPoints -= 10;
                document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                await ƒS.Character.show(characters.lily, characters.lily.pose.sad2, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.lily, text.lily.T06_00_000);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T06_00_001);
                break;
        }

        // talking with lily
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.lily, characters.lily.pose.neutral1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_004);
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_005);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_002);
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_006);
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_007);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_003);
        ƒS.Character.hideAll();

        // go to storage room
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.storageRoom);
        await ƒS.update(1);
        ƒS.Sound.play(sounds.footstepsTiles, 1, false);

        // looking for parts
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_004);
        ƒS.Sound.play(sounds.switch, 1, false);
        await ƒS.Location.show(locations.storageRoomDark);
        await ƒS.update(0);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_005);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_005);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_006);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_006);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_007);
        await ƒS.Character.show(characters.student, characters.student.pose.lily, ƒS.positionPercent(50, 100));
        await ƒS.update(0);

        // responding to shadow
        shadow = await ƒS.Menu.getInput(shadowAnswer, "decisionClass");
        switch (shadow) {
            case shadowAnswer.speakTo:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T07_00_000);
                await ƒS.Speech.tell(characters.lily, text.lily.T07_00_000);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T07_00_001);
                await ƒS.Speech.tell(characters.lily, text.lily.T07_00_001);
                break;
            case shadowAnswer.freeze:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T08_00_000);
                await ƒS.Speech.tell(characters.lily, text.lily.T08_00_000);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T08_00_001);
                await ƒS.Speech.tell(characters.lily, text.lily.T08_00_001);
                break;
            case shadowAnswer.tackle:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T09_00_000);
                await ƒS.Speech.tell(characters.lily, text.lily.T09_00_000);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T09_00_000);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T09_00_001);

                // lilys reaction based on affection points
                if (dataForSave.lilyPoints >= 80) {
                    await ƒS.Speech.tell(characters.lily, text.lily.T09_01_000);
                    await ƒS.Speech.tell(characters.lily, text.lily.T09_01_001);
                    await ƒS.Speech.tell(characters.lily, text.lily.T09_01_002);
                } else if (dataForSave.lilyPoints >= 40) {
                    await ƒS.Speech.tell(characters.lily, text.lily.T09_02_000);
                    await ƒS.Speech.tell(characters.lily, text.lily.T09_02_001);
                } else {
                    dataForSave.lilyPoints -= 10;
                    document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                    await ƒS.Speech.tell(characters.lily, text.lily.T09_03_000);
                    await ƒS.Speech.tell(characters.lily, text.lily.T09_03_001);
                    await ƒS.Speech.tell(characters.lily, text.lily.T09_03_002);
                }
                break;
        }

        // go back to classroom
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.classroomRobotics);
        await ƒS.update(1);
        ƒS.Sound.play(sounds.footstepsTiles, 1, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_008);

        // talking with lily
        await ƒS.Character.show(characters.lily, characters.lily.pose.neutral1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_008);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_007);
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_009);

        // project work is over
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.classroomRobotics);
        await ƒS.update(1);
        ƒS.Sound.play(sounds.schoolBell, 1, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_009);
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.lily, characters.lily.pose.happy1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_010);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_008);

        // lily asks you on a date or not
        if (dataForSave.lilyPoints >= 70) {
            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.lily, characters.lily.pose.happy2, ƒS.positionPercent(50, 100));
            await ƒS.update();
            await ƒS.Speech.tell(characters.lily, text.lily.T10_00_000);
            await ƒS.Speech.tell(characters.narrator, text.narrator.T10_00_000);
            await ƒS.Speech.tell(characters.lily, text.lily.T10_00_001);

            // decide to go on date or not
            date = await ƒS.Menu.getInput(dateAnswer, "decisionClass");
            switch (date) {
                case dateAnswer.yes:
                    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T10_01_000);
                    ƒS.Character.hideAll();
                    await ƒS.Character.show(characters.lily, characters.lily.pose.happy1, ƒS.positionPercent(50, 100));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.lily, text.lily.T10_01_000);
                    return "dateLily";
                case dateAnswer.no:
                    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T10_02_000);
                    ƒS.Character.hideAll();
                    await ƒS.Character.show(characters.lily, characters.lily.pose.sad1, ƒS.positionPercent(50, 100));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.lily, text.lily.T10_02_000);
                    break;
            }
        }

        // go home
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_011);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_009);
        return "dateNone";
        // #endregion (Play)
    }
}