import Sidebar from "../Sidebar"
import { Box } from "@chakra-ui/react"
import Payment from "./Payment"
import Kupon from "./Kupon"
import Layanan from "./LayananOngkir"
import axios from 'axios'
import React, { useState,useEffect} from "react";
export default function MainPayment()  {
// const [payment,setPayment] = useState([])

// useEffect(()=>{
// Payment()
// },[])

//     const Payment = async () =>{
//         const response = await axios.get("http://localhost:8000/api/payment-gateway")
//          setPayment(response.data.data[0])
//      }

    return<>
    <Box position="relative">
<Sidebar/>
<Box minH={'100vh'} shadow="2xl" display="flex" ms="12em" w="85%" rounded="3em" bgColor={'white'} zIndex="10" position="absolute" >
    <Box me="" >

<Payment />
<Kupon/>
<Layanan/>
</Box>
<Box >

</Box>
</Box>

    </Box>
    
    
    </>
}