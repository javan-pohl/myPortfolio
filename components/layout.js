import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from '../components/navBar'

const name = 'Javan Pohl'
export const siteTitle = name + ' Portfolio Website'

export default function Layout({ children, home, current }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Javan Pohl's portfolio website containing information about him and projects he's worked on"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle + ' ' + current} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.marquee}>
        <NavBar mainClass={utilStyles.navBar} current={current} />
        <header className={styles.header}>
          <div className={styles.headerCard}>
            <img
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              alt={name}
            />
            <div className={styles.headerCardInner}>
              test
              <h2 className={utilStyles.headingLg}>{name}</h2>
            </div>
          </div>
        </header>
      </div>
      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
