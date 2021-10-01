import React, {useEffect, useState} from 'react';
import './Shop.css'
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {addToDb,getStoredCart} from "../../utilities/fakedb";

const Shop = () => {

    const [products,setProducts] = useState([])
    const [displayProducts,setDisplayProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        loadProducts();
    },[]);

    useEffect(() => {
        if (products.length)
        {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart)
            {
                const addedProduct = products.find(product=>product.key===key);
                if (addedProduct)
                {
                    addedProduct.quantity = savedCart[key];
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    },[products])

    const loadProducts=()=>{
        fetch('./products.JSON')
            .then(res=>res.json())
            .then(data =>{
                setProducts(data);
                setDisplayProducts(data);
            });
    }


    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    }
    const handleSearch=(event)=>{
        const searchText = event.target.value;
        const matchProducts = products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchProducts);

    }
    return(
       <>
           <div className="search-container">
               <input
               type ="text" placeholder="Search Products"
               onChange={handleSearch}/>
           </div>
           <div className="shop-container">
               <div className="product-container">
                   {

                       displayProducts.length<=0?<h1 style={{textAlign:"center",textTransform:"uppercase"}}>Product Not Found</h1>:displayProducts.map(product =>
                           <Product
                               key={product.key}
                               product={product}
                               handleAddToCart={handleAddToCart}
                           >
                           </Product>)
                   }
               </div>
               <div className="cart-container">
                   <div className="cart-container">
                       <Cart cart={cart}></Cart>
                   </div>
               </div>
           </div>
       </>
    );
}

export default Shop;