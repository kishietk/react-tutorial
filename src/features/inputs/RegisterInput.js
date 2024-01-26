import { useFormContext } from 'react-hook-form';

export default function RegisterInput({ propName = "prop", labelText = "" }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label htmlFor={propName}>{labelText}</label>
            <input
                id={propName}
                {...register(propName, { required: true })}
            />
            <p>{errors[propName]?.message}</p>
        </div>
    );
};