import { getStore } from '../getStore';
import React from 'react';
import { Provider } from 'react-redux'
import { MainContainer } from '../components'
export const App = ()=>(
    <div>
        <Provider store={getStore()}>
            <MainContainer/>
        </Provider>
    </div>
);