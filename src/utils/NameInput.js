import { useFormContext } from 'react-hook-form';

const NameInput = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" {...register('email', { required: true })} />
            <p>{errors.email?.message}</p>
        </div>
    );
};

export default NameInput;