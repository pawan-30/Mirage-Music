import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { apiClient } from '../services/api-client';
export const Register = () => {
    const [message, setMessage] = useState('');
    const emailRef = useRef();
    const pwdRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const doRegister = async ()=>{
        const userInfo = {
            'email': emailRef.current.value,
            'password': pwdRef.current.value,
            'name': nameRef.current.value,
            'phone': phoneRef.current.value,
        }
        console.log(userInfo);
        try{
        const response = await apiClient.post("/Register", userInfo);
        setMessage(response.data.message);
        console.log(response);
        console.log('Response is ', response);
        console.log('UserInfo ', userInfo);
        }
        catch(err){
            setMessage('Register Fail...');
            console.log('Error is ', err);
        }
    }
  return (
  
   <Container  style={{marginTop:'120px',textAlign:'center',backgroundColor:'white',width:'30rem',height:'30rem'}}>
    
    <p style={{fontSize:'2rem'}}>{message}</p>
    <br/>
    <TextField inputProps={{ style: {color:'black',marginTop:'2px'} }} inputRef = {emailRef} id="outlined-basic" label="Email" variant="outlined"  />
    <br/>
    <br/>
    <TextField inputRef = {pwdRef} id="outlined-basic" type="password" label="Password" variant="outlined"  inputProps={{ style: { color: 'black' } }}/>
    <br/>
    <br/>
    <TextField style={{ color:'white'}} inputRef = {nameRef} id="outlined-basic" label="Name" variant="outlined" />
    <br/>
    <br/>
    <TextField style={{ color:'black'}} inputRef = {phoneRef} id="outlined-basic" label="Phone" variant="outlined" />
    <br/>
    <br/>
    <Button onClick={doRegister} variant="contained" className='btn btn-info'>Register</Button>
   </Container>
  )
}
