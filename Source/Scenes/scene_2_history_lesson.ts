namespace Game {
    export async function scene_2_history_lesson(): ƒS.SceneReturn {
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
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);

        await ƒS.Location.show(locations.classroomHistory);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);


        ƒS.Sound.play(sounds.footstepsTiles, 1, false);
        await ƒS.Sound.fade(sounds.smallCrowd, 1, 2, true);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);

        ƒS.Sound.play(sounds.footstepsTiles, 1, false);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_001);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_002);

        ƒS.Sound.play(sounds.chairScreeching, 1, false);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_003);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_004);

        ƒS.Sound.play(sounds.schoolBell, 1, false);

        await ƒS.Speech.tell(characters.historyTeacher, text.historyTeacher.T00_00_000);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_005);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_006);

        await ƒS.Speech.tell(characters.historyTeacher, text.historyTeacher.T00_00_001);
        await ƒS.Speech.tell(characters.historyTeacher, text.historyTeacher.T00_00_002);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_007);

        await ƒS.Sound.fade(sounds.smallCrowd, 0, 1, true);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_008);

        lectureStart = await ƒS.Menu.getInput(lectureStartAnswer, "decisionClass");

        switch (lectureStart) {
            case lectureStartAnswer.payAttention:
                dataForSave.paidAttentionInClass = true;
                dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
                await ƒS.Speech.tell(characters.historyTeacher, text.historyTeacher.T01_00_000);
                ƒS.Speech.hide();
                await ƒS.Location.show(locations.black);
                await ƒS.update(1);
                await ƒS.Location.show(locations.classroomHistory);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_000);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_001);
                await ƒS.Speech.tell(characters.historyTeacher, text.historyTeacher.T01_00_001);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_002);
                await ƒS.Speech.tell(characters.historyTeacher, text.historyTeacher.T01_00_002);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_003);
                break;
            case lectureStartAnswer.sleep:
                dataForSave.sleptInClass = true;
                dataForSave.louisPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_000);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_001);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_002);
                ƒS.Speech.hide();
                await ƒS.Location.show(locations.black);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_003);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_004);
                await ƒS.Location.show(locations.classroomHistory);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_005);
                await ƒS.Speech.tell(characters.historyTeacher, text.historyTeacher.T02_00_000);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_006);
                await ƒS.Speech.tell(characters.historyTeacher, text.historyTeacher.T02_00_001);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_007);
                break;
            case lectureStartAnswer.torment:
                dataForSave.tormentedSomeoneInClass = true;
                dataForSave.louisPoints -= 10;
                dataForSave.lilyPoints -= 10;
                document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
                document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_000);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_001);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_002);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_003);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_004);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_005);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_006);
                ƒS.Speech.hide();
                await ƒS.Location.show(locations.black);
                await ƒS.update(1);
                await ƒS.Location.show(locations.classroomHistory);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_007);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_008);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_009);
                await ƒS.Speech.tell(characters.historyTeacher, text.historyTeacher.T03_00_000);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_010);
                await ƒS.Speech.tell(characters.historyTeacher, text.historyTeacher.T03_00_001);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_011);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_012);
                break;
        }

        ƒS.Sound.play(sounds.footstepsTiles, 1, false);
        // #endregion (Play)
    }
}