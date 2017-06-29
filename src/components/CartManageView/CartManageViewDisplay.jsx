import React from 'react'
import { UserInfoContainer } from '../UserInfo'
import { CartItemListContainer } from '../CartItemList'
import { OrderSummaryContainer } from '../OrderSummary'
import { SupportAvailableContainer } from '../SupportAvailable'
export const CartManageViewDisplay = ({})=>(
    <div>
        <section className="row">
            <section className="col-6">
                <section className="">
                    <h1 title="The cart continues...">
                        SagaCart
                    </h1>
                </section>
            </section>
        </section>
        <section className="row">
            <section className="col-6">
                <UserInfoContainer/>
                <section className="cart-items">
                    <h3>
                        Your Cart
                    </h3>
                    <CartItemListContainer/>
                </section>
            </section>
            <OrderSummaryContainer />
        </section>
        <section>
            <SupportAvailableContainer/>
        </section>
    </div>
);