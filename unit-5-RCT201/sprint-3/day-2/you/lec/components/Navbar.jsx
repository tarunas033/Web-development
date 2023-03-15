import React from 'react'
import Link from "next/link";
import {useRouter} from "next/router";

const Navbar = () => {
    const router = useRouter();

    const onClickBlogs = () => {
       router.push("/blog/")
    };
    const goBack =() =>{
        router.back();
    }

  return (
    <div 
       style={{
        display:"flex", 
        fontSize:"24px",
        gap:"10px",
        padding:"5px",
        justifyContent:"center",
        backgroundColor:"lightcyan",
        boxShadow:"10px 5px 5px grey",
         }}
         >
     <button onClick={goBack}>Go Back</button>      
     <Link href="/">Home</Link>
     <Link href="/counter">Counter App</Link>
     <button onClick={onClickBlogs}>Blogs</button>
    </div>
  )
}

export default Navbar;
