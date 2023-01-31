import { Box,Heading,Text,  Table,Button,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,useDisclosure,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Input, FormLabel} from "@chakra-ui/react"
    import useAxios from '../../Axios/Axios';
    import axios from "axios";
 import { useState,useEffect } from "react";



export default function LayananOngkir(){

    const [items,setItems] = useState([])
    useEffect(()=>{
    Layanan()
    },[])
    
        const Layanan = async () =>{
            const response = await axios.get("http://localhost:8000/api/layanan-ongkir")
             setItems(response.data.data)
         }
    const { isOpen, onOpen, onClose } = useDisclosure()
const [name,setName] = useState("")
const [link,setLink] = useState("")
const [api,setApi] = useState("")


const AddPayment= async (e) => {
    e.preventDefault();
const form = new FormData()
form.append('nama', name)
form.append('link', link)
form.append('api', api)
await axios.post("http://localhost:8000/api/layanan-ongkir", form)
onClose()
Layanan()
// .then((response) => {
// console.log(response.data)
// })
// .catch((error) => {
//  console.log(error.response.data);
// })

}

const hapus = async (id) => {
    try { 
      await axios.delete(`http://localhost:8000/api/layanan-ongkir/${id}`);
    Layanan()
    }catch (error){
      console.log(error)
    }
}

    return<>
    <Box m="10" >
    <Box display="flex" justifyContent={'space-between'} alignItems={'baseline'} gap="8">
<Heading fontSize={'lg'}>Layanan Shipping</Heading>
<Button onClick={onOpen}>Tambah Layanan Shipping</Button>
</Box>
<TableContainer border="1px solid teal" rounded="xl" mt="2">
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>No</Th>
        <Th>Nama Layanan</Th>
        <Th>Api Key</Th>
        <Th>link Layanan</Th>
        <Th>Aksi</Th>
        
      </Tr>
    </Thead>
    <Tbody>
        {items.map((item,index) => (
            
 <Tr key={index}>
 <Td>{index + 1}</Td>
 <Td>{item.nama_layanan}</Td>
 <Td>{item.api_key}</Td>
 <Td ><a href={item.Link_layanan}>Masuk</a></Td>
 <Td ><Button variant={'solid'} colorScheme="red" onClick={()=>{hapus(item.id)}}>Hapus</Button></Td>
</Tr>

        ))}
     
    </Tbody>
  </Table>
</TableContainer>

</Box>



<Modal onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent>
    <form onSubmit={AddPayment}>
    <ModalHeader>Tambah Layanan</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
<FormLabel>Nama Layanan</FormLabel>
<Input value={name} onChange={(e) => {setName(e.target.value)}}/>
<FormLabel>Api Key</FormLabel>
<Input value={api} onChange={(e) => {setApi(e.target.value)}}/>
<FormLabel>Link Layanan</FormLabel>
<Input value={link} onChange={(e) => {setLink(e.target.value)}}/>


    </ModalBody>
    <ModalFooter>
  
      <Button type="submit">Submit</Button>
      
    </ModalFooter>
    </form>
  </ModalContent>
</Modal>
    
    
    </>
}