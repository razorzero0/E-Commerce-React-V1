import {
    Image,
      Box,
      Button,
      Input,
      InputRightAddon,
      InputGroup,
     
      HStack,
    
      useBreakpointValue,
      useColorModeValue,
      Menu,Text,
     
    MenuButton,
    MenuList,
    MenuItem,ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,FormLabel,
    ModalBody,Switch,
    ModalCloseButton,useDisclosure,Modal
    } from '@chakra-ui/react'
    import * as React from 'react'
    import { FiMenu,FiShoppingCart,FiSearch } from 'react-icons/fi'
    import logo from '../img/logo.jpg'
    import indo from '../img/indo.png'
    import {
     Link
      
    } from "react-router-dom";
  import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
  export default function Navbar()  {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const isDesktop = useBreakpointValue({ base: false, lg: true})
  const [data, setData] = useState([])

  useEffect(()=>{
getToko()
  },[])
  const getToko = async () =>{
const res = await axios.get('http://localhost:8000/api/toko')
setData(res.data.data[0])
  }
  return (
  <Box as="Navbar" className='Navbar'  bg={'white'} >
    <div  class="top-nav">
     <HStack  bgColor={'gray.200'} h="7" justifyContent={'space-between'} px="8" gap="12">
       <Text fontStyle={'italic'} color="gray.600" onClick={onOpen}>  Lihat profile toko kami</Text>
       <Text color="gray.600">
       <a href="https://wa.me/+6285731013100?text=I'm%20interested%20in%20your%20car%20for%20sale">Contact me</a>  

       </Text>
 
       <Box display={'flex'} gap="4" alignItems={'center'}>
       <Image
                        width='30px'
                        height={'20px'}
                        objectFit='cover'
                        src={indo}
                        alt='Dan Abramov'
                        
                    />
       <Text color="gray.600" fontSize={'sm'} >  Indonesia</Text>
       <Text color="gray.600" fontSize={'sm'}>  Rupiah</Text>
      
       </Box>
   

</HStack>
</div>
    
        <Box  as="nav" boxShadow={useColorModeValue('md', 'md-dark')}>
          <Box   py={{ base: '1', lg: '2' }}>
         
             
                <Box>
                 
                <HStack mx={'6'}   >
                    <Image
                        boxSize='50px'
                        objectFit='cover'
                        src={logo}
                        alt='Dan Abramov'
                        rounded={'lg'}
                    />
                  <InputGroup size='md' >
                    <Input placeholder='search ' w={'64em'} />
                    <Link to="#">
                    <InputRightAddon w={'12'} children={<FiSearch size={'md'}/>} />
                    </Link>
                </InputGroup>
                <Link to="cart" >
                <FiShoppingCart size={'20px'} ml="-20px"/>
                </Link>
              
                  
      <Link to="dashboard">  <Button variant={'outline'} colorScheme='blue' w={'24'} ml="4">Dashboard</Button></Link> 
         {/* <Button colorScheme='blue' w={'24'}>Daftar</Button> */}
                  <Menu>
    
         
    
    <MenuList>
      <MenuItem minH='48px'>
        
        <span>Fluffybuns the Destroyer</span>
  
      </MenuItem>
    </MenuList>
  </Menu>
 
                  </HStack>
                  <HStack justifyContent={'center'} display="flex">
                  <Box textAlign={'center'} color="gray.500"> Samsung</Box>
                  <Box textAlign={'center'} color="gray.500"> Xiaomi</Box>
                  </HStack>
                  </Box>
                  
               
             
           
          </Box>
        </Box>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent>
  
    <ModalHeader>Profile Toko {data.nama}</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
<FormLabel>Nama Toko</FormLabel>
<Text mb={'4'}>{data.nama}</Text>
<FormLabel>Alamat Toko</FormLabel>
<Text mb={'4'}>{data.alamat}</Text>
<FormLabel>Deskripsi Toko</FormLabel>
<Text mb={'4'}>{data.description}</Text>
<FormLabel>Terms & Services Toko</FormLabel>
<Text mb={'4'}>{data.service}</Text>



    </ModalBody>
  

  </ModalContent>
</Modal>
      </Box>
      
  
  )
  }