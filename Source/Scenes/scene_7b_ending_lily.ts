namespace Game {
    export async function scene_7b_ending_lily(): ƒS.SceneReturn {
        console.log("scene_7b_ending_lily started");

        // #region (Text) 
        let text = {
            narrator: {
            }
        };
        // #endregion (Text)

        // #region (Decision)
        // #endregion (Decision)


        // #region (Play)

        //TODO: delete
        dataForSave.partnerChosen = "Lily";

        ƒS.Text.addClass("lilyLetter");

        await ƒS.Text.print("<h2>Hallo " + dataForSave.protagonistName + ",</h2>" +
            "<p>Bla bla bla...</p>" +
            "<h2>Liebe Grüße</h2>" +
            "<h2>Lily</h2>"
        );

        return "end";
        // #endregion (Play)
    }
}