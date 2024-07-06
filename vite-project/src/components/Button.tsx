import { ReactNode } from "react"


interface Props{
    text:'primary'|'secondary'|'danger' | "btn-close",
    children:ReactNode
}
function Button({text,children}:Props){
    return <button type="button" className={"btn btn-"+text} aria-label="Close">{children}</button>
}
export default Button