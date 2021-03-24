import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.main}>
        <section className={utilStyles.mainName}>
          <div className={utilStyles.neonWrapper}>
            <div className={utilStyles.neonText2}>
              <h1>JAVAN POHL</h1>
            </div>
          </div>
        </section>
        <section className={utilStyles.linkNav}>
          <ul className={utilStyles.linkNavUl}>
            <Link href="about-me">
              <li className={utilStyles.neonText}>ABOUT ME</li>
            </Link>
            <Link href="projects">
              <li className={utilStyles.neonText}>PROJECTS</li>
            </Link>
            <Link href="blog">
              <li className={utilStyles.neonText}>BLOG</li>
            </Link>
          </ul>
        </section>
      </div>
    </>
  )
}
