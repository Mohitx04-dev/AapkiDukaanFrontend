import React, { useEffect,useState } from 'react'
import Table, { UnivTable } from '../Table'
import { JsonToTable } from "react-json-to-table";
import axios from 'axios';
import { useToken } from '../../Admin-S/Contexts/token';
function ProductPool() {
    const [ProdPool, setProdPool] = useState(
    )
    let headers = useToken()
    useEffect(() => {
       axios.get("/api/showProduct",{headers: headers}).then(data=>{
           console.log(data.data)
        setProdPool(data.data)
       })
    }, [])
    return (
        <div className="w-full  m-10">
        <h1 className="text-3xl m-4 text-left">Products</h1>
        <UnivTable Responses={ProdPool} />        
    </div>
    )
}

export default ProductPool
