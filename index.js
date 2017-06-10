import { getStore } from './src/getStore';
const store = getStore();
console.log("Application running", store.getState().toJS());