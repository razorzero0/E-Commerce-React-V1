import { Box,Flex } from "@chakra-ui/react"
import FlashSaleTime from "./FlashSaleTime"
import Category from "./Category"
import Sidebar from "../Sidebar"
import UserProfile from "./UserProfile"

export default function Setting()  {
    return<>
    <Box position="relative">
<Sidebar/>
<Box minH={'100vh'} shadow="2xl" display="flex" ms="12em" w="85%" rounded="3em" bgColor={'white'} zIndex="10" position="absolute" >
    <Box me="" >
{/* <FlashSaleTime/> */}
<Category/>
</Box>
<Box >
<UserProfile/>
</Box>
</Box>

    </Box>
    
    
    </>
}