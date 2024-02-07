import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from '../../useHooks/useAuth';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import RegisterInput from '../inputs/RegisterInput';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from "@mui/material";

export default function Login() {
    const methods = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: {
            email: 'vulinh.hust@gmail.com',
            password: '123456a@'
        },
    });

    const { login } = useAuth();
    const [isLogin, setIsLogin] = useState(false);

    const onSubmit = async (data) => {
        try {
            const { email, password } = data;
            const success = await login(email, password);
            setIsLogin(success);
        }
        catch (e) {
            console.log(e);
        }
    };

    return <>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <RegisterInput
                    propName="email"
                    labelText="Email: "
                />
                <RegisterInput
                    propName="password"
                    labelText="Pass: "
                />
                <Button
                    variant="outlined"
                    startIcon={<LoginIcon />}
                    type="submit"
                >Login</Button>
            </form>
        </FormProvider>
        {isLogin && <Navigate to='/home' replace />}
    </>;
};