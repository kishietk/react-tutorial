import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';


export default function RegisterInput({ propName = "prop", labelText = "", password = false }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className='register-input'>
            <TextField
                id={propName}
                label={labelText}
                {...register(propName, { required: true })}
                type={password ? "password" : ""}
            />
            {errors[propName]?.message && <p>{errors[propName]?.message}</p>}
            <br />
        </div>
    );
};