namespace Game {
    export async function scene_3_robotics_lesson(): ƒS.SceneReturn {
        console.log("scene_3_robotics_lesson started");

        // #region (Text) 
        let text = {
            narrator: {
                T00_00_000: "Als nächstes ist die Remote Robotics Stunde.",
                T00_00_001: "In dieser Stunde sollte das Projekt besprochen werden und die Partnerzuteilung stattfinden.",
                T00_00_002: "Du betrittst den Raum und setzt dich auf deinen gewohnten Platz.",
                T00_00_003: "Ein Studierender, der offensichtlich mit seiner Motivation kämpfen muss, lässt ein niedergeschlagenes Stöhnen verlauten.",
                T00_00_004: "Wildes Gemurmel und Geflüster macht sich breit.",
                T00_00_005: "Angespannt schaust du durch das Zimmer.",
                T00_00_006: "Studierende fangen an bereits Paare zu bilden.",
                T00_00_007: "Du scheinst richtig Pech heute zu haben.",
                T00_00_008: "Innerhalb weniger Sekunden scheint schon jeder einen Partner gefunden zu haben, außer dir.",
                T00_00_009: "Nur noch zwei Studierende scheinen offensichtlich allein dazustehen.",
                T00_00_010: "Du hast zwar noch nie bewusst mit ihnen geredet, kennst sie aber in etwa.",
                T00_00_011: "Wer von den beiden würde einen guten Partner abgeben?",
                T00_00_012: "Nicht Lebenspartner. Dafür ist es gerade etwas zu früh. Projektpartner! Projektpartner erstmal.",
                T00_00_013: "Wen willst du dir zuerst anschauen?",
                T00_00_014: "Wen willst du als Partner?",
                T00_00_015: "Du verabschiedest dich von deinem Projektpartner, verlässt den Raum und gehst nach Hause.",

                T01_00_000: "Ah ja, der Nerd der Klasse. Nicht der einzige. Robotik zieht so einige Leute an, die man Nerds oder Geeks nennen würde. Dieser hier hat jedoch auch einer der besten Noten und ist sehr ehrgeizig.",
                T01_00_001: "Ihn kann man gut als Einzelgänger bezeichnen. Ob er ein guter Partner abgeben würde? Nun ja, ein Gewinn müsste bei ihm ja eigentlich schon in der Tasche sein, oder nicht? Da müsste man sich schon großartig dumm anstellen, um das ihm zu vermasseln.",
                T01_00_002: "Aber ist Arbeit mit überhaupt aushaltbar? Sein Respekt gewinnt man meistens durch gute Manieren und Wissensschatz. Ähm… wie war sein Name nochmal überhaupt?",

                T02_00_000: "Tja, der Tollpatsch der Klasse. Kein Witz. Jeden Tag schafft sie es durch den etwas kleineren oder größeren Unfall Aufmerksamkeit zu erregen.",
                T02_00_001: "Mit ihr zusammen das Projekt zu machen, könnte eine Herausforderung werden. Aber vielleicht ist sie ja trotzdem sehr schlau? Tatsächlich weißt du nicht was für Noten sie schreibt.",
                T02_00_002: "Sie wirkt trotz ihrer auffälligen Haarfarbe wie ein fast unsichtbares Mauerblümchen. Menschen mit gutem Herz und Unterstützungsgeist, schätzt sie sehr."
            },
            roboticsTeacher: {
                T00_00_000: "Schön. Es scheint, Sie haben alle erfolgreich hierhergefunden. Das erspart mir, dass ich einen oder mehreren von Ihnen hinterherlaufen muss, denn das Projekt ist Pflicht – nicht freiwillig.",
                T00_00_001: "Nun reißen Sie sich bitte zusammen. Ich werde Ihre Ergebnisse jeweils benoten. Wenn Sie möchten, wäre diese Note dann auch schon die Endnote für diesen Kurs. Ob Sie die angedachte Klausur dann schreiben wollen, ist Ihnen überlassen. Sie wird freiwillig sein. Die Klausur würde dann 50% mit der Projektarbeit zählen. Ist alles soweit klar?",
                T00_00_002: "Ach ja, genau. Das hatte ich vergessen. Manchmal muss ich es gar nicht mehr erwähnen, da es schon jeder wusste.",
                T00_00_003: "Sie werden mithilfe des Wissens und den Materialien von diesem Semester, einen Roboter bauen, der in einem Ring einen anderen Roboter bewegungsunfähig machen soll. Alle Infos hierzu, habe ich online hochgeladen.",
                T00_00_004: "Dann bitte ich Sie, Sich bitte einen Partner auszusuchen mit dem Sie die Projektarbeit bestreiten möchten.",
                T00_00_005: "Wer bereits einen Partner hat, kann gehen."
            },
            student: {
                T00_00_000: "Was ist das Projekt denn eigentlich?"
            },
            protagonist: {
                T00_00_000: "Hey, ähm... Willst du mit mir das Projekt machen?",

                T00_01_000: "Ja, ich habe voll Lust darauf!",

                T00_02_000: "Ne, eigentlich habe ich gar keine Lust auf den Scheiß.",

                T00_03_000: "Hm... ich weiß nicht. Mal sehen wie es wird.",

                T01_00_000: "Ja.",

                T01_01_000: "Äh...",

                T02_00_000: dataForSave.protagonistName + "."

            },
            louis: {
                T00_00_000: dataForSave.protagonistName + " ist dein Name, oder?",
                T00_00_001: "Mein Name ist Louis.",
                T00_00_002: "Freust du dich auf die Projektarbeit? Nächste Woche werden wir damit anfangen.",

                T01_00_000: "Gut. Jedenfalls jemand, der im Unterricht aufpasst. Von mir aus können wir zusammen arbeiten.",

                T02_00_000: "Schläfst du üblicherweise im Unterricht?",

                T03_00_000: "... Ok.",

                T04_00_000: "Das ist gut. Ich werde sicherstellen, dass unser Projekt ein Erfolg wird.",
                T05_00_000: "Hm. ... Ich werde mich darum kümmern, dass unser Projekt trotzdem ein Erfolg wird.",
                T06_00_000: "Das ist ok. Ich werde sicherstellen, dass unser Projekt ein Erfolg wird."
            },
            lily: {
                T00_00_000: "Ja! Gerne! ... Wie heißt du nochmal?",
                T00_00_001: "Hi " + dataForSave.protagonistName + ". Wir hatten noch nichts miteinander zu tun. Darum fiel es mir schwer mich zu erinnern. Sorry.",
                T00_00_002: "Ich heiße Lily übrigens.",
                T00_00_003: "Nächste Woche werden wir mit der Projektarbeit anfangen. Freust du dich darauf?",

                T01_00_000: "Cool! Ich bin auch schon echt aufgeregt! Das könnte echt spaßig werden.",

                T02_00_000: "Das ist schade. Ich habe trotzdem vor mein Bestes zu geben.",

                T03_00_000: "Mhm. ... Ich freue mich schon etwas auf die Projektarbeit."
            }
        };
        // #endregion (Text)

        // #region (Decision)
        let partnerSearch;
        let partnerSearchAnswer = {
            louis: "Der Student links",
            lily: "Die Studentin rechts"
        };

        let partnerChoice;
        let partnerChoiceAnswer = {
            louis: "Der Student links",
            lily: "Die Studentin rechts"
        };

        let expressEnthusiasm;
        let expressEnthusiasmAnswer = {
            yes: "Ja",
            no: "Nein",
            indifferent: "Gleichgültig"
        };
        // #endregion (Decision)

        // #region (Play)
        document.getElementById("loveBars").setAttribute("style", "visibility: visible");

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);

