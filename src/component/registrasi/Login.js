//import hook react
import React, { useState } from 'react';

import { Box,Heading,Input,Button,FormLabel,FormControl} from "@chakra-ui/react";

//import hook useHitory from react router dom
import { useHistory } from 'react-router-dom';

//import axios
import axios from 'axios';

function Login() {

    //define state
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //define state validation
    const [validation, setValidation] = useState([]);

    //define history
    const history = useHistory();

    //function "loginHanlder"
    const loginHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append('email', email);
        formData.append('password', password);

        //send data to server
        await axios.post('http://localhost:8000/api/auth/login', formData)
        .then((response) => {
            

            //set token on localStorage
            sessionStorage.setItem('token', response.data.access_token);

            //redirect to dashboard
            // window.location.reload();
            history.push('/profile');
            console.log(response.data.access_token);
        })
        .catch((error) => {
            console.log(error.response.data.error)
           setLoading(false)

            //assign error to state "validation"
            setValidation(error.response.data);

        })
    };

    return (<>
        <Box display={'flex'} h="100vh" justifyContent="center" alignItems={'center'}>
        <Box shadow={'xl'} rounded="1em" h="55%" boxSizing="border-box" p="4" bgColor={'#52455C'} w="20em" textAlign={'center'} color="white">
          
       <Heading fontSize={'2xl'}>Login</Heading>
            
            <FormControl>
                <form onSubmit={loginHandler}>
                                        

  <FormLabel mt="3">Email</FormLabel>
  <Input bgColor="white" color="black" value={email} onChange={(e) => setEmail(e.target.value)}/>
  {
                                    validation.email && (
                                        <div className="alert alert-danger">
                                            {validation.email[0]}
                                           
                                        </div>
                                    )
                                }
  
  <FormLabel mt="3">Password</FormLabel>
  <Input bgColor="white" color="black" value={password} onChange={(e) => setPassword(e.target.value)}/>
  {
                                    validation.password && (
                                        <div className="alert alert-danger">
                                            {validation.password[0]}
                                        </div>
                                    )
                                }
                                 {validation.error && (validation.error)}

  <Box display={'flex'}  justifyContent="center" mt={'12'}>
  {loading ? (<Button
    isLoading
    loadingText='Submitting'
    colorScheme='green'
    variant='solid'
  ></Button>) : (<Button colorScheme={'gray'} type="submit" color="black" rounded="lg" mt="4">Submit</Button>)} </Box>
  </form>
</FormControl>
        </Box>
       
    </Box>

    </>
    )

}

export default Login;