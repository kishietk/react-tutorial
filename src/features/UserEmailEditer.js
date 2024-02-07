import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './Login/schema';
import RegisterInput from './inputs/RegisterInput';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

export default function UserEmailEditer() {

    // Get user data from url id
    let { id } = useParams();
    const userList = useSelector((state) => state?.userList?.userList);
    const user = userList[id];

    // Get user data from url id
    const methods = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: { email: user?.email }
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
        <div className='user-editer'>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <hr />
                    <RegisterInput propName={"email"} />
                </form>
            </FormProvider>
        </div>
    );
};