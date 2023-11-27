import React, { useContext, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import SendIcon from '@mui/icons-material/Send';
import { MyButton } from '../Button';
import { MainContextContent } from '../Context';
import { useEffect } from 'react';

const Form1 = ({setShow}) => {

    const [value, setValue] = useState("")
    const showSecondForm = () => {
        setShow(true);
    };
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const formBoxes = [
        {
            name: "01",
            label: "I have been blocked from using a feature"
        },
        {
            name: "02",
            label: "My fanpage is restricted (not violate policy)"
        },
        {
            name: "03",
            label: "My ad account is disabled"
        },
        {
            name: "04",
            label: "I need help with a failed payment"
        },
        {
            name: "05",
            label: "I think someone accessed my business without my permission"
        },
        {
            name: "06",
            label: "Other issues"
        },
    ]
  return (
    <div>
           <b>Most common issues</b>
                <form action="" className='flex flex-col'>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            {
                                formBoxes.map((box) => (
                                    <FormControlLabel
                                    key={box.name}
                                        className='shadow-md p-2 rounded-lg my-2 text-gray-600 text-sm'
                                        value={box.name}
                                        control={<Radio size="small" />}
                                        label={<span className='text-[0.8rem]'>{box.label}</span>}
                                    />

                                ))
                            }
                        </RadioGroup>
                    </FormControl>
                    <div className='flex justify-end px-4 pt-2'>
                        <MyButton 
                        onClick={showSecondForm}
                        disabled={!value} 
                        variant="contained" 
                        endIcon={<SendIcon />} 
                        disableRipple>Next</MyButton>
                    </div>

                </form>
    </div>
  )
}

export default Form1