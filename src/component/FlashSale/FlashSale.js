import {
    Image,
   
    Text,
      Box,
     Button,
      Flex,
      Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,Input
    } from '@chakra-ui/react'
 import { Heading } from '@chakra-ui/react';
 import { AiFillFire } from "react-icons/ai";
 // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation  } from 'swiper';
import Timer from './Timer';
import { useState } from 'react';
import {
useHistory,Link
} from "react-router-dom";
import axios from 'axios';
// Import Swiper styles
import 'swiper/css';


 import useAxios from '../Axios/Axios';
 import img from '../img/hp.jpg' 

export default function FlashSale({submitCart,items}) {



    const history = useHistory();



    return ( 
    <>
    <Box  m={'8'} className={'flashSale'} bgColor={'#C10223'} p="2" pb="4" rounded="xl">
    <Flex  my={'2'} color={'red'} alignItems="baseline" >
        <Heading  me={'2'}fontSize={'xl'} color={'#F7E518'}>Flash Sale :</Heading>
        <Text color="white"> Berakhir Dalam : &nbsp;</Text>
<Timer/>

</Flex>

<Swiper

     
      
      loop={true}
      pagination={{ clickable: true,type: "bullets" }}
      scrollbar={{ draggable: true }}
      
      breakpoints={{
      
        320: {
          slidesPerView: 2,
          spaceBetween:2

        },
        480: {
          slidesPerView: 2,
          spaceBetween:5

        },
    
        920: {
          slidesPerView: 5,
          spaceBetween:6

        },
      }}
    >
    
     
    

<Box display={'flex'} justifyContent="center">
                {items.map((item) => (
                    <SwiperSlide  >
                    <Box position="relative"  ms="1" bgColor={'white'} className="swiperItem" key={item} shadow='md' w={'15em'}  h="20em"  rounded="xl"> 
                    <Box className='imgContainer'>
                    <Image src={`http://localhost:8000/storage/${item.foto}`} alt="gambar" h="100%"  w="100%" roundedTop={'xl'}/>
                    </Box>
                    <Box position={'absolute'} top="0" color={'red'} bgColor={'#F7E518'} p="1" fontWeight={'bold'} roundedBottomEnd={'md'} roundedTopLeft="md" left="0">20% Off</Box>
                    <Link to={`product/${item.id}`}>
                    <Box  mx={'4'}>
                    <Heading   fontSize='md'>{item.name}</Heading>
                    <Text as='del' mt="2" fontSize='sm' color="red">Rp2,800,000</Text>
                    <Heading fontSize={'md'} >{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(item.harga)}</Heading>
                    
                    </Box>
                    </Link>
                    <Box  mt={2}>
                    <Flex alignItems={'center'} justifyContent="center" gap="1" color={'red'}>
          terjual : {item.id * 10} <AiFillFire />
        
          </Flex>
      <Slider aria-label='slider-ex-6' defaultValue={item.id * 10}   isReadOnly size="lg" colorScheme={'red'}>
       
        <SliderMark
          defaultValue={30}
          textAlign='center'
          
          color='red'
          mt='-10'
          ml='-10'
          w='10'
        >
          
          
        </SliderMark>
        <SliderTrack >
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={1} colorScheme="red"/>
      </Slider>
      
    </Box>
                
                    </Box>
                   
                    </SwiperSlide>
                    ))}
               </Box>

                </Swiper>
                </Box>
        </>

        
        )
}
