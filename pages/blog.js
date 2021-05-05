import Link from 'next/link'
import Date from '../components/date'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useRouter } from 'next/router'
import { getSortedPostsData } from '../lib/posts'

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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2
          className={utilStyles.headingLg}
          style={{ margin: '15px 0 15px 0', paddingBottom: '15px' }}
        >
          Blog Posts:
        </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/blog/posts/${id}`} key={id}>
              <a>
                <li className={utilStyles.listItem}>
                  <h2>{title}</h2>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
