import { Props } from "next/script";
import React, { createContext, PropsWithChildren, ReactNode, useState } from "react";
import Modal from "./Modal";

export const ModalContext = createContext<[(component: ReactNode) => unknown, () => unknown]>([() => console.log('Open modal'), () => console.log('Close modal')]);

const ModalContextProvider = ({children}:PropsWithChildren)=>{
  const [ChildComponent, setChildComponent] = useState<ReactNode|undefined>(undefined);
 
  const openModal = (component: ReactNode ) => setChildComponent(component);
  const closeModal = () => setChildComponent(undefined);
  return <>
  <ModalContext.Provider  value={[openModal,closeModal]}>
       <div className="relative">

       {children}
       {ChildComponent==undefined?'': <Modal>{ChildComponent}</Modal> }
       
       </div>
      
  </ModalContext.Provider>
  </>
}

export default ModalContextProvider;
