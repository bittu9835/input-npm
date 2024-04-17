import { ErrorMessage, Field } from 'formik';
import React from 'react';

const InputText = ({ name, disabled, ref, id, autoFocus = false, label, required = true, isCorner = false }) => {
    return (
        <div className="relative z-0 w-full group">
            <Field autoFocus={autoFocus} type='text' name={name} id={id} disabled={disabled} ref={ref} className={`block p-2 w-full text-sm  rounded ${isCorner ? 'rounded-l-none' : ''} text-gray-500 bg-transparent border-[1.5px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#6D6DA4] peer" placeholder=" `} />
            <label htmlFor={name} className='peer-focus:font-medium absolute text-gray-400  font-normal text-sm peer-focus:text-gray-800 duration-300 transform -translate-y-4 scale-75 top-2 left-2 bg-skin-fill-outlet  z-10 origin-[0] peer-focus:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[18px]'>{label} {required === true ? <span className={`text-red-500`}>*</span> : null}</label>
            <span className="text-red-500 text-sm"><ErrorMessage name={name} /></span>
        </div>
    );
}

export default InputText;