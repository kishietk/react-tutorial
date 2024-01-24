import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../utils/schema';
import RegisterInput from './inputs/RegisterInput';
import { useSelector } from 'react-redux';

export default function UserEditer({ id }) {

    // Get user data from url id
    const userList = useSelector((state) => state?.userList?.userList);
    const user = userList[id];

    // Get user data from url id
    const methods = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: {
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
            signature: user?.signature,
            timezone: user?.timezone,
            username: user?.username,
        },
    });

    const onSubmit = async (data) => {
        try {
            //処理
            console.log(data);
        }
        catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <RegisterInput propName={"name"} />
                    <RegisterInput propName={"email"} />
                    <RegisterInput propName={"phone"} />
                    <RegisterInput propName={"signature"} />
                    <RegisterInput propName={"timezone"} />
                    <RegisterInput propName={"username"} />
                    <hr />
                    <p>edit groups component</p>
                    <p>edit permissions component</p>
                    <hr />
                    <button type="submit">Edit</button>
                </form>
            </FormProvider>
        </>
    );
};