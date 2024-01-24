import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

// Protect the guest layout
export default function GuestRoute({ ...props }) {

    // Get user login status from Redux
    const isLogin = useSelector((state) => state?.auth?.isLogin);

    // If the user is logged in, they will be redirected to "/home"
    if (isLogin) return <Navigate to={"/home"} replace />
    return props.children;
}