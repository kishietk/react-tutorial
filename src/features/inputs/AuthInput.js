import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export default function AuthInput({ fieldName = "field", labelText = "", isPasswordField = false }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return <div className='text-field'>
        <TextField
            id={fieldName}
            label={labelText}
            {...register(fieldName, { required: true })}
            type={isPasswordField ? "password" : ""}
        />
        {errors[fieldName]?.message && <p>{errors[fieldName]?.message}</p>}
    </div>;
};