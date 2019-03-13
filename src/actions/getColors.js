import { makeActionCreator } from '../utility';
export const GET_COLORS = "GET_COLORS";
export const getColors = makeActionCreator(GET_COLORS,"colors");