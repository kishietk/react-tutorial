import { useFormContext } from 'react-hook-form';

// propName must be string
export default function RegisterInput({ propName = "email" }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label htmlFor={propName}>{`${propName} : `}</label>
            <input
                id={propName}
                {...register(propName, { required: true })}
            />
            <p>{errors[propName]?.message}</p>
        </div>
    );
};
