import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import NavBar from '../components/navBar'

const name = 'Javan Pohl'
export const siteTitle = name + ' Portfolio Website'

export default function Layout({ children, home, current }) {
  let pageName =
    current.indexOf('/') >= 0
      ? current.substring(0, current.indexOf('/')).replace('-', ' ')
      : current.substring(0).replace('-', ' ')
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
              rel="prefetch"
              src="/images/profile.webp"
              className={styles.borderCircle}
              alt={name}
            />
            <div className={styles.headerCardInner}>
              <h2
                className={utilStyles.headingMd}
                style={{ color: 'rgb(2, 193, 252)' }}
              >
                {name}
              </h2>
              <section className={utilStyles.headingMd}>
                <h2>{pageName}</h2>
              </section>
            </div>
          </div>
        </header>
      </div>
      <div className={styles.container}>
        <main>{children}</main>
      </div>
    </>
  )
}
