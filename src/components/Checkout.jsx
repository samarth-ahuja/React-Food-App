import { useContext } from 'react';
import Input from './UI/Input.jsx';
import { UserProgressContext } from '../store/UserProgressContext.jsx';
export default function Checkout(){
    const {progress,showCheckout,hideCheckout, resetCart} = useContext(UserProgressContext);
    console.log('Checkout progress', progress)
    return (
        <dialog open={progress==='checkout'} onClose={()=>{
            console.log('123456')
        // hideCheckout
        }}>
            <form>
                <Input label="name" type="text"></Input>
                <Input label="email" type="email"></Input>
            </form>
        </dialog>
    );
}