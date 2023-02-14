namespace Game {
    export async function scene_5c_date_none(): ƒS.SceneReturn {
        console.log("scene_5c_date_none started");

        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Du verbringst das Wochenende allein und gehst zum Roboter-Kampf wieder zur Uni."
            }
        };
        // #endregion (Text)

        // #region (Play)
        // transition
        ƒS.Speech.hide();
        ƒS.Character.hideAll();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);

        // narration
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);

        return "robotFight";
        // #endregion (Play)
    }
}