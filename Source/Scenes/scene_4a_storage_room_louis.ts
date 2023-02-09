namespace Game {
    export async function scene_4a_storage_room_louis(): ƒS.SceneReturn {
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
                T00_00_000: "Guten Morgen, " + dataForSave.protagonistName + ". Bist du bereit, um an unseren Roboter zu arbeiten?",
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
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_001);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.classroomRobotics);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);

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
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);

        await ƒS.Character.show(characters.roboticsTeacher, characters.roboticsTeacher.pose.neutral, ƒS.positionPercent(50, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_001);

        // #endregion (Play)
    }
}