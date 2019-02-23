import { eventChannel} from 'redux-saga';
import {connect} from '../createSocketConnection';

import {setCustomerServiceAvailability} from '../actions';
import { take, put } from 'redux-saga/effects';

export function* customerServiceAvailabilitySaga(){
  const socket = connect();
  const chan = new eventChannel(emit => {
    const enableSupportMessage = () => {
      emit(true)
    }

    const disableSupportMessage = () => {
      emit(false)
    }

    socket.on('SUPPORT_AVAILABLE', enableSupportMessage)
    socket.on('SUPPORT_NOT_AVAILABLE', disableSupportMessage)

    return ()=>{

    }
  });

  while(true) {
    let supportAvailable = yield take(chan)
    yield put(setCustomerServiceAvailability(supportAvailable))
  }
}