import React, { useEffect,useState } from 'react'
import { UnivTable } from '../Table'
import axios from 'axios';
import { useToken } from '../../Admin-S/Contexts/token';
function ProductPool() {
    const [ProdPool, setProdPool] = useState(
    )
    let headers = useToken()
    useEffect(() => {
       axios.get("/api/showProduct",{headers: headers}).then(data=>{
        setProdPool(data.data)
       })
                  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="w-full  m-10">
        <h1 className="text-3xl m-4 text-left">Products</h1>
        <UnivTable Responses={ProdPool} />        
    </div>
    )
}

export default ProductPool
