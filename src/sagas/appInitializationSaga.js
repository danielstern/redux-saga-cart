import { takeEvery, put, select } from 'redux-saga/effects'

import {
    INITIALIZE_APP,
    setBoard,
    beginMoveSelection
} from './../actions'

import Chance from 'chance';
const chance = new Chance();

const getArimaaBoard = ()=>{
    const board = [];
    const isTrap = (rank,file)=>{
        return (rank === 2 && file === 2) ||
            (rank === 2 && file === 6) ||
            (rank === 6 && file === 2) ||
            (rank === 6 && file === 6)
    };
    const getOccupant = (rank,file)=>{
       const occupant = {};
       if (rank > 1 && rank < 7) {
           return null;
       }
       occupant.id = chance.guid();
       occupant.color = rank < 2 ? "GOLD" : "SILVER";
       if (rank === 0 || rank === 7) {
           occupant.level = 0;
       } else {
          switch (file) {
              case 0:
              case 7:
                  occupant.level = 1;
                  break;
              case 1:
              case 6:
                  occupant.level = 2;
                  break;
              case 2:
              case 5:
                  occupant.level = 3;
                  break;
              case 3:
                  occupant.level = occupant.color === "GOLD" ? 4 : 5;
                  break;
              case 4:
                  occupant.level = occupant.color === "SILVER" ? 4 : 5;
                  break;

          }
       }
       // if (rank > 6) occupant = "S";
        return occupant;

    };
    for (let rank = 0; rank < 8; rank++) {
        for (let file = 0; file < 8; file++) {
            board.push({
                rank,
                file,
                isTrap:isTrap(rank,file),
                occupant:getOccupant(rank,file)
            })
        }
    }
    return board;
}
function* appInitialization() {
    const board = getArimaaBoard();
    console.log("App initialized",board);
    yield put(setBoard(board));
    yield put(beginMoveSelection(board));
}

export function* appInitializationSaga() {
    yield takeEvery(INITIALIZE_APP, appInitialization);
}