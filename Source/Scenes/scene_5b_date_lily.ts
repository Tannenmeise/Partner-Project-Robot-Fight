namespace Game {
    export async function scene_5b_date_lily(): ƒS.SceneReturn {

        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Am nächsten Tag triffst du dich wie abgemacht mit Lily im Schmetterlingshaus.",
                T00_00_001: "Du schaust nach links und dort ist Lily, die mit einem Lächeln auf dich zugeht.",
                T00_00_002: "Du verbringst eine schöne Zeit gemeinsam mit Lily im Schmetterlingshaus.",
                T00_00_003: "Ihr redet über all die bunten Schmetterlinge während ihr sie gespannt betrachtet. Lily scheint ein richtiger Fan zu sein.",
                T00_00_004: "Jetzt wäre die Gelegenheit ihr ebenso ein Geschenk zu kaufen.",
                T00_00_005: "Ein Pin wurde in dein Inventar hinzugefügt.",

                T04_00_000: "Du gehst an einen Stand der Pins mit bunten Schmetterlingen verkauft.",
                T04_00_001: "Du erinnerst dich, dass Lily besonders von orangen Schmetterlingen angetan war und entscheidest dich dafür einen Pin für sie zu kaufen.",
                T04_00_002: "Sobald du fertig bist, gehst du wieder zurück an euren Treffpunkt."
            },
            lily: {
                T00_00_000: dataForSave.protagonistName + ". Ich bin hier!",
                T00_00_001: "Hi! Schön dich zu sehen.",
                T00_00_002: "Ich liebe besonders orangene Schmetterlinge! Orange ist meine Lieblingsfarbe. Vielleicht sieht man es mir an. Haha.",
                T00_00_003: "Oh... Ist das alles überhaupt interessant für dich?",
                T00_00_004: "Da bin ich wieder. Hier, bitte, das ist für dich. Ich hoffe es gefällt dir...",
                T00_00_005: "Es ist ein Pin, der etwas an einen blauen Morphofalter erinnert. Wenn du ihn nicht willst, kannst du ihn auch verschenken...",
                T00_00_006: "Oh- Es ist Zeit zu gehen. Danke, dass du mit mir hier warst.",
                T00_00_007: "Bis dann!",

                T01_00_000: "Das ist eine Erleichterung! Ich habe Schmetterlinge schon als Kind geliebt.",
                T01_00_001: "Ich würde dir gerne ein kleines Andenken geben. Wartest du ganz kurz hier?",

                T02_00_000: "Tut mir leid, dass es dir nicht so gefällt.",
                T02_00_001: "I-Ich würde dir trotzdem gerne ein kleines Andenken schenken. Ich hoffe, das ist OK. Wartest du kurz hier?",

                T03_00_000: "D-Das tut mir leid. Ich hätte früher bemerken sollen, dass du dich langweilst.",
                T03_00_001: "Ich würde dir gerne eine kleine Entschädigung schenken. Wartest du ganz kurz hier?",
            
                T04_00_000: "W-Wirklich? Dankeschön! Ooh! Der sieht aus wie ein Monarchfalter. Danke!"
            },
            protagonist: {
                T00_00_000: "Hi, Lily!",
                T00_00_001: "Dankeschön. Das ist lieb von dir.",
                T00_00_002: "Kein Problem. Wir sehen uns dann an der Uni wieder.",
                T00_00_003: "Tschüss!",

                T01_00_000: "Ja. Ich wusste garnicht, dass das Schmetterlingshaus schon geöffnet hat. Sie sind alle so schön.",
                T01_00_001: "Natürlich.",

                T02_00_000: "Hm... Nicht allzu sehr, aber ich finde es toll wie viel Leidenschaft du dafür hast. Das ist doch alles was zählt.",
                T02_00_001: "Natürlich.",

                T03_00_000: "Nein. Das ist alles ziemlich langweilig für mich. Können wir bald gehen?",
                T03_00_001: "OK.",

                T04_00_000: "Schau, ich habe dir auch einen Pin gekauft, solange du weg warst.",
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
        await ƒS.Location.show(locations.butterflyHouse);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);
        ƒS.Sound.play(sounds.footstepsTiles, 1, false);
        ƒS.Sound.play(sounds.sparrows, 1, true);

        // talking with lily
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_001);
        ƒS.Sound.play(sounds.footstepsTiles, 1, false);
        await ƒS.Character.show(characters.lily, characters.lily.pose.happy1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_001);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_002);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_003);
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_002);
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.lily, characters.lily.pose.sad1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_003);

        // tell lily if you find the butterfly house interesting
        interest = await ƒS.Menu.getInput(interestAnswer, "decisionClass");
        switch (interest) {
            case interestAnswer.yes:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T01_00_000);
                dataForSave.lilyPoints += 10;
                document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                ƒS.Character.hideAll();
                await ƒS.Character.show(characters.lily, characters.lily.pose.joyful1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.lily, text.lily.T01_00_000);
                await ƒS.Speech.tell(characters.lily, text.lily.T01_00_001);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T01_00_001);
                break;
            case interestAnswer.noPolite:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T02_00_000);
                dataForSave.lilyPoints += 10;
                document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                ƒS.Character.hideAll();
                await ƒS.Character.show(characters.lily, characters.lily.pose.happy1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.lily, text.lily.T02_00_000);
                await ƒS.Speech.tell(characters.lily, text.lily.T02_00_001);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T02_00_001);
                break;
            case interestAnswer.noImpolite:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T03_00_000);
                dataForSave.lilyPoints -= 10;
                document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                await ƒS.Speech.tell(characters.lily, text.lily.T03_00_000);
                await ƒS.Speech.tell(characters.lily, text.lily.T03_00_001);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T03_00_001);
                break;
        }

        // decide to buy a gift for lily or not
        ƒS.Sound.play(sounds.footstepsTiles, 1, false);
        ƒS.Character.hideAll();
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_004);
        gift = await ƒS.Menu.getInput(giftAnswer, "decisionClass");
        switch (gift) {
            case giftAnswer.buy:
                ƒS.Sound.play(sounds.footstepsTiles, 1, false);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T04_00_000);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T04_00_001);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T04_00_002);
                break;
            case giftAnswer.dontBuy:
                break;
        }

        // get your gift from lily
        ƒS.Sound.play(sounds.footstepsTiles, 1, false);
        await ƒS.Character.show(characters.lily, characters.lily.pose.neutral1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_004);
        ƒS.Inventory.add(items.pinBlue);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_005);
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_005);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_001);

        // give lily the gift if you bought one
        switch (gift) {
            case giftAnswer.buy:
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T04_00_000);
                dataForSave.lilyPoints += 10;
                document.getElementById("lilyBar").setAttribute("value", String(dataForSave.lilyPoints));
                ƒS.Character.hideAll();
                await ƒS.Character.show(characters.lily, characters.lily.pose.joyful1, ƒS.positionPercent(50, 100));
                await ƒS.update();
                await ƒS.Speech.tell(characters.lily, text.lily.T04_00_000);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T04_00_001);
                break;
            case giftAnswer.dontBuy:
                break;
        }

        // saying goodbye
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.lily, characters.lily.pose.neutral1, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_006);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_002);
        await ƒS.Speech.tell(characters.lily, text.lily.T00_00_007);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_003);
        await ƒS.Sound.fade(sounds.sparrows, 0, 1, true);

        return "robotFight";
        // #endregion (Play)
    }
}