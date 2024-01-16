import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../utils/schema';
import NameInput from '../utils/NameInput';
import PasswordInput from '../utils/PasswordInput';
import FetchAccessToken from './FetchAccessToken';
import { useState } from 'react';

export default function LoginFeature() {
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [data, setData] = useState({});

    const methods = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: { email: 'vulinh.hust@gmail.com', password: '123456a@' },
    });

    const onSubmit = async (data) => {
        try {
            setIsSubmiting(true);
            setData(data);
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="LoginFeature">
            <h1>Login Feature</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <NameInput />
                    <PasswordInput />
                    <button type="submit">Login</button>
                    {isSubmiting && <FetchAccessToken data={data} />}
                </form>
            </FormProvider>
        </div>
    );
}