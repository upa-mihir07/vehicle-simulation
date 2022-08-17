export const addScene = (data) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_SCENE",
            payload: data,
        });
    };
};

export const addVehicle = (data) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_VEHICLE",
            payload: data,
        });
    };
};

export const removeScene = (data) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_SCENE",
            payload: data,
        });
    };
};

export const removeVehicle = (data) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_VEHICLE",
            payload: data,
        });
    };
};

export const removeAll = () => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_ALL",
        });
    };
};

export const editVehicle = (data) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT_VEHICLE",
            payload: data,
        });
    };
};

export const editScene = (data) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT_SCENE",
            payload: data,
        });
    };
};
