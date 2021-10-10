import React, {useState} from 'react';
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import ReviewItem from "../ReviewItem/ReviewItem";
import {clearTheCart, deleteFromDb} from "../../utilities/fakedb";
import {useHistory} from "react-router-dom";

const OrderReview = () => {
    const [ products,setProducts] = useProduct();
    const [cart,setCart] = useCart(products);
    const history = useHistory();
    const handleRemove=(key)=>{
        console.log(key);
        const newCart = cart.filter(product =>product.key!== key);
        setCart(newCart);
        deleteFromDb(key);

    }
    const handlePlaceOrder=()=>{
        history.push('/placeorder');
        setCart([]);
        clearTheCart();

    }
    return (
        <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItem 
                            key={product.name}
                            products={product}
                            handleRemove={handleRemove}
                        >

                        </ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <div className="cart-container">
                        <Cart cart={cart}>
                            <button type="button" onClick={handlePlaceOrder} className="btn-regular">Placed Order</button>
                        </Cart>
                    </div>
                </div>

        </div>
    );
};

export default OrderReview;
