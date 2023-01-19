namespace Game {
    export async function scene_7a_ending_louis(): ƒS.SceneReturn {
        console.log("scene_7a_ending_louis started");

        // #region (Text) 
        let text = {
            narrator: {
            }
        };
        // #endregion (Text)

        // #region (Decision)
        // #endregion (Decision)


        // #region (Play)
        document.getElementById("loveBars").setAttribute("style", "visibility: visible");
        
        await ƒS.Text.print("Brief von Louis");

        return "end";
        // #endregion (Play)
    }
}