namespace Game {
    export async function scene_8_end(): ƒS.SceneReturn {
        console.log("The End. Thanks for playing!");

        ƒS.Speech.hide();
        ƒS.Text.addClass("endScreen");
        await ƒS.Text.print("<h2>Danke fürs Spielen!</h2>"
        );
    }
}