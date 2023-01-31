import { Box,
    Heading,
    Wrap,
    Image,
    Flex,
    Text,
    Button,
    WrapItem,Input} from "@chakra-ui/react" ;
    import img1 from '../Mall/mall1.jpg'     
    import img2 from '../Mall/mall2.jpg'     
    import img3 from '../Mall/mall3.jpg'
     // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation  } from 'swiper';
import useAxios from '../Axios/Axios';
import { Link } from "react-router-dom";
import BannerMall from "./BannerMall";
import img from '../img/hp.jpg' 
const  Card = ({submitCart,items}) => {
   
    
    return <>
    <div class="hot-promo">
    <Box my="3" >
        <Flex >
    <Heading mx={'8'} bgColor="#C10223" display={'inline'} fontSize={'xl'}  color="white" ps="12" py="1" pe="12" roundedTop={'xl'} h="8">Hot Promo</Heading>
    {/* <Box bgColor="#C10223" w="8" h="8" ms="-10" borderRadius={'full'}></Box> */}
    </Flex>
    <Flex className="mallWrapper" mx={'8'}   boxSizing="border-box" shadow={'xl'} bgColor="#C10223" rounded="xl" p="2" py="4" roundedTopLeft={'none'}>
    <BannerMall/>
   
<Box w="75%" boxSizing="border-box"  ps="6" display="flex" alignItems={'center'} justifyContent="center" >
<Swiper
 
 style={{

   
   
    
  }}

    //   spaceBetween={1}
    //   slidesPerView={4}
      
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
          slidesPerView: 4,
         

        },
      }}
    >
    
     
    


                {items.map((item) => (
                    <SwiperSlide  >
                   
                    <Box className="swiperItem" justifyContent={'space-between'} display={'flex'} flexDirection="column" bgColor="white" key={item} shadow='md' w={'13em'}  h="22em"  rounded="xl"  > 
                    <Box className='imgContainer'>
                    <Image src={`http://localhost:8000/storage/${item.foto}`} alt="gambar"  w="100%" roundedTop={'xl'} position="relative"/>
                    </Box>
                  
                    <Box position={'absolute'} top="0" color={'red'} bgColor={'#F7E518'} p="1" fontWeight={'bold'} roundedBottomEnd={'md'} roundedTopLeft="md" left="0">10% Off</Box>
                    <Link to={`product/${item.id}`}>
                    <Box  mx={'4'}>
                    <Heading   fontSize='md'>{item.name}</Heading>
                 
                    
                    
                    <Text as='del' mt="2" fontSize='sm' color="red">Rp2,600,000</Text>
                    <Heading fontSize={'md'} >{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(item.harga)}</Heading>
                    
                    </Box>
                    
                    
                    </Link>
                    <form onSubmit={submitCart} style={{ border: "2px solid #ECC94B",backgroundColor:"#ECC94B" }} >
            <Input name='product' value={item.id} type="hidden"/>
            <Input name='user' value={item.id} type="hidden"/>
          <Button type='submit' w={'full'} value="Tambahkan ke Cart" cursor={'pointer'} colorScheme={'yellow'} variant='solid' > Masukkan ke Cart</Button>
          </form>
                    </Box>
                   
                    </SwiperSlide>
                    ))}
               

                </Swiper>
                </Box>
                </Flex>
    </Box>
    </div>
    </>
}
export default Card