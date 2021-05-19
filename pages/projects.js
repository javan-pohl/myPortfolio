import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useRouter } from 'next/router'
import { getSortedProjectsData } from '../lib/projects'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData,
    },
  }
}

export default async function Home({ allProjectsData}) {
  const router = useRouter()
  let thisPath = router.pathname.substr(1)
  return (
    <>
      <Layout current={thisPath}>
        <section className={utilStyles.headingMd}>
          <p>{thisPath}</p>
        </section>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, date, title }) => (
            <Link href={`/projects/${id}`} key={id}>
              <li className={utilStyles.listItem}>
                <h2>{title}</h2>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            </Link>
          ))}
        </ul>
      </Layout>
    </>
  )
}
