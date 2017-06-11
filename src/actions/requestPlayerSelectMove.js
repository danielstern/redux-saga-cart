import { makeActionCreator } from '../utility';
export const REQUEST_PLAYER_SELECT_MOVE = "REQUEST_PLAYER_SELECT_MOVE";
export const requestPlayerSelectMove = makeActionCreator(REQUEST_PLAYER_SELECT_MOVE,"pID");
