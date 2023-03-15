import { useState , useEffect } from "react";
import { Flex , Grid } from '@chakra-ui/react';
import axios from "axios";
import Product from "./Product";
import Pagination from "./Pagination";

function GetData(pageNo,limit){

  return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?page=${pageNo}&limit=${limit}`)
}

const Products = () => {

  const [ loading , setLoading  ] = useState(true)

  const [ products , setProducts ] = useState([]);
  
  const [ pagination_filter , setPagination_filter ] = useState({
    pageNo : 1,
    totalCount:0,
    limit:3
  })

  const { pageNo , limit } = pagination_filter;

  useEffect(()=>{

     let ans = GetData(pageNo,limit)
     ans.then((res)=>{
      setPagination_filter({...pagination_filter,totalCount:Number(res.headers["x-total-count"])})

      setProducts(res.data.data)
      setLoading(false)

    })

  },[pageNo , limit])

  const updatePageFilter = (change) =>{
    setPagination_filter({
      ...pagination_filter,
      ...change
    })
  }

  // console.log(products);
    if(loading){
      return
    }

  return (
    <Flex 
    direction = "column"
    justifyContent = "center"
    alignItems = "center"
    borderColor = 'red'
    borderWidth = {1}
    borderStyle = "solid"
    borderRadius = '14px'

    
    >
    
      <Grid w = '100%'   gridGap = {4}  gridTemplateColumns = '1fr 1fr 1fr'
      border='1px'
      >
        {
          products.map((ele) => {
            return(
              <Product key={ele.id } {...ele} />
            )
          })
        }

      </Grid>
      <Pagination updatePageFilter = {updatePageFilter} pagination_filter ={pagination_filter} />
    </Flex>
  );
};

export default Products;