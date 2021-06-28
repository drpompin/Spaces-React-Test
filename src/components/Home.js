import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { addToCart } from '../actions/cartActions';
import Item from './Item';
import {FaMapMarkerAlt} from "react-icons/fa"
import {FaClipboardList} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import {FaFire} from "react-icons/fa"
import {FaNewspaper} from "react-icons/fa"
import {FaRegThumbsUp} from "react-icons/fa"
import {FaStore} from "react-icons/fa"
import {FaSearch} from "react-icons/fa"
import {IconContext} from "react-icons"
import {FaHome} from "react-icons/fa"
import {FaCrutch} from "react-icons/fa"
import {FaWallet} from "react-icons/fa"
import {FaListUl} from "react-icons/fa"



import { 
    HeaderContainer,
    HomeNav,
    NavSector,
    NavIconContainer,
    NavText,
    SearchContainer,
    SearchInput,
    SearchSpan,
    CarouselWrapper,
    CarouselContainer,
    ContactText,
    ContactButton,
    NavSelect,
    HorBar,
    IssueText,
    CategoriesRow,
    CategoriesContainer,
    CategoriesColumn,
    CategoriesText,
    ProductSection,
    BottomNav,
    BottomItem, 
    BottomItemImage,
    BottomItemText,
    CartNumber,
 } from './styles/homeStyles'

 import { 
    ItemPrice,
    ItemWrapper,
    ItemImage,
    ItemName
 } from './styles/itemStyles';



const CategoryFontStyle = {
    fontSize: '24px',
    color: '#fff',
}

const BottomFontStyle = {
    fontSize: '20px',
    color: '#718596',
}

