import { useAuth } from '../useHooks/useAuth';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../utils/schemas/authes/signupForm';
import AuthInput from './inputs/AuthInput';
import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function SignUp() {
    const methods = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: {
            name: 'abcdefgh',
            username: 'abcdefgh',
            email: 'abcdefgh@exm.com',
            password: 'abcdefgh',
            passwordConfirmation: 'abcdefgh',
        },
    });

    const { signup } = useAuth();
    const onSubmit = async (formData) => {
        try {
            const res = await signup(formData);
        }
        catch (e) {
            console.log(e);
        }
    };

    return <div className='signup-feature'>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <AuthInput
                    propName="name"
                    labelText='name'
                    width='400px'
                />
                <AuthInput
                    propName="username"
                    labelText='username'
                    width='400px'
                />
                <AuthInput
                    propName="email"
                    labelText='email'
                    width='400px'
                />
                <AuthInput
                    propName="password"
                    labelText='password'
                    password={true}
                    width='400px'
                />
                <AuthInput
                    propName="passwordConfirmation"
                    labelText='passwordConfirmation'
                    password={true}
                    width='400px'
                />
                <br />
                <Button
                    variant="outlined"
                    type="submit"
                    startIcon={<AccountCircleIcon />}
                >
                    Sign Up
                </Button>
            </form>
        </FormProvider>
    </div>;
}