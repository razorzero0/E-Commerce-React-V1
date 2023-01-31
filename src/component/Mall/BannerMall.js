import { Box,
    Heading,
    Wrap,
    Image,
    Flex,
    Text,
    Button,
    WrapItem} from "@chakra-ui/react" ;
    import img1 from '../img/banner1.jpg'     
    import img2 from '../img/banner2.jpg'     
    import img3 from '../img/banner3.jpg'
     // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation  } from 'swiper';
import useAxios from '../Axios/Axios';

// Import Swiper styles
import 'swiper/css';    
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
const BannerMall = () => {
const {items} = useAxios('http://localhost:8000/api/product');
return <>
<Box>
<Swiper
   
   style={{
    "--swiper-navigation-color": "#777",
    "--swiper-navigation-size": "25px",
    "width": "20em",
    "height": "22em"
    
  }}
  slidesPerView={1}
  navigation
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true,type: 'bullets' }}
  scrollbar={{ draggable: true }}
  modules={[Autoplay, Pagination, Navigation]}
  className="mall"
>
                <SwiperSlide className="swiperSlide" >
               <Image src={img1}  w="32em" rounded="xl" h="22em" ></Image>
                </SwiperSlide>
                <SwiperSlide>
               <Image src={img2} w="32em" h="22em" rounded="xl"  className="swiperSlide"></Image>
                </SwiperSlide>
                <SwiperSlide>
               <Image src={img3} w="20em" h="22em" rounded="xl"  alt="aa" className="swiperSlide"></Image>
                </SwiperSlide>
            </Swiper>

          
            

            </Box>
</>
}

export default BannerMall