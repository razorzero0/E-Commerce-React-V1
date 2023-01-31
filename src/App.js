import Main from './component/Main';
import React from 'react';
import './style.css'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Loading from './Loading'
import {useEffect,useState} from 'react'


export default function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  {loading ? (<Loading/> ):(
    <div>ss</div>
    )};


  return (
    
    <ChakraProvider >
      
      <Main/>
    
    </ChakraProvider>
  
  )
      }
