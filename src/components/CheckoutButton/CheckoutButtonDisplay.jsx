import React from 'react'
export const CheckoutButtonDisplay = ({handleRequestCheckout,canCheckOut})=>(
    <div className="text-center checkout-button-container">
        <button className="btn btn-primary btn-lg" disabled={!canCheckOut} onClick={handleRequestCheckout}>
            Check Out
        </button>
    </div>
);