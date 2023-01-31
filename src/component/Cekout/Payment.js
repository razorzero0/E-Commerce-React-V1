import { Box,Text,Flex,Divider,Button,Spinner  } from "@chakra-ui/react"
import axios from 'axios'
import React from 'react'
import {useState} from 'react'
export default function Payment({data,load}) {
  const [loading, setLoading] = useState(false)
const totals = data.total_harga + data.harga_ongkir;
const final = totals * data.diskon / 100
const potongan = totals - final

  const paying =  (e) => {
    setLoading(true)
    e.preventDefault()
    const form = new FormData();
    form.append("amount",(potongan))
axios.post("http://localhost:8000/api/order",form)
    .then((response) => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      window.snap.pay(`${response.data.data}`);
     
    })
  }
  
const produk = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(data.total_harga);
const Rpongkir = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(data.harga_ongkir);
const total = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(final);
const finals = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(potongan);
    

return <>
<Box my="6" rounded="lg" w="40em"  boxSizing="border-box" p="4" borderTop={'4px solid red'} h="15em">
  
    <Box>
        <Text mb="2"  fontWeight="bold">Payment :</Text>

        <Divider orientation='horizontal' />
        <Divider orientation='horizontal' />
        <Flex justifyContent="space-between" my="1">
          <Text > Total Produk</Text>
          <Text>{load === true ? <Spinner color="black.400"/> : produk}</Text>
        </Flex>
        <Flex justifyContent="space-between" my="1">
          <Text> Total Ongkir</Text>
          <Text>{load === true ? <Spinner color="black.400"/> : Rpongkir}</Text>
        </Flex>
        <Flex justifyContent="space-between" my="1">
          <Text> Potongan / Diskon</Text>
          <Text  as='del'>{load === true ? <Spinner color="black.400"/> : total}</Text>
        </Flex>
        <Divider orientation='horizontal' />
        <Divider orientation='horizontal' />
        <Flex justifyContent="space-between" my="1">
          <Text> Total Pembayaran </Text>
          <Text color="red.400" fontWeight={'bold'} fontSize={'xl'}>{load === true ? <Spinner/> :finals}</Text>
        </Flex>
        <Box display={'flex'} justifyContent="space-between" mt="3">
        <Button w="10em" variant="outline" colorScheme={'red'} h="3em" rounded="lg"  ><a href="/">Batal</a></Button>
        {loading ? (<Button
    isLoading
    loadingText='tunggu sebentar'
    colorScheme='red'
    variant='solid'
    h="3em"
  ></Button>) : (  <Button w="10em" id='pay-button' onClick={paying}  rounded="lg"  colorScheme={'red'} h="3em"> Buat Pesanan</Button>)} 
      
        </Box>
    </Box>
    
</Box>
</>
}