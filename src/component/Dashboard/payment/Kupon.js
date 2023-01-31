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


export default function Kupon(){

    const [items,setItems] = useState([])
    useEffect(()=>{
    Kupon()
    },[])
    
        const Kupon = async () =>{
            const response = await axios.get("http://localhost:8000/api/kupon")
             setItems(response.data.data)
         }
    const { isOpen, onOpen, onClose } = useDisclosure()
const [name,setName] = useState("")
const [diskon,setDiskon] = useState("")


const AddDiskon = async (e) => {
    e.preventDefault();
const form = new FormData()
form.append('nama', name)
form.append('diskon', diskon)
await axios.post("http://localhost:8000/api/kupon", form)
onClose()
Kupon();
// .then((response) => {
//     onClose()
// })
// .catch((error) => {
//  console.log(error.response.data);
// })

}
const hapus = async (id) => {
    try { 
      await axios.delete(`http://localhost:8000/api/kupon/${id}`);
    Kupon()
    }catch (error){
      console.log(error)
    }
}

    return<>
    <Box m="10" >
    <Box display="flex" justifyContent={'space-between'} alignItems={'baseline'} gap="8">
<Heading fontSize={'lg'}>List Kupon</Heading>
<Button onClick={onOpen}>Tambah Kupon</Button>
</Box>
<TableContainer border="1px solid teal" rounded="xl" mt="2">
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>No</Th>
        <Th>Nama Layanan</Th>
        <Th>Diskon (%)</Th>
        <Th>Aksi</Th>
        
      </Tr>
    </Thead>
    <Tbody>
        {items.map((item,index) => (
            
 <Tr key={index}>
 <Td>{index + 1}</Td>
 <Td>{item.nama_coupon}</Td>
 <Td >{item.jumlah_diskon} %</Td>
 <Td ><Button variant={'solid'} colorScheme="red"onClick={()=>{hapus(item.id)}}>Hapus</Button></Td>
</Tr>

        ))}
     
    </Tbody>
  </Table>
</TableContainer>

</Box>



<Modal onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent>
    <form onSubmit={AddDiskon}>
    <ModalHeader>Tambah Kupon</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
<FormLabel>Nama Kupon</FormLabel>
<Input value={name} onChange={(e) => {setName(e.target.value)}}/>
<FormLabel>Jumlah Diskon (%)</FormLabel>
<Input value={diskon} onChange={(e) => {setDiskon(e.target.value)}}/>


    </ModalBody>
    <ModalFooter>
  
      <Button type="submit">Submit</Button>
      
    </ModalFooter>
    </form>
  </ModalContent>
</Modal>
    
    
    </>
}