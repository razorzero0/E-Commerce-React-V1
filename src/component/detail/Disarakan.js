import {
    Image,
    Wrap,
    WrapItem,
    Text,
      Box,
      Button,
      Input,
      InputRightAddon,
      InputGroup,
      ButtonGroup,
      Container,
      Flex,
      HStack,
      IconButton,
    
    } from '@chakra-ui/react'
 import { Heading } from '@chakra-ui/react';
 // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';


 import useAxios from '../Axios/Axios';

const Disarankan = () =>{
    const {items} = useAxios('https://localhost:8000/api/product');

    return ( 
    <>
    <Box w="36em" >
    
        <Heading   my="4" me={'2'}fontSize={'xl'}>Lainnya di toko ini :</Heading>
      

<Swiper

      spaceBetween={3}
      slidesPerView={3}
      loop={true}
      pagination={{ clickable: true}}
      scrollbar={{ draggable: true }}
      
     
     
    breakpoints={{
    
      320: {
        slidesPerView: 2,
        spaceBetween:2

      },
      480: {
        slidesPerView: 2,
        spaceBetween:1

      },
  
      920: {
        slidesPerView: 3,
        spaceBetween:3

      },
    }}
    >



                {items.map((item) => (
                    <SwiperSlide  >
                   
                    <Box className="swiperItem" key={item}  shadow='md' w={'100%'} borderWidth='1px' h="410px"  rounded="xl"> 
                    <Image src={'https://image.tmdb.org/t/p/w500/' + 
          item.poster_path} alt="gambar"  w="100%" roundedTop={'xl'}/>
                
                    <Heading  p="2" fontSize='md'>{item.title}</Heading>
                    <Text p="2" mt={4}>{item.title}</Text>
                    
                    </Box>
                  
                    </SwiperSlide>
                    ))}
               

                </Swiper>
                </Box>
        </>

        
        )
}
export default Disarankan;