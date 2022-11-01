namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("'main.ts' started");

    export let dataForSave = { nameProtagonist: "" };

    export let transitions = {
        binaryCode: {
            duration: 3,
            alpha: "Assets/Graphics/Transitions/binary_code.png",
            edge: 1
        }
    };

    export let sound = {
        background: "PATH"
    };

    export let locations = {
        placeholder: {
            name: "Placeholder",
            background: "Assets/Graphics/Backgrounds/placeholder.png"
        },
        classroom: {
            name: "Classroom",
            background: "Assets/Graphics/Backgrounds/classroom.png"
        }
    };

    export let characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: "Du"
        },
        student: {
            name: "Studierende",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                lily: "Assets/Graphics/Characters/Lily/lily_silhouette.png",
                louis: "Assets/Graphics/Characters/Louis/louis_silhouette.png",
            },
        },
        lily: {
            name: "Lily"
        },
        louis: {
            name: "Louis"
        },
        luisa: {
            name: "Luisa"
        },
        historyTeacher: {
            name: "Geschichtslehrer"
        },
        roboticsTeacher: {
            name: "Robotiklehrerin"
        }
    };

    window.addEventListener("load", start);

    function start(_event: Event): void {
        let scenes: ƒS.Scenes = [
            { scene: scene_0_intro, name: "Scene 0: Intro" }
        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        ƒS.Progress.go(scenes);
    }
}