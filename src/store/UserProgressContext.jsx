import { createContext,useState } from "react";
import Checkout from "../components/Checkout";

export const UserProgressContext = createContext({
    progress:'',
    showCart:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{}
});

export default function UserProgressContextProvider({children}){
    const [userProgress,setUserProgress] = useState('');
    console.log('userProgress', userProgress)
    function showCart(){
        setUserProgress('cart');
    }
    function hideCart(){
        setUserProgress((preState)=> {
            if(preState === 'checkout') {
                return preState
            }else {
                return ''
            }
        });
    }
    function resetCart() {
        setUserProgress('')
    }
    function showCheckout(){
        setUserProgress('checkout');
    }
    function hideCheckout(){
        setUserProgress('');
    }
    return (
        <UserProgressContext.Provider value={{progress:userProgress,showCart,showCheckout,hideCart,hideCheckout}}>
            {children}
        </UserProgressContext.Provider>
    );
}