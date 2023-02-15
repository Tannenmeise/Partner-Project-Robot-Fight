namespace Game {
    export async function scene_7d_ending_flee(): ƒS.SceneReturn {

        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Du fühlst wie Perlen aus Schweiß dir über das Gesicht laufen.",
                T00_00_001: "Der Stress ist dir zu viel. Du überlässt deinem Projektpartner die Fernbedienung. Dann stürmst du aus dem Raum und pflügst dabei zwei Studenten um.",
                T00_00_002: "Die Robotik Professorin bringt kein Wort heraus. Dein Projektpartner ruft dir hinterher."
            },
            protagonist: {
                T00_00_000: "..."
            },
            student: {
                T00_00_000: "Hey!"
            },
            louis: {
                T00_00_000: dataForSave.protagonistName + "! Was zur Hölle machst du?!"
            },
            lily: {
                T00_00_000: dataForSave.protagonistName + "! Geh nicht!"
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
        ƒS.Sound.play(sounds.bump, 1, false);
        await ƒS.Speech.tell(characters.student, text.student.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_002);

        switch (dataForSave.partnerChosen) {
            case "Louis":
                await ƒS.Speech.tell(characters.louis, text.louis.T00_00_000);
                break;
            case "Lily":
                await ƒS.Speech.tell(characters.lily, text.lily.T00_00_000);
                break;
        }

        ƒS.Speech.hide();
        ƒS.Text.addClass("endScreen");
        await ƒS.Text.print("<h2>Ende 8/8:</h2>" +
            "<p>Flucht</p>"
        );

        await ƒS.Sound.fade(sounds.robotFight, 0, 0, true);

        return "end";
        // #endregion (Play)
    }
}