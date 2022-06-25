import React, { useEffect,useState } from 'react'
import {UnivTable} from '../../../Components/Table'
import axios from 'axios';
import {
    useSellerId,
  } from "../../../Theme1/Contexts/SellerContext"
import { Link } from 'react-router-dom';
import { useToken } from '../../Contexts/token';
function PromoCode() {
    let Sid=useSellerId()
    const [isLoading, setisLoading] = useState(true)
    const [PromoCode, setPromoCode] = useState({
    })
    let headers = useToken()

    useEffect(() => {
       axios.get("/api/GetPromoCode/"+Sid,{headers: headers}).then(data=>{
           setPromoCode(data.data)
           setisLoading(false)
       })
                  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const Delete = (row) =>{
        axios.put("/api/DeletePromo/"+Sid,{id : row._id},{headers: headers}).then(()=>{
            alert('Delete Successly')
            window.location.reload()
        })
     }
    if(isLoading) {
        return (
            <div>Loading</div>
        )
    }
    else {
    return (

        <div className="w-full  m-10">
        <h1 className="text-3xl m-4 text-left">PromoCode</h1>
        <div className="flex flex-row justify-evenly">
            <div>
            <UnivTable Responses={PromoCode} Delete={Delete}/>  
            </div>
        <Link to="add" className=" max-h-10 p-2 rounded-lg bg-lightgreen" >Add +</Link> 
        </div>
    </div>
    )
}
}

export default PromoCode
