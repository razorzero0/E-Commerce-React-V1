import { Heading,Box,Flex, Button,Text,Image } from "@chakra-ui/react"
import { FiStar } from "react-icons/fi"
import Disarankan from "./Disarakan";
export default function Ulasan() {
   
 return <>
<Box my="4" borderBottom={'2px'} borderColor="gray.300">
<Flex alignItems={'baseline'} justifyContent="space-between">
   <Heading fontSize={'2xl'}>Ulasan Pembeli</Heading> 
   <Button variant="ghost"><Heading fontSize={'lg'} color="green.700">Lihat Semua</Heading></Button>
</Flex>
<Flex alignItems={'center'}>
  <Text  fontSize={'2xl'} ><FiStar color="yellow" fill="yellow" border="1px"/></Text> &nbsp; <b>4.9</b><Text 
color="gray.500"> &nbsp; rata-rata 10. ribu rating . 100 ulasan</Text>
    </Flex>
<Box my="4">
    <Flex>
    <Image src='https://bit.ly/dan-abramov' w="10" rounded="full"></Image>
    <Heading mx="3" fontSize={'lg'}> Yayan</Heading>

    </Flex>
    <Box my="2">
        <Flex alignItems={'center'}>
           
        <FiStar fill="yellow" color="yellow"/>
        <FiStar fill="yellow" color="yellow"/>
        <FiStar fill="yellow" color="yellow"/>
        <FiStar fill="yellow" color="yellow"/>
        <FiStar fill="yellow" color="yellow"/>
&nbsp; <Text color='gray.500'>1 Bulan Yang lalu</Text>
        </Flex>
        <Text color='gray.500'>Varian Black</Text>
    </Box>
    <Text>
    Don't know the method of converting an object to string in JavaScript? No worries! This write-up will explain different ways for an object to string conversion.

    </Text>

</Box>

</Box>
<Disarankan/>

    </>
}