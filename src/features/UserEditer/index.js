import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BackPageButton from '../../components/BackPageButton';
import * as React from 'react';
import { FormGroup, FormControlLabel } from '@material-ui/core';
import { Button, Checkbox } from "@mui/material";
import InputWithCheckbox from '../../components/InputWithCheckbox';

export default function UserEditer() {

    // Get user data from url id
    let { id } = useParams();
    const user = useSelector((state) => state?.userList?.userList)[id];

    // form
    const methods = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: { },
    });

    // events
    const onSubmit = async (formData) => {
        try {
            console.log(formData);
        }
        catch (e) {
            console.log(e);
        }
    };

    return <div className='edit-user-feature'>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <FormGroup row={true}>
                    <FormControlLabel
                        label={`id: ${user?.id}`}
                        control={<Checkbox disabled />}
                    />
                </FormGroup>
                <InputWithCheckbox
                    propName={"name"}
                    labelText={user?.name}
                />
                <InputWithCheckbox
                    propName={"username"}
                    labelText={user?.username}
                />
                <InputWithCheckbox
                    propName={"email"}
                    labelText={user?.email}
                />
                <InputWithCheckbox
                    propName={"phone"}
                    labelText={user?.phone}
                />
                <InputWithCheckbox
                    propName={"timezone"}
                    labelText={user?.timezone}
                />
                <InputWithCheckbox
                    propName={"password"}
                    labelText={user?.password}
                    password={true}
                />
                <br />
                <Button
                    variant="outlined"
                    type="submit"
                    startIcon={<AccountCircleIcon />}
                >
                    Edit user data
                </Button>
            </form>
        </FormProvider>

        <BackPageButton
            buttonText='back'
            specifiedPath={`/admin/user/${id}`}
        />
    </div>;
};