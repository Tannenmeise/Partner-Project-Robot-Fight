namespace Game {
    export async function scene_4a_storage_room_louis(): ƒS.SceneReturn {
        console.log("scene_4a_storage_room_louis started");

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
                T00_00_007: "Doch da siehst du jemanden oder etwas stehen."
            },
            protagonist: {
                T00_00_000: "Wir sind die Einzigen hier. Bin ich zu früh gekommen?",
                T00_00_001: "...",
                T00_00_002: "Du hast dir ja schon einige Gedanken darüber gemacht.",
                T00_00_003: "Klar. Überlass das mir.",
                T00_00_004: "So... Wo haben wir denn die Hüllen... Ah ha-",
                T00_00_005: "Ha?!",
                T00_00_006: "Verdammt... Ähm... Und was jetzt?",

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

                T09_00_000: "Stillgestanden! Ich werde dir lehren, was passiert, wenn man sich über " + dataForSave.protagonistName + " lustig macht!",
            },
            louis: {
                T00_00_000: "Guten Morgen, " + dataForSave.protagonistName + ". Bist du bereit, um an unseren Roboter zu arbeiten?",
                T00_00_001: "Nein, du bist recht pünktlich. Es waren schon zwei andere Studenten hier, die sind jedoch schon mit der Professorin in den Lagerraum für Robotikteile gegangen.",
                T00_00_002: "Ich denke, es sollte nicht lange dauern bis sie wieder zurück sind. Danach wird sie uns die Materialien zeigen, die wir benutzen dürfen.",
                T00_00_003: "Ich habe mir bereits Gedanken über unseren Roboter gemacht. Hier ist eine Skizze, die ich angefertigt habe.",
                T00_00_004: "Der Roboter soll offensichtlich an einen Panzer erinnern. Dadurch soll es dem Gegner fast unmöglich sein unseren Roboter umzustoßen. Das wäre unsere Defensive.",
                T00_00_005: "Zur Offensive habe ich mir überlegt eine Schaufel vorne zu installieren. Damit sollte es einfach möglich sein, den Gegner in eine Seiten- oder Rückenlage zu versetzen und somit außer Gefecht zu setzen.",
                T00_00_006: "Klar. Was ist eine Skizze ohne eine gute Erklärung? Ich will den Roboter-Kampf schließlich gewinnen. Du hoffentlich auch.",
                T00_00_007: "Ich möchte die Lehrerin nach einem Akku fragen, den ich vorher nicht im Lagerraum gesehen habe. Könntest du währenddessen ein paar Bauteile besorgen, die wir für den Bau der Hülle brauchen könnten?",

                T01_00_000: "Gerne doch.",

                T02_00_000: "Ja.",

                T03_00_000: "...",
                T03_00_001: "Bitte mach solche Scherze nicht, falls es denn einer gewesen sein soll. Mir fällt es schwer zu erkennen, ob du das ernst meinst.",

                T04_00_000: "Gerne. Gut, dass sie dir gefällt.",

                T05_00_000: "...",

                T06_00_000: "... Hast du denn eine bessere Skizze?",
                T06_00_001: "Dann muss dir das wohl reichen.",

                T07_00_000: "Louis. Bist du das, " + dataForSave.protagonistName + "?",
                T07_00_001: "Ok, gut. Nimm meine Hand. Ich führe dich raus.",

                T08_00_000: dataForSave.protagonistName + "... Bist du hier?",
                T08_00_001: "Ok, gut. Nimm meine Hand. Ich führe dich raus.",

                T09_00_000: "Wow, Moment mal-",
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
        // #endregion (Decision)

        // #region (Play)
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.classroomRobotics);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);


        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_001);

        // talking with louis
        await ƒS.Character.show(characters.louis, characters.louis.pose.neutral1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_000);

        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_000);

        await ƒS.Character.hide(characters.louis);
        await ƒS.Character.show(characters.louis, characters.louis.pose.happy2, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_001);
        await ƒS.Character.hide(characters.louis);
        await ƒS.Character.show(characters.louis, characters.louis.pose.neutral1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_002);

        explanation = await ƒS.Menu.getInput(explanationAnswer, "decisionClass");

        switch (explanation) {
            case explanationAnswer.thank:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T01_00_000);
                dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
                await ƒS.Character.hide(characters.louis);
                await ƒS.Character.show(characters.louis, characters.louis.pose.happy1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.louis, text.louis.T01_00_000);
                break;
            case explanationAnswer.indifferent:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T02_00_000);
                await ƒS.Speech.tell(characters.louis, text.louis.T02_00_000);
                break;
            case explanationAnswer.joke:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T03_00_000);
                dataForSave.louisPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
                await ƒS.Character.hide(characters.louis);
                await ƒS.Character.show(characters.louis, characters.louis.pose.sad2, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.louis, text.louis.T03_00_000);
                await ƒS.Character.hide(characters.louis);
                await ƒS.Character.show(characters.louis, characters.louis.pose.sad1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.louis, text.louis.T03_00_001);
                break;
        }

        await ƒS.Character.hide(characters.louis);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_002);
        ƒS.Sound.play(sounds.automaticDoor, 1, false);

        // teacher shows up
        await ƒS.Character.show(characters.roboticsTeacher, characters.roboticsTeacher.pose.neutral, ƒS.positionPercent(50, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_000);
        await ƒS.Character.hide(characters.roboticsTeacher);
        ƒS.update();

        // going to the storage room, TODO: DELETE  THIS, IT'S UNNECESSARY, REWRITE EVERYTHING SO IT'S SHORTER AND IT COMES TO THE STORAGE SCENE !UICKLY
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_003);
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.storageRoom);
        await ƒS.update(1);

        await ƒS.Character.show(characters.roboticsTeacher, characters.roboticsTeacher.pose.neutral, ƒS.positionPercent(50, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_001);
        ƒS.Character.hideAll();
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_004);

        // back to robotics classroom
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.classroomRobotics);
        await ƒS.update(1);

        // talking with louis, presenting the robot idea
        await ƒS.Character.show(characters.louis, characters.louis.pose.neutral2, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_003);
        ƒS.Character.hideAll();
        ƒS.Sound.play(sounds.paper, 1, false);
        await ƒS.Character.show(characters.tankBot, characters.tankBot.pose.sketch, ƒS.positionPercent(50, 70));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_001);

        sketch = await ƒS.Menu.getInput(sketchAnswer, "decisionClass");
        ƒS.Character.hideAll();

        switch (sketch) {
            case sketchAnswer.compliment:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T04_00_000);
                dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
                await ƒS.Character.show(characters.louis, characters.louis.pose.happy1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.louis, text.louis.T04_00_000);
                break;
            case sketchAnswer.indifferent:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T05_00_000);
                dataForSave.louisPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
                await ƒS.Character.show(characters.louis, characters.louis.pose.neutral1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.louis, text.louis.T05_00_000);
                break;
            case sketchAnswer.criticize:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T06_00_000);
                dataForSave.louisPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
                await ƒS.Character.show(characters.louis, characters.louis.pose.angry1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.louis, text.louis.T06_00_000);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T06_00_001);
                await ƒS.Speech.tell(characters.louis, text.louis.T06_00_001);
                break;
        }
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.louis, characters.louis.pose.neutral1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_004);
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_005);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_002);
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_006);
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_007);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_003);
        ƒS.Character.hideAll();

        // go to storage room
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.storageRoom);
        await ƒS.update(1);

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
        await ƒS.Character.show(characters.student, characters.student.pose.louis, ƒS.positionPercent(50, 100));
        await ƒS.update(0);

        shadow = await ƒS.Menu.getInput(shadowAnswer, "decisionClass");

        switch (shadow) {
            case shadowAnswer.speakTo:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T07_00_000);
                await ƒS.Speech.tell(characters.louis, text.louis.T07_00_000);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T07_00_001);
                await ƒS.Speech.tell(characters.louis, text.louis.T07_00_001);
                break;
            case shadowAnswer.freeze:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T08_00_000);
                await ƒS.Speech.tell(characters.louis, text.louis.T08_00_000);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T08_00_001);
                await ƒS.Speech.tell(characters.louis, text.louis.T08_00_001);
                break;
            case shadowAnswer.tackle:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T09_00_000);
                await ƒS.Speech.tell(characters.louis, text.louis.T09_00_000);
                // tackle
                ƒS.Sound.play(sounds.bump, 1, false);
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
                // talk
                // TODO: if you have the highest possible points, he'll react positively towards your tackle. Neutral or angry accordingly to lower points.
                break;
        }

        // TODO: DELETE TEST
        dataForSave.partnerChosen = "Louis";

        // #endregion (Play)
    }
}