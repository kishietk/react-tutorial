import { useFormContext } from 'react-hook-form';

const PasswordInput = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <label htmlFor="password">Password</label>
            <input id="password" {...register('password')} type="password" />
            <p>{errors.password?.message}</p>
        </div>
    );
};

export default PasswordInput;