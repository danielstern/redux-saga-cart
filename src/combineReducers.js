import  * as reducers from './reducers'
import { fromJS } from 'immutable'

export const combineReducers = (config) =>{
    console.log("Config?",config);


    const defaultState = fromJS(Object.keys(config).reduce((a,key)=>{a[key] = config[key](undefined,[]); return a},{}));
    // debugger;
    return (state = defaultState,action)=>{
        return Object.keys(config).reduce((state,key)=>{
            const reducer = config[key];
            const previousState = state.get(key);
            const newValue = reducer(previousState,action);
            if (newValue === undefined) {
                throw new Error(`A reducer returned undefined when reducing key::"${key}"`);
            }
            return state.set(key,newValue);
        },state);
    };
}


export const reducer = combineReducers(reducers);