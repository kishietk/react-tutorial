import { useFormContext } from 'react-hook-form';

export default function NumberInput({ type = "number", labelText = "" }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label htmlFor={type}>{labelText}</label>
            <input
                id={type}
                {...register(type, { required: true })}
            />
            <p>{errors[type]?.message}</p>
        </div>
    );
};