
import { Box,Flex, Heading, Input,Text,Button,  Select } from "@chakra-ui/react"
import {FiPlus,FiMinus} from 'react-icons/fi'
import { useState,useEffect} from "react"
import { useHistory } from 'react-router';
import axios from 'axios'
export default function Beli(props){

    const [value, setValue] = useState(0)
    const [stock, setStock] = useState(10)
    const [harga, setHarga] = useState('0')
    const [diskon, setDiskon] = useState('0')
    const [tipe, setTipe] = useState("black")
 
    const [totalHarga, setTotalHarga] = useState(harga)
   useEffect(()=>{
    setHarga(props.data.harga)
   })
    if (value < 1 || totalHarga < harga ) {
        setValue(1);
        setTotalHarga(harga)
        
    } 
    if (value > stock || totalHarga > harga*stock){
        setValue(stock)
        setTotalHarga(harga*stock)
    }

    const min = () => {
      setValue(value - 1)
      setTotalHarga(totalHarga - harga)

    }
    const plus = () => {
      setValue(value + 1)
      setTotalHarga(totalHarga + harga)
    }
const a = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(totalHarga);
    
  const history = useHistory();


  const CekOut =  (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('user_id', 1)
    form.append('product_id', props.data.id)
    form.append('jumlah', value)
    form.append('total_harga', totalHarga)
    form.append('diskon', diskon)
    form.append('tipe', tipe)
  axios.post('http://localhost:8000/api/checkout', form)
  .then((response) => {
  console.log(response.data);
  history.push('/checkout');
    })
    .catch((error) => {
      console.log(error.response.data)
      console.log(error.response.data)
    })
 
  }
    return <>
    <Box flex={1}>
      <form>
  <Box ms={4} position="fixed" bg="white"   border={'1px'} borderColor={'gray.100'} shadow='md' rounded={'xl'} h={'72%'} w="64" textAlign="center" p="1"> 
        <Heading fontSize={'xl'} m={5}>Atur jumlah Barang</Heading>
        <form>
            <Box mx="1rem" borderColor={'gray.200'}   my="4" mt="6" verticalAlign={'middle'}  
            rounded="xl"  >
            <Button  minHeight={'100%'} onClick={min}><FiMinus/></Button>
            <Input type="number" value={value} textAlign={'center'} w={'33%'} border="none" minHeight="100%" rounded={'none'} />
            <Button  minHeight="100%" onClick={plus}><FiPlus/></Button>
            </Box>
        </form>
        <Heading mx="1rem"  fontSize={'md'} mb="2">Total Stok : {stock}</Heading>
        <label mt="8" > Pilih Tipe</label>
           <Select placeholder='Tipe' my="1" onClick={(e)=>setTipe(e.target.value)}>
   <option value={props.data.tipe_1}>{props.data.tipe_1}</option>
   <option value={props.data.tipe_2}>{props.data.tipe_2}</option>

 </Select>
        <label mt="8" > Pilih Diskon</label>
           <Select placeholder='Pilih Diskon' my="1" onClick={(e)=>setDiskon(e.target.value)}>
   {!props.diskon ? <option >Belum ada diskon</option> : props.diskon.map((v,i)=>(
     <option value={v.jumlah_diskon}>{v.nama_coupon} | {v.jumlah_diskon} %</option>
   ))}
   
 </Select>

        <Flex justifyContent={'space-between'} w={'100%'} mt={'8'}>
        <Text color={'gray.500'} >Sub Total</Text>
        <Heading  mx={2}fontSize={'lg'}>{a}</Heading>
        
        </Flex>
        
        
        <Button type="submit" onClick={CekOut}mt={'3'} mb={'5'} colorScheme={'blue'} w={'100%'}>CheckOut</Button>
    </Box>
    </form>
    </Box>
   
      
    </>
}