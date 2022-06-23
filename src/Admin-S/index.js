import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";
import Sales from "./Components/Sales";
import Customers from "../Components/Customers";
import Bills from '../Components/Bills'
import Inventory from "../Components/Inventory";
import Login from '../Components/Login';
import TabsTable from '../Components/TabsTable';
import WebsiteSettings from './Components/Website';
import AddProduct from '../Components/AddProduct';
import TokenProvider from './Contexts/token'
import SellerDataProvider, { useSellerData, useSellerId } from '../Theme1/Contexts/SellerContext';
import PromoCode from './Components/PromoCode';
import AddPromoCode from './Components/AddPromo';
import axios from 'axios';
import Logout from '../Components/Logout';
function AdminS() {
  const Menu = [
   
    {
      link: "inventory",
      text: "Inventory",
    },
    {
      link: "sales",
      text: "Sales",
    },
  ,
    {
      link: "bills",
      text: "Bills",
    },
    {
      link: "PromoCode",
      text: "PromoCode",
    },
    {
      link: "settings",
      text: "Settings",
    },
    {
      link: "Logout",
      text: "Logout",
    },
  ]
  let User = localStorage.getItem('User')
  let Sid = useSellerId()
  var full = window.location.host
  var parts = full.split('.')
  var sub = parts[0]
  return (
 
    <div className="App">
         <SellerDataProvider>
        <div className="p-0 m-0 flex">
          <Sidebar Menu={Menu}/>
          <TokenProvider>
          <div className="m-10 p-2">
            Welcome User, Proceed to use the Admin Panel
          {
              User ? 
              <Routes>
              <Route exact path="sales" element={<Sales />}  ></Route>
              <Route exact path="customers" element={<Customers />}  ></Route>
              <Route exact path="bills" element={<Bills />}  ></Route>
              <Route exact path="inventory" element={<Inventory />}  ></Route>
              <Route exact path="inventory/add" element={<AddProduct />}  ></Route>
              <Route exact path="test" element={<TabsTable />}  ></Route>
              <Route exact path="PromoCode/add" element={<AddPromoCode/>}  ></Route>
              <Route exact path="promocode" element={<PromoCode />}  ></Route>
              <Route exact path="logout" element={<Logout />}  ></Route>
              <Route exact path="settings" element={<WebsiteSettings id={Sid}/>}  ></Route>
              </Routes> : <Routes>
              <Route path="/*" element={<Login role="Seller" domain={sub}/>}  ></Route>  
                </Routes>
          }
        </div>
        </TokenProvider>
        </div>
        </SellerDataProvider>
    </div>


  );
}

export default AdminS;
