import { Box,Flex,Image,
    ListItem,
    UnorderedList,Button} from "@chakra-ui/react"
import { FiCalendar,FiLogOut} from "react-icons/fi"
import {
    Link,useHistory
  } from "react-router-dom";


export default function SidebarUser(props) {

  const history = useHistory();
const Logout = ( async (e) =>  {
  e.preventDefault();
        sessionStorage.removeItem('token')
        history.push('/login');
     
  
   
})
  
return <>

    <Box backgroundColor={'#53465D'} h="100vh" w="80" zIndex={'-10'}  rounded="3em" position="fixed" >
<Flex justifyContent={'flex-start'} alignItems="center"   h="100%">

    <Flex flexDirection={'column'} className="btn-class" >
    <Image src="https://bit.ly/dan-abramov" w="16" rounded="full" ms="16" mb="7"/>
    {/* {props.admin} */}
    <UnorderedList listStyleType={'none'} p="0" m="0">
    
    
    <Link to="/profile"><ListItem color={'white'}><FiCalendar/>Profile Saya</ListItem></Link>
    <Link to="/pesanan"><ListItem color={'white'}><FiCalendar/>Pesanan Saya</ListItem></Link> 
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