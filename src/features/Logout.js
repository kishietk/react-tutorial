import { Navigate } from "react-router-dom";
import { useAuth } from '../useHooks/useAuth';
import { useState } from "react";

export default function Logout() {
    const { logout } = useAuth();
    const [isLogin, setIsLogin] = useState(true);

    const handleOnClick = async () => {
        try {
            const success = await logout();
            setIsLogin(!success);
        }
        catch (e) {
            throw e;
        }
    };

    return (
        <>
            <button onClick={handleOnClick}>Logout</button>
            {!isLogin && <Navigate to={"/login"} replase />}
        </>
    );
}