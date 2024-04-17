import React, { forwardRef, ForwardedRef, useImperativeHandle } from 'react';

const SubmitButton = forwardRef(
    ({ label }, ref) => {
        const buttonRef = React.useRef < HTMLButtonElement > (null);

        // Forward the ref to the underlying button element
        useImperativeHandle(ref, () => buttonRef.current);

        return (
            <button
                type='submit'
                ref={buttonRef}
                className='bg-skin-button-bgcolor py-1.5 text-skin-button-text px-2.5 rounded text-sm transition-all duration-300  hover:bg-opacity-20 border-secondary border'
            >
                {label ? label : 'SUBMIT'}
            </button>
        );
    }
);
export default SubmitButton;