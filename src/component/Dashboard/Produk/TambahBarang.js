import { Box,Button,Heading,Text,Divider,FormControl,
    FormLabel,Spinner,
   Select,Textarea,Input} from "@chakra-ui/react"
   import { useState,useRef } from "react"
   import axios from 'axios'
   import FileBase64 from 'react-file-base64';
   import ReactQuill from "react-quill"
   import 'react-quill/dist/quill.snow.css'
   
   import parse from 'html-react-parser';
export default function TambahBarang(props){
const [name,setName] = useState('')
const [description,setDescription] = useState('')
const [category,setCategory] = useState('')
const [foto,setFoto] = useState("")
const [harga,setHarga] = useState('')
const [tipe1,setTipe1] = useState('')
const [tipe2,setTipe2] = useState('')
const [validation, setValidation] = useState([])
const [loading, setLoading] = useState(false)


const AddProduct =  async (e) => {
 setLoading(true)
  const form = new FormData();
  form.append('name', name)
  form.append('category', category)
  form.append('foto', foto)
  form.append('harga', harga)
  form.append('description', description)
  form.append('tipe_1', tipe1)
  form.append('tipe_2', tipe2)
  await axios.post('http://localhost:8000/api/product', form)
.then((response) => {
  setLoading(false)
props.getProduct()
setName("")
setHarga("")
setFoto("")
setDescription("")
setTipe1("")
setTipe2("")
  })
  .catch((error) => {
    setLoading(false)
    setValidation(error.response.data)
    
  })
}


    return<>
   
    <Box m="8" zIndex="-10" h="90%" bgColor="#FBCA62" rounded="3em" minW={'30em'}  shadow="xl">
    <Box m="8">
        <Box display="flex" justifyContent={'center'} mb="4">
        <Heading fontSize={'xl'}>Tambah Barang</Heading>
        </Box>
      
    <FormControl>
      
  <FormLabel mt="1">Nama Barang</FormLabel>
  <Input bgColor="white" value={name} onChange={(e)=>{setName(e.target.value)}}></Input>
  {validation.name && (
          <div>{validation.name[0]}</div>
        )}
  <FormLabel mt="1">Harga</FormLabel>
  <Input bgColor="white" type="number" value={harga} onChange={(e)=>{setHarga(e.target.value)}}></Input>
  {validation.harga && (
          <div>{validation.harga[0]}</div>
        )}
  <FormLabel mt="1">foto</FormLabel>
  <Input type="file"  variant="ghost" onChange={(e)=>{setFoto(e.target.files[0])}}></Input>
  {validation.FormControl && (
          <div>{validation.FormControl[0]}</div>
        )}



  <FormLabel mt="1">Kategori</FormLabel>
  <Select placeholder='Kategori'  bgColor="white" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
  {props.category.map((v,i) =>(
    <option value={v.id} key={i}>{v.name}</option>
  ))}
  {validation.category && (
          <div>{validation.category[0]}</div>
        )}
</Select>
  <FormLabel mt="1">Tipe 1</FormLabel>
  <Input placeholder='Tipe 1'  bgColor="white" value={tipe1} onChange={(e)=>{setTipe1(e.target.value)}}/>

  <FormLabel mt="1">Tipe 2</FormLabel>
  <Input placeholder='Tipe 2'  bgColor="white" value={tipe2} onChange={(e)=>{setTipe2(e.target.value)}}/>

  <FormLabel mt="1">Deskripsi</FormLabel>
  <ReactQuill
        theme='snow'
        value={description}
        onChange={setDescription}
        style={{minHeight: '300px',background: "white"}}
      />
  <Box display={'flex'} justifyContent="center">
  {validation.description && (
          <div>{validation.description[0]}</div>
        )}
 {loading ? (<Button
    isLoading
    loadingText='Submitting'
    colorScheme='green'
    variant='solid'
  ></Button>) : (<Button colorScheme={'gray'}  color="black" rounded="lg" mt="4" onClick={AddProduct}>Submit</Button>)}
  </Box>
 
</FormControl>
</Box>
</Box>
    </>
}