const BottomFontStyleBlue = {
    fontSize: '20px',
    color: '#227EFF',
}

 const Home = (props) => {
    
    const handleClick = (id)=>{
        props.addToCart(id); 
    }

    let itemList = props.items.map(item => {
        return(
            <Item handleClick={handleClick} key={item.id} item={item} />
        )
    })

    const [search, setSearch] = useState("");

    const handleLocationChange = (e) => {
        e.preventDefault()
        const searchToLower = e.target.value.toLowerCase()
        setSearch(searchToLower)
    }

    const filteredProducts = props.items.filter((product) => {
        return (
            product.description.toLowerCase().includes(search) ||
            product.product_name.toLowerCase().includes(search) ||
            product.location.toLowerCase().includes(search)
        ) 
    });

    const mappedLocation = props.items.filter((v,i,a)=>a.findIndex(t=>(t.location === v.location))===i)

    const cartItemNumber = props.cartNumber

    return(
        <div className="container">
            <HeaderContainer>Trollbasket</HeaderContainer>

            <HomeNav>
                <NavSector>
                    <NavIconContainer>
                        <IconContext.Provider value={{ style: {fontSize: '12px', color: "#227EFF"}}}>
                            <div>
                                <FaMapMarkerAlt />
                            </div>
                        </IconContext.Provider>
                    </NavIconContainer>

                    <NavSelect  onChange={handleLocationChange} >
                        {
                            mappedLocation.map((locatn) => {
                                return (
                                    <option key={locatn.id} value={locatn.location}>{locatn.location}</option>
                                )
                            })
                        }
                    </NavSelect>
                </NavSector>

                <HorBar />

                <NavSector>
                    <NavIconContainer>
                        <IconContext.Provider value={{ style: {fontSize: '12px', color: "#7E42F5"}}}>
                            <div>
                                <FaClipboardList />
                            </div>
                        </IconContext.Provider>
                    </NavIconContainer>
                    <NavText>My Orders</NavText>
                </NavSector>
                
                <HorBar />

                <NavSector>
                    <Link to="/cart" style={{textDecoration: 'none', width: '100%', display: 'flex', color: '#000'}}>
                        <NavIconContainer style={{position: 'relative', marginRight: '10px'}}>
                            <IconContext.Provider value={{ style: {fontSize: '12px', color: "#2E4457"}}}>
                                    <FaShoppingCart />
                            </IconContext.Provider>
                            {
                                cartItemNumber > 0 && 
                                <CartNumber >{cartItemNumber}</CartNumber>
                            }
                        </NavIconContainer>
                        <NavText>Cart</NavText>
                    </Link>
                </NavSector>
            </HomeNav>


            <SearchContainer>
                <SearchInput placeholder="Search merchbuy"  
                    onChange={(e) => {
                        setSearch(e.target.value.toLowerCase());
                    }}
                />
                <SearchSpan>
                    <IconContext.Provider value={{ style: { fontSize: '24px' }}}>
                            <div>
                                <FaSearch />
                            </div>
                        </IconContext.Provider>
                </SearchSpan>
            </SearchContainer>

            {
                (search.length > 1) &&
                <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between' }} >
                    {
                        filteredProducts.map((product) => (
                            <Link to={`/item-detail/${product.id}`} style={{width: '30%', textDecoration: 'none', }} key={product.id}>
                                <ItemWrapper  >
                                    <ItemImage src={product.image} alt={product.title}></ItemImage>
                                    <ItemName>{product.product_name}</ItemName>
                                    <ItemPrice>N{product.range.split('-')[0]} - {product.range.split('-')[1]}</ItemPrice>
                                </ItemWrapper>
                            </Link>

                        ))
                    }
                </div>
            }

            <CarouselWrapper>
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    // autoPlay={true}
                    stopOnHover={true}
                    swipeable={true}
                    emulateTouch={true}
                    centerMode={true}
                    centerSlidePercentage={80}
                    dynamicHeight={false}
                >
                    <CarouselContainer style={{backgroundColor: '#003277'}}>
                        <ContactText>
                            Having any <IssueText>issues</IssueText> with <br/>
                            your order?
                        </ContactText>

                        <ContactButton >Contact Us</ContactButton>
                    </CarouselContainer>
                    <CarouselContainer style={{backgroundColor: '#227EFF'}}>2</CarouselContainer>
                    <CarouselContainer style={{backgroundColor: '#EE6F44'}}>3</CarouselContainer>
                </Carousel>
            </CarouselWrapper>

            <CategoriesRow>
                <CategoriesColumn>
                    <CategoriesContainer blue>
                        <IconContext.Provider value={{ style: CategoryFontStyle}}>
                            <div>
                                <FaNewspaper />
                            </div>
                        </IconContext.Provider>
                    </CategoriesContainer>
                    <CategoriesText>Product Categories</CategoriesText>
                </CategoriesColumn>

                <CategoriesColumn>
                    <CategoriesContainer orange>
                        <IconContext.Provider value={{ style: CategoryFontStyle}}>
                            <div>
                                <FaFire />
                            </div>
                        </IconContext.Provider>
                    </CategoriesContainer>
                    <CategoriesText>Popular Products</CategoriesText>
                </CategoriesColumn>

                <CategoriesColumn>
                    <CategoriesContainer purple>
                        <IconContext.Provider value={{ style: CategoryFontStyle}}>
                            <div>
                                <FaRegThumbsUp />
                            </div>
                        </IconContext.Provider>
                    </CategoriesContainer>
                    <CategoriesText>Recommended Products</CategoriesText>
                </CategoriesColumn>

                <CategoriesColumn>
                    <CategoriesContainer green>
                        <IconContext.Provider value={{ style: CategoryFontStyle}}>
                            <div>
                                <FaStore />
                            </div>
                        </IconContext.Provider>
                    </CategoriesContainer>
                    <CategoriesText>Shops</CategoriesText>
                </CategoriesColumn>
            </CategoriesRow>


            <ProductSection>
                {itemList}
            </ProductSection>

            <BottomNav>
                <BottomItem>
                    <BottomItemImage>
                        <IconContext.Provider value={{ style: BottomFontStyle}}>
                            <div>
                                <FaHome />
                            </div>
                        </IconContext.Provider>
                    </BottomItemImage>
                    <BottomItemText>Home</BottomItemText>
                </BottomItem>

                <BottomItem style={{ borderTop: '2px solid #227EFF' }}>
                    <BottomItemImage>
                        <IconContext.Provider value={{ style: BottomFontStyleBlue}}>
                            <div>
                                <FaShoppingCart />
                            </div>
                        </IconContext.Provider>
                    </BottomItemImage>
                    <BottomItemText blue>Buy</BottomItemText>
                </BottomItem>

                <BottomItem>
                    <BottomItemImage>
                        <IconContext.Provider value={{ style: BottomFontStyle}}>
                            <div>
                                <FaCrutch />
                            </div>
                        </IconContext.Provider>
                    </BottomItemImage>
                    <BottomItemText>Deals</BottomItemText>
                </BottomItem>

                <BottomItem>
                    <BottomItemImage>
                        <IconContext.Provider value={{ style: BottomFontStyle}}>
                            <div>
                                <FaWallet />
                            </div>
                        </IconContext.Provider>
                    </BottomItemImage>
                    <BottomItemText>Wallet</BottomItemText>
                </BottomItem>

                <BottomItem>
                    <BottomItemImage>
                        <IconContext.Provider value={{ style: BottomFontStyle}}>
                            <div>
                                <FaListUl />
                            </div>
                        </IconContext.Provider>
                    </BottomItemImage>
                    <BottomItemText>More</BottomItemText>
                </BottomItem>
            </BottomNav>
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
      items: state.items,
      cartNumber: state.addedItems.length
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)