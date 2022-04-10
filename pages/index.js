import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './../components/Header/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HULU - A place to relax</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header  */}
      <Header />
      {/* Nav */}
      {/* Reuslts */}
    </div>
  )
}
