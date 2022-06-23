import React from 'react'
import CatMenu from './Utils/CategoryMenu'
import Footer from './Utils/Footer'
import Navbar from './Utils/Navbar'
function ThemePrev(props) {
    let Categories = [
        {
            text : "Fashion ",
            link : "#"
        },
        {
            text : "Mobiles and Tablets",
            link : "#"
        },
        {
            text : "Consumer Electronics",
            link : "#"
        },
        {
            text : "Books ",
            link : "#"
        },
        {
            text : "Movie Tickets",
            link : "#"
        },
        {
            text : "Baby Products",
            link : "#"
        },
        {
            text : "Groceries ",
            link : "#"
        },
        {
            text : "Food Takeaway/Delivery",
            link : "#"
        }
    ]
    return (
        <div className="overflow-hidden"> 
            <Navbar Arr={props.Form.Categories} Form={props.Form}/>
            <CatMenu Arr={props.Form.Categories} />
            <Footer Arr={props.Form.Categories} title="Foot" />
        </div>
    )
}

export default ThemePrev
