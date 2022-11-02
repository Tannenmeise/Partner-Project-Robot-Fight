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
        
        // #region (Play)
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.schoolBuilding);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);
        await ƒS.update();

        ƒS.Sound.play(sound.sparrows, 1, true);

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

        ƒS.Sound.play(sound.enterSchoolBuilding, 1, false);
        // #endregion (Play)
    }
}