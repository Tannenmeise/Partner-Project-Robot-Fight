namespace Game {
    export async function scene_7c_ending_robot(): ƒS.SceneReturn {

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
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_001);
        await ƒS.Speech.tell(characters.student, text.student.T00_00_000);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_002);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_003);

        await ƒS.Sound.fade(sounds.robotFight, 0, 0.5, true);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_002);
        await ƒS.Sound.fade(sounds.alternativeEnd, 1, 0, true);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_004);
        await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_005);

        switch (dataForSave.partnerChosen) {
            case "Louis":
                await ƒS.Speech.tell(characters.louis, text.louis.T00_00_000);
                break;
            case "Lily":
                await ƒS.Speech.tell(characters.lily, text.lily.T00_00_000);
                break;
        }

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_006);
        ƒS.Speech.hide();
        ƒS.Text.addClass("endScreen");
        await ƒS.Text.print("<h2>Ende 7/8:</h2>" +
            "<p>Roboter Austausch</p>"
        );

        await ƒS.Sound.fade(sounds.alternativeEnd, 0, 0, true);

        return "end";
        // #endregion (Play)
    }
}