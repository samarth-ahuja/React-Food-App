import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";
import {useContext,useState} from 'react';
import Cart from "./Cart";
import { UserProgressContext } from "../store/UserProgressContext";
export default function Header(){
    const {items} = useContext(CartContext);
    const {progress,showCart,hideCart} = useContext(UserProgressContext);
    function clickHandler(){
        showCart();
    }
    function closeHandler(){
        hideCart();
    }
    console.log('progress', progress)
    return (
        <header id="main-header">
            <div id="title">
                <img src="logo.jpg" alt="logo"/>
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <Cart modalOpen={progress==='cart'} onClose={()=>{
                
                    hideCart()
                }}></Cart>
                <Button textOnly onClick={clickHandler}>Cart({items.length})</Button>
            </nav>
        </header>
    );
}