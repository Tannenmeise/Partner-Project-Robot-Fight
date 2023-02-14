namespace Game {
    export async function scene_5b_date_lily(): ƒS.SceneReturn {
        console.log("scene_5b_date_lily started");

        // #region (Text) 
        let text = {
            narrator: {
            }
        };
        // #endregion (Text)

        // #region (Decision)
        // #endregion (Decision)


        // #region (Play)
        ƒS.Speech.hide();
        ƒS.Character.hideAll();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.butterflyHouse);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);

        return "robotFight";
        // #endregion (Play)
    }
}