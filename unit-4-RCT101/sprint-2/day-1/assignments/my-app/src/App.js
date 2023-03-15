import "./App.css";
import React from "react";
import PostItem from "./Components/PostItem";
const getData = () => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  ).then((res) => res.json());
};

export default function App() {
  const [data, setData] = React.useState([]);
  const fetchAndUpdateData = async () => {
    try {
      //waiting for response frpm API call
      const response = await getData();
      console.log(data);
      //updating local state data value with API response
      setData(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <h1> Post </h1>
      <button onClick={fetchAndUpdateData}>Get Post</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "10px"
        }}
      >
        {/* mapping items that exists in local state data and elements are being rendered to the DOM */}
        {data.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}