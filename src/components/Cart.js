import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../redux/actions/cartActions'
import {IconContext} from "react-icons"
import {FaTrash} from "react-icons/fa"
import {FaLessThan} from "react-icons/fa"
import {FaPlus} from "react-icons/fa"
import {FaMinus} from "react-icons/fa"
import Item from './Item';



import {
    ItemDetailHeader,
    HeaderText,
    HeaderRightContainer,
    ItemDetailName,
    ItemDetailPrice,
    ReviewIconContainer,
} from './styles/itemDetailStyles'

import { ItemInStore, ActionButton } from './styles/itemDetailStyles';

import {
    NavIconContainer,
} from './styles/homeStyles'

import { 
    CartItemContainer,
    CartItemTop,
    CartItemLeft,
    CartItemRight,
    CartItemImage,
    CartItemAction,
    CartActionLeft,
    CartActionRight,
    CartSummary,
    CartTotalRow

 } from './styles/cartStyles'

const plusMinusStyle = {
    fontSize: '12px',
    color: '#123CD3',
}


const Cart = (props) => {

    //to remove the item completely
    const handleRemove = (id) =>{
        props.removeItem(id);
    }
    //to add the quantity
    const handleAddQuantity = (id) =>{
        props.addQuantity(id);
    }
    //to substruct from the quantity
    const handleSubtractQuantity = (id) =>{
        props.subtractQuantity(id);
    }

    const handleClick = (id)=>{
        props.addToCart(id); 
    }

    let itemList = props.items.map(item => {
        return(
            <Item handleClick={handleClick} key={item.id} item={item} />
        )
    })
              
        const addedItems = props.items.length ?
            (  
                props.items.map(item=>{
                    return(
                        
                        <CartItemContainer key={item.id}>
                            <CartItemTop>
                                <CartItemLeft>
                                    <CartItemImage src={item.image} alt={item.image} />
                                </CartItemLeft>

                                <CartItemRight>
                                    <ItemDetailName noMargin>{item.product_name}</ItemDetailName>
                                    <ItemDetailPrice> N {item.price}</ItemDetailPrice>
                                </CartItemRight>
                            </CartItemTop>

                            <CartItemAction>
                                <CartActionLeft>
                                    <ReviewIconContainer style={{ lineHeight: '1' }}>
                                        <Link to="/cart">
                                            <IconContext.Provider value={{ style: {fontSize: '20px', color: '#E25959'} }}>
                                                <div onClick={()=>{handleRemove(item.id)}}>
                                                    <FaTrash />
                                                </div>
                                            </IconContext.Provider>
                                        </Link>
                                    </ReviewIconContainer>
                                    
                                    <ItemDetailName style={{margin: '0', lineHeight: '1'}}>Delete</ItemDetailName>
                                </CartActionLeft>

                                <CartActionRight>
                                    <ReviewIconContainer >
                                        <Link to="/cart">
                                            <IconContext.Provider value={{ style: plusMinusStyle}}>
                                                <div onClick={()=>{handleSubtractQuantity(item.id)}}>
                                                    <FaMinus />
                                                </div>
                                            </IconContext.Provider>
                                        </Link>
                                    </ReviewIconContainer>

                                    <ItemInStore style={{textAlign: 'center', fontWeight: '600', fontSize: '12px', color: '#000'}}>
                                        {item.quantity}
                                    </ItemInStore>

                                    <ReviewIconContainer>
                                        <Link to="/cart">
                                            <IconContext.Provider value={{ style: plusMinusStyle}}>
                                                <div onClick={()=>{handleAddQuantity(item.id)}}>
                                                    <FaPlus />
                                                </div>
                                            </IconContext.Provider>
                                        </Link>
                                    </ReviewIconContainer>
                                </CartActionRight>
                            </CartItemAction>


                        </CartItemContainer>

                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
        return(
            <>
                <ItemDetailHeader>
                    <NavIconContainer nonRounded
                        onClick={() => props.history.goBack()}
                    >
                        <IconContext.Provider value={{ style: {fontSize: '12px', cursor: 'pointer'}}}>
                            <div>
                                <FaLessThan />
                            </div>
                        </IconContext.Provider>
                    </NavIconContainer>

                    <HeaderText>Cart</HeaderText>

                    <HeaderRightContainer>

                    </HeaderRightContainer>
                </ItemDetailHeader>

                    <>
                        {addedItems}
                    </>
                
                <CartSummary>
                    <CartTotalRow style={{marginBottom: '10px'}}>
                        <ItemDetailPrice style={{fontSize: '12px', fontWeight: '500'}}>Subtotal</ItemDetailPrice>
                        <ItemDetailPrice style={{fontSize: '12px', fontWeight: '500'}}>{props.total}</ItemDetailPrice>
                    </CartTotalRow>

                    <CartTotalRow style={{marginBottom: '20px'}}>
                        <ItemDetailName style={{fontSize: '14px', fontWeight: '500'}}>Total</ItemDetailName>
                        <ItemDetailName style={{fontSize: '14px'}}>{props.total}</ItemDetailName>
                    </CartTotalRow>

                    <Link 
                        to="/checkout"
                        style={{width: '100%', textDecoration: 'none'}}
                    >
                        <ActionButton fullWidth blue >Checkout</ActionButton>
                    </Link>
                </CartSummary>

                <>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', padding: '16px 16px 10px'}}>
                        <ItemDetailName>Recently viewed</ItemDetailName>

                        <ItemDetailName style={{ color: '#227EFF' }}>View all</ItemDetailName>
                    </div>
                    <div style={{ padding: '0 16px 16px', display: 'grid', gridTemplateColumns: '30% 30% 30%', justifyContent: 'space-between' }}>
                        {
                            itemList
                        }
                    </div>
                </>
            </>
       )
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)