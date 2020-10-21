import React from 'react';

import './sign-in-up.scss';

import SignIn from './sign-in';
import SignUp  from '../signUp-component/signUp'

const SignInAndSignUpPage = ()=>(
    <div className='sign-in-and-sign-up'>

    <SignIn/>
    <SignUp/>
    </div>
)



export default SignInAndSignUpPage;