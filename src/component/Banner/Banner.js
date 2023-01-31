import {
    Image,
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
      useBreakpointValue,
      useColorModeValue,
      Menu,
      Link,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    } from '@chakra-ui/react'
    import {  Swiper, SwiperSlide } from 'swiper/react';
    import { Autoplay, Pagination, Navigation  } from 'swiper';
    // Import Swiper styles
import 'swiper/css';
    import img1 from "../img/bigbanner1.jpg"
    // import img2 from "../img/biganner3.jpg"
    import img3 from "../img/bigBanner4.jpeg"
const Banner = () => {
  
return<>
<Box justifyContent={'center'} mt={32}>

<Swiper
     slidesPerView={1}
     
     loop={true}
     autoplay={{
       delay: 5000,
       disableOnInteraction: false,
     }}
     pagination={{ clickable: true, type: 'bullets'}}
     scrollbar={{ draggable: true }}
     modules={[Autoplay, Pagination]}
      className="mySwiper"
      
      >
       
        <SwiperSlide>
        <Image src={img1} w={'80%'} m="auto"/>
        </SwiperSlide>
       
        <SwiperSlide>
        <Image src={img3} w={'80%'} m="auto"/>
        </SwiperSlide>
        
      </Swiper>
      </Box>

</>
}

export default Banner