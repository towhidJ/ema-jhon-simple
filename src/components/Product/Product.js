import React, {useCallback} from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Rating from "react-rating";

const Product = (props) => {
    const {name,img,price,stock,star,seller,category} = props.product;
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div className="product">

            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>Price: ${price}</p>
                {
                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                    />

                }

                <p><small>only {stock} left in stock - order soon</small></p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                >{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;
