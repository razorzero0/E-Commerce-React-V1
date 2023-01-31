import { Box,Heading,Text,  Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
  
    TableContainer,useDisclosure,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,Input, FormLabel} from "@chakra-ui/react"
    import axios from "axios";
 import { useState,useEffect } from "react";
export default function Category()  {

  const [items,setItems] = useState([])

  useEffect(()=>{
  getCategory()
  },[])
  
      const getCategory = async () =>{
          const response = await axios.get("http://localhost:8000/api/category")
           setItems(response.data.data)
       }
  const { isOpen, onOpen, onClose } = useDisclosure()
const [name,setName] = useState("")


const AddCategory = async (e) => {
  e.preventDefault();
const form = new FormData()
form.append('name', name)
await axios.post("http://localhost:8000/api/category", form)
onClose()
getCategory();
// .then((response) => {
//     onClose()
// })
// .catch((error) => {
//  console.log(error.response.data);
// })

}
const hapus = async (id) => {
  try { 
    await axios.delete(`http://localhost:8000/api/category/${id}`);
  getCategory()
  }catch (error){
    console.log(error)
  }
}

    return<>
    <Box m="10" >
    <Box display="flex" justifyContent={'space-between'} alignItems={'baseline'}>
<Heading fontSize={'lg'}>List Category</Heading>
<Button onClick={onOpen}>Tambah Category</Button>
</Box>
<TableContainer border="1px solid teal" rounded="xl" mt="2">
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>No</Th>
        <Th>Nama Category</Th>
        <Th> Action</Th>
      </Tr>
    </Thead>
    <Tbody>
        {items.map((item,index) => (
            
 <Tr key={index}>
 <Td>{index + 1}</Td>
 <Td>{item.name}</Td>
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
    <form onSubmit={AddCategory}>
    <ModalHeader>Tambah Category</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
<FormLabel>Nama Category</FormLabel>
<Input value={name} onChange={(e) => {setName(e.target.value)}}/>
    </ModalBody>
    <ModalFooter>
  
      <Button type="submit">Submit</Button>
      
    </ModalFooter>
    </form>
  </ModalContent>
</Modal>
    
    
    </>
}