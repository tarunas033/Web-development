import LoadingIndicator from "./LoadingIndicator";
import { useState, useEffect } from "react";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

function Countries() {

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);

  const getdata = async (current) => {

    try {
      setLoading(true);
      let res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${current}&limit=10`
      );
      let result = await res.json();
      let data = result.data;
      setTotal(result.totalPages);
      setPost(data);
      setLoading(false);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getdata(current);
  }, [current]);

  if (loading) return <LoadingIndicator />;
  const handlechange = (p) => {
    // setCurrent(current + p);
    setCurrent((prev) => prev + 1);
  };
  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {post.map((el) => (
          <CountriesCard country={el.country} population={el.population} />
        ))}
      </div>
      <div>
        <Pagination current={current} total={total} onChange={handlechange} />
      </div>
    </div>
  );
}

export default Countries;
