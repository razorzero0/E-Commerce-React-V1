
import { Box,Flex, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink } from "@chakra-ui/react"
import Beli from "./Beli"
import Deskripsi from "./Deskripsi"
import DetailImage from "./DetailImage"
import { FiArrowRight } from "react-icons/fi"
import {
  useParams,Link
} from "react-router-dom";
import axios from 'axios'

import React,{useState} from 'react'

export default function DetailProduk() {
const [items, setItems] = useState([])
const [loading, setLoading] = useState(false)
const [category, setCategory] = useState([])
const [diskon, setDiskon] = useState([])
  let {id}  = useParams();
React.useEffect(() => {
 getItem()
 getDiskon()
},[])

const getItem = async () =>{
  setLoading(true)
 const response =  await axios.get(`http://localhost:8000/api/product/${id}`)
 setItems(response.data.data)
 getCategory(response.data.data.category_id)
 setLoading(false)
}
const getCategory = async (a) =>{
  const response =  await axios.get(`http://localhost:8000/api/category/${a}`)
  setCategory(response.data.data.name)

}
const getDiskon = async (a) =>{
  const response =  await axios.get(`http://localhost:8000/api/kupon`)
  setDiskon(response.data.data)

}
return <>
<Box  mx={'16'} mt={'28'} p={2}  >
<Breadcrumb mb={'2'} spacing='8px' color='gray.500'  separator={<FiArrowRight />}>

  <BreadcrumbItem>
   
    <Link to={'/'} id="home">Home</Link>
  </BreadcrumbItem>
  <BreadcrumbItem>
  <Link to={'/'}>{category ? category : ''}</Link>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage >
    <BreadcrumbLink href='#'  color={'blue'}>{items.name}</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
<Flex  >
    <DetailImage data={items} loading={loading}/>
    <Deskripsi data={items} loading={loading}/>
    <Beli data={items}  diskon={diskon} />
    
</Flex>
</Box>
</>
}