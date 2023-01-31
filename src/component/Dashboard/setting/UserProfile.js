import { Box,Button,Heading,Text,Divider,FormControl,
    FormLabel,
   Select,Textarea,Input,Image,Flex,ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,Switch,
   ModalCloseButton,useDisclosure,Modal} from "@chakra-ui/react"
   import { useState,useEffect } from "react"
   import axios from 'axios'
 import logo from '../../img/logo.jpg'
export default function UserProfile(){
  const { isOpen, onOpen, onClose } = useDisclosure()
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const config = {
  headers:{
    Authorization : `Bearer ${sessionStorage.getItem("token")}`
  }
}

useEffect(() => {
 getuser();
  },[]); 

const getuser = async () => {
  const url = "http://localhost:8000/api/auth/user-profile"
  const response = await axios.get(url,config)
  console.log(response.data.name)
      // const a = response.data.data[0].sale_date
     setName(response.data.name)
     setEmail(response.data.email)
     setPassword(response.data.password)
  }


const UpdateUser =  async (e) => {
  e.preventDefault();
        
  const form = new FormData();
  form.append('name', name)
  form.append('email', email)
  form.append('password', password)
 


}



    return<>
    <Box m="8" mt="50" h="25em" bgColor="#FBCA62" rounded="3em" w="18em"  shadow="xl">
    <Box m="8" p="2" textAlign={'center'}>
        <Heading mt="2" fontSize={'xl'}>User Profile</Heading>
        <Box  mb="2" display="flex" justifyContent={'center'}>
        <Image src={logo} w="16" h="16" objectFit={'cover'} rounded="full" mt="5" border="2px solid white"/>
        </Box>
       <Heading fontSize={'lg'}>{name}</Heading>
       <Heading fontSize={'lg'} my="2">{email}</Heading>

       <Heading fontSize={'lg'} my="2">Kediri</Heading>
      
    <Button mt="20" onClick={onOpen}> Update Profile</Button>
    

</Box>
</Box>

   
<Modal onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent>
    <form onSubmit={UpdateUser}>
    <ModalHeader>Update User</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
<FormLabel>Nama </FormLabel>
<Input value={name} onChange={(e) => {setName(e.target.value)}}/>
<FormLabel>Email</FormLabel>
<Input value={email} onChange={(e) => {setEmail(e.target.value)}}/>

    </ModalBody>
    <ModalFooter>
  
      <Button type="submit">Submit</Button>
      
    </ModalFooter>
    </form>
  </ModalContent>
</Modal>
    
    </>
}