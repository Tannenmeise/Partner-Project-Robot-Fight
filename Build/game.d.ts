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
        };
        louis: {
            name: string;
        };
        luisa: {
            name: string;
        };
        historyTeacher: {
            name: string;
        };
        roboticsTeacher: {
            name: string;
        };
    };
}
declare namespace Game {
    function scene_0_intro(): ƒS.SceneReturn;
}
