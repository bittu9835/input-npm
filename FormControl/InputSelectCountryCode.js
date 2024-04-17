import { Field } from 'formik';
import React from 'react';


const InputSelectCountryCode = ({ name, disabled = false, ref, id, autoFocus, label, Array, required = true, isCorner = false }) => {
    return (
        <div className="relative z-0 w-full group">
            <Field
                id={id}
                name={name}
                as="select"
                disabled={disabled}
                className={`block p-2 w-full text-sm  rounded ${isCorner ? 'rounded-r-none' : ''} text-gray-500 bg-transparent border-[1.5px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#6D6DA4] peer"`}>
                {Array?.map((item) => (<option key={item?.code} value={item?.dial_code}>{item?.flag} {item?.dial_code}</option>))}
            </Field>
            <label htmlFor={label} className='peer-focus:font-medium absolute text-gray-400 peer-focus:text-gray-800 font-normal text-sm duration-300 transform -translate-y-4 scale-75 top-2 left-2 bg-skin-fill-outlet  z-10 origin-[0] peer-focus:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[18px]'>{label} {required === true ? <span className={`text-red-500`}>*</span> : null}</label>
        </div>
    );
}

export default InputSelectCountryCode;
