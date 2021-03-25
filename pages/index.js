import Head from 'next/head'
import { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
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
              <li className={utilStyles.neonText3}>ABOUT ME</li>
            </Link>
            <Link href="projects">
              <li className={utilStyles.neonText3}>PROJECTS</li>
            </Link>
            <Link href="blog">
              <li className={utilStyles.neonText3}>BLOG</li>
            </Link>
          </ul>
        </section>
      </div>
    </>
  )
}
