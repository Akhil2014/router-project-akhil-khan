import { Flex, Grid } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Item from '../Components/Product/Item';

import './AllRoutes.css';

const Product = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    try{
      const res =  await fetch(`http://localhost:786/products`)
      const data = await res.json()
      setData(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  },[])
  return (
    <Grid borderRadius={10} p={5} border="1px solid gray" m="auto" w={1000} mt={10} templateColumns='repeat(3, 1fr)' gap={6}>
      
      {
        data.map(({_id,title,src,price}) => ( 
          <Item key={_id} title={title} imageUrl={src} imageAlt={"none"}  formattedPrice={price} />
        ))
      }
    </Grid>
  )
}

export default Product