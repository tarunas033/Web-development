import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Projects from './Project/project.js'
const inter = Inter({ subsets: ['latin'] })



export const getStaticProps = async () => {
  let user = await fetch(`https://api.github.com/users/tarunas033`)
  user = await user.json()
  return {
    props: {
      user,
    },
  }
}

export default function Home({ user }) {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
      
        <div style={{ display: 'flex', margin: 'auto' }}>
          <img
            style={{ 
            margin: 'auto',
            justifyContent: 'center',
            borderRadius:"50%"
             }}
            src={user.avatar_url}
            alt={user.login}
            width="200"
            height="200"
          />
        </div>

        <h1
          style={{
            textAlign: 'center',
          }}
        >
          {user.name}
        </h1>

        <h1
          style={{
            textAlign: 'center',
          }}
        >
          {user.login}
        </h1>
        <div style={{
          display: 'flex',
           gap: '10px' ,
           textAlign:"center",
           margin:"auto"}}>
         
        </div>

        <p style={{textAlign:"center"}} >Test stacks:HTML, CSS ,Javascript,React,Redux,Node.js,Next.js</p>
        <div
          style={{
            gap: '15px',
          }}
        >
          <div
            style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '10px' }}
          >
            <button>
              <Link href="https://drive.google.com/file/d/1jS__Oq5Z0vRec-52-RL2IFur3wFABBEU/view?usp=share_link">
                Resume
              </Link>
            </button>
            <button>
              <Link href="https://github.com/tarunas033">Follow</Link>
            </button>
          </div>
        </div>

        <p style={{textAlign:"center"}}>{user.bio}</p>

        <p style={{textAlign:"center"}}>Full stack web developer from Masai School,Banglore</p>
      </div>
      <div style={{ backgroundColor: 'white' }}>
<Link href="/Project/project">
      <button>Show projects</button>
</Link>
       
        
      </div>
    </>
  )
}