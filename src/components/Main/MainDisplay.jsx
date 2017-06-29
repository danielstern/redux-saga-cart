import React from 'react'
import { CartManageViewContainer } from '../CartManageView'
export const MainDisplay = ({isCheckingOut})=>(
    <div>
        {isCheckingOut ? <div>
            You are now checking out...
        </div> : <div>
            <CartManageViewContainer/>
        </div>}

    </div>
);