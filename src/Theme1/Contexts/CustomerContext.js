import React , {useContext, useState, useEffect} from 'react'
import axios from 'axios'
const CustomerContext = React.createContext()



export function useCustomer() {
    return useContext(CustomerContext)
}
function CustomerProvider({children}) {
    const [Customer, setCustomer] = useState()
    const [isLoading, setLoading] = useState(true);
    var Usr = localStorage.getItem('Customer')
    let headers;
    if(Usr) {
        Usr = JSON.parse(Usr)
         headers = {
            'Authorization': Usr.token
          }
    }
    console.log(headers)
    useEffect(() => {
        axios.get('/api/GetCustomerbyToken/',{headers:headers}).then((data)=>{
            console.log(data)
            setCustomer(data.data)
            setLoading(false)
        }).catch(e=>{
            console.log(e)
        })
    }, [])
    if(Usr) {   
        if (isLoading) {
            return <div className="App">Loading...</div>;
         }
    }
    return (
        <CustomerContext.Provider value={Customer}>
                        {children}
        </CustomerContext.Provider>
    )
}

export default CustomerProvider
