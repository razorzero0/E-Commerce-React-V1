import { Box,Heading,Text,  Table,
    Thead,
    Tbody,
    Tfoot,Checkbox ,
    Tr,Radio, RadioGroup,
    Th,
    Td,Stack,
    TableCaption,
    TableContainer,useDisclosure,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,FormControl,Switch,
    ModalCloseButton,Button,Input,Select, FormLabel} from "@chakra-ui/react"

    import useAxios from '../../Axios/Axios';
    import axios from "axios";
import DateTimePicker from 'react-datetime-picker';
import {useState,useEffect} from 'react'

export default function ListProductSale()  {
  const [product,setProduct] = useState([])
  const [Saleproduct,setSaleProduct] = useState([])
  const [items,setItems] = useState([])

useEffect(() => {
  getProduct()
  getItems()
  },[]); 

    const { isOpen, onOpen, onClose } = useDisclosure()


const getProduct = async () => {
  const response = await  axios.get('http://localhost:8000/api/product')
  setProduct(response.data.data);
}
const getItems = async () => {
  const response = await  axios.get('http://localhost:8000/api/flashproduct')
  setItems(response.data.data);
}

const AddProduct = async (e) => {
  console.log(Saleproduct)
const form = new FormData()
form.append('product', Saleproduct)
await axios.post("http://localhost:8000/api/flashproduct", form)
.then((response) => {
console.log(response.data)
onClose()
getItems()
})
.catch((error) => {
 console.log(error.response.data);
})
}
const hapus = async (id) => {
  try {
    console.log(id)
    await axios.delete(`http://localhost:8000/api/flashproduct/${id}`);
getItems()
  } catch (error) {
    console.log(error);
  }
};



    return<>
    <Box>
    <Box display="flex" gap="12" alignItems={'baseline'} mt="" justifyContent={'space-between'}>
<Heading fontSize={'xl'}>List Product FlashSale</Heading>
<Button onClick={onOpen}>Tambah Product</Button>
</Box>
<TableContainer border="1px solid teal" bgColor="white" color="black" rounded="xl" mt="2">
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>No</Th>
        <Th>Nama Product</Th>
        <Th> Action</Th>
      </Tr>
    </Thead>
    <Tbody>
        {items.map((item,index) => (
 <Tr >
 <Td key={index}>{index + 1}</Td>
 <Td>{item.name}</Td>
 <Td ><Button colorScheme={'red'} onClick={()=>hapus(item.id)}>Delete</Button></Td>
</Tr>

        ))}
     
    </Tbody>
  </Table>
</TableContainer>

    </Box>

    
<Modal onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent>
    
    <ModalHeader>Tambah Product Sale</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
<FormLabel>Nama Product</FormLabel>
<Select bgColor="white" onClick={(e)=>setSaleProduct(e.target.value)}>
{product.map((item,index) => (
<option key={index} value={item.id} >{item.name}</option>
))}
</Select>
    </ModalBody>
    <ModalFooter>
      <Button type="submit" onClick={()=>AddProduct()}>Submit</Button>

    </ModalFooter>
     
  </ModalContent>
</Modal>
    
    </>
}