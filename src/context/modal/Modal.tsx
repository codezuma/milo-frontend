import { PropsWithChildren, useContext } from "react";
import { X } from "react-feather";
import { ModalContext } from "./modal-context";

const Modal = ({children}:PropsWithChildren)=>{
    const [openModal,closeModal] = useContext(ModalContext);
    return <>
     <div onClick={closeModal} className="fixed top-0 w-screen bg-black flex justify-center items-center bg-opacity-20 z-50 overflow-auto h-screen">
        <div onClick={(e)=>{e.stopPropagation()}} className="bg-white animate-pop p-6 w-full rounded-xl min-h-[300px] relative px-4 py-2 backdrop-blur-sm  bg-opacity-90 xl:w-4/6 max-w-fit md:w-3/4">
          {children}
        </div>
     </div>
    </>
}
export default Modal;