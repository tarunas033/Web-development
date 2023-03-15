import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SingleProductPage from "./SingleProductPage";
import { Route , Routes} from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";



function AllRoutes() {
  return (
    <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/singleProduct" element={<PrivateRoute><SingleProductPage /></PrivateRoute>} />
         </Routes>

    </div>
  );
}

export default AllRoutes;
