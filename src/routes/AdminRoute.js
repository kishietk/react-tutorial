import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function AdminRoute({ ...props }) {
    const isAdmin = useSelector((state) => state?.auth?.user?.admin);

    if (!isAdmin) return <Navigate to={"/home"} replace />

    return props.children;
}
