import { Box,Flex,Image,
    ListItem,
    UnorderedList, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,AccordionIcon,Button} from "@chakra-ui/react"
import { FiActivity,FiCalendar,FiLogOut} from "react-icons/fi"
import {
    Link,useHistory
  } from "react-router-dom";
  import useUser from '../Axios/AxiosUser'
  import Loading from "../../Loading";
  import axios from 'axios'
  import logo from '../img/logo.jpg'
 

export default function Sidebar(props) {
  // const {items,loading} = useUser("http://localhost:8000/api/auth/user-profile")

  const history = useHistory();
const Logout = ( async (e) =>  {
  e.preventDefault();
        sessionStorage.removeItem('token')
        history.push('/login-admin');
   
})
  
return <>

    <Box backgroundColor={'#53465D'} h="100vh" w="80" zIndex={'-10'}  rounded="3em" position="fixed" >
<Flex justifyContent={'flex-start'} alignItems="center"   h="100%">

    <Flex flexDirection={'column'} className="btn-class" >
    <Image  w="16" h={16} objectFit={'cover'} rounded="full" ms="16" mb="7" alt="gambar profile" src={logo}/>
    <UnorderedList listStyleType={'none'} p="0" m="0">
     
      <Link to="/dashboard"><ListItem color={'white'}><FiCalendar/> Dashboard</ListItem></Link>
    <Link  to="/product"><ListItem color={'white'}><FiCalendar/> Product</ListItem></Link>
    <Link to="/setting"><ListItem color={'white'}><FiCalendar/> Settings</ListItem></Link> 
    <Link to="/payment-setting"><ListItem color={'white'}><FiCalendar/> Payment & <br></br>Kupon</ListItem></Link> 
      
    <ListItem mt="20" color={'white'}>
      <form onSubmit={Logout}>
      <Button type="submit" ms="-6" leftIcon={<FiLogOut/>}> Log Out</Button>
    </form>
    </ListItem>

</UnorderedList>
   
    
    
</Flex>
</Flex>
    </Box>


    </>
}