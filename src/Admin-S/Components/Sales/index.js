import {useState,useEffect} from 'react'
import { UnivTable } from '../../../Components/Table'
import { useSellerId } from '../../../Theme1/Contexts/SellerContext'
import axios from 'axios'
function Sales() {
    let Sid=useSellerId()
    const [Sales , setSales] = useState()
    useEffect(() => {
        axios.get("/api/GetSales/"+Sid).then(   (data)=>{
        console.log(data)
          setSales(data.data)
        }).catch((e)=>{
            alert('Invalid Data')
        })
       
    }, [])
    return (
        <div className="w-full  m-10">
            <h1 className="text-3xl m-4 ">Sales</h1>
            <UnivTable Responses={Sales} />
        </div>
    )
}

export default Sales