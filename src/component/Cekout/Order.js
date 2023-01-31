import { Box,Text,Flex, Heading,Image,Divider,Spinner } from "@chakra-ui/react"
export default function Order(props) {


  const a = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(props.data.total_harga);
  const b = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(props.data.harga);
  
    return <>
    <Box h="15em" w="40em"  rounded="lg" boxSizing="border-box" p="4" borderTop={'4px solid gray '}>
        <Text my="2" fontWeight="bold">Pesananmu :</Text>
        <Flex justifyContent={'space-between'}   >
            <Box display="flex" gap="4">
            <Image alt="img" src={`http://localhost:8000/storage/${props.data.foto}`} w="4em" />

            <Box  >
            <Heading fontSize={'xl'}>{props.loading === true ? <Spinner/> :props.data.name}</Heading>
            <Text> Varian : {props.data.tipe}</Text>
           
            </Box>
            </Box>
            <Box>
            <Heading fontSize={'xl'}>{props.loading === true ? <Spinner/> : a}</Heading>
            <Text> {props.loading === true ? <Spinner/> : props.data.jumlah} x</Text>
            </Box>
        </Flex>
<Box my="5">
        <Divider orientation='horizontal' />
        <Divider orientation='horizontal' />
        <Flex justifyContent={'space-between'} my="2">
            <Text>
            Sub produk :
            </Text>
            <Text>
           {props.loading === true ? <Spinner/> :b}
            </Text>
        </Flex>
        <Divider orientation='horizontal' />
        <Divider orientation='horizontal' />
        <Flex justifyContent={'space-between'} my="2">
            <Text>
            Total Produk :
            </Text>
            <Text>
            {props.loading === true ? <Spinner/> :a}
            </Text>
        </Flex>
        <Divider orientation='horizontal' />
        <Divider orientation='horizontal' />
        <Flex justifyContent={'space-between'} my="2">
            <Text>
            Diskon :
            </Text>
            <Text>
            {props.data.diskon} %
            </Text>
        </Flex>
        </Box>
        
    </Box>
    
    </>
    
}
