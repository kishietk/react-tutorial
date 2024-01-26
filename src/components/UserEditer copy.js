import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../utils/schema';
import RegisterInput from './inputs/RegisterInput';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import RedirectButton from './RedirectButton';

export default function UserEditer() {

    // Get user data from url id
    let { id } = useParams();
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
            signature: user?.signature,
            timezone: user?.timezone,
            username: user?.username,
        },
    });

    const handleOnClick = (propName) => {
        console.log(propName);

    }

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
                    <RegisterInput propName={"name"} />
                    <RedirectButton type="submit" url='name' text='edit name' />
                    {/* 
                    <RegisterInput
                        propName={"email"}
                        btnMessage={"Edit email"}
                    />
                    <RegisterInput
                        propName={"signature"}
                        btnMessage={"Edit signature"}
                    />
                    <RegisterInput
                        propName={"timezone"}
                        btnMessage={"Edit timezone"}
                    />
                    <RegisterInput
                        propName={"username"}
                        btnMessage={"Edit username"} */}
                    {/* /> */}
                </form>
            </FormProvider>
        </div>
    );
};