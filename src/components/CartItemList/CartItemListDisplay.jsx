import React from 'react'
import { CartItemContainer } from '../CartItem'
export const CartItemListDisplay = ({items, fetched})=>(
    <div>
    {fetched ? <div>
            {items.map(item=>(
                <CartItemContainer {...item} key={item.id}/>
            ))}
        </div> :
        <div>
            Please wait...
        </div>
    }
    </div>
);