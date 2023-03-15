import React from 'react';
import { Button, FormControl,FormLabel ,Input } from '@chakra-ui/react';
import styled from 'styled-components';
import { useState } from 'react';
import { Select } from '@chakra-ui/react';


let initialState ={
    image:"",
    brand:"",
    price:"",
    description:"",
    gender:"",
}


export const Admin = () => {
    const [product, setProduct]=useState(initialState)

    const handleChange = (e) => {
   
    console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
  return (
   
    <Wrapper>
        <form 
        onSubmit ={(e)  =>{
            handleSubmit(e);
        }}
        >
   <FormControl>
        <FormLabel>Image</FormLabel>
        <Input 
        type="url"
        name='image'
        value={product.image}
        onChange ={(e) =>handleChange(e)}/>

        <FormLabel>Brand</FormLabel>
        <Input 
        type="text"
        name='brand'
        value={product.brand}
        onChange ={(e) =>handleChange(e)}/>

        <FormLabel>Price</FormLabel>
        <Input 
         type="number"
         name='price'
         value={product.price}
         onChange ={(e) =>handleChange(e)}/>

        <FormLabel>Description</FormLabel>
        <Input
         type="text"
         name='description'
         value={product.description}
         onChange ={(e) =>handleChange(e)}/>

        <FormLabel>Select Gender</FormLabel>
        <Select name="gender" onChange = {(e) =>handleChange(e)}>

          <option value="male">Men</option>
          <option value="female">Women</option>
          <option value="kids">Kids</option>

        </Select>
       <Button type="submit">Add Product</Button>
      </FormControl>
      </form>
    </Wrapper>
   
  )
}

const Wrapper = styled.div`
  padding:40px;
  width:50%;
  margin:auto;
`
