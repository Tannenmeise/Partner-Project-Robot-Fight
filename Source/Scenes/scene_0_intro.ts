namespace Game {
    export async function scene_0_intro(): ƒS.SceneReturn {

        // #region (Text) 
        let text = {
            narrator: {
                YourName: "Wie heißt du? ",
                T00_00_000: "Ein neuer Tag an der Robert Robotik Hochschule.",
                T00_00_001: "Nach 4 Semestern hat sich das Gefühl von Gewohnheit endgültig eingenistet. Inzwischen ist auch schon das Ende des 5. Semesters in Sicht.",
                T00_00_002: "Das Laufen zur Hochschule gleicht immer mehr einer gedankenlosen Trance. Es ist immer der gleiche gewohnte Ablauf. Beruhigend, aber auch etwas langweilig.",
                T00_00_003: "Das Zwitschern der Singvögel füllt die Luft. Der Wind bläst sanft durch Gestrüpp und Bäume. Flora und Fauna in der Vormittagssonne erwachend.",
                T00_00_004: "An guten Tagen schiebt der Wind dich auch mal vorwärts statt rückwärts. Als wäre es manchmal nicht schwer genug seine Beine zu den Vorlesungen zu bringen.",
                T00_00_005: "Aber heute ist ein guter Tag. Der Wind ist dir wohl gesonnen.",
                T00_00_006: "Du trittst in das Hochschulgebäude ein."
            }
        };
        // #endregion (Text)

        // #region (Play)
        // show controls
        await ƒS.Text.print("<h2>Steuerung</h2>" +
            "<table>" +
            "<tr>" +
            "<td>f8</td>" +
            "<td>= Speichern</td>" +
            "</tr>" +
            "<tr>" +
            "<td>f9</td>" +
            "<td>= Laden</td>" +
            "</tr>" +
            "<tr>" +
            "<td>i</td>" +
            "<td>= Inventar</td>" +
            "</tr>" +
            "<tr>" +
            "<td>c</td>" +
            "<td>= Credits</td>" +
            "</tr>" +
            "<tr>" +
            "<td>l</td>" +
            "<td>= Love bar</td>" +
            "</tr>" +
            "<tr>" +
            "<td>m</td>" +
            "<td>= Menü</td>" +
            "</tr>" +
            "</table>"
        );

        // protagonist name input
        await ƒS.Speech.tell(characters.narrator, text.narrator.YourName);
        dataForSave.protagonistName = await ƒS.Speech.getInput();

        // transition
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.schoolBuilding);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);
        await ƒS.update();
        ƒS.Sound.play(sounds.sparrows, 1, true);

        // narration
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_002);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_003);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_004);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_005);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_006);
        ƒS.Sound.play(sounds.enterSchoolBuilding, 1, false);
        // #endregion (Play)
    }
}