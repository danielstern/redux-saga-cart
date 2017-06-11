import { getStore } from './src/getStore';
import { initializeApp } from './src/actions'
const manageUserChoice = ({board,makeSelection})=>{
    console.log("USer choice?",board);
    makeSelection("1234");
}
const store = getStore({
    onP1Move:manageUserChoice,
    onP2Move:manageUserChoice,
});
console.log("Application running", store.getState().toJS());
store.dispatch(initializeApp());
console.log("Initialized...");