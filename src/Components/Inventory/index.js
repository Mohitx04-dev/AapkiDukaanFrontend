import React, { useEffect, useState } from "react";
import Table, { UnivTable } from "../Table";
import { Link } from "react-router-dom";
import { useSellerId } from "../../Theme1/Contexts/SellerContext";
import axios from "axios";
import { useToken } from "../../Admin-S/Contexts/token";
function Inventory() {
  let Sid = useSellerId();
  const [isLoading, setisLoading] = useState(true);
  const [Products, setProducts] = useState({});
  let headers = useToken();
  useEffect(() => {
    axios
      .get("/api/findSellerProducts/" + Sid, { headers: headers })
      .then((data) => {
        console.log(data.data);

        setProducts(data.data);
        setisLoading(false);
      });
  }, []);
  const Delete = (row) => {
      console.log(row._id)
    axios.put("/api/DeleteProducts/" + Sid, { id: row._id },{headers : headers}).then(() => {
      alert("Delete Successly");
      window.location.reload();
    });
  };
  if (isLoading) {
    return <div>Loading</div>;
  } else {
    return (
        <div className="w-full  m-10">
        <h1 className="text-3xl m-4 text-left">Products</h1>
        <div className="flex flex-row justify-evenly">
            <div>
            <UnivTable Responses={Products} Delete={Delete} />
            </div>
        <Link to="add" className=" max-h-10 p-2 rounded-lg bg-lightgreen" >Add +</Link> 
        </div>
    </div>
    );
  }
}

export default Inventory;
