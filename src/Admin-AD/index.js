import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";
import Customers from "../Components/Customers";
import Bills from '../Components/Bills'
import Inventory from "../Components/Inventory";
import Login from '../Components/Login';
import TabsTable from '../Components/TabsTable';
import AddProduct from '../Components/AddProduct';
import SellerDataProvider, { useSellerData, useSellerId } from '../Theme1/Contexts/SellerContext';
import Client from '../Components/Clients';
import ProductPool from '../Components/AdminProductPool/indexcopy';
import TokenProvider from '../Admin-S/Contexts/token';
import Logout from '../Components/Logout';
import Executive from '../Components/Executive';;
function AdminAD() {
  const Menu = [
    {
      link: "productpool",
      text: "Inventory",
    },
    {
        link: "Client",
        text: "Client",
     },
    {
      link: "Customers",
      text: "Customers",
    },
    {
      link: "bills",
      text: "Bills",
    },    
    {
      link: "executive",
      text: "Executive",
    },
    {
      link: "Logout",
      text: "Logout",
    },
  ]
  let User = localStorage.getItem('User')
  return (
 
    <div className="App">
          <TokenProvider>
        <div className="p-0 m-0 flex">
          <Sidebar Menu={Menu}/>
          <div className="m-10 p-2">
            {
              User ? 
              <Routes>
              <Route exact path="Customers" element={<Customers />}  ></Route>
              <Route exact path="Client" element={<Client />}  ></Route>
              <Route exact path="bills" element={<Bills />}  ></Route>
              <Route exact path="inventory" element={<Inventory />}  ></Route>
              <Route exact path="inventory/add" element={<AddProduct />}  ></Route>
              <Route exact path="test" element={<TabsTable />}  ></Route>
              <Route exact path="logout" element={<Logout />}  ></Route>
              <Route exact path="executive" element={<Executive />}  ></Route>
              <Route exact path="productpool" element={<ProductPool />}  ></Route>
              {/* <Route exact path="Login" element={<Login />}  ></Route> */}
              </Routes>
              : <Routes>
              <Route path="/*" element={<Login role="Admin"/>}  ></Route>  
                </Routes>
            }
        </div>
        </div>
        </TokenProvider>
    </div>


  );
}

export default AdminAD;
