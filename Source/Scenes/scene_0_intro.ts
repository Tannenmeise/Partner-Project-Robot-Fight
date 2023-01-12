namespace Game {
    export async function scene_0_intro(): ƒS.SceneReturn {
        console.log("scene_0_intro started");

        // #region (Text) 
        let text = {
            narrator: {
                YourName: "Wie heißt du?",
                T00_00_000: "Ein neuer Tag an der Robert Robotik Hochschule.",
                T00_00_001: "Nach 4 Semestern hat sich das Gefühl von Gewohnheit endgültig eingenistet. Nun bist du bereits Nahe des Endes des 5. Semesters angelangt.",
                T00_00_002: "Das Laufen zur Hochschule gleicht immer mehr einer gedankenlosen Trance. Es ist immer der gleiche gewohnte Ablauf. Beruhigend, aber auch etwas langweilig.",
                T00_00_003: "Das Zwitschern der Singvögel füllt die Luft. Der Wind bläst sanft durch Gestrüpp und Bäume. Flora und Fauna in der Vormittagssonne erwachend.",
                T00_00_004: "An guten Tagen schiebt der Wind einen auch mal vorwärts statt rückwärts. Als wäre es manchmal nicht schwer genug seine Beine zum Unterricht zu bringen.",
                T00_00_005: "Aber heute ist ein guter Tag. Der Wind ist dir wohl gesonnen.",
                T00_00_006: "Du trittst in das Eingangsgebäude ein."
            }
        };
        // #endregion (Text)
        
        // #region (Play)
        // TODO: DELETE
        /*
        ƒS.Inventory.add(items.keychainEvo);
        ƒS.Inventory.add(items.keychainLancebot);
        ƒS.Inventory.add(items.pinBlue);
        ƒS.Inventory.add(items.pinOrange);
        ƒS.Inventory.add(items.medal);
        await ƒS.Inventory.open();
        */
       
        await ƒS.Speech.tell(characters.narrator, text.narrator.YourName);
        dataForSave.protagonistName = await ƒS.Speech.getInput();
        
        // transition
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.schoolBuilding);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);
        await ƒS.update();
        // sound
        ƒS.Sound.play(sounds.sparrows, 1, true);
        // narration
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_002);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_003);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_004);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_005);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_006);
        // sound
        ƒS.Sound.play(sounds.enterSchoolBuilding, 1, false);
        // #endregion (Play)
    }
}