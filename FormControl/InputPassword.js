import { ErrorMessage, Field } from 'formik';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import React from 'react';


const InputPassword = ({ name, disabled, ref, id, autoFocus, label, required = true }) => {
    const [hidePass, setHidePass] = useState(false)
    return (
        <div className="relative w-full group z-0">
            <Field autoFocus={autoFocus} type={hidePass ? 'text' : 'password'} name={name} id={id} disabled={disabled} ref={ref} className="block p-2 w-full text-sm  rounded text-gray-700 bg-transparent border-[1.5px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#6D6DA4] peer" placeholder=" " />
            <label htmlFor={name} className="peer-focus:font-medium absolute text-gray-400  font-normal text-sm duration-300 transform -translate-y-4 scale-75 top-2 left-2 bg-skin-fill-outlet peer-focus:text-gray-800 z-10 origin-[0] peer-focus:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[18px]">{label} {required === true ? <span className={`text-red-500`}>*</span> : null}</label>
            <span onClick={() => setHidePass(!hidePass)} className='absolute right-2 top-2 cursor-pointer text-xl'>
                {hidePass ? <BsEye /> : <BsEyeSlash />}
            </span>
            <span className="text-red-500 text-sm"><ErrorMessage name={name} /></span>
        </div>
    );
}

export default InputPassword;
