import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from '../useHooks/useAuth';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './Login/schema';
import RegisterInput from './inputs/RegisterInput';
import PasswordInput from './inputs/PasswordInput';

export default function SignUp() {
    const methods = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: { email: '', password: '' },
    });

    const { signup } = useAuth();

    const onSubmit = async (data) => {
        try {
            //console test
            signup(data);
        }
        catch (e) {
            console.log(e);
        }
    };

    return <div className='signup-feature'>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <RegisterInput text={"email"} />
                <PasswordInput />
                <button type="submit">Sign Up</button>
            </form>
        </FormProvider>
    </div>;
}