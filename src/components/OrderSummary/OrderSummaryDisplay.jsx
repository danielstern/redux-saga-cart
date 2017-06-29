import React from 'react'
import { CheckoutButtonContainer } from '../CheckoutButton'
import { formatCurrency } from '../../utility'
export const OrderSummaryDisplay = ({
    subtotal,
    subtotalFetched,
    shippingFetched,
    shippingCost,
    totalTaxFetched,
    totalTax,
    total
})=>(
    <section className="col-6">

        <section>
            <CheckoutButtonContainer/>
            <h4>
                Order Summary
            </h4>
            <table className="table">
                <tbody>
                <tr>
                    <th>
                        Subtotal
                    </th>
                    <td>
                        {subtotalFetched ? formatCurrency(subtotal) : <div className="loader" />}
                    </td>
                </tr>
                <tr>
                    <th>
                        Shipping
                    </th>
                    <td>
                        {shippingFetched ? formatCurrency(shippingCost) : <div className="loader" />}
                    </td>
                </tr>
                <tr>
                    <th>
                        Tax
                    </th>
                    <td>
                        {totalTaxFetched ? formatCurrency(totalTax) : <div className="loader"/>}
                    </td>
                </tr>
                <tr className="total-tr">
                    <th>
                        Total
                    </th>
                    <td>
                        {total ? formatCurrency(total) : <div className="loader"/>}
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    </section>
);