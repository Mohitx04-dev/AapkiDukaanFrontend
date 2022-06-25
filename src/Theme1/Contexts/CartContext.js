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
        console.log(item)
        let x = 0;
        const Product = Cart.find(el=> {
            return (el._id==item._id) ;
        })
        if(Product){
            Product["quantity"]+=item["quantity"];
            console.log(Product["quantity"]);
        }
        else{
            setCart(old => [...old,item]);
        }
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
