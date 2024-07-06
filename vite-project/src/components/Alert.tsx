import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  visible:boolean
}

function Alert({ children,visible}: Props) {
    const [alertVisible,setVisible]=useState(visible)
  return (
  
    <>
      { alertVisible && 
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>setVisible(false)}></button>        {children}
      </div>}
    </>
  );
}
export default Alert;
