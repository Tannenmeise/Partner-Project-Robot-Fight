namespace Game {
    export async function scene_6_robot_fight(): ƒS.SceneReturn {
        console.log("scene_6_robot_fight started");

        // #region (Text) 
        let text = {
            narrator: {
                ChooseYourAction: "Wähle eine Aktion aus.",
                TankAttack0: "Panzer-bot setzt Stoßen ein.",
                TankAttack1: "Panzer-bot setzt Umstoßen ein.",
                TankAttack2: "Panzer-bot setzt Aufladen ein.",
                TankAttack3: "Panzer-bot setzt Ausweichen ein.",
                CarAttack0: "Auto-bot setzt Stoßen ein.",
                CarAttackl: "Auto-bot setzt Umstoßen ein.",
                CarAttack2: "Auto-bot setzt Aufladen ein.",
                CarAttack3: "Auto-bot setzt Ausweichen ein.",
                AttackFailed: "Attacke ist fehlgeschlagen.",
                AreYouSure: "Bist du dir sicher?",
                YouWin: "Du hast gewonnen!",
                YouLose: "Du hast verloren."
            },
            roboticsTeacher: {
                T00_00_000: "Auf die Plätze... fertig... los!",
                T00_00_001: "Das war es mit dem Roboter-Kampf. Danke an alle Studierenden, die teilgenommen haben."
            }
        };
        // #endregion (Text)

        // #region (Decision)
        let chooseAction;
        let chooseActionAnswer = {
            fight: "Kampf",
            items: "Items",
            robot: "Roboter",
            flee: "Flucht"
        };

        let chooseAttack;
        let chooseAttackAnswer = {
            bump: "Stoßen",
            knockOver: "Umstoßen",
            charge: "Aufladen",
            dodge: "Ausweichen"
        };

        let confirmation;
        let confirmationAnswer = {
            yes: "Ja",
            no: "Nein"
        };
        // #endregion (Decision)

        // #region (Play)
        // text
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        
        await ƒS.Location.show(locations.classroomFest);
        await ƒS.update(transitions.binaryCode.duration, transitions.binaryCode.alpha, transitions.binaryCode.edge);

        ƒS.Sound.play(sounds.robotFight, 1, true);

        let health: number = 100;
        let enemyHealth: number = 100;
        let damageFactor: number = 1;
        let enemyDamageFactor: number = 1;
        let chosenAttack: number;
        let enemyChosenAttack: number;

        document.getElementById("fightBars").setAttribute("style", "visibility: visible");

        switch (dataForSave.partnerChosen) {
            case "Louis":
                await ƒS.Character.show(characters.tankBot, characters.tankBot.pose.neutral, ƒS.positionPercent(29, 70));
                await ƒS.Character.show(characters.carBot, characters.carBot.pose.enemy, ƒS.positionPercent(78, 70));
                await ƒS.update();
                break;
            case "Lily":
                await ƒS.Character.show(characters.carBot, characters.carBot.pose.neutral, ƒS.positionPercent(29, 70));
                await ƒS.Character.show(characters.tankBot, characters.tankBot.pose.enemy, ƒS.positionPercent(78, 70));
                await ƒS.update();
                break;
        }

        // decision
        while (health > 0 && enemyHealth > 0) {
            // user's turn
            await ƒS.Speech.tell(characters.narrator, text.narrator.ChooseYourAction);
            chooseAction = await ƒS.Menu.getInput(chooseActionAnswer, "decisionRobotFight");
            switch (chooseAction) {
                case chooseActionAnswer.fight:
                    chooseAttack = await ƒS.Menu.getInput(chooseAttackAnswer, "decisionClass");
                    switch (chooseAttack) {
                        case chooseAttackAnswer.bump:
                            chosenAttack = 0;
                            break;
                        case chooseAttackAnswer.knockOver:
                            chosenAttack = 1;
                            break;
                        case chooseAttackAnswer.charge:
                            chosenAttack = 2;
                            break;
                        case chooseAttackAnswer.dodge:
                            chosenAttack = 3;
                            break;
                    }
                    break;
                case chooseActionAnswer.robot:
                    await ƒS.Speech.tell(characters.narrator, text.narrator.AreYouSure);
                    confirmation = await ƒS.Menu.getInput(confirmationAnswer, "decisionClass");
                    switch (confirmation) {
                        case confirmationAnswer.yes:
                            return "endRobot";
                        case confirmationAnswer.no:
                            break;
                    }
                    break;
                case chooseActionAnswer.items:
                    if (dataForSave.partnerChosen == "Louis") {
                        await ƒS.Character.show(characters.louis, characters.louis.pose.neutral1, ƒS.positionPercent(50, 100));
                        // TODO: insert louis giving a hint here
                        await ƒS.Character.hide(characters.louis);
                    } else {
                        await ƒS.Character.show(characters.lily, characters.lily.pose.neutral1, ƒS.positionPercent(50, 100));
                        // TODO: insert lily giving a hint here
                        await ƒS.Character.hide(characters.lily);
                    }
                    break;
                case chooseActionAnswer.flee:
                    await ƒS.Speech.tell(characters.narrator, text.narrator.AreYouSure);
                    confirmation = await ƒS.Menu.getInput(confirmationAnswer, "decisionClass");
                    switch (confirmation) {
                        case confirmationAnswer.yes:
                            return "endFlee";
                        case confirmationAnswer.no:
                            break;
                    }
                    break;
            }

            // enemy's turn
            let roll: number = Math.random();

            switch (true) {
                // enemy uses "Stoßen"
                case (roll < 0.25):
                    enemyChosenAttack = 0;
                    break;
                // enemy uses "Umstoßen"
                case (roll < 0.5):
                    enemyChosenAttack = 1; 
                    break;
                // enemy uses "Aufladen"
                case (roll < 0.75):
                    enemyChosenAttack = 2;
                    break;
                // enemy uses "Ausweichen"
                case (roll <= 1 ):
                    enemyChosenAttack = 3;
                    break;
            }

            // user's turn evaluation
            switch (chosenAttack) {
                case 0:
                    if (dataForSave.partnerChosen == "Louis") {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.TankAttack0);
                        await ƒS.Character.animate(characters.tankBot, characters.tankBot.pose.neutral, robotAttack());
                        await ƒS.Character.show(characters.tankBot, characters.tankBot.pose.neutral, ƒS.positionPercent(29, 70));
                    } else {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.CarAttack0);
                        await ƒS.Character.animate(characters.carBot, characters.carBot.pose.neutral, robotAttack());
                        await ƒS.Character.show(characters.carBot, characters.carBot.pose.neutral, ƒS.positionPercent(29, 70));
                    }
                    if (enemyChosenAttack != 3) {
                        enemyHealth -= 10 * damageFactor;
                        ƒS.Sound.play(sounds.damage, 1, false);
                        document.getElementById("enemyHealthBar").setAttribute("value", String(enemyHealth));
                    }
                    break;
                case 1:
                    if (dataForSave.partnerChosen == "Louis") {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.TankAttack1);
                        await ƒS.Character.animate(characters.tankBot, characters.tankBot.pose.neutral, robotAttack());
                        await ƒS.Character.show(characters.tankBot, characters.tankBot.pose.neutral, ƒS.positionPercent(29, 70));
                    } else {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.CarAttackl);
                        await ƒS.Character.animate(characters.carBot, characters.carBot.pose.neutral, robotAttack());
                        await ƒS.Character.show(characters.carBot, characters.carBot.pose.neutral, ƒS.positionPercent(29, 70));
                    }
                    if (Math.random() > 0.67 && enemyChosenAttack != 3) { // (> 0.67) = 33% chance
                        enemyHealth -= 50 * damageFactor;
                        ƒS.Sound.play(sounds.damage, 1, false);
                        document.getElementById("enemyHealthBar").setAttribute("value", String(enemyHealth));
                    } else {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.AttackFailed);
                    }
                    break;
                case 2:
                    if (dataForSave.partnerChosen == "Louis") {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.TankAttack2);
                        ƒS.Sound.play(sounds.charge, 1, false);
                        await ƒS.Character.animate(characters.tankBot, characters.tankBot.pose.neutral, robotCharge());
                    } else {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.CarAttack2);
                        ƒS.Sound.play(sounds.charge, 1, false);
                        await ƒS.Character.animate(characters.carBot, characters.carBot.pose.neutral, robotCharge());
                    }
                    damageFactor = 2;
                    break;
                case 3:
                    if (dataForSave.partnerChosen == "Louis") {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.TankAttack3);
                        await ƒS.Character.animate(characters.tankBot, characters.tankBot.pose.neutral, robotDodge());
                        await ƒS.Character.show(characters.tankBot, characters.tankBot.pose.neutral, ƒS.positionPercent(29, 70));
                    } else {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.CarAttack3);
                        await ƒS.Character.animate(characters.carBot, characters.carBot.pose.neutral, robotDodge());
                        await ƒS.Character.show(characters.carBot, characters.carBot.pose.neutral, ƒS.positionPercent(29, 70));
                    }
                    break;
            }

            if (enemyHealth <= 0)
                break;

            // enemy's turn evaluation
            switch (enemyChosenAttack) {
                case (0):
                    if (dataForSave.partnerChosen == "Louis") {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.CarAttack0);
                        await ƒS.Character.animate(characters.carBot, characters.carBot.pose.enemy, robotEnemyAttack());
                        await ƒS.Character.show(characters.carBot, characters.carBot.pose.enemy, ƒS.positionPercent(78, 70));
                    } else {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.TankAttack0);
                        await ƒS.Character.animate(characters.tankBot, characters.tankBot.pose.enemy, robotEnemyAttack());
                        await ƒS.Character.show(characters.tankBot, characters.tankBot.pose.enemy, ƒS.positionPercent(78, 70));
                    }
                    if (chosenAttack != 3) {
                        health -= 10 * enemyDamageFactor;
                        ƒS.Sound.play(sounds.damage, 1, false);
                        document.getElementById("healthBar").setAttribute("value", String(health));
                    }
                    break;
                case (1):
                    if (dataForSave.partnerChosen == "Louis") {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.CarAttackl);
                        await ƒS.Character.animate(characters.carBot, characters.carBot.pose.enemy, robotEnemyAttack());
                        await ƒS.Character.show(characters.carBot, characters.carBot.pose.enemy, ƒS.positionPercent(78, 70));
                    } else {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.TankAttack1);
                        await ƒS.Character.animate(characters.tankBot, characters.tankBot.pose.enemy, robotEnemyAttack());
                        await ƒS.Character.show(characters.tankBot, characters.tankBot.pose.enemy, ƒS.positionPercent(78, 70));
                    }
                    if (Math.random() > 0.67 && chosenAttack != 3) { // (> 0.67) = 33% chance
                        health -= 50 * enemyDamageFactor;
                        ƒS.Sound.play(sounds.damage, 1, false);
                        document.getElementById("healthBar").setAttribute("value", String(health));
                    } else {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.AttackFailed);
                    }  
                    break;
                case (2):
                    if (dataForSave.partnerChosen == "Louis") {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.CarAttack2);
                        ƒS.Sound.play(sounds.charge, 1, false);
                        await ƒS.Character.animate(characters.carBot, characters.carBot.pose.enemy, robotCharge());
                    } else {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.TankAttack2);
                        ƒS.Sound.play(sounds.charge, 1, false);
                        await ƒS.Character.animate(characters.tankBot, characters.tankBot.pose.enemy, robotCharge());
                    }
                    enemyDamageFactor = 2;
                    break;
                case (3):
                    if (dataForSave.partnerChosen == "Louis") {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.CarAttack3);
                        await ƒS.Character.animate(characters.carBot, characters.carBot.pose.enemy, robotEnemyDodge());
                        await ƒS.Character.show(characters.carBot, characters.carBot.pose.enemy, ƒS.positionPercent(78, 70));
                    } else {
                        await ƒS.Speech.tell(characters.narrator, text.narrator.TankAttack3);
                        await ƒS.Character.animate(characters.tankBot, characters.tankBot.pose.enemy, robotEnemyDodge());
                        await ƒS.Character.show(characters.tankBot, characters.tankBot.pose.enemy, ƒS.positionPercent(78, 70));
                    }
                    break;
            }
        }

        await ƒS.Sound.fade(sounds.robotFight, 0, 1, true);

        if (health <= 0) {
            ƒS.Sound.play(sounds.failure, 1, false);
            await ƒS.Speech.tell(characters.narrator, text.narrator.YouLose);
            document.getElementById("fightBars").setAttribute("style", "visibility: hidden");
        } else {
            ƒS.Sound.play(sounds.success, 1, false);
            await ƒS.Speech.tell(characters.narrator, text.narrator.YouWin);
            document.getElementById("fightBars").setAttribute("style", "visibility: hidden");
        }

        switch (dataForSave.partnerChosen) {
            case "Louis":
                return "endLouis";
            case "Lily":
                return "endLily";
        }
        // #endregion (Play)
    }
}