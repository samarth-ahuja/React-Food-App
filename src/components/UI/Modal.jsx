import { createPortal } from "react-dom";
import {useEffect,useRef} from 'react';
export default function Modal({children,open,className='',...props}){
    const dialogRef = useRef();
    console.log('Open',open)
    useEffect(()=>{
        const modal = dialogRef.current;
        if(open){
            modal.showModal();
        }
        else{
            modal.close();
        }
        // return ()=>{
        //     // console.log('Open',open)
        //     modal.close();
        // }
    },[open])
    return createPortal(
        <dialog className={`modal ${className}`} ref={dialogRef} {...props}>
            {children}
        </dialog>
    ,document.getElementById('modal'));
}