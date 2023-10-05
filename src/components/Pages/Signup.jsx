import React from 'react';
import { Box, FormControl, FormLabel, Input, Button,Text } from '@chakra-ui/react';
import { useNavigate,Link } from "react-router-dom";
import "./signup.css"
const Signup = () => {
    // const hnadleSubmit=()=>{
    //     dispatch(Postuser({email:input,password:pass}))
    //     if(user.token==undefined){
    //        alert("something went wrong try again using diffrent Email")
    //     }
    //     else{
    //        navigate("/login",{replace:true})
    //     }
    //  }  
  return (
    <Box id="main-iput-signup" style={{"width":"40%","margin":"auto","margin-top":"5%"}}>
      <h1>SIGN-UP</h1>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Name</FormLabel>
        <Input className='signup-input' type="text" placeholder="Enter your name" />
      </FormControl>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Email</FormLabel>
        <Input className='signup-input' type="email" placeholder="Enter your email" />
      </FormControl>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Mobile</FormLabel>
        <Input className='signup-input' type="number" placeholder="Enter your 10 digit Mobile NUmber" />
      </FormControl>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Password</FormLabel>
        <Input className='signup-input' type="password" placeholder="Enter your password" />
      </FormControl> 
      <Button colorScheme="green">Signup</Button>
      <Link to="/login"><Text id="regtxt" color={"blue"}>already have an account?</Text></Link>
    </Box>
  );
};

export default Signup;
