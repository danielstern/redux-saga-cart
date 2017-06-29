import { makeActionCreator } from '../utility';
export const TOGGLE_CHECKING_OUT = "TOGGLE_CHECKING_OUT";
export const toggleCheckingOut = makeActionCreator(TOGGLE_CHECKING_OUT,"value");