        await ƒS.Location.show(locations.classroomRobotics);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_002);

        await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_000);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_003);

        await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_001);

        await ƒS.Speech.tell(characters.student, text.student.T00_00_000);

        await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_002);
        await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_003);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_004);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_005);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_006);

        await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_004);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_007);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_008);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_009);

        await ƒS.Character.show(characters.louis, characters.louis.pose.neutral2, ƒS.positionPercent(20, 100));
        await ƒS.Character.show(characters.lily, characters.lily.pose.neutral1, ƒS.positionPercent(80, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_010);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_011);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_012);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_013);

        partnerSearch = await ƒS.Menu.getInput(partnerSearchAnswer, "decisionClass");

        switch (partnerSearch) {
            case partnerSearchAnswer.louis:
                await ƒS.Character.hide(characters.lily);
                await ƒS.update(0.5);

                await ƒS.Character.animate(characters.louis, characters.louis.pose.neutral2, slideFromLeftToMiddleAnimation());

                await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_000);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_001);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_002);

                await ƒS.Character.hide(characters.louis);
                await ƒS.update(0.5);

                await ƒS.Character.show(characters.lily, characters.lily.pose.neutral1, ƒS.positionPercent(50, 100));
                await ƒS.update(0.5);

                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_000);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_001);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_002);

                await ƒS.Character.animate(characters.lily, characters.lily.pose.neutral1, slideFromMiddleToRightAnimation());
                await ƒS.Character.show(characters.louis, characters.louis.pose.neutral2, ƒS.positionPercent(20, 100));
                await ƒS.update(0.5);
                break;

            case partnerSearchAnswer.lily:
                await ƒS.Character.hide(characters.louis);
                await ƒS.update(0.5);

                await ƒS.Character.animate(characters.lily, characters.lily.pose.neutral1, slideFromRightToMiddleAnimation());

                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_000);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_001);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T02_00_002);

                await ƒS.Character.hide(characters.lily);
                await ƒS.update(0.5);

                await ƒS.Character.show(characters.louis, characters.louis.pose.neutral2, ƒS.positionPercent(50, 100));
                await ƒS.update(0.5);

                await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_000);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_001);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T01_00_002);

                await ƒS.Character.animate(characters.louis, characters.louis.pose.neutral2, slideFromMiddleToLeftAnimation());
                await ƒS.Character.show(characters.lily, characters.lily.pose.neutral1, ƒS.positionPercent(80, 100));
                await ƒS.update(0.5);
                break;
        }

        await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_014);

        partnerChoice = await ƒS.Menu.getInput(partnerChoiceAnswer, "decisionClass");

        switch (partnerChoice) {
            case partnerChoiceAnswer.louis:
                dataForSave.partnerChosen = "Louis";

                await ƒS.Character.hide(characters.lily);
                await ƒS.update(0.5);

                await ƒS.Character.animate(characters.louis, characters.louis.pose.neutral2, slideFromLeftToMiddleAnimation());

                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_000);

                await ƒS.Character.hide(characters.louis);
                await ƒS.Character.show(characters.louis, characters.louis.pose.neutral1, ƒS.positionPercent(50, 100));
                ƒS.update();
                await ƒS.Speech.tell(characters.louis, text.louis.T00_00_000);

                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T01_00_000);

                await ƒS.Speech.tell(characters.louis, text.louis.T00_00_001);

                if (dataForSave.paidAttentionInClass) {
                    await ƒS.Character.hide(characters.louis);
                    await ƒS.Character.show(characters.louis, characters.louis.pose.happy2, ƒS.positionPercent(50, 100));
                    ƒS.update();
                    await ƒS.Speech.tell(characters.louis, text.louis.T01_00_000);
                } else if (dataForSave.sleptInClass) {
                    await ƒS.Speech.tell(characters.louis, text.louis.T02_00_000);

                    await ƒS.Speech.tell(characters.protagonist, text.protagonist.T01_01_000);
                } else if (dataForSave.tormentedSomeoneInClass) {
                    await ƒS.Character.hide(characters.louis);
                    await ƒS.Character.show(characters.louis, characters.louis.pose.sad2, ƒS.positionPercent(50, 100));
                    ƒS.update();
                    await ƒS.Speech.tell(characters.louis, text.louis.T03_00_000);
                }

                await ƒS.Speech.tell(characters.louis, text.louis.T00_00_002);

                expressEnthusiasm = await ƒS.Menu.getInput(expressEnthusiasmAnswer, "decisionClass");

                switch (expressEnthusiasm) {
                    case expressEnthusiasmAnswer.yes:
                        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_01_000);

                        await ƒS.Character.hide(characters.louis);
                        await ƒS.Character.show(characters.louis, characters.louis.pose.happy1, ƒS.positionPercent(50, 100));
                        ƒS.update();
                        await ƒS.Speech.tell(characters.louis, text.louis.T04_00_000);

                        break;
                    case expressEnthusiasmAnswer.no:
                        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_02_000);

                        await ƒS.Character.hide(characters.louis);
                        await ƒS.Character.show(characters.louis, characters.louis.pose.sad1, ƒS.positionPercent(50, 100));
                        ƒS.update();
                        await ƒS.Speech.tell(characters.louis, text.louis.T05_00_000);

                        break;
                    case expressEnthusiasmAnswer.indifferent:
                        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_03_000);

                        await ƒS.Character.hide(characters.louis);
                        await ƒS.Character.show(characters.louis, characters.louis.pose.neutral1, ƒS.positionPercent(50, 100));
                        ƒS.update();
                        await ƒS.Speech.tell(characters.louis, text.louis.T06_00_000);

                        break;
                }
                // teacher talking
                await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_005);
                // going home
                await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_015);
                await ƒS.Character.hide(characters.louis);
                ƒS.update();
                break;

            case partnerChoiceAnswer.lily:
                dataForSave.partnerChosen = "Lily";

                await ƒS.Character.hide(characters.louis);
                await ƒS.update(0.5);

                await ƒS.Character.animate(characters.lily, characters.lily.pose.neutral1, slideFromRightToMiddleAnimation());

                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_00_000);

                await ƒS.Character.hide(characters.lily);
                await ƒS.Character.show(characters.lily, characters.lily.pose.happy1, ƒS.positionPercent(50, 100));
                ƒS.update();
                await ƒS.Speech.tell(characters.lily, text.lily.T00_00_000);

                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T02_00_000);

                await ƒS.Speech.tell(characters.lily, text.lily.T00_00_001);
                await ƒS.Speech.tell(characters.lily, text.lily.T00_00_002);

                await ƒS.Speech.tell(characters.lily, text.lily.T00_00_003);

                expressEnthusiasm = await ƒS.Menu.getInput(expressEnthusiasmAnswer, "decisionClass");

                switch (expressEnthusiasm) {
                    case expressEnthusiasmAnswer.yes:
                        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_01_000);

                        await ƒS.Character.hide(characters.lily);
                        await ƒS.Character.show(characters.lily, characters.lily.pose.excited1, ƒS.positionPercent(50, 100));
                        ƒS.update();
                        await ƒS.Speech.tell(characters.lily, text.lily.T01_00_000);

                        break;
                    case expressEnthusiasmAnswer.no:
                        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_02_000);

                        await ƒS.Character.hide(characters.lily);
                        await ƒS.Character.show(characters.lily, characters.lily.pose.sad1, ƒS.positionPercent(50, 100));
                        ƒS.update();
                        await ƒS.Speech.tell(characters.lily, text.lily.T02_00_000);

                        break;
                    case expressEnthusiasmAnswer.indifferent:
                        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T00_03_000);

                        await ƒS.Character.hide(characters.lily);
                        await ƒS.Character.show(characters.lily, characters.lily.pose.neutral1, ƒS.positionPercent(50, 100));
                        ƒS.update();
                        await ƒS.Speech.tell(characters.lily, text.lily.T03_00_000);

                        break;
                }
                // teacher talking
                await ƒS.Speech.tell(characters.roboticsTeacher, text.roboticsTeacher.T00_00_005);
                // going home
                await ƒS.Speech.tell(characters.narrator, text.narrator.T00_00_015);
                await ƒS.Character.hide(characters.lily);
                ƒS.update();
                break;
        }
        ƒS.Sound.play(sounds.footstepsTiles, 1, false);
        // #endregion (Play)
    }
}