import { Navigate } from "react-router-dom";
import { ObjContext } from "../Context/ContextApi";
    import { useContext } from "react";
export default function PrivateRoute({children}){
    const {isAuth}=useContext(ObjContext)
    if(!isAuth){
        return <Navigate to="/login"/>
    }
    return children
    
}