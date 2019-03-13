import React from 'react'
export const SupportAvailableDisplay = ({isAvailable, colors})=>{
    console.log('colors', colors)
    return(
        <div className="customer-service-message">
        {
            colors.map(color =>(<p key={color.id}>{color.name}</p>))
        }
        {isAvailable ? <div>
            Customer service representatives are waiting to assist you.
        </div> : <div>
            Sorry, there's no one to assist you at this time.
        </div>}
            </div> 
    )
};