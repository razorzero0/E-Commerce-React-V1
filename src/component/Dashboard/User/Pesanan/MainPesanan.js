
import { Box,Flex,Image,Heading,Text,Button,Divider
} from "@chakra-ui/react"

import Sidebar from "../SidebarUser"
export default function MainPesanan() {
    return<>
   <Box position="relative">
<Sidebar/>
    <Box minH={'100vh'} shadow="2xl" display="flex" ms="12em" w="85%" rounded="3em" bgColor={'white'} zIndex="10" position="absolute" >
<Box m="10">
<Heading>Pesanan Saya</Heading>

   <Flex  gap="12" mt="5">

    <Box shadow="lg" rounded="xl" w="60"  
    // textAlign={'center'} 
     p="5">
        <Heading color={'red'} textAlign="center" fontSize={'lg'} mb="1">Pending</Heading>
        <Divider/>
        <Divider/>
        <Text fontSize={'xl'} fontWeight="bold" textAlign={'center'}>Samsung</Text>
        <Flex my="3" alignItems={'center'}>
        <Image src="https://bit.ly/dan-abramov" w="10" h="10" rounded="md"  me="4"/>
        <Box >
        <Flex gap={'4'}>
        <Text>Jumlah :</Text>
        <Text>10</Text>
        </Flex>
        <Flex gap={'4'}>
        <Text>Variant :</Text>
        <Text>Black</Text>
        </Flex>
        </Box>
        </Flex>
        <Text fontSize={'xl'} fontWeight="bold" textAlign={'center'}>Rp 1.000.000,00</Text>
     

    </Box>
    
   </Flex>
</Box>
    </Box>
    </Box>
    
    </>
}