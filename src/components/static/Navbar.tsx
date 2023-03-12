import { ModalContext } from "@/context/modal/modal-context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import LoginForm from "../auth/LoginForm";
import { Form } from "./HeroSection";
const Navbar = () => {
    const [openModal,closeModal] = useContext(ModalContext);
    return <>
        
        <div className="w-full fixed flex justify-center">
        <nav className="w-full container px-5 flex justify-between py-4">
            <span>
                <Image width={80} height={50} src={'logo/logo.svg'} className="" alt="milo"/>
            </span>
        <button onClick={()=>{openModal(<LoginForm/>)}} className="btn-primary"> Log in </button>
        </nav>

        </div>
      
    </>
}
export default Navbar;