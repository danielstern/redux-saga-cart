import React from 'react'
export const MainDisplay = ({})=>(
    <div>
        <section className="row">
            <section className="col-6">
                <section className="">
                    <h1>
                        SagaCart
                    </h1>
                </section>
            </section>
        </section>
        <section className="row">
            <section className="col-6">
                <section className="current-user">
                    <p>
                        JRR Hemingway
                        <br/>
                        555 La Rue Chermaine
                        <br/>
                        555-654-4444
                    </p>
                </section>
                <section className="cart-items">
                    <h3>
                        Your Cart
                    </h3>
                    <section className="cart-item">
                        <section className="row">
                            <section className="col-4">
                                <img style={{backgroundColor:'chartreuse'}} className="product-image"/>
                            </section>
                            <section className="col-8">
                                <h5>
                                    Velvet Mousepad
                                </h5>
                                <article>
                                    $75.45
                                </article>
                                <section>
                                    <span className="item-quantity">
                                        Quantity: {3}
                                    </span>
                                    <button type="button" className="btn btn-secondary" onClick={()=>{}}>-</button>
                                    <button className="btn btn-secondary">+</button>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <section className="col-6">
                <div className="text-center checkout-button-container">
                    <button className="btn btn-primary btn-lg">
                        Check Out
                    </button>
                </div>
                <section>
                    <h5>
                        Order Summary
                    </h5>
                    <table className="table">
                        <tr>
                            <th>
                                Subtotal
                            </th>
                            <td>
                                ${225.00}
                            </td>
                        </tr>
                        {/*<tr>*/}
                            {/*<td colSpan={2} className="divider"><hr /></td>*/}
                        {/*</tr>*/}
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
                        {/*<tr>*/}
                            {/*<td colSpan={2} className="divider"><hr /></td>*/}
                        {/*</tr>*/}
                        <tr className="total-tr">
                            <th>
                                Total
                            </th>
                            <td>
                                ${350.99}
                            </td>
                        </tr>
                    </table>
                </section>
            </section>
        </section>
    </div>
);