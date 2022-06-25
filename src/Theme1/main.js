import React, { useEffect } from 'react'
import {Route, Routes } from 'react-router-dom';
import E404 from './Components/404';
import Account from './Components/Account';
import CategoryPage from './Components/CategoryPage';
import Checkout from './Components/Checkout';
import Success from './Components/Checkout/success';
import Home from './Components/Home';
import OrderHistory from './Components/OrderHistory';
import ProductPage from './Components/ProductPage';
import { useSellerData } from './Contexts/SellerContext';
import CatMenu from './Components/CategoryMenu'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
function Main(props) {
    const SellerData = useSellerData()
    useEffect(() => {
        return () => {
          
        }
    }, [])
    return (
        (Object.keys(SellerData).length>0) ? 
        <>
        <Navbar />
        <CatMenu />
        <div className="m-24">
        <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route  path="Category/:id" element={<CategoryPage/>} ></Route>
        <Route  path="Product/:pid" element={<ProductPage/>} ></Route>
        <Route  path="Account/" element={<Account/>} ></Route>
        <Route  path="Checkout" element={<Checkout/>} ></Route>
        <Route  path="Order/:id" element={<Success/>} ></Route>
        <Route  path="OrderHistory" element={<OrderHistory/>} ></Route>
        </Routes> 
        </div>
            <Footer title="Foot" />
            </>
            :<Routes>
            <Route exact path="/" element={<E404/>} ></Route>
        </Routes>
    ) 
}

export default Main
