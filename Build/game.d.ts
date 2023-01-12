declare namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        protagonistName: string;
        partnerChosen: string;
        louisPoints: number;
        lilyPoints: number;
        paidAttentionInClass: boolean;
        sleptInClass: boolean;
        tormentedSomeoneInClass: boolean;
    };
    let items: {
        keychainEvo: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        keychainLancebot: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        medal: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        pinBlue: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        pinOrange: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    let transitions: {
        binaryCode: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sounds: {
        endTheme: string;
        robotFight: string;
        automaticDoor: string;
        bigCrowd: string;
        bump: string;
        chairScreeching: string;
        charge: string;
        cloth: string;
        damage: string;
        enterSchoolBuilding: string;
        failure: string;
        footstepsTiles: string;
        schoolBell: string;
        smallCrowd: string;
        sparrows: string;
        success: string;
    };
    let locations: {
        black: {
            name: string;
            background: string;
        };
        white: {
            name: string;
            background: string;
        };
        schoolBuilding: {
            name: string;
            background: string;
        };
        pinboards1: {
            name: string;
            background: string;
        };
        pinboards2: {
            name: string;
            background: string;
        };
        classroomHistory: {
            name: string;
            background: string;
        };
        classroomRobotics: {
            name: string;
            background: string;
        };
        classroomFest: {
            name: string;
            background: string;
        };
        schoolBuildingFest: {
            name: string;
            background: string;
        };
        storageRoom: {
            name: string;
            background: string;
        };
        storageRoomDark: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        student: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                lily: string;
                louis: string;
            };
        };
        louis: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry1: string;
                angry2: string;
                happy1: string;
                happy2: string;
                joyful1: string;
                joyful2: string;
                neutral1: string;
                neutral2: string;
                sad1: string;
                sad2: string;
            };
        };
        lily: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                excited1: string;
                excited2: string;
                happy1: string;
                happy2: string;
                joyful1: string;
                joyful2: string;
                neutral1: string;
                neutral2: string;
                sad1: string;
                sad2: string;
            };
        };
        historyTeacher: {
            name: string;
        };
        roboticsTeacher: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        tankBot: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                sketch: string;
                neutral: string;
                enemy: string;
            };
        };
        carBot: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                sketch: string;
                neutral: string;
                enemy: string;
            };
        };
    };
    function slideFromLeftToMiddleAnimation(): ƒS.AnimationDefinition;
    function slideFromRightToMiddleAnimation(): ƒS.AnimationDefinition;
    function slideFromMiddleToLeftAnimation(): ƒS.AnimationDefinition;
    function slideFromMiddleToRightAnimation(): ƒS.AnimationDefinition;
    function robotAttack(): ƒS.AnimationDefinition;
    function robotCharge(): ƒS.AnimationDefinition;
    function robotDodge(): ƒS.AnimationDefinition;
    function robotEnemyAttack(): ƒS.AnimationDefinition;
    function robotEnemyDodge(): ƒS.AnimationDefinition;
}
declare namespace Game {
    function scene_0_intro(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_1_pinboards(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_2_history_lesson(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_3_robotics_lesson(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_4a_storage_room_louis(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_4b_storage_room_lily(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_5a_date_louis(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_5b_date_lily(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_5c_date_none(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_6_robot_fight(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_7a_ending_louis(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_7b_ending_lily(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_7c_ending_robot(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_7d_ending_flee(): ƒS.SceneReturn;
}
declare namespace Game {
    function scene_8_end(): ƒS.SceneReturn;
}
