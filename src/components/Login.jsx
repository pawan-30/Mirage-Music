import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import { apiClient } from '../services/api-client';
export const Login = () => {
    const [message, setMessage] = useState('');
    const emailRef = useRef();
    const pwdRef = useRef();
    const doLogin = async()=>{
        const userInfo = {
            'email': emailRef.current.value,
            'password':pwdRef.current.value
        }
        try{
        const response = await apiClient.post(process.env.REACT_APP_LOGIN_URL, userInfo);
        setMessage(response.data.message);
        }
        catch(err){
            setMessage('Login Fails');
            console.log('Error Login ', err);
        }
    }
  return (
    <Container style={{marginTop:'140px',textAlign:'center',backgroundColor:'white',width:'30rem',height:'20rem'}}>
    
    <p style={{fontSize:'2rem'}}>{message}</p>
    <TextField inputProps={{ style: {color:'black',textAlign:'center',marginBottom:'2px'} }} inputRef = {emailRef} id="outlined-basic" label="Email" variant="outlined" />
    <br/>
    <br/>
    <TextField inputProps={{marginBottom:'2px'}} inputRef = {pwdRef} id="outlined-basic" type="password" label="Password" variant="outlined" />
    <br/>
    <br/>
    <Button onClick={doLogin} variant="contained" className='btn btn-success'>Login</Button>
    </Container>
  )
}
