import React , {useContext, useState} from 'react'

const CartContext = React.createContext()
const CartUpdateContext = React.createContext()
const CartOpenContext = React.createContext()

export function useCart() {
    return useContext(CartContext)
}

export function useCartUpdate() {
    return useContext(CartUpdateContext)
}

export function useCartOpen() {
    return useContext(CartOpenContext)
}

function CartProvider({children}) {
    const [Cart,setCart] = useState([
        
    ])
    const [open, setOpen] = useState(false)
    function AddProduct(item) {
        setCart(old => [...old,item]);
        setOpen(true)
    }
    const RemoveProduct = (o) => {
        console.log(o)
        setCart(Cart.filter(item => item._id !== o));
        console.log(Cart)
       };
     
    return (
        <CartContext.Provider value={Cart}>
                    <CartUpdateContext.Provider value={{AddProduct,RemoveProduct}}>
                    <CartOpenContext.Provider value={{open,setOpen}}>
                        {children}
                        </CartOpenContext.Provider>
                    </CartUpdateContext.Provider>
        </CartContext.Provider>
    )
}

export default CartProvider
