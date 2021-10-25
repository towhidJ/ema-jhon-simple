import { useEffect, useState } from "react";

const useProduct = () => {
    const [products, setProducts] = useState([]);
    const url = "http://localhost:5000/";
    useEffect(() => {
        fetch(url + "products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, []);

    return [products, setProducts];
};

export default useProduct;
