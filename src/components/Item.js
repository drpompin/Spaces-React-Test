import React from 'react';
import {Link} from "react-router-dom"

import {
    ItemMain,
    ItemWrapper,
    ItemImage,
    ItemName,
    ItemPrice,
    ItemInStore,
} from './styles/itemStyles'



 const Item = (props) => {
        const { item } = props;

         return (
             <ItemMain>
                <Link 
                    // to={{
                    //     pathname: `/item-detail/${item.id}`,
                    //     item: {item}
                    // }}
                    to={`/item-detail/${item.id}`}
                    style={{textDecoration: 'none'}}
                >
                    <ItemWrapper key={item.id} >
                        <ItemImage src={item.image} alt={item.title}></ItemImage>
                        <ItemName>{item.product_name}</ItemName>
                        <ItemPrice>N{item.range.split('-')[0]} - {item.range.split('-')[1]}</ItemPrice>
                        <ItemInStore>MOQ {item.stock} (Pieces)</ItemInStore>
                    </ItemWrapper>
                </Link>
             </ItemMain>
         )
 }


 export default Item;