import React from 'react';


import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, signInWithGoogle} from '../firebase/firebase.utils.js'; 

import './sign-in.scss';



class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const{email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password:''})
        }catch(error){
            console.log(Error)
        }
        
    }
    handleChange= event =>{
        const {value, name}= event.target;
        this.setState({[name]: value})
    }
        render(){
          return(
            <div className='sign-in'>
             <h1>I already have an account</h1>
             <span>Sign in with your email and password</span>

             <form onSubmit={this.handleSubmit} >
                 <FormInput 
                 name='email' 
                 type='email' 
                 value={this.state.email}
                 label='email' 
                 handleChange={this.handleChange}
                  required />
                 <FormInput 
                 name='password' 
                 type='password' 
                 value={this.state.password}
                 label='password'
                 handleChange={this.handleChange}
                 required />
                 <div className='buttons'>
                    <CustomButton type='submit'>Sign In </CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                 </div>
             </form>
            </div>
            )
    }  
}
    
// isGoogleSignIn  for the Sign in with google button style to blue which its already in custom-buttom-style.scss

export default SignIn;