
import { Box,Flex,Image,Heading,Text,Input,Button
} from "@chakra-ui/react"
import UserProfile from "../setting/UserProfile"
import SidebarUser from "./SidebarUser"
import useUser from '../../Axios/AxiosUser'
import { useState,useEffect } from "react"
import axios from "axios"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
export default function MainUserHome() {
    const [items,setItems] = useState([])
    const [nama,setNama] = useState('')
const [email,setEmail] = useState('')
const [hp,setHp] = useState(0)
const [alamat,setAlamat] = useState('')
const [loading,setLoading] = useState(false)
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
            setItems(response.data)
            
         }


         const addUser = async () =>{
            setLoading(true)
            try{
                const form = new FormData()
                form.append('name',nama  ? nama : items.name)
                form.append('alamat',alamat ? alamat : items.alamat)
                form.append('email',email ? email : items.email)
                form.append('alamat',alamat ? alamat : items.alamat)
                form.append('hp',hp ? hp : items.hp)
                form.append('_method',"put")
                await axios.post('http://localhost:8000/api/user/1',form)
                setLoading(false)
        
            }catch(err){
                console.log(err)
               
            }
        }
        
       
    return<>
    <Box position="relative">
<SidebarUser admin={items.name} />
    <Box minH={'100vh'} shadow="2xl" display="flex" ms="12em" w="85%" rounded="3em" bgColor={'white'} zIndex="10" position="absolute" >
<Box m="10">
<Heading>Akun Setting</Heading>
<Box w="40em" shadow={'lg'} p="3" rounded="xl">
   
<Box my="3" w="100%">
            <Text mb="1"> Nama : </Text>
            <Input border="1px" boxSizing="border-box" p="2" rounded="sm" borderColor="gray.200"  w="100%" onChange={(e)=>setNama(e.target.value)} defaultValue={items.name}/>
        </Box>
<Box my="3" w="100%">
            <Text mb="1"> Email : </Text>
            <Input border="1px" boxSizing="border-box" p="2" rounded="sm" borderColor="gray.200"  w="100%" onChange={(e)=>setEmail(e.target.value)} defaultValue={items.email}/>
        </Box>
        
        <Box my="3" w="100%">
            <Text mb="1"> Nomer Handphone: </Text>
            <Input border="1px" boxSizing="border-box" p="2" rounded="sm" borderColor="gray.200" w="100%" onChange={(e)=>setHp(e.target.value)} defaultValue={items.hp}/>
            </Box>

        <Box my="3" w="100%">
            <Text mb="1"> Alamat : </Text>
            <ReactQuill
        theme='snow'
        defaultValue={items.alamat}
        onChange={setAlamat}
        style={{minHeight: '100px',background: "white"}}
      />
            </Box>
        
      
       
            {loading ? <Button isLoading></Button> : <Button variant={'solid'} colorScheme="facebook" onClick={addUser}> Save</Button>} 

</Box>
      


</Box>
<UserProfile/>

    </Box>
    </Box>
    
    </>
}