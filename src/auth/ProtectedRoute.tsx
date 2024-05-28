import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const {isAuthenticated, isLoading} = useAuth0();

    if(isLoading){
        return <h2 className="text-3xl">Please wait...</h2>;
    }   
    if (isAuthenticated){
        return <Outlet/>
    }

    return<Navigate to="/" replace/>
}

export default ProtectedRoute