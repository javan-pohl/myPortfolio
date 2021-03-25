import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { useRouter } from 'next/router'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  const router = useRouter()
  let thisPath = router.pathname.substr(1)
  return (
    <Layout current={thisPath}>
      <section className={utilStyles.headingMd}>
        <p>{thisPath}</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/blog/posts/${id}`}>
              <li className={utilStyles.listItem} key={id}>
                <h2>{title}</h2>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
