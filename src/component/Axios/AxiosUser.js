import axios from 'axios';
import React, { useState } from 'react';

const config = {
  headers:{
    Authorization : `Bearer ${sessionStorage.getItem("token")}`
  }
}

const useUser = (url) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState([]);
  React.useEffect(() => {
    setLoading(true)
    axios.get(url,config).then((response) => {
      setItems(response.data);
      console.log(response.data)
      setLoading(false)
    });
  }, [url]);
  if (!items) return null;

  return {items,loading}
  
}

export default useUser