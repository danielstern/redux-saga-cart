import React from 'react'
import { formatCurrency } from '../../utility'
export const OrderSummaryDisplay = ({subtotal, subtotalFetched})=>(
        <section className="col-6">
            <div className="text-center checkout-button-container">
                <button className="btn btn-primary btn-lg">
                    Check Out
                </button>
            </div>
            <section>
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
                            {subtotalFetched ? formatCurrency(subtotal) : <div className="loader"></div>}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Shipping
                        </th>
                        <td>
                            ${17.95}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Tax
                        </th>
                        <td>
                            ${19.95}
                        </td>
                    </tr>
                    <tr className="total-tr">
                        <th>
                            Total
                        </th>
                        <td>
                            ${350.99}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </section>
);