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

        //TODO: delete
        dataForSave.partnerChosen = "Louis";

        ƒS.Text.addClass("louisLetter");

        await ƒS.Text.print("<h2>Hallo " + dataForSave.protagonistName + ",</h2>" +
            "<p>Bla bla bla...</p>" +
            "<h2>Liebe Grüße</h2>" +
            "<h2>Louis</h2>"
        );

        return "end";
        // #endregion (Play)
    }
}