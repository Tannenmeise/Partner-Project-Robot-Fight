namespace Game {
    export async function scene_2_history_lesson(): ƒS.SceneReturn {
        console.log("'scene_2_history_lesson' started");

        // #region (Text) 
        let text = {
            narrator: {
                T0000: "Du bist im Vorlesungsraum für die Geschichtsstunde angekommen.",
                T0001: "Zielgerichtet gehst du auf deinen Platz zu.",
                T0002: "Ein Platz in der vorletzten Reihe und direkt neben dem Fenster.",
                T0003: "Mit erhobener Brust setzt du dich auf deinen Stuhl.",
                T0004: "Pünktlich zum Gong, betritt der Geschichtsprofessor den Raum.",
                T0005: "...",
            },
            protagonist: {
                T0000: "..."
            }
        };
        // #endregion (Text)

        // #region (Decision)
        // #endregion (Decision)
        
        // #region (Play)
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.classroom);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);
        await ƒS.update();

        ƒS.Sound.play(sounds.footstepsTiles, 1, false);
        await ƒS.Sound.fade(sounds.smallCrowd, 1, 5, true);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);

        ƒS.Sound.play(sounds.footstepsTiles, 1, false);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);

        ƒS.Sound.play(sounds.cloth, 1, false); // TODO: you can barely hear it because of the crowd

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);


        // #endregion (Play)
    }
}