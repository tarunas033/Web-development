import Loader from "../Components/Loader";
import { useContext , useState , useEffect } from 'react';
import { AuthContext } from "../Context/AuthContext";
import Pagination from "../Components/Pagination";
import ProductList from '../Components/ProductList'


const GetProducts =  (page=1,order = 'asc')=>{

  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&orderBy=${order}`)
}

function Dashboard() {

const [ page , setpage ] = useState(1);
const [ totalPages , setTotalPages ] = useState(null);
const [ sort , setSort ] = useState('asc')
const [loading , setLoading ] = useState(true)
const [ data , setData ] = useState([])

const  {authState , Logout}  = useContext(AuthContext)
 


useEffect(()=>{

  GetProducts(page,sort)
  .then((res)=>res.json())
  .then((res)=>{
    // console.log(res);
    setData(res.data)
    setTotalPages(res.totalPages)
    setLoading(false)
  })

},[page,sort])

 
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={Logout} >Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />

      <div data-testid ="sort-container">
      <button data-testid="low-to-high"  onClick={()=>{setSort('asc')}} disabled={sort==='asc'}>Sort low to high</button>
      <button data-testid="high-to-low" onClick={()=>{setSort('desc')}} disabled={sort==='desc'}>Sort high to low</button>
      </div>

      <br />
      <br />
   
      <Pagination  current = {page} totalPage = {totalPages} onChange={(page=>{setpage(page)})}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {
           loading ? <Loader /> : <ProductList  products = {data} /> 
           
        }
        
      </div>
   
    </div>
  );
}

export default Dashboard;