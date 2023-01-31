import axios from 'axios';
import React, { useState } from 'react';

const useAxios = (url) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
  
  React.useEffect(() => {
    setLoading(true)
    axios.get(url).then((response) => {
      setItems(response.data.data);
      setLoading(false);
    });
  }, [url]);
  if (!items) return null;

  return {items,loading}
  
}

export default useAxios