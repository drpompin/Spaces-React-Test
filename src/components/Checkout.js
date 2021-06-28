import React from 'react'
import { Link } from 'react-router-dom'
import Success from '../static/images/success.png'

import {
    CheckoutContainer,
    CheckOutImageContainer,
    CheckOutImage,
    ToHome,
    SuccessMessage
} from './styles/checkoutStyles'


const Checkout = () => {
    return (
        <CheckoutContainer>
            <topDivv></topDivv>
            <CheckOutImageContainer>
                <CheckOutImage src={Success} alt="checkout-img" />
                <SuccessMessage>Checkout Successful</SuccessMessage>
                <SuccessMessage style={{fontSize: '12px', fontWeight: 400}}>Your checkout is now successful</SuccessMessage>
            </CheckOutImageContainer>

                <Link
                    to="/"
                    style={{textDecoration: 'none', width: '100%'}}
                >
                    <ToHome>Got it!</ToHome>
                </Link>
        </CheckoutContainer>
    )
}

export default Checkout