import React, { useEffect } from "react";
import Product from "../Product/Product";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/productsSlice';
import { Spinner } from "react-bootstrap";

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    const { products, status } = useSelector(state => state.products);

    return (
        <>
            <div>
                <h1 className="product-head-demo"> Our some demo products</h1>
                <div className="row">
                    {status === "pending" ? <Spinner animation="border" className="text-center" variant="primary" /> :
                        products
                            .map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))
                            .slice(1, 9)}
                </div>
            </div>
        </>
    );
};

export default Products;