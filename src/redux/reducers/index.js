import { combineReducers } from "redux";
import sceneReducer from "./sceneReducer";

const reducers = combineReducers({
    scene: sceneReducer,
});

export default reducers;
