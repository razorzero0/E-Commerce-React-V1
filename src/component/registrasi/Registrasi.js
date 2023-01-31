import { Box,Heading,Input,Button,FormLabel,FormControl,Alert,AlertIcon } from "@chakra-ui/react";

import { useState } from "react";
 import { useHistory } from "react-router-dom";
 import axios from "axios";


export default function Registrasi() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [validation,setValidation] = useState([]);

const history = useHistory();


 //function "registerHanlder"
 const registerHandler = async (e) => {
    e.preventDefault();
    
    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    //send data to server
    await axios.post('http://localhost:8000/api/auth/register', formData)
    .then(() => {

        //redirect to logi page
        history.push('/login');
    })
    .catch((error) => {
        console.log(JSON.parse(error.response.data));
        //assign error to state "validation"
        setValidation(JSON.parse(error.response.data));
    })
};



    return <>
    <Box display={'flex'} h="100vh" justifyContent="center" alignItems={'center'}>
    <Box shadow={'xl'} rounded="1em" h="70%" boxSizing="border-box" p="4" bgColor={'#52455C'} w="20em" textAlign={'center'} color="white">
            <Heading fontSize={'2xl'}>Register</Heading>
            
            <FormControl>
                <form onSubmit={registerHandler}>
  <FormLabel mt="3">Nama</FormLabel>
  <Input bgColor="white" color="black" value={name} onChange={(e) => setName(e.target.value)}/>
  {validation.name ? (
    
                                            <div>
                                             {validation.name[0]}
                                             </div>
                                           
                                          
                                        ) : ""}
                                        

  <FormLabel mt="3">Email</FormLabel>
  <Input bgColor="white" color="black" value={email} onChange={(e) => setEmail(e.target.value)}/>
  {validation.email && (
                                            <Alert status='error'>
                                            <AlertIcon />
                                            {validation.email[0]}
                                          </Alert>
                                                
                                           
                                        )}
  
  <FormLabel mt="3">Password</FormLabel>
  <Input bgColor="white" color="black" value={password} onChange={(e) => setPassword(e.target.value)}/>
  {validation.password && (
                                           <Alert status='error'>
                                           <AlertIcon />
                                           {validation.password[0]}
                                         </Alert>
                                        )}

  <Box display={'flex'}  justifyContent="center" mt={'12'}>
  <Button colorScheme={'gray'} type="submit" color="black" rounded="lg" mt="4">Submit</Button>
  </Box>
  </form>
</FormControl>
        </Box>
    </Box>
    </>
}