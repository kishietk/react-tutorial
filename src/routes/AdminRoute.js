import { Navigate } from "react-router-dom";
import { useGetMeQuery } from "../redux/api/userSlice";

export default function AdminRoute({ ...props }) {
    
    const { data: me, error: meError, isLoading: meLoading } = useGetMeQuery();
    if (meLoading) return <h2>loading</h2>
    if (meError) return <h2>error</h2>
    
    const isAdmin = me.admin;
    if (!isAdmin) return <Navigate to={"/home"} replace />

    return props.children;
}
