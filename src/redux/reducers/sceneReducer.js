const initialState = [];

const sceneReducer = (state = initialState, action) => {
    if (action.type === "ADD_SCENE") {
        return [
            ...state,
            {
                id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
                ...action.payload,
                vehicles: [],
            },
        ];
    } else if (action.type === "ADD_VEHICLE") {
        let scenario = action.payload.sceneName;
        console.log("ScenarioName:", scenario);
        return state.map((scene) => {
            if (scenario === scene.sceneName) {
                console.log("ScenarioName: LALALA", scenario);
                scene.vehicles.push({
                    vehicleID:
                        scene.vehicles.length > 0
                            ? scene.vehicles[scene.vehicles.length - 1]
                                  .vehicleID + 1
                            : 1,
                    ...action.payload,
                });
            }
            return scene;
        });
    } else if (action.type === "REMOVE_SCENE") {
        return state.filter((scene) => {
            return scene.id !== action.payload.id;
        });
    } else if (action.type === "REMOVE_VEHICLE") {
        const { id, vehicleID } = action.payload;
        return state.map((scene) => {
            if (id === scene.id) {
                console.log("YEAAAAAH");
                scene.vehicles = scene.vehicles.filter((vehicle) => {
                    return vehicle.vehicleID !== vehicleID;
                });
            }
            return scene;
        });
    } else if (action.type === "REMOVE_ALL") {
        return [];
    } else if (action.type === "EDIT_VEHICLE") {
        const { id, vehicleID, data } = action.payload;
        console.log("Editing vehicle raaa", id, vehicleID, data);
        const Scenes = state;
        const index = Scenes.findIndex((s) => s.id === id);

        const Scene = Scenes[index];
        const Vehicles = Scene.vehicles;
        const idx = Vehicles.findIndex((s) => s.vehicleID === vehicleID);
        console.log(idx);
        Vehicles[idx] = {
            vehicleID: vehicleID,
            ...data,
        };

        return state;
    } else if (action.type === "EDIT_SCENE") {
        const { id, data } = action.payload;
        console.log("Editing vehicle raaa", id, data);
        const Scenes = state;
        const index = Scenes.findIndex((s) => s.id === id);

        const Scene = Scenes[index];
        Scene.sceneName = data.sceneName;
        Scene.sceneTime = data.sceneTime;

        return state;
    } else {
        return state;
    }
};

export default sceneReducer;
