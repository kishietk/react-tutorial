import { Navigate } from "react-router-dom";
import isTokenValid from "../utils/isTokenValid";

// Protect the guest layout
export default function GuestRoute({ ...props }) {
    
    // get access token from local
    const accessToken = localStorage.getItem('accessToken');
    const expiresAt = localStorage.getItem('expiresAt');
    const isValid = isTokenValid({ accessToken, expiresAt });

    // If the user is logged in, they will be redirected to "/home"
    if (isValid) return <Navigate to={"/home"} replace />
    return props.children;
}
