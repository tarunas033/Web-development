import React from "react";
import{Text,Box,Image, Stack, Heading,Tag,TagLabel} from "@chakra-ui/react"


const Product = ({brand,category,details,id,img, price}) => {
  // TODO: Remove below const and instead import them from chakra
  
  return (
    
    <Stack data-cy="product" >
      <Image data-cy="product-image" src={img}  />
      <Text data-cy="product-category">{category}</Text>
      <Tag>
        <TagLabel data-cy="product-brand">{brand}</TagLabel>
      </Tag>
      <Heading data-cy="product-details">{details}</Heading>
      <Box data-cy="product-price">{price}</Box>
    </Stack>
    
  );
};

export default Product;