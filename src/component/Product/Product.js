import {
    Image,
    Input,Button,
    Text,
      Box,
    
    
    } from '@chakra-ui/react'
 import { Heading } from '@chakra-ui/react';
 // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

import img from '../img/hp.jpg' 
 import useAxios from '../Axios/Axios';

export default function Product({submitCart,items}) {

    return ( 
    <>
    
    <Box  m={'8'} className={'flashSale'} >
    
        <Heading   my="4" me={'2'}fontSize={'xl'}>Lainnya :</Heading>
      

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
          spaceBetween:5

        },
      }}
    >
    
     
    


                {items.map((item) => (
                    <SwiperSlide  >
                   <a href={`product/${item.id}`}>
                   <Box class="swiperItem" display={'flex'} justifyContent={'space-between'} flexDirection="column" key={item} shadow='lg' w={'15em'} borderWidth='1px' h="20em"  rounded="xl"> 
                    <Box className='imgContainer'>
                    <Image src={`http://localhost:8000/storage/${item.foto}`} alt="gambar"  w="100%" roundedTop={'xl'}/>
                    </Box>
                    <Box  mx={'4'}>
                    <Heading   fontSize='md'>{item.name}</Heading>
                    <Text as='del' mt="2" fontSize='sm' color="red">Rp3,000,000</Text>
                    <Heading fontSize={'md'} >{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(item.harga)}</Heading>
                    
                    </Box>
                    <form onSubmit={submitCart}>
            <Input name='product' value={item.id} type="hidden"/>
            <Input name='user' value={item.id} type="hidden"/>
          <Input type='submit' value="Tambahkan ke Cart" cursor={'pointer'} bgColor="red.500" color={'white'}></Input>
          </form>

                    </Box>
                    </a>
                
                    </SwiperSlide>
                    ))}
               

                </Swiper>
                </Box>
        </>

        
        )
}
