import React from 'react'
import RegisterInput from '../features/inputs/RegisterInput';
import { FormGroup, FormControlLabel } from '@material-ui/core';
import { Checkbox } from "@mui/material";
import { useState } from "react";

function InputWithCheckbox({ propName = "prop", labelText = "", password = false }) {
    const [checked, setchecked] = useState(false);
    const handleChange = () => {
        setchecked((preChecked) => !preChecked);
    };
    return <div className='item'>
        <div id='label'>
            <FormGroup row={true}>
                <FormControlLabel
                    label={`${propName}: ${labelText}`}
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                        />
                    }
                />
            </FormGroup>
        </div>
        {checked && <div id='input'>
            <RegisterInput
                propName={propName}
                labelText={propName}
                password={password}
            />
        </div>}
    </div>
}

export default InputWithCheckbox