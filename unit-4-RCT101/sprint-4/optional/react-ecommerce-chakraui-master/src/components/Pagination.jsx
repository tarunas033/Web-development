import React from "react";
import { Button , ButtonGroup , Select  } from '@chakra-ui/react'

const Pagination = ({pagination_filter , updatePageFilter}) => {
  // TODO: Remove below const and instead import them from chakra

  const { pageNo , limit , totalCount } = pagination_filter;
 

  return (
    <ButtonGroup size='md'  isAttached variant = 'outline' mt = "12">
      <Button data-cy="pagination-first-button" 
      disabled = {pageNo ===1}
      onClick = {()=>{updatePageFilter({pageNo:1})}}
      > First </Button>

      <Button data-cy="pagination-previous-button"
      disabled = {pageNo ===1}
      onClick = {()=>{updatePageFilter({pageNo:pageNo-1})}}
            
      > Previous</Button>

      <Select data-cy="pagination-limit-select" w = 'fit-content' value = {limit} 
      
      onChange = {(e)=>updatePageFilter({limit:e.target.value})}
      >
        <option data-cy="pagination-limit-3" value={3}>3</option>
        <option data-cy="pagination-limit-6" value={6}>6</option>
        <option data-cy="pagination-limit-9" value={9}>9</option>
      </Select>
      <Button disabled = {pageNo*limit > totalCount} data-cy="pagination-next-button"
      onClick = {()=>{updatePageFilter({pageNo:pageNo+1})}}
      
      >Next</Button>


      <Button data-cy="pagination-last-button"
      onClick = {()=>{updatePageFilter({pageNo:Math.ceil(totalCount/limit)})}}
      > Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;