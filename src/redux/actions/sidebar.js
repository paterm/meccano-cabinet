import { ACTION_TYPE } from "../../constants/ActionTypes";

export const openSidebar = () => ({ type: ACTION_TYPE.SIDEBAR.OPEN });
export const closeSidebar = () => ({ type: ACTION_TYPE.SIDEBAR.CLOSE });
export const toggleSidebar = () => ({ type: ACTION_TYPE.SIDEBAR.TOGGLE });
