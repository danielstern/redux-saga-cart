import React from 'react'
export const CheckoutStatusViewDisplay = ({})=>(
    <div className="text-center">
        <h1>
            Checking out
        </h1>
        <div className="loader xl"/>
        <h2>
            Verifying items are in stock...
        </h2>
        <h2>
            Validating credit card information...
        </h2>
        <h2>
            Finalizing purchase...
        </h2>
        <h1>
            Thank you
        </h1>
        <h2>Your checkout is complete.</h2>
    </div>
);