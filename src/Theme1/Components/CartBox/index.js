import React from 'react'
import { Link } from 'react-router-dom'

function CartBox(props) {
    return (
        <div className="overflow-hidden ">
          <div className="max-w-full flex bg-w">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl ">
                  <div className="flex-1 py-6  px-4 sm:px-6">
                  <p className="text-2xl text-left mt-4">Order Details</p>
                    <div className="mt-8 overflow-hidden">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          { 
                            props.products.map((product) =>
                          (
                            <li key={product.name} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <Link to={product.href}>{product.name}</Link>
                                    </h3>
                                    <p className="ml-4">{product.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty {product.quantity}</p>

                                  <div className="flex">
                                    
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{props.total}</p>
                    </div>
                    <div className="border-t border-gray-200 mt-5 ">
                    <div className="flex mt-5 justify-between text-base font-medium text-gray-900">
                      <p>Promo Code Appplied : {}</p>
                      <p>-{props.total}</p>
                    </div>
                    <div className="flex mt-5 justify-between text-base font-medium text-gray-900">
                      <p>Total</p>
                      <p>{props.total}</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    )
}

export default CartBox
