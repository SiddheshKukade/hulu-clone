import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/Home.module.css'
import requests from '../utils/requests';
import Header from './../components/Header/Header';
import Results from './../components/Results/Results';

export default function Home({ results }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>HULU - A place to relax</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header  */}
      <Header />
      {/* Nav */}
      <Navbar />
      {/* Reuslts */}
      <Results results={results} />
    </div>
  )
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url} `).then(res => res.json());
  return {
    props: {
      results: request.results,
    }
  }
}