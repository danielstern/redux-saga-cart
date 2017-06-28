import React from 'react'
import {
    FETCHED
} from '../../actions'
export const CartItemDisplay = ({fetched,name,description,price, id, quantity, increaseItemQuantity, decreaseItemQuantity, quantityFetchStatus})=>(
    <div>
        {fetched ?
        <div>
            <h5>
                {name}
            </h5>
            <div>
                {price ?
                    <div>${price}</div>
                    :
                    <div>
                        <div className="loader" title=" We're getting the price for this item..."/>
                    </div>
                }
            </div>
            <p>
                {description}
            </p>
            <section>
                <span className="item-quantity">
                    Quantity: {quantity}
                </span>
                <button className="btn btn-secondary" disabled={quantityFetchStatus !== FETCHED} onClick={()=>decreaseItemQuantity(id)}>-</button>
                <button className="btn btn-secondary" disabled={quantityFetchStatus !== FETCHED} onClick={()=>increaseItemQuantity(id)}>+</button>
            </section>
        </div> : <div className="loader"></div>}
    </div>
);