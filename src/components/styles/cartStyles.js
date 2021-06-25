import styled from "styled-components";
// import styled from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

export const CartItemContainer = styled.div`
    width: 100%;
    padding: 16px;
    border-bottom: 1px solid #eae7e7;
`

export const CartItemTop = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: flex-start;
`

export const CartItemLeft = styled.div`
    width: 30%;
`

export const CartItemRight = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const CartItemImage= styled.img`
    width: 100%;
`



export const CartItemAction = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;

    @media ${device.mobileL} { 
        width: 100%; 
    }
`

export const CartActionLeft = styled.span`
    display: flex;
    align-items: center;
`

export const CartActionRight = styled.span`
    display: flex;
    align-items: center;
`

export const CartSummary = styled.div`
    width: 100%;
    padding: 16px;
`

export const CartTotalRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
