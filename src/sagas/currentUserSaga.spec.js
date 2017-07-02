import fetch from 'isomorphic-fetch';
import { take, call, put, apply } from 'redux-saga/effects'

import { currentUserSaga } from './currentUserSaga'
import {
    GET_CURRENT_USER_INFO,
    setCurrentUser
} from './../actions'

describe("The current user saga",()=>{
    test("It fetches and puts the current user's data",()=>{
        const id = `NCC1701`;
        const user = {name:"Jean Luc"};
        const json = ()=>{};
        const response = {json};
        const gen = currentUserSaga();

        expect(gen.next().value).toEqual(take(GET_CURRENT_USER_INFO));
        expect(gen.next({id}).value).toEqual(call(fetch,`http://localhost:8081/user/${id}`));
        expect(gen.next(response).value).toEqual(apply(response, json));
        expect(gen.next(user).value).toEqual(put(setCurrentUser(user)));
    });
});