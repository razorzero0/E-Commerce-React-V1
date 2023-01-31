import { Box,Flex,Button,Image,Heading,Text,Divider} from "@chakra-ui/react"
export default function Performance(){
    return<>
    <Box m="8" minHeight={'100vh'}bgColor="#FBCA62" rounded="3em" w="70em"  shadow="xl">
    <Box m="8">
<Heading fontSize={'xl'}>Performance</Heading>
<Text mt="4"> Your Top client</Text>
<Flex justifyContent={'space-between'}>
    <Box>
<Image mt="2"src="https://bit.ly/dan-abramov" w="10" rounded="full"  />
<Text>yayan</Text>
</Box>
    <Box>
<Image mt="2"src="https://bit.ly/dan-abramov" w="10" rounded="full"  />
<Text>yayan</Text>
</Box>
    <Box>
<Image mt="2"src="https://bit.ly/dan-abramov" w="10" rounded="full"  />
<Text>yayan</Text>
</Box>
    <Box>
<Image mt="2"src="https://bit.ly/dan-abramov" w="10" rounded="full"  />
<Text>yayan</Text>
</Box>
</Flex>
<Box>
    <Heading fontSize="md" mt="6">Your Progress</Heading>

    <Box my="3" bgColor="white" rounded="1em" w="100%" h="24">
        <Flex justifyContent={'space-around'}> 
        <Heading mt="4" fontSize="sm" >Total Income</Heading>
        <Heading fontSize="md" mt="4">1Jt.</Heading>
        </Flex>
        <Divider color="yellow" orientation='horizontal'  mt="4" />
        <Divider color="yellow" orientation='horizontal'   />
        <Divider color="yellow" orientation='horizontal'   />
        <Flex justifyContent={'space-around'}> 
        <Heading mt="4" fontSize="sm" >Total Order</Heading>
        <Heading fontSize="md" mt="4">1k.</Heading>
        </Flex>
    </Box>
    <Box my="3" bgColor="white" rounded="1em" w="100%" h="24">
        <Flex justifyContent={'space-around'}> 
        <Heading mt="4" fontSize="sm" >Total Income</Heading>
        <Heading fontSize="md" mt="4">1Jt.</Heading>
        </Flex>
        <Divider color="yellow" orientation='horizontal'  mt="4" />
        <Divider color="yellow" orientation='horizontal'   />
        <Divider color="yellow" orientation='horizontal'   />
        <Flex justifyContent={'space-around'}> 
        <Heading mt="4" fontSize="sm" >Total Order</Heading>
        <Heading fontSize="md" mt="4">1k.</Heading>
        </Flex>
    </Box>
    <Box my="3" bgColor="white" rounded="1em" w="100%" h="24">
        <Flex justifyContent={'space-around'}> 
        <Heading mt="4" fontSize="sm" >Total Income</Heading>
        <Heading fontSize="md" mt="4">1Jt.</Heading>
        </Flex>
        <Divider color="yellow" orientation='horizontal'  mt="4" />
        <Divider color="yellow" orientation='horizontal'   />
        <Divider color="yellow" orientation='horizontal'   />
        <Flex justifyContent={'space-around'}> 
        <Heading mt="4" fontSize="sm" >Total Order</Heading>
        <Heading fontSize="md" mt="4">1k.</Heading>
        </Flex>
    </Box>

</Box>
</Box>
</Box>
    </>
}