
import { Collapse,Spinner, Box,Flex,Button, Image,  Heading,Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { FiStar } from "react-icons/fi"
import Ulasan from "./Ulasan"
import React, { useState } from "react"
import logo from '../img/logo.jpg'
import parse from 'html-react-parser'
export default function Deskripsi(props){
  const item = props.data;
 
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)


  const a = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(item.harga);
    return <>
    <Box flex={2}    pb={'5'} >

      <Box borderBottom="2px" borderBottomColor={'gray.200'} >
      <Heading fontSize={'xl'} mx={4}>{item.name}</Heading>
        <Heading fontSize={'3xl'} mx={4}>{props.loading === true ? <Spinner color="red.400"/> : a}</Heading>
    <Tabs>
  <TabList>
    <Tab>Detail</Tab>
    <Tab>Spesifikasi</Tab>
    <Tab>Info Penting</Tab>
  </TabList>

  <TabPanels>
    <TabPanel >
    <Collapse  startingHeight={'10em'} in={show}>
   {item.description ? parse(item.description) : parse('<a></a>')}
      </Collapse>
      <Flex justifyContent={'center'}>
      <Button  textAlign={'center'} size='sm' onClick={handleToggle} mt='1rem'>
        Show {show ? 'Less' : 'More'}
      </Button>
      </Flex>
    </TabPanel>
   
  </TabPanels>
</Tabs>
</Box>
<Box  mt="4" borderBottom={'2px'} borderColor="gray.300">
<Flex gap="2">
  <Image src={logo} w="40"  rounded="full"></Image>
  <Box>
    <Heading fontSize={'xl'} mb="2">Gramedia Mobile Store</Heading>
    <Text color="green.500"  fontWeight={'bold'}>.Online</Text>
    <Text color="gray.400">Kota Kediri</Text>
    
  </Box>
</Flex>
{/* <Flex  my="5" justifyContent={'space-between'} alignItems="center">
  <Flex alignItems={'center'}>
  <FiStar border="1px"/> &nbsp; <b>4.9</b><Text 
color="gray.500"> &nbsp; rata-rata ulasan</Text>
    </Flex>
<Button justifySelf={'flex-end'} variant={'outline'} border="2px" borderColor={'blue'} rounded="xl"> Follow</Button>
</Flex> */}
</Box>
{/* <Ulasan/> */}

</Box>
    
    </>
}