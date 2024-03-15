import { useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export default function AuthInput({
    fieldName = "field",
    labelText = "",
    isPasswordField = false,
    minRows = "1",
    width ="100%",
}) {

    const { register, formState: { errors } } = useFormContext();

    return <div className='text-field'>
        <TextField
            minRows={minRows}
            id={fieldName}
            label={labelText}
            {...register(fieldName, { required: true })}
            type={isPasswordField ? "password" : ""}
            multiline
            style={{ width: width }}
            fullWidth
        />
        {errors[fieldName] && <p>{errors[fieldName].message}</p>}
    </div>;
};