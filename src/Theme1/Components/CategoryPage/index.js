import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSellerId } from '../../Contexts/SellerContext'
import ProductCardH from '../ProductCardH'
import SideElements from '../Sidebar'

function CategoryPage() {
    let {id} = useParams()
    const [Products, setProducts] = useState([])
    let Sid  = useSellerId()
    useEffect(() => {
        axios.put('/api/findProductsbyCategory/'+Sid,{"Category":id}).then((data)=>{
            setProducts(data.data)
        })
    },[])
    const [StartV, setStartV] = useState(0)
    const [EndV, setEndV] = useState(20000)
    return (
        <>
        <h2 className="text-4xl text-left font-bold">{id}</h2>
        <div className="flex flex-row ">
            <SideElements StartV={StartV} EndV={EndV} setStartV={setStartV} setEndV={setEndV}/>
            <div className="mx-10 grid grid-cols-1 w-full">
            {Products.map(el=>{
               return <ProductCardH product={el}/>
            })}
            </div>
        </div>
        </>
    )
}

export default CategoryPage
