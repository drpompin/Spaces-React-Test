// import styled, { css } from "styled-components";
import styled from "styled-components";

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


export const ItemMain = styled.div`
    margin-bottom: 20px;

`
export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ItemImage = styled.img`
    width: 100%;
    border-radius: 5px;
`

export const ItemName = styled.span`
    color: #718596;
    font-weight: 600;
    margin-top: 5px;
    width: 100%;
    text-align: left;
    
    @media ${device.mobileL} { 
        font-size: 10px;
        text-align: left;
        max-height: 15px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    

`

export const ItemPrice = styled.span`
    font-weight: 600;
    color: #000;
    width: 100%;
    text-align: left;

    @media ${device.mobileL} { 
        font-size: 10px;
        text-align: left;
    }

`

export const ItemInStore = styled.span`
    color: #56636D;
    width: 100%;
    text-align: left;

    @media ${device.mobileL} { 
        font-size: 10px;
        text-align: left;
    }
`


