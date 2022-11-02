namespace Game {
    export async function scene_2_history_lesson(): ƒS.SceneReturn {
        console.log("'scene_2_history_lesson' started");

        // #region (Text) 
        let text = {
            narrator: {
                T0000: "..."
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

        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
        // #endregion (Play)
    }
}