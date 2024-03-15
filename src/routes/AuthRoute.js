import { Navigate } from "react-router-dom";
import isTokenValid from "../utils/isTokenValid";

// Protect the authenticated layout
export default function AuthRoute({ ...props }) {
    
    // check access token is valid
    const accessToken = localStorage.getItem('accessToken');
    const expiresAt = localStorage.getItem('expiresAt');
    const isValid = isTokenValid({ accessToken, expiresAt });

    // If the user is not logged in, they will be redirected to "/login"
    if (!isValid) return <Navigate to={"/login"} replace />
    return props.children;
}