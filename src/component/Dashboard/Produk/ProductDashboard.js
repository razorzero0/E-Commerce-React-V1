import { Box,Flex,Button,Image,Heading,Text,Divider} from "@chakra-ui/react"
import Sidebar from "../Sidebar"
import MainProdukDashboard from "./MainProdukDashboard"
export default function ProdukDashboard(){
    

    return <>
<Box position="relative">
<Sidebar/>
<MainProdukDashboard/>

</Box>
    </>
}