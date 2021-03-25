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

export default function Home() {
  const router = useRouter()
  let thisPath = router.pathname.substr(1)
  return (
    <>
      <Layout current={thisPath}>
        <section className={utilStyles.headingMd}>
          <p>{thisPath}</p>
        </section>
      </Layout>
    </>
  )
}
