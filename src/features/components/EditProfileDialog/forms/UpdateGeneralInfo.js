import { Grid, Button, Alert } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../../utils/schemas/users/updateMyProfileForm/general';
import AuthInput from '../../../inputs/AuthInput';
import transformError from './transformError';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CloseIcon from '@mui/icons-material/Close';
import { useGetMeQuery } from '../../../../redux/api/userSlice';
import Loading from '../../../../components/Loading';
import { useEffect } from 'react';

function UpdateGeneralInfoForm() {
    return <Grid container spacing={4} mt={1}>
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
    </Grid>;
}

export default function UpdateGeneralInfo({ user, handleOnUpdate, handleClose }) {

    // use hook form setting
    const methods = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: { ...user },
    });
    const { setError } = methods;

    // on submit
    const onSubmit = async (formData) => {
        try {
            await handleOnUpdate(formData);
        }
        catch (error) {
            const res = error?.response?.data?.error;
            const transformedError = transformError(res);
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