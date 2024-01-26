import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import RegisterInput from '../inputs/RegisterInput';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

export default function UserNameEditer() {

    // Get user data from url id
    let { id } = useParams();
    const userList = useSelector((state) => state?.userList?.userList);
    const user = userList[id];

    // Get user data from url id
    const methods = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: { name: user?.name }
    });

    const onSubmit = async (data) => {
        try {
            console.log(data);
        }
        catch (e) {
            console.log(e);
        }
    };

    return <>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <RegisterInput propName={'name'} />
                <button type="submit">Edit name</button>
            </form>
        </FormProvider>
    </>
};