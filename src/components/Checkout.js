import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Success from '../static/images/success.png'

const CheckoutContainer = styled.div`
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #227EFF;
    padding: 20px;
`

const CheckOutImageContainer = styled.div`
    width: 100%;
`

const CheckOutImage = styled.img`
    width: 40%;
`

const topDivv = styled.div`
    width: 100%;
`

const ToHome = styled.button`
    padding: 6px 20px;
    color: #227EFF;
    bottom: 20px;
    background-color: #fff;
    width: 100%;
    border: none;
    border-radius: 3px;
`

const SuccessMessage = styled.p`
    width: 100%;
    color: #fff;
    margin-bottom: 0;
    font-weight: 600;
`

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