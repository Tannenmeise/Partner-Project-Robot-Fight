declare namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        protagonistName: string;
        louisPoints: number;
        lilyPoints: number;
        bullyPoints: number;
    };
    let items: {
        item1: {
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
        background: string;
        sparrows: string;
        enterSchoolBuilding: string;
        bump: string;
        bigCrowd: string;
        smallCrowd: string;
        footstepsTiles: string;
        automaticDoor: string;
        cloth: string;
        chairScreeching: string;
        schoolBell: string;
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
        luisa: {
            name: string;
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
    };
    function slideFromLeftToMiddleAnimation(): ƒS.AnimationDefinition;
    function slideFromRightToMiddleAnimation(): ƒS.AnimationDefinition;
    function slideFromMiddleToLeftAnimation(): ƒS.AnimationDefinition;
    function slideFromMiddleToRightAnimation(): ƒS.AnimationDefinition;
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
