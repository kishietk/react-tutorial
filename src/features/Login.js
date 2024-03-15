import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginForm from "../utils/schemas/authes/loginForm"
import AuthInput from './inputs/AuthInput';
import LoginIcon from '@mui/icons-material/Login';
import { useLoginMutation } from '../redux/api/authSlice';
import { Alert, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Loading from '../components/Loading';

export default function Login() {
    const navigate = useNavigate();
    const methods = useForm({
        resolver: yupResolver(loginForm),
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: {
            username: 'vulinh.hust@gmail.com',
            password: '123456a@'
        },
    });
    const [login, { isLoading, error }] = useLoginMutation();

    const handleFormSubmit = async (data) => {
        try {
            const { username, password } = data;
            const res = await login({ username, password }).unwrap();

            if (res.success) {
                const { accessToken, expiresAt } = res.data;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('expiresAt', expiresAt);
                
                navigate("/home");
            }
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
                    <AuthInput
                        fieldName="username"
                        labelText="UserName: "
                        width='400px'
                    />
                    <AuthInput
                        fieldName="password"
                        labelText="Password: "
                        width='400px'
                    />
                    <Button
                        variant="outlined"
                        startIcon={<LoginIcon />}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </FormProvider>
            {isLoading && <Loading />}
            {error && <Alert severity="error">faild to login</Alert>}
        </div>
    );
};