import fetch from 'isomorphic-fetch';
import { call, put, takeLatest, select } from 'redux-saga/effects'

import {
    itemQuantitySaga,
    handleIncreaseItemQuantity,
    handleDecreaseItemQuantity
} from './itemQuantitySaga'

import {
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    setItemQuantityFetchStatus,
    decreaseItemQuantity,
    increaseItemQuantity,
    FETCHING,
    FETCHED
} from './../actions'

import { fromJS } from 'immutable'

import {
    currentUserSelector
} from '../selectors'

describe.only("the item quantity saga",()=>{
    let item;
    let user;
    beforeEach(()=>{
        item = {id:12345};
        user = fromJS({id:"ABCDE"});
    });
    describe("the saga root",()=>{
        test("the saga root should listen for the events",()=>{
            const gen = itemQuantitySaga();
            expect(gen.next().value).toEqual([
                takeLatest(DECREASE_ITEM_QUANTITY, handleDecreaseItemQuantity),
                takeLatest(INCREASE_ITEM_QUANTITY, handleIncreaseItemQuantity)
            ]);
        });
    });

    describe("handle decrease item quantity saga",()=>{
        test("decreasing the quantity of an item successfully",()=>{
            const gen = handleDecreaseItemQuantity(item);
            expect(gen.next().value).toEqual(put(setItemQuantityFetchStatus(FETCHING)));
            expect(gen.next().value).toEqual(select(currentUserSelector));
            expect(gen.next(user).value).toEqual(call(fetch,`http://localhost:8081/cart/remove/ABCDE/12345`));
            expect(gen.next({status:200}).value).toEqual(put(setItemQuantityFetchStatus(FETCHED)));
        });
    });

    describe("handle increase item quantity saga",()=>{
        let gen;
        beforeEach(()=>{
            gen = handleIncreaseItemQuantity(item);
            expect(gen.next().value).toEqual(put(setItemQuantityFetchStatus(FETCHING)));
            expect(gen.next().value).toEqual(select(currentUserSelector));
            expect(gen.next(user).value).toEqual(call(fetch,`http://localhost:8081/cart/add/ABCDE/12345`));
        });
        test("increasing the quantity of an item successfully",()=>{
            expect(gen.next({status:200}).value).toEqual(put(setItemQuantityFetchStatus(FETCHED)));
        });

        test("increasing the quantity of an item unsuccessfully",()=>{
            expect(gen.next({status:500}).value).toEqual(put(decreaseItemQuantity(item.id, true)));
            expect(gen.next().value).toEqual(put(setItemQuantityFetchStatus(FETCHED)));
        });
    });
});