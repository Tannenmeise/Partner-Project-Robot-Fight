namespace Game {
    export async function scene_7a_ending_louis(): ƒS.SceneReturn {

        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Der Roboterkampf ist zu Ende und das Schulfest neigt sich dem Ende zu.",

                T01_00_000: "Louis hat dich mit einer ihm unüblichen Röte im Gesicht dazu eingeladen sich am Hügel hinter dem Hochschulgebäude zu treffen.",
                T01_00_001: "Lächelnd hast du dem Treffen zugesagt.",

                T02_00_000: "Louis hat dich dazu eingeladen sich am Hügel hinter dem Hochschulgebäude zu treffen.",

                T03_00_000: "Louis hat dich allein gelassen. Er scheint besseres zu tun zu haben als noch etwas Zeit mit dir zu verbringen.",
                T03_00_001: "Als du über das Hochschulgelände läufst, beobachtest du das bunte Treiben und energetische Unterhaltungen.",
                T03_00_002: "Nach einer Weile entscheidest du dich dazu nach Hause zu gehen."
            },
            louis: {
                T01_00_000: "Hi " + dataForSave.protagonistName + ". Schön, dass wir uns noch treffen können.",
                T01_00_001: "Ich wollte dir noch etwas wichtiges sagen...",
                T01_00_002: "Ich schätze die Zeit, die ich mit dir verbringen durfte. Es war schön mit dir die Projektarbeit zu machen. Du gibst mir das Gefühl, dass ich mich auf dich verlassen kann.",
                T01_00_003: "Das bedeutet mir sehr viel. Es gibt wenige Menschen, denen ich so vertrauen könnte.",
                T01_00_004: "Du warst immerzu nett zu mir... Danke.",
                T01_00_005: "Mich würde es freuen, wenn wir Freunde sein könnten und naja... In Zukunft weiterhin Sachen unternehmen könnten.",
                T01_00_006: "Das wars von mir erstmal... Komm gut nach Hause, OK?",

                T02_00_000: "Hi " + dataForSave.protagonistName + ". Schön, dass wir uns noch treffen können.",
                T02_00_001: "Es war angenehm mit dir die Projektarbeit zu verbringen. Du warst ein guter Projektpartner.",
                T02_00_002: "Ich denke, ich wollte einfach nur 'Danke' sagen. Also... Danke.",
                T02_00_003: "Es wäre schön, wenn wir Freunde sein könnten.",
                T02_00_004: "Das wars eigentlich schon. Wir sehen uns dann mal wieder, wenn du willst. Auf Wiedersehen."
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
        if (dataForSave.louisPoints >= 100) {
            // narration
            await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_000);
            await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_001);
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.black);
            await ƒS.update(1);
            await ƒS.Location.show(locations.endSceneLouis);
            await ƒS.update(1);
            await ƒS.Sound.fade(sounds.endTheme, 1, 1, true);

            // talking with louis
            await ƒS.Speech.tell(characters.louis, text.louis.T01_00_000);
            await ƒS.Speech.tell(characters.louis, text.louis.T01_00_001);
            await ƒS.Speech.tell(characters.louis, text.louis.T01_00_002);
            await ƒS.Speech.tell(characters.louis, text.louis.T01_00_003);
            await ƒS.Speech.tell(characters.louis, text.louis.T01_00_004);
            await ƒS.Speech.tell(characters.louis, text.louis.T01_00_005);
            await ƒS.Speech.tell(characters.louis, text.louis.T01_00_006);

            // letter from louis
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.black);
            await ƒS.update(1);
            ƒS.Sound.play(sounds.paper, 1, false);
            ƒS.Text.addClass("louisLetter");
            await ƒS.Text.print("<h2>Liebe/r " + dataForSave.protagonistName + ",</h2>" +
                "<p>ich wollte dir nochmal schreiben über das, was ich auf dem Hügel gesagt habe.</p>" +
                "<p>Es ist etwas persönlich, jedoch möchte ich, dass du mich richtig verstehst.</p>" +
                "<p>Nicht viele Menschen sind so wie du, " + dataForSave.protagonistName + ".</p>" +
                "<p>Viele Menschen gehen entweder gehässig oder ignorant durch das Leben.</p>" +
                "<p>Ich kenne das gut genug von meiner eigenen Familie.</p>" +
                "<p>Ich weiß, ich selbst bin nicht der wärmste Mensch.</p>" +
                "<p>Jedoch kann ich es mir nun besser vorstellen mich endlich anderen Menschen mehr zu öffnen.</p>" +
                "<p>Menschen mit einem guten Herz wie du.</p>" +
                "<p>Bleib so wie du bist, " + dataForSave.protagonistName + ".</p>" +
                "<h2>Liebe Grüße</h2>" +
                "<h2>Louis</h2>"
            );

            // end
            await ƒS.Sound.fade(sounds.endTheme, 0, 1, true);
            document.getElementsByClassName("louisLetter").item(0).removeAttribute("class");
            ƒS.Text.addClass("endScreen");
            await ƒS.Text.print("<h2>Ende 1/8:</h2>" +
                "<p>Ende mit Louis: Zuneigung</p>"
            );
        } else if (dataForSave.louisPoints >= 50) {
            // narration
            await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_000);
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.black);
            await ƒS.update(1);
            await ƒS.Location.show(locations.endSceneLouis);
            await ƒS.update(1);
            await ƒS.Sound.fade(sounds.endTheme, 1, 1, true);

            // talking with louis
            await ƒS.Speech.tell(characters.louis, text.louis.T02_00_000);
            await ƒS.Speech.tell(characters.louis, text.louis.T02_00_001);
            await ƒS.Speech.tell(characters.louis, text.louis.T02_00_002);
            await ƒS.Speech.tell(characters.louis, text.louis.T02_00_003);
            await ƒS.Speech.tell(characters.louis, text.louis.T02_00_004);

            // end
            await ƒS.Sound.fade(sounds.endTheme, 0, 1, true);
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.black);
            await ƒS.update(1);
            ƒS.Text.addClass("endScreen");
            await ƒS.Text.print("<h2>Ende 2/8:</h2>" +
                "<p>Ende mit Louis: Freunschaft</p>"
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
            await ƒS.Text.print("<h2>Ende 3/8:</h2>" +
                "<p>Ende mit Louis: Unstimmigkeit</p>"
            );
        }

        return "end";
        // #endregion (Play)
    }
}