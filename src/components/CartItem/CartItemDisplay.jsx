import React from 'react'
export const CartItemDisplay = ({fetched,name,description})=>(
    <div>
        {fetched ? <div>
            ... The item is fetched
        </div> : <div>
            ... Fetching item info
        </div>}
    </div>
);