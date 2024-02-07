import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const PasswordInput = ({ propName = "password" }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <TextField
                id="password"
                label={propName}
                {...register('password')}
                type="password"
            />
            <p>{errors.password?.message}</p>
        </div>
    );
};

export default PasswordInput;