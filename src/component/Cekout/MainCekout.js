import { Box } from "@chakra-ui/react"
import Ongkir from './Ongkir'
import Order from "./Order"
import axios from 'axios'
import React, { useState,useEffect} from "react";
import Payment from "./Payment"
import Alamat from "./Alamat"
export default function MainCekout() {
    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(false)
    const [jne,setJNE] = useState([])
    const [tiki,setTiki] = useState([])
    const [kupon,setKupon] = useState([])
  
    useEffect(() => {
        setLoading(true)
        getItem()
        getJne()
        getTiki()
        getKupon()
      }, []);

      const getItem = async () =>{
        try {
        const  response = await axios.get("http://localhost:8000/api/checkout")
        setItems(response.data.data[0])
       
        }catch{
        }
      }

      
      const getJne = async () =>{
         const response = await axios.get("http://localhost:8000/api/jne")
          setJNE(response.data.data[0].costs)
      }
      const getTiki = async () => {
        const response = await axios.get("http://localhost:8000/api/tiki")
        setTiki(response.data.data[0].costs)
        };
      
      const getKupon = async () => {
        const response = await axios.get("http://localhost:8000/api/kupon")
        setKupon(response.data.data[0])
        setLoading(false)
        };
      

      
    return <>
    <Box m="8" shadow={'xl'}  boxSizing="border-box" roundedBottom={'lg'}>
    <Box display="flex"  justifyContent={'space-between'} >
        <Box>
            <Order data={items} loading={loading} />
            <Alamat/>

        </Box>
        <Box>
            <Ongkir jne={jne} tiki={tiki} data={items} cekout={getItem} loading={loading} />
            <Payment data={items} load={loading}/>
        </Box>
    </Box>
    
    </Box>

    </>
}