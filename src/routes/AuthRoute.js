import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

// Protect the authenticated layout
export default function AuthRoute({ ...props }) {

    // Get user login status from Redux
    const isLogin = useSelector((state) => state?.auth?.isLogin);

    // If the user is not logged in, they will be redirected to "/login"
    if (!isLogin) return <Navigate to={"/login"} replace />
    return props.children;
}