import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { useCart, useCartUpdate } from "../../Contexts/CartContext";
import { useSellerId } from "../../Contexts/SellerContext";

export default function ProductPage() {

  const sId = useSellerId();
  const {pid} = useParams()
  const [product, setproduct] = useState(0)
  const CartUpdate = useCartUpdate();
  console.log(CartUpdate);
  const [qty, setQty] = useState(1);
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('/api/getFullProduct/'+sId+'/'+pid).then ((data)=>{
      console.log(data.data)
      setproduct(data.data)
      setLoading(false)
    })
  }, [])
  // useEffect(() => {
  //   axios.get('/image/'+product.Photo).then(d => {
  //     console.log(d)
  //     setImg(d.data)
  //   })
  // }, [product])
  if(Loading) {
    return (
      <div className="App">Loading...</div>
    )
  }
  return (
    <div className="bg-white">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
        >
        </ol>
      </nav>
      <div className="pt-6 flex flex-row">
        {/* Image gallery */}
        <div className="grid grid-cols-1 w-1/2">
          <div className="hidden aspect-w-3 m-auto w-3/4 mt-5 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={'http://localhost:5000/image/'+product.Photo}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl text-left flex-1 pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 ">
          <div className="lg:col-span-2 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-left text-gray-900 sm:text-3xl">
              {product.Name}
            </h1>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2  lg:pr-8">
            <div className="mt-10">
              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">{product.Price}</p>

                <form className="mt-10">
                  <div className="container">
                    <div className="center">
                      <>
                        <div className="card">
                          <div className="flex">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                if (qty - 1 > 0) {
                                  setQty(qty - 1);
                                }
                              }}
                              className="border p-2 mx-5 text-4xl"
                            >
                              -
                            </button>
                            <div className="text-4xl p-2 ">{qty}</div>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setQty(qty + 1);
                              }}
                              className="border p-2 mx-5 text-4xl"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      // for (let i = 0; i < qty; ++i) {
                        console.log("trying");
                        product["quantity"] = qty;
                        console.log(product)
                        CartUpdate.AddProduct(product);
                      // }
                    }}
                    className="mt-10 w-full bg-theme text-w border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add to bag
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
