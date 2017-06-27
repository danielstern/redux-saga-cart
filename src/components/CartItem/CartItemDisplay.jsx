import React from 'react'
export const CartItemDisplay = ({fetched,name,description,price, id, quantity, increaseItemQuantity, decreaseItemQuantity})=>(
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
                <button className="btn btn-secondary" onClick={()=>decreaseItemQuantity(id)}>-</button>
                <button className="btn btn-secondary" onClick={()=>increaseItemQuantity(id)}>+</button>
            </section>
        </div> : <div>
            ... Fetching item info
        </div>}
    </div>
);