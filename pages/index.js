import Head from 'next/head'
import { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        {/* <link
          rel="prefetch"
          href="/images/denver-skyline.webp"
          as="image"
        /> */}
        {/* <link
          rel="prefetch"
          href="/images/denver-skyline-1280.webp"
          as="image"
        /> */}
        <link rel="prefetch" href="/images/profile.webp" as="image" />
      </Head>
      <div className={utilStyles.main}>
        <section className={utilStyles.mainName}>
          <div className={utilStyles.neonWrapper}>
            <div className={utilStyles.neonText2}>
              <h1>
                <span className={utilStyles.neonDiv}>JAVAN</span>
                <span className={utilStyles.neonDiv2}>{'\u00A0'}POHL</span>
                {/* <span className={utilStyles.neonDiv} style={{padding: '0 0 0 0', margin: '0'}}>JAVAN POHL</span>  */}
              </h1>
            </div>
          </div>
        </section>
        <section className={utilStyles.linkNav}>
          <ul className={utilStyles.linkNavUl}>
            <Link href="about-me">
              <li className={`${utilStyles.neonText3} pointer`}>ABOUT ME</li>
            </Link>
            <Link href="projects">
              <li className={`${utilStyles.neonText3} pointer`}>PROJECTS</li>
            </Link>
            <Link href="blog">
              <li className={`${utilStyles.neonText3} pointer`}>BLOG</li>
            </Link>
          </ul>
        </section>
      </div>
    </>
  )
}
