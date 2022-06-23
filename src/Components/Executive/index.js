import React, { useEffect,useState } from 'react'
import Table,{UnivTable} from '../Table';
import { JsonToTable } from "react-json-to-table";
import axios from 'axios';
import { useSellerData, useSellerId } from '../../Theme1/Contexts/SellerContext';
import { Link } from 'react-router-dom';
import { useToken } from '../../Admin-S/Contexts/token';
function Executive() {
    let Sid=useSellerId()
    const [isLoading, setisLoading] = useState(true)
    const [Executive, setExecutive] = useState({
    })
    let headers = useToken()
    useEffect(() => {
       axios.get("/api/GetExecutive/",{headers: headers}).then(data=>{
           console.log(data.data)
           let executive = data.data.map((el)=>{
               return (
                   {
                       ...el,
                       personalDetails:JSON.stringify(el.personalDetails)
                   }
               )
           })
           setExecutive(executive)
           setisLoading(false)
       })
    }, [])
    const Delete = (row) =>{
        axios.delete("/api/DeleteExecutive/"+row._id,{headers: headers}).then(()=>{
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
        <h1 className="text-3xl m-4 text-left">Executive</h1>
            <div className=" overflow-x-scroll max-w-screen-lg">
            <UnivTable Responses={Executive} Delete={Delete}/>  
            </div>
        
    </div>
    )
}
}

export default Executive
