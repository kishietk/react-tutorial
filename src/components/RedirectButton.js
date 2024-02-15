import { Navigate } from "react-router-dom";
import { useState } from 'react';

export default function RedirectButton({ url = "", text = "" }) {

    const [clicked, setClicked] = useState(false);
    const handleOnClick = () => {
        setClicked(true);
    }

    return (
        <div className='redirect-button'>
            <button onClick={handleOnClick}>{text}</button>
            {clicked && <Navigate to={url} replace />}
        </div>
    );
};