import { Box,Text,Divider,Flex,Select,Image,Button,Spinner} from "@chakra-ui/react"
import axios from 'axios'
import React, { useState } from "react";
import img from './jne.jpg'
import img1 from './tiki.jpg'
export default function Ongkir(props) {
    const item = props.cekout
    const jne = props.jne
    const tiki = props.tiki
    const b = props.data.harga_ongkir
    const [ongkir,setOngkir] = useState([])
    const [totalHarga,setTotalHarga] = useState(sessionStorage.getItem('ongkir'))
    const [select,setSelect] = useState("")
    const [loading,setLoading] = useState(false)
    const [estimasi,setEstimasi] = useState("")

      const JNE = async (e) => {
        setOngkir(jne)
        setSelect('Jalur Nugraha Ekakurir (JNE)')
      }

      const Tiki = async (e) => {
        setOngkir(tiki)
        setSelect('Titipan Kilat (Tiki)')
      }


      const Handle = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
        const form = new FormData();
            form.append("harga_ongkir",totalHarga)
            form.append("estimasi",estimasi)
            form.append("_method","put")
          await axios.post("http://localhost:8000/api/checkout/1",form)
         item()
         setLoading(false)
        }catch{

        }
          
      }

      const a = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(b);


    
    return <>
    <Box w="40em" h="15em"  boxSizing="border-box" p="4" borderTop={'4px solid green '} rounded="lg">
      <Text my="1" fontWeight="bold"> Opsi Pengiriman :</Text>
      <Divider orientation='horizontal' />
        <Divider orientation='horizontal' />
        <Box my="2" mt="2">
            <Flex gap="2" my="2">
            <Image onClick={JNE} src={img} w="12"  border="1px "  borderColor="gray.300" rounded="xl"/>
            <Image onClick={Tiki} src={img1} w="12" border="1px "  borderColor="gray.300" rounded="xl"/>
            {/* <Image src={img2} w="12" border="1px "  borderColor="gray.300" rounded="xl"/> */}
            </Flex>
            <form onSubmit={Handle}>
        <Select placeholder={"Pilih Paket " + select } 
        // onClick={(e) => {setTotalHarga(e.target.value)}} 
        onClick={(e) => {setTotalHarga(e.target.value,) }}
        
        >
                {ongkir.map((item,i) => (
                <option key={i} value={item.cost[0].value} stedelec>
                    {item.service} | {item.description} | estimasi {item.cost[0].etd} hari | {item.cost[0].value}</option>
                ))}
</Select>
<Button mt="1" type='submit' colorScheme="green">Pilih Jasa Kirim</Button>
</form>

            
           
        
        {/* <Text fontSize={'sm'} mt="1"> akan tiba dalam {estimasi} hari</Text> */}
        </Box>
       
       
        {/* <Flex justifyContent={'space-between'} my="2" alignItems={'center'} >
            <Text>
                Pesan :
            </Text>
            <Input w="25em" placeholder="silahkan tinggalkan pesan..."/>
          
            
        </Flex> */}

        <Divider orientation='horizontal' />
        <Divider orientation='horizontal' />
        <Flex justifyContent={'space-between'} mt="2" alignItems={'center'} >
            <Text>
                Harga Ongkir :
            </Text>
            <Text  fontWeight={'bold'} fontSize={'LG'}>{loading ? <Spinner color="black.400"/> : a}</Text>
          
            
        </Flex>

    </Box>
    </>
}