import { Box,Text  } from "@chakra-ui/react"
import {BsGeoAlt} from "react-icons/bs";
export default function Alamat() {
return <>
<Box my="6" h="15em" rounded="lg" w="40em"  boxSizing="border-box" p="4" borderTop={'4px solid blue '} >
    <Box>
        <Text display="flex" alignItems={'center'} fontWeight="bold" mt="2"> <BsGeoAlt color="blue" />  &nbsp; Alamat Pengiriman :</Text>
<Text mt="1">Nama : Andryan</Text>
<Text mt="1">No. Hp : 0807827994</Text>
<Text mt="1">Kode Pos : 25638</Text>
<Text mt="2">Alamat : Jalan Kilisuci No 2 Gang Kelinci RT 05 RW 10 Desa Kelinci Kecamatan Kelinci Kota Kediri Jawa Timur (sebelahnya baratnya toko roti Haji Salim)</Text>
    </Box>
</Box>
</>
}