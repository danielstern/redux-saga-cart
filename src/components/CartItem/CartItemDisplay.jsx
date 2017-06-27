import React from 'react'
export const CartItemDisplay = ({fetched,name,description,price})=>(
    <div>
        {fetched ?
        <div>
            <h5>
                {name}
            </h5>
            <div>
                {price ? <div>${price}</div> :
                <div>
                    <div className="loader" title=" We're getting the price for this item..."/>

                </div>}
                {/*${currency === "CAD" ? <div>{CAD}</div> : <div>{USD}</div>}*/}
            </div>
            <p>
                {description}
            </p>
        </div> : <div>
            ... Fetching item info
        </div>}
    </div>
);