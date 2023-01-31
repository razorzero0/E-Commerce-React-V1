import { Box,Flex,Image,Heading,Text,Input, Button
   } from "@chakra-ui/react"
import img from '../1.jpg'
import Performance from './Performance'
import useUser from "../../Axios/AxiosUser";
import { useState,useEffect } from "react";
import axios from "axios";
import UserProfile from "../setting/UserProfile";
export default function MainHomeDashboard(){
    const date = new Date;
    console.log(date)
    const yy = date.getFullYear();
    const mm = date.getMonth() ;
    const dd = date.getDate();
    const [items,setItems] = useState([])
    const[nama,setNama] = useState("")
    const[alamat,setAlamat] = useState("")
    const[description,setDescription] = useState("")
    const[service,setService] = useState("")
    const [loading,setLoading] = useState(false)

useEffect(()=>{
    getItems()
},[])

const getItems = async () =>{
   
    try{
        const res = await axios.get('http://localhost:8000/api/toko')
        setItems(res.data.data[0])
       
        
       

    }catch(err){
        setLoading(false)
        console.log(err)
    }
}
const addToko = async () =>{
    setLoading(true)
    try{
        const form = new FormData()
        form.append('nama',nama  ? nama : items.nama)
        form.append('alamat',alamat ? alamat : items.alamat)
        form.append('description',description ? description : items.description)
        form.append('service',service ? service : items.service)
        form.append('_method',"put")
        await axios.post('http://localhost:8000/api/toko/1',form)
        setLoading(false)

    }catch(err){
        console.log(err)
       
    }
}


    return <>
<Box minH={'100vh'} shadow="2xl" display="flex" ms="12em" w="85%" rounded="3em" bgColor={'white'} zIndex="10" position="absolute" >
<Box m="10">
<Heading my={3}>Welcome Back Admin</Heading>

<Heading fontSize={'md'}>Toko Setting</Heading>
<Box w="40em" shadow={'lg'} p="3" rounded="xl">
   
        <Box my="3" w="100%">
            <Text mb="1"> Nama : </Text>
            <Input border="1px" boxSizing="border-box" p="2" rounded="sm" borderColor="gray.200"  w="100%" onChange={(e)=>setNama(e.target.value)} defaultValue={items.nama}/>
        </Box>

        <Box my="3" w="100%">
            <Text mb="1"> Alamat : </Text>
            <Input border="1px" boxSizing="border-box" p="2" rounded="sm" borderColor="gray.200" w="100%" onChange={(e)=>setAlamat(e.target.value)} defaultValue={items.alamat}/>
            </Box>
        
        <Box my="3" w="100%">
            <Text mb="1"> Deskripsi : </Text>
            <Input border="1px" boxSizing="border-box" p="2" rounded="sm" borderColor="gray.200" w="100%" onChange={(e)=>setDescription(e.target.value)} defaultValue={items.description}/>
            </Box>
       
        <Box my="3" w="100%">
            <Text mb="1"> Terms & Services : </Text>
            <Input border="1px" boxSizing="border-box" p="2" rounded="sm" borderColor="gray.200" w="100%" onChange={(e)=>setService(e.target.value)} defaultValue={items.service}/>
            </Box>
      {loading ? <Button isLoading></Button> : <Button variant={'solid'} colorScheme="facebook" onClick={addToko}> Save</Button>} 

</Box>
</Box>
<Performance/>
{/* <UserProfile/> */}
    </Box>
    
    </>
}