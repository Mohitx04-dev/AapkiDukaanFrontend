import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSellerId } from '../../Theme1/Contexts/SellerContext';
import Worder from '../Widgets/Order'
import Wproduct from '../Widgets/Product';

function SingleOrder() {
    
    const { id } = useParams();
    const [Order, setOrder] = useState()
    let sid = useSellerId()
    const [Products, setProducts] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('/api/GetOrderDetail/'+sid+'/'+id).then((data)=>{
            setOrder(data.data)
            data.data.Products.forEach(element => {
                axios.get('/api/getFullProduct/'+sid+'/'+element.Product).then ((d)=>{
                    const P = Object.create(d.data)
                    P["quantity"] = element.Quantity
                    setProducts(Products => [...Products,P])
                    setLoading(false)
                  })
            });
        }) 
    },[])
  
  return (
    <>
    {
     
        Loading ?<p>Loading....</p>:
        <div>
            <Worder Order={Order}/>
            {Products.map((el=>{
                return <Wproduct Product={el} Type={2}/>
            }))}
        </div>
      
      
    }
    </>
  )
}

export default SingleOrder