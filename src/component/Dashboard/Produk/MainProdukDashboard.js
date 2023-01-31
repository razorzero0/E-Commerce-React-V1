import { Box,Flex,Button,Image,Heading,Collapse, Spinner} from "@chakra-ui/react"
import { useState,useEffect  } from "react";
import useAxios from '../../Axios/Axios'
import TambahBarang from "./TambahBarang";
import tambahBarang from './TambahBarang'
import Swal from 'sweetalert2'

import axios from "axios";
export default function MainProdukDashboard(){
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)
    const [items,setItems] = useState([])
    const [category,setCategory] = useState([])
    const [loading,setCLoading] = useState(false)
   
      const alert = () =>{
        Swal.fire(
        {
          icon: 'success',
      title: 'Product berhasil dihapus',
        }
        )
      }
  useEffect(()=>{
  getProduct()
  getCategory()
  },[])
  
      const getProduct = async () =>{
          const response = await axios.get("http://localhost:8000/api/product")
           setItems(response.data.data)
       }
  
      const getCategory = async () =>{
          const response = await axios.get("http://localhost:8000/api/category")
           setCategory(response.data.data)
       }

     
      const hapus = async (id) =>{
        setCLoading(true)
          await axios.delete(`http://localhost:8000/api/product/${id}`)
          setCLoading(false)
          alert()
        getProduct()
      }
      
    return <>
<Box minH={'100vh'} shadow="2xl" display="flex" ms="12em" w="85%" rounded="3em" bgColor={'white'} zIndex="10" position="absolute" >
    <Box my="10" ms="10"  w="100em" >
<Heading >Your Product</Heading>
<Collapse  startingHeight={'45em'} in={show}>
<Box display={'flex'} flexWrap="wrap" gap="6" bgColor="white" mt="4"  boxSizing="border-box">  
    {items.map((item) => (
        <Box key={item} w="10em" shadow="xl" h="19em" rounded="2xl" >
            <Image src={`http://localhost:8000/storage/${item.foto}`}  alt="gambar"  w="100%" h={'60%'}/>
          <Box>{item.name}</Box>
<Button variant={'solid'} colorScheme="red" mt={'8'} onClick={()=>{hapus(item.id)}}>{loading ? <Spinner/> : "Hapus"}</Button>
</Box>

    ))}
    
    </Box>
    </Collapse>
      <Flex justifyContent={'center'}>
      <Button  textAlign={'center'} size='sm' onClick={handleToggle} mt='1rem'>
        Show {show ? 'Less' : 'More'}
      </Button>
      </Flex>

   
</Box>
<TambahBarang getProduct={getProduct} category={category}/>

    </Box>
    
    </>
}