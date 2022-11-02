declare namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
    };
    let transitions: {
        binaryCode: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        background: string;
    };
    let locations: {
        placeholder: {
            name: string;
            background: string;
        };
        classroom: {
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
