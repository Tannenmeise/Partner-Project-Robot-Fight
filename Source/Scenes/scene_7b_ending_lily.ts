namespace Game {
    export async function scene_7b_ending_lily(): ƒS.SceneReturn {

        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Der Roboterkampf ist zu Ende und das Schulfest neigt sich dem Ende zu.",

                T01_00_000: "Lily hat dich mit ganz roten Wangen dazu eingeladen sich am Hügel hinter dem Hochschulgebäude zu treffen.",
                T01_00_001: "Lächelnd hast du dem Treffen zugesagt.",

                T02_00_000: "Lily hat dich dazu eingeladen sich am Hügel hinter dem Hochschulgebäude zu treffen.",

                T03_00_000: "Lily hat dich allein gelassen. Sie scheint besseres zu tun zu haben als noch etwas Zeit mit dir zu verbringen.",
                T03_00_001: "Als du über das Hochschulgelände läufst, beobachtest du das bunte Treiben und energetische Unterhaltungen.",
                T03_00_002: "Nach einer Weile entscheidest du dich dazu nach Hause zu gehen."
            },
            lily: {
                T01_00_000: "Hi " + dataForSave.protagonistName + "! Danke, dass du gekommen bist.",
                T01_00_001: "Ich fand die Zeit, die wir miteinander verbacht haben echt schön.",
                T01_00_002: "Es hat mir echt Spaß gemacht, das Projekt, das Schmetterlingshaus, der Roboterkampf...",
                T01_00_003: "Und du warst immer nur nett zu mir... Danke.",
                T01_00_004: "Ich hatte echt Sorgen, dass ich das Projekt hätte alleine machen müssen. Du warst mein Retter in Not, haha!",
                T01_00_005: "Mich würde es freuen, wenn wir... in Zukunft weiterhin Sachen unternehmen könnten.",
                T01_00_006: "Das war alles, was ich loswerden wollte. Danke fürs Zuhören. Komm gut nach Hause, ja?",

                T02_00_000: "Hi " + dataForSave.protagonistName + "! Danke, dass du gekommen bist.",
                T02_00_001: "Du Projektarbeit mit dir hat Spaß gemacht. Wir sind gut miteinander ausgekommen.",
                T02_00_002: "Ich denke, ich wollte einfach nur 'Danke' für alles sagen. Also, ja... Danke.",
                T02_00_003: "Es wäre schön, wenn wir Freunde bleiben könnten...",
                T02_00_004: "Das wars eigentlich schon von mir, haha. Hab noch einen schönen Tag! Tschüss."
            }
        };
        // #endregion (Text)

        // #region (Play)
        // transition
        ƒS.Speech.hide();
        ƒS.Character.hideAll();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.schoolBuildingFest);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);

        // end of school fest
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);

        // get 1 out of 3 ends (decided by affection points)
        if (dataForSave.lilyPoints >= 100) {
            // narration
            await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_000);
            await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_001);
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.black);
            await ƒS.update(1);
            await ƒS.Location.show(locations.endSceneLily);
            await ƒS.update(1);
            await ƒS.Sound.fade(sounds.endTheme, 1, 1, true);

            // talking with lily
            await ƒS.Speech.tell(characters.lily, text.lily.T01_00_000);
            await ƒS.Speech.tell(characters.lily, text.lily.T01_00_001);
            await ƒS.Speech.tell(characters.lily, text.lily.T01_00_002);
            await ƒS.Speech.tell(characters.lily, text.lily.T01_00_003);
            await ƒS.Speech.tell(characters.lily, text.lily.T01_00_004);
            await ƒS.Speech.tell(characters.lily, text.lily.T01_00_005);
            await ƒS.Speech.tell(characters.lily, text.lily.T01_00_006);

            // letter from lily
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.black);
            await ƒS.update(1);
            ƒS.Sound.play(sounds.paper, 1, false);
            ƒS.Text.addClass("lilyLetter");
            await ƒS.Text.print("<h2>Liebe/r " + dataForSave.protagonistName + ",</h2>" +
                "<p>ich wollte dir nochmal schreiben, weil ich noch gerne etwas erwähnen möchte.</p>" +
                "<p>Es ist etwas persönlich, aber ich möchte gerne, dass du es weißt.</p>" +
                "<p>Nicht viele Leute sind so offen und freundlich zu mir wie du es bist.</p>" +
                "<p>Viele Leute ignorieren oder belächeln mich, weil ich nicht wie die anderen Robotik Student*innen bin.</p>" +
                "<p>In der Schule war das auch schon so.</p>" +
                "<p>Darum schätze ich es umso mehr, dass du immer so nett zu mir warst und mich nicht ignoriert hast.</p>" +
                "<p>Du hast ein gutes Herz, " + dataForSave.protagonistName + ".</p>" +
                "<p>Das war jetzt schon ungeheuer persönlich. Tut mir leid.</p>" +
                "<p>Danke nochmal für alles, " + dataForSave.protagonistName + "!</p>" +
                "<h2>Liebe Grüße</h2>" +
                "<h2>Lily</h2>"
            );

            // end
            await ƒS.Sound.fade(sounds.endTheme, 0, 1, true);
            document.getElementsByClassName("lilyLetter").item(0).removeAttribute("class");
            ƒS.Text.addClass("endScreen");
            await ƒS.Text.print("<h2>Ende 4/8:</h2>" +
                "<p>Ende mit Lily: Zuneigung</p>"
            );
        } else if (dataForSave.lilyPoints >= 50) {
            // narration
            await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_000);
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.black);
            await ƒS.update(1);
            await ƒS.Location.show(locations.endSceneLily);
            await ƒS.update(1);

            // talking with lily
            await ƒS.Sound.fade(sounds.endTheme, 1, 1, true);
            await ƒS.Speech.tell(characters.lily, text.lily.T02_00_000);
            await ƒS.Speech.tell(characters.lily, text.lily.T02_00_001);
            await ƒS.Speech.tell(characters.lily, text.lily.T02_00_002);
            await ƒS.Speech.tell(characters.lily, text.lily.T02_00_003);
            await ƒS.Speech.tell(characters.lily, text.lily.T02_00_004);

            // end
            await ƒS.Sound.fade(sounds.endTheme, 0, 1, true);
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.black);
            await ƒS.update(1);
            ƒS.Text.addClass("endScreen");
            await ƒS.Text.print("<h2>Ende 5/8:</h2>" +
                "<p>Ende mit Lily: Freunschaft</p>"
            );
        } else {
            // narration
            await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_000);
            await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_001);
            await ƒS.Speech.tell(characters.narrator, text.narrator.T03_00_002);

            // end
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.black);
            await ƒS.update(1);
            ƒS.Text.addClass("endScreen");
            await ƒS.Text.print("<h2>Ende 6/8:</h2>" +
                "<p>Ende mit Lily: Unstimmigkeit</p>"
            );
        }

        return "end";
        // #endregion (Play)
    }
}