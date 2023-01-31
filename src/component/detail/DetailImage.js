
import { Box,Flex,Image } from "@chakra-ui/react"
import { useState } from "react"
import img from '../img/hp.jpg'
import img2 from '../img/hp2.jpg'

export default function DetailImage({data,loading}){
    const [mouseOver,setMouseOver] = useState(false)
    const [imgSrc, setImgSrc] = useState(img)
    const url = 'local'
    return <>
    <Box flex={1}>
    <Box position={'fixed'} w="18em"   >
        <Box mb="-2" overflow={'hidden'} className="detailImg">
        <Image src={`http://localhost:8000/storage/${data.foto}`} rounded="lg" w="100%%"
      
        /> 
        </Box>
        <Flex>
        <Image onClick={() => {setImgSrc(img)}} src={`http://localhost:8000/storage/${data.foto}`} mx="2" me="3" border={'2px'} borderColor={'gray.300'} w={20} mt={7} rounded={'lg'}/> 
        <Image onClick={() => {setImgSrc(img2)}} src={`http://localhost:8000/storage/${data.foto}`} border={'2px'} borderColor={'gray.300'} w={20} mt={7} rounded={'lg'}/> 
        </Flex>
    </Box>
    </Box>
    
    </>
}