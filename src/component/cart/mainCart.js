import NavBar from '../Layout/Navbar'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,Image,
    Td,
    TableCaption,
    TableContainer,Box,Button,Input,useDisclosure,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import useAxios from '../Axios/Axios';
  import {FiPlus,FiMinus} from 'react-icons/fi'
  import React, { useState,useEffect } from 'react';
  import { useHistory } from 'react-router';
  import axios from 'axios';
  import Swal from 'sweetalert2'
  import withReactContent from 'sweetalert2-react-content'
  import img from '../img/hp.jpg'
  
 
export default function MainCart(){
    const [items, setUser] = useState([]);
 
   
    useEffect(() => {
      getUsers();
    },[]);
   
    const getUsers = async () => {
      const response = await axios.get("http://localhost:8000/api/cart");
      setUser(response.data.data);
    }
    // const {items} = useAxios('http://localhost:8000/api/cart')
    
    // const [value, setValue] = useState(1)
    // const [stock, setStock] = useState(10)
    // const [harga, setHarga] = useState(10000)
    // const [totalHarga, setTotalHarga] = useState(harga)
    // const { isOpen, onOpen, onClose } = useDisclosure()
    

  const history = useHistory();


const onSubmit = async (e) =>{
    e.preventDefault();
    console.log("Aa")
    try{
    const quantity = e.target.quantity.value
    const user_id = e.target.user_id.value
    const product_id = e.target.product_id.value
    const harga = e.target.harga.value
    const form = new FormData();
    form.append('user_id', user_id)
    form.append('product_id', product_id)
    form.append('jumlah', quantity)
    form.append('total_harga', harga * quantity)
    form.append('diskon', '0')
    form.append('tipe', 'white')
   
      await axios.post(`http://localhost:8000/api/checkout`, form)
      history.push('/checkout')
    }catch(err){
      console.log(err)
    }
  }
  const min = (quantity,id) => {
  try{
    const form = new FormData();
        form.append("quantity",quantity - 1)
        form.append("_method","put")
        axios.post(`http://localhost:8000/api/cart/${id}`,form)
        getUsers()
        }catch{

        }
  }
  const plus = async (quantity,id) => {
        try{
        const form = new FormData();
            form.append("quantity",quantity + 1)
            form.append("_method","put")
            axios.post(`http://localhost:8000/api/cart/${id}`,form)
            getUsers()
            }catch{

            }

      

  }

  const alert = () =>{
    Swal.fire(
    {
      icon: 'success',
  title: 'Cart berhasil dihapus',
    }
    )
  }

  const hapus = async (id) => {
try { 
  alert()
  await axios.delete(`http://localhost:8000/api/cart/${id}`);
getUsers()
}catch (error){
  console.log(error)
}
  
 
    
  };
    return <>
    
    <NavBar/>
<Box >
    <Box mt={36}  >
    <TableContainer>
  <Table variant='striped' colorScheme='orange'>
    <Thead>
      <Tr border={1} borderCol="red.500" textAlign={'center'}>
        <Th>foto</Th>
        <Th>Nama Product</Th>
        <Th>Harga / produk</Th>
        <Th >Kuantity</Th>
        <Th>Checkout</Th>
        <Th>Hapus</Th>
      </Tr>
    </Thead>
    <Tbody>
        {items.slice(0).reverse().map((item) => (
   <Tr key={item}>
   <Td><Image src={`http://localhost:8000/storage/${item.foto}`} w="60px">
    </Image></Td>
   <Td>{item.name}</Td>
   <Td>{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(item.harga)}</Td>
  
   <Td >
   
   <Button  minHeight={'100%'} onClick={()=>min(item.quantity,item.id)}><FiMinus/></Button>
        <Input type="number" value={item.quantity} textAlign={'center'} 
        w={'33%'}  minHeight="100%" rounded={'none'} name="quantity"/>
                 <Button  minHeight="100%" onClick={()=>plus(item.quantity,item.id)}><FiPlus/></Button>
        
        </Td>
   <Td >
   <form onSubmit={onSubmit} >
            <Input value={item.user_id} name="user_id" type={'hidden'}/>
        <Input value={item.product_id} name="product_id" type={'hidden'}/>
        <Input value={item.quantity} name="quantity" type={'hidden'}/>
        <Input value={item.harga} name="harga" type={'hidden'}/>
            <Button type='submit' variant="solid" colorScheme={'green'}> Checkout</Button>
   </form>
   </Td>
            <Td>
              
                <Input name='cart_id' value={item.id} type="hidden"/>
                <Button type='submit' onClick={()=>{hapus(item.id)}} variant={'solid'} colorScheme="red">Hapus</Button>
                               
            </Td>
  
 </Tr>
        ))}
   
     

    </Tbody>
    
  </Table>
</TableContainer>
    </Box>
    </Box>
    </>
} 