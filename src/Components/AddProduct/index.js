import axios from "axios";
import React, { useState, useEffect } from "react";
import FormData from "form-data";
import {
  useSellerData,
  useSellerId,
} from "../../Theme1/Contexts/SellerContext";
import { useToken } from "../../Admin-S/Contexts/token";
function Textfield(props) {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-gray-700"
      >
        {props.Label}
      </label>
      <input
        type={props.Type}
        name={props.Name}
        id={props.id}
        className="mt-1 p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}
function AddProduct() {
  let sid = useSellerId();
  let headers = useToken();
  let { Categories } = useSellerData();
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  function validateFile(file) {
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/x-icon",
    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  }
  function Upload() {
    let formData = new FormData();
    formData.append("file", picture);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios.post("/upload", formData, config).then((data) => {
      console.log(data);
      setImgUrl(data.data.url);
      alert('Uploaded, now Submit')
    })
  }
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      if (validateFile(e.target.files[0])) {
        setPicture(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    let data = {
      Name: e.target[0].value,
      Price: e.target[1].value,
      id: sid,
      Category: e.target[2].value,
      Photo: imgUrl,
    };
    axios.put("/api/createProduct", data,{headers : headers}).then((data) => {
      console.log(data);
      alert("Success");
      window.location.href = "/admin/inventory"
    });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="shadow overflow-hidden ">
          <h1 className=" text-2xl">Add Products</h1>

          <div className=" bg-white ">
            <div className="flex flex-row ">
              <div className="flex flex-col m-20">
                <Textfield
                
                  Label="Product Name"
                  Type="text"
                  Name="ProductName"
                  id="ProductName"
                />
                <Textfield
                  Label="Price"
                  Type="Number"
                  Name="Price"
                  id="Price"
                />
                <div>
                  <label
                    htmlFor="Category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <select
                    id="Category"
                    name="Category"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    {Categories.map((el) => {
                      return <option value={el}>{el}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="m-auto" >
                <div>
                  <input
                    type="file"
                    onChange={onChangePicture}
                    accept="image/x-png,image/gif,image/jpeg" 
                  />
                  {imgData === null ? (
                    <>
                      <div>
                        <h3 className="text-center" >Upload Product Image</h3>
                      </div>
                    </>
                  ) : (
                    <div className="text-center">
                      <img
                        className=" text-center max-w-sm m-2  border border-darkGrey border-opacity-40"
                        src={imgData}
                        type="image"
                        alt="Productimage"
                        required
                      />
                      <button
                      className="p-2 rounded-md bg-lightgreen text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          Upload();
                        }}
                      >
                        Upload Image
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lightgreen hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
