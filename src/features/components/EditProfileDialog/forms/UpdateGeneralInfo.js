import { Grid, Button } from '@mui/material';
import { useSelector } from 'react-redux'
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../../utils/schemas/users/updateMyProfileForm/general';
import { useAuth } from '../../../../useHooks/useAuth';
import AuthInput from '../../../inputs/AuthInput';
import transformError from './transformError';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CloseIcon from '@mui/icons-material/Close';

function UpdateGeneralInfoForm() {
    return <>
        <Grid container spacing={4} mt={1}>
            <Grid item xs={12} md={6}>
                <AuthInput
                    fieldName="name"
                    labelText="name"
                />
                <AuthInput
                    fieldName="username"
                    labelText="username"
                />
                <AuthInput
                    fieldName="signature"
                    labelText="signature"
                />
                <AuthInput
                    fieldName="phone"
                    labelText="phone"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <AuthInput
                    minRows="9"
                    fieldName="aboutMe"
                    labelText="Write something about you"
                    fullWidth
                />
            </Grid>
        </Grid>
    </>
};

export default function UpdateGeneralInfo({ handleOnUpdate, handleClose }) {
    // for connecting to api
    const { updateProfile } = useAuth();

    // get my info for default values from local
    const me = useSelector((state) => state?.auth?.user);

    // use hook form setting
    const methods = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: { ...me },
    });
    const { setError } = methods;

    // on submit
    const onSubmit = async (formData) => {
        try {
            const res = await updateProfile(formData);
            handleOnUpdate(formData, res);
        }
        catch (error) {
            const res = error?.response?.data?.error;
            const transformedError = transformError(res);
            console.log(transformedError);

            transformedError.forEach(e => {
                setError(e.name, {
                    type: e.type,
                    message: e.message,
                });
            });
        }
    };

    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <UpdateGeneralInfoForm />
            <Grid container style={{ justifyContent: 'flex-end' }}>
                <Button
                    variant="outlined"
                    startIcon={< SaveAltIcon />}
                    type="submit"
                    style={{ marginRight: '10px' }}
                >
                    save changes
                </Button>
                <Button
                    variant="outlined"
                    startIcon={< CloseIcon />}
                    onClick={handleClose}
                >
                    close
                </Button>
            </Grid>
        </form>
    </FormProvider >
};