import React from "react";
import Link from "next/link";

export const getServerSideProps = async () => {
  let data = await fetch(
    "https://api.github.com/search/repositories?q=user:tarunas033+fork:true&sort=updated&per_page=10&type=Repositories"
  );

  data = await data.json();
  return {
    props: {
      data,
    },
  };
};

export default function projects({ data }) {
  const { items } = data;

  return (
    <>
    <h1 style={{margin:'40px'}}> |  Projects |</h1>
      <div className="projectMain">
        {items.map((ele) => {
          return (
            <div className="project" key={ele.id}>
              <p>{ele.name}</p>
              <br />
              <p>{ele.id}</p>
            </div>
          );
        })}
      </div>

      <button>
        <Link href="/">go back </Link>
      </button>
    </>
  );
}