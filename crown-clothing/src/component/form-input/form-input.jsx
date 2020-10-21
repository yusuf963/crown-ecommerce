import React from 'react';
import './form-input-style.scss';


const FormInput =({ handleChange, label, ...otherProps })=>(
    <div className='group'>
     <input className='form-input' onChange={handleChange} {...otherProps} />
     {label ?(
          <label 
            className={`${
                otherProps.value ? 'shrink' : ''
                } form-input-label`}
            >
     {label}
         </label>
         ): null}
    </div>
)

// missing value.length as it was causing error
export default FormInput;