import { ACTION_TYPE } from "../../constants/ActionTypes";

export function sidebar(state = {}, action) {
    switch (action.type) {
        case ACTION_TYPE.SIDEBAR.OPEN:
            return {...state, open: true};
        case ACTION_TYPE.SIDEBAR.CLOSE:
            return {...state, open: false};
        case ACTION_TYPE.SIDEBAR.TOGGLE:
            return {...state, open: !state.open};
        default:
            return state;
    }
}
