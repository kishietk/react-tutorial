import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './Login/schema';
import AuthInput from './inputs/AuthInput';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

export default function UserPermissionsEditer() {

    // Get user data from url id
    let { id } = useParams();
    const userList = useSelector((state) => state?.userList?.userList);
    const user = userList[id];

    return (
        <div>
            <h2>UserPermissionsEditer</h2>
        </div>
    );
};