import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../features/Login/schema';
import RegisterInput from '../features/inputs/RegisterInput';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

export default function UserGroupsEditer() {

    // Get user data from url id
    let { id } = useParams();
    const userList = useSelector((state) => state?.userList?.userList);
    const user = userList[id];

    return (
        <div>
            <h2>UserGroupsEditer</h2>
        </div>
    );
};