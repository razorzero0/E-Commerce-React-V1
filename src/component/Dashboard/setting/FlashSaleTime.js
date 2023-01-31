import { Box,Heading,
    Tfoot,Checkbox ,
    Tr,Radio, RadioGroup,
    Stack,

    ModalBody,FormControl,Switch,
    ModalCloseButton,Button,Input, FormLabel} from "@chakra-ui/react"

    import useAxios from '../../Axios/Axios';
    import axios from "axios";
import DateTimePicker from 'react-datetime-picker';
import {useState,useEffect} from 'react'
import ListProductSale from "./ListProductSale";

export default function FlashSaleTime()  {
    const [value, onChange] = useState("");
    const [old,setOld] = useState("");
    const [status,setStatus] = useState("");
    console.log(status)


const url = ('http://localhost:8000/api/flashtime/1')
useEffect(() => {
    axios.get(url).then((response) => {
        const a = response.data.data[0].sale_date
        const b = a.substring(0,25)
      setOld(b + "(WIB)");
      console.log(b)
      console.log(status)
    });
  },[value]); 

   

    const Timer = async (e) => {
        e.preventDefault();
    console.log(status)
    const form = new FormData()
    form.append('sale_date', value)
    form.append('status', "1")
    form.append('_method', "put")
    await axios.post("http://localhost:8000/api/flashtime/1", form)
    
    .then((response) => {
    console.log(response.data)
    
    })
    .catch((error) => {
     console.log(error.response.data);
    })
    
    }



    return<>
    <Box m="10"  bgColor="" gap="8"display="flex" >
      <Box>
    <Box display="" gap="" alignItems={'baseline'}>
<Heading fontSize={'2xl'} >Flash Sale: </Heading>
<Box  >{old}</Box>
    </Box>

    <form onSubmit={Timer}>
    <Box w="100%" display="flex" me="12" flexDirection={'column'} justifyContent={'center'} mt="4"  rounded="xl"
    p="2" boxSizing="border-box" bgColor="#937DC2">
        <Heading fontSize={'xl'} my="2" color="white">Atur Waktu Flash Sale</Heading>
        
        
        <FormControl display='flex' alignItems='center' color="#EDF2F7">
        <RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='green' isChecked value='1' onChange={(e) => {console.log(e.target.value)}} defaultChecked={true}>
      On
    </Radio>
    <Radio colorScheme='red' value='0' onChange={(e) => {console.log(e.target.value)}}>
      Off
    </Radio>
  </Stack>
</RadioGroup>
</FormControl>
    <DateTimePicker onChange={onChange} value={value} color="white" />
    <Button my="2" type="submit">Terapkan</Button>
    </Box>
    </form>
    </Box>
    
    <ListProductSale/>
    </Box>
    
    
    </>
}