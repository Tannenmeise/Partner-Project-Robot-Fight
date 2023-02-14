namespace Game {
    export async function scene_5a_date_louis(): ƒS.SceneReturn {
        console.log("scene_5a_date_louis started");

        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Am nächsten Tag triffst du dich wie abgemacht mit Louis in der Mecha-Convention.",
                T00_00_001: "Du schaust nach links und dort ist Louis, der mit einem Lächeln auf dich zugeht.",
                T00_00_002: "Du verbringst eine schöne Zeit gemeinsam mit Louis auf der Con.",
                T00_00_003: "Ihr redet über Mechas und Anime während ihr euch die Ausstellungen und Stände anschschaut. Louis scheint ein richtiger Fan zu sein.",
                T00_00_004: "Jetzt wäre die Gelegenheit ihm ebenso ein Geschenk zu kaufen.",
                T00_00_005: "Ein Anhänger wurde in dein Inventar hinzugefügt.",

                T04_00_000: "Du gehst an einen Stand der Merchandise für den neuen Anime 'Evolution: The End Of Evolution' verkauft.",
                T04_00_001: "Du erinnerst dich, dass Louis sehr enthusiastisch darüber war und entscheidest dich dafür einen kleinen Anhänger für ihn zu kaufen.",
                T04_00_002: "Sobald du fertig bist, gehst du wieder zurück an euren Treffpunkt."
            },
            louis: {
                T00_00_000: dataForSave.protagonistName + ". Ich bin hier!",
                T00_00_001: "Hallo. Schön, dass du da bist.",
                T00_00_002: "Ich kann es kaum abwarten 'Evolution: The End Of Evolution' zu sehen!",
                T00_00_003: "Oh... Ist das alles überhaupt interessant für dich?",
                T00_00_004: "Ich habe es erledigt. Hier, nimm das bitte. Ich hoffe es gefällt dir.",
                T00_00_005: "Es ist ein Anhänger von dem Mecha 'Lancebot' aus dem Anime 'Code Gas'. Wenn du ihn nicht willst, kannst du ihn auch gerne verschenken.",
                T00_00_006: "Ich denke, es ist Zeit zu gehen. Vielen Dank, dass du mich begleitet hast. Es war schön jemanden da zu haben.",
                T00_00_007: "Ciao.",

                T01_00_000: "Das freut mich! Es ist schon seit langem ein Hobby von mir.",
                T01_00_001: "Ich würde dir gerne ein Andenken mitgeben. Wartest du kurz hier auf mich?",

                T02_00_000: "Das ist nett von dir, dass du das sagst. Und danke, dass du ehrlich bist.",
                T02_00_001: "Nun... Ich würde dir trotzdem gerne ein Andenken mitgeben. Ich hoffe, das ist OK. Wartest du kurz hier auf mich?",

                T03_00_000: "D-Das tut mir leid. Ich hätte früher bemerken sollen, dass du dich langweilst.",
                T03_00_001: "Ich würde dir gerne eine kleine Entschädigung schenken, wenn das OK ist. Wartest du kurz hier auf mich?",
            
                T04_00_000: "Das hast du für mich getan? ... Das habe ich nicht erwartet. Danke! Der ist ja sogar vom neuen 'Evolution' Anime! Dankeschön."
            },
            protagonist: {
                T00_00_000: "Hi, Louis!",
                T00_00_001: "Dankeschön. Das ist lieb von dir.",
                T00_00_002: "Kein Problem. Wir sehen uns dann an der Uni wieder.",
                T00_00_003: "Ciao.",

                T01_00_000: "Ja! Ich wusste garnicht, dass es eine Mecha-Con hier in der Nähe gibt. Das ist alles echt interessant.",
                T01_00_001: "Klar!",

                T02_00_000: "Hm... Nicht allzu sehr, aber ich finde es toll wie viel Leidenschaft du dafür hast. Das ist doch alles was zählt.",
                T02_00_001: "Klar.",

                T03_00_000: "Nein. Das ist alles ziemlich langweilig für mich. Können wir bald gehen?",
                T03_00_001: "OK.",

                T04_00_000: "Schau, ich habe dir auch einen Anhänger gekauft, solange du weg warst.",
                T04_00_001: "Gerne doch. Freut mich, dass er dir gefällt und du ihn noch nicht hattest. Sonst hättest du jetzt zwei, haha."
            }
        };
        // #endregion (Text)

        // #region (Decision)
        let interest;
        let interestAnswer = {
            yes: "Ja",
            noPolite: "Höfliches Nein",
            noImpolite: "Unhöfliches Nein"
        };

        let gift;
        let giftAnswer = {
            buy: "Geschenk kaufen",
            dontBuy: "Kein Geschenk kaufen"
        };
        // #endregion (Decision)

        // #region (Play)
        // transition
        ƒS.Speech.hide();
        ƒS.Character.hideAll();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.mechaCon);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);

        // talking with louis
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_001);
        await ƒS.Character.show(characters.louis, characters.louis.pose.happy1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_001);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_002);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_003);
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_002);
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.louis, characters.louis.pose.sad1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_003);

        // tell louis if you find the con interesting
        interest = await ƒS.Menu.getInput(interestAnswer, "decisionClass");

        switch (interest) {
            case interestAnswer.yes:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T01_00_000);
                dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
                ƒS.Character.hideAll();
                await ƒS.Character.show(characters.louis, characters.louis.pose.joyful1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.louis, text.louis.T01_00_000);
                await ƒS.Speech.tell(characters.louis, text.louis.T01_00_001);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T01_00_001);
                break;
            case interestAnswer.noPolite:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T02_00_000);
                dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
                ƒS.Character.hideAll();
                await ƒS.Character.show(characters.louis, characters.louis.pose.happy1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.louis, text.louis.T02_00_000);
                await ƒS.Speech.tell(characters.louis, text.louis.T02_00_001);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T02_00_001);
                break;
            case interestAnswer.noImpolite:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T03_00_000);
                await ƒS.Speech.tell(characters.louis, text.louis.T03_00_000);
                await ƒS.Speech.tell(characters.louis, text.louis.T03_00_001);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T03_00_001);
                break;
        }

        // decide to buy a gift for louis or not
        ƒS.Character.hideAll();
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_004);
        gift = await ƒS.Menu.getInput(giftAnswer, "decisionClass");
        switch (gift) {
            case giftAnswer.buy:
                await ƒS.Speech.tell(characters.narrator, text.narrator.T04_00_000);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T04_00_001);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T04_00_002);
                break;
            case giftAnswer.dontBuy:
                break;
        }

        // get your gift from louis
        await ƒS.Character.show(characters.louis, characters.louis.pose.neutral1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_004);
        ƒS.Inventory.add(items.keychainLancebot);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_005);
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_005);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_001);

        // give louis the gift if you bought one
        switch (gift) {
            case giftAnswer.buy:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T04_00_000);
                dataForSave.louisPoints += 10;
                document.getElementById("louisBar").setAttribute("value", String(dataForSave.louisPoints));
                ƒS.Character.hideAll();
                await ƒS.Character.show(characters.louis, characters.louis.pose.happy1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.louis, text.louis.T04_00_000);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T04_00_001);
                break;
            case giftAnswer.dontBuy:
                break;
        }

        // saying goodbye
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_006);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_002);
        await ƒS.Speech.tell(characters.louis, text.louis.T00_00_007);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_003);

        return "robotFight";
        // #endregion (Play)
    }
}