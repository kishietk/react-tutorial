import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import BackPageButton from '../../components/BackPageButton';
import * as React from 'react';
import { Button } from "@mui/material";
import AuthInput from '../inputs/AuthInput';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export default function UserEditer() {

    // Get user data from url id
    let { id } = useParams();
    const user = useSelector((state) => state?.userList?.userList)[id];

    // form
    const methods = useForm({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        reValidateMode: 'onSubmit',
        defaultValues: {
            name: user.name,
            username: user.username,
            phone: user.phone,
            aboutMe: user.aboutMe,
        },
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

    return <>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-sm-12">
                            <AuthInput
                                fieldName="name"
                                labelText="name: "
                            />
                            <AuthInput
                                fieldName="username"
                                labelText="username: "
                            />
                            <AuthInput
                                fieldName="phone"
                                labelText="phone: "
                            />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <span>Write something about you</span>
                            <AuthInput
                                minRows="10"
                                fieldName="aboutMe"
                                labelText=""
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
                <Button
                    variant="outlined"
                    startIcon={< SaveAltIcon />}
                    type="submit"
                >Save Changes</Button>
            </form>
        </FormProvider>
        <BackPageButton
            buttonText='back'
            specifiedPath={`/admin/user/${id}`}
        />
    </>;
};