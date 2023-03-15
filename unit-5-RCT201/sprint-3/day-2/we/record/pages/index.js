// import React from 'react'
// import Link from "next/link";

// const index = ({blogs}) => {
//   return (
//     <div>
//        {blogs.map((blog)  => {
//         <div key ={blog.id}>
//           <Link>{blog.title}</Link>
//           <div dangerouslySetInnerHTML={{
//             __html: blog.content
//             <hr/>
//             </div>
      

        
//        ))}
        
    
// export async function getStaticProps(){

//   const res = await fetch ("http://localhost:8080/blogs")

// let data = await res.json();

// return {
//   props:{blogs: data},

//   }
// }
// export default index;  