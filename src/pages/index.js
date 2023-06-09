import Head from 'next/head'
//import Image from 'next/image'
//import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        <Head>
            <title>Caleb Site</title>
        </Head>
        <h1>Hello World!</h1>
        <p>I am deployed in <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">Vercel</a></p>
      </div>
  )
}
