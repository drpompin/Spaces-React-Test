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
     console.log('item props', props.item)

        const { item } = props;


         return (
             <ItemMain>
                <Link to={{
                        pathname: `/item-detail/${item.id}`,
                        item: {item}
                    }}
                    style={{textDecoration: 'none'}}
                >
                    <ItemWrapper key={item.id} >
                        <ItemImage src={item.image} alt={item.title}></ItemImage>
                        <ItemName>{item.product_name}</ItemName>
                        <ItemPrice>N{item.price}</ItemPrice>
                        <ItemInStore>MOQ{item.stock} (Pieces)</ItemInStore>
                    </ItemWrapper>
                </Link>
             </ItemMain>
             

            // <div style={{width: '40%', height: '300px'}} key={item.id}>
            //     <div  >
            //         <img src={item.image} alt={item.title} style={{width: '100%'}}/>
            //         <span >{item.title}</span>
            //         <span 
            //             to="/" className="btn-floating halfway-fab waves-effect waves-light red" 
            //             onClick={() => {props.handleClick(item.id)}}
            //         >
            //             <i className="material-icons">
            //                 add
            //             </i>
            //         </span>
            //     </div>

            //     <div className="card-content">
            //         <p>
            //             <Link to={{
            //                 pathname: `/item-detail/${item.id}`,
            //                 item: {item}
            //             }}>View</Link>
            //         </p>
            //         <p>{item.desc}</p>
            //         <p><b>Price: {item.price}$</b></p>
            //     </div>
            // </div>
         )
 }


 export default Item;