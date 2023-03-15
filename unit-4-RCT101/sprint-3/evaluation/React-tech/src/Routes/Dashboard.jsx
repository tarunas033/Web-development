import { useState  , useEffect , useContext} from 'react';
import {AuthContext} from '../Context/AuthContext'
import Loader from '../Components/Loader'
import ProductsTable from '../Components/ProductsTable';

const GetData = () =>{

  return fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/')
}

function Dashboard() {

const { logoutUser , authState }  = useContext(AuthContext)
  const [ data , setData ] = useState([]);
  const [ loading , setLoading ] = useState(true);
  const [ totalPage , setTotalPage ] = useState(null)

  useEffect(()=>{

    GetData()
    .then((res)=> res.json())
    .then( (res) =>{

      setData(res.data)
      // console.log(res.data);
      setTotalPage(res.totalPages)
      setLoading(false)
    } )

  },[])
  


  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        {
          loading ? <Loader/> : <ProductsTable data = {data}/>
        }
      </div>
    </div>
  );
}

export default Dashboard;