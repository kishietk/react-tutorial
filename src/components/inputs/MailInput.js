import { useFormContext } from 'react-hook-form';

export default function TextInput({ text = "email: ", defaultText = "" }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label htmlFor="email">{text}</label>
            <input
                id="email"
                {...register('email', { required: true })}
            />
            <p>{errors.email?.message}</p>
        </div>
    );
};