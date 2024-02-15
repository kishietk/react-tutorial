import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from '../../useHooks/useAuth';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import AuthInput from '../inputs/AuthInput';
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
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const handleFormSubmit = async (data) => {
        try {
            const { email, password } = data;

           //! const loginSuccessful = await login(email, password);
           //! setisLoggedIn(loginSuccessful);

            setisLoggedIn(true);
        }
        catch (e) {
            console.log(e);
        }
    };

    return <>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                <AuthInput
                    fieldName="email"
                    labelText="Email: "
                />
                <AuthInput
                    fieldName="password"
                    labelText="Password: "
                />
                <Button
                    variant="outlined"
                    startIcon={<LoginIcon />}
                    type="submit"
                >Login</Button>
            </form>
        </FormProvider>
        {isLoggedIn && <Navigate to='/home' replace />}
    </>;
};