
import React from 'react'
import { useParams } from 'react-router'
import { AccountBox } from '../Account'
import CartBox from '../CartBox'
import ProgressDiv from '../FormComponents/progress'
const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
      },
      {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
          'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
      },
]
function Success(props) {
    const { id } = useParams();
    return (
        <div>
            <p className="text-left text-2xl font-bold mb-2">{"Order # "+id}</p>
            {/* 20 , 60, 100 */}
            <ProgressDiv perc={20} />  
            <div className="flex justify-between mt-5">
                <p>Order Placed</p>
                <p>Processing</p>
                <p>Delivered</p>
            </div>
            <div className="flex justify-between">
            <CartBox products={products} total={34}/>
            <div className="mt-10">
                <p className="text-left text-2xl mb-5">Contact Details</p>
            <AccountBox save={false}/>
            </div>
            </div>
        </div>
    )
}

export default Success